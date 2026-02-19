import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Mic, MicOff, Send, Volume2, VolumeX, X } from "lucide-react";

type AssistantMode = "text" | "stt" | "s2s";

type AssistantAction = {
  label: string;
  to: string;
};

type AssistantMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  actions?: AssistantAction[];
};

type AssistantReply = {
  text: string;
  actions?: AssistantAction[];
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionEvent = {
  resultIndex: number;
  results: ArrayLike<{
    isFinal: boolean;
    0: { transcript: string };
  }>;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
    SpeechRecognition?: new () => SpeechRecognitionInstance;
  }
}

const introMessage: AssistantMessage = {
  id: "intro",
  role: "assistant",
  text:
    "Namaste, I am BHUMITRA. I can guide you across CropXon modules, suggest models/datasets in AgriVeda, and help with farmer, scheme, soil, and nutrition queries in a human-friendly way.",
  actions: [
    { label: "Open AgriVeda", to: "/agriveda" },
    { label: "Explore SoilNet", to: "/soilnet" },
    { label: "Government Schemes", to: "/ecosystem/nitibandhu" },
  ],
};

const generateReply = (query: string): AssistantReply => {
  const q = query.toLowerCase();

  if (q.includes("soil") || q.includes("ph") || q.includes("moisture") || q.includes("npk")) {
    return {
      text:
        "Great question. For soil health, start with SoilNet for 8-in-1 field metrics and pair it with AgriVeda SoilSense or SoilLab models for deeper recommendations. I can also guide you on irrigation and fertilizer planning.",
      actions: [
        { label: "Open SoilNet", to: "/soilnet" },
        { label: "Soil Models", to: "/agriveda/models?search=soil" },
      ],
    };
  }

  if (q.includes("price") || q.includes("market") || q.includes("mandi")) {
    return {
      text:
        "For mandi and market intelligence, MandiSetu is your best operational module. In parallel, AgriVeda forecasting and geo models can support timing and regional trend decisions.",
      actions: [
        { label: "Open MandiSetu", to: "/ecosystem/mandisetu" },
        { label: "Forecast Models", to: "/agriveda/models?search=forecast" },
      ],
    };
  }

  if (q.includes("scheme") || q.includes("subsidy") || q.includes("government") || q.includes("policy")) {
    return {
      text:
        "For schemes and compliance workflows, use NitiBandhu plus AgriVeda scheme-focused models like AgriPolicy Copilot and SchemeSeva. This gives both eligibility guidance and policy context.",
      actions: [
        { label: "Open NitiBandhu", to: "/ecosystem/nitibandhu" },
        { label: "Scheme Models", to: "/agriveda/models?search=scheme" },
      ],
    };
  }

  if (q.includes("disease") || q.includes("pest") || q.includes("leaf")) {
    return {
      text:
        "For crop disease and pest issues, AgriSakha is the farmer-facing advisor, and AgriVeda hosts LeafGuard and PestWatch for technical model-level analysis. Upload clear images for best accuracy.",
      actions: [
        { label: "Open AgriSakha", to: "/ecosystem/agrisakha" },
        { label: "Disease Models", to: "/agriveda/models?search=disease" },
      ],
    };
  }

  if (q.includes("food") || q.includes("nutrition") || q.includes("pulse")) {
    return {
      text:
        "For nutrition and food analysis, Pulse360 is the product module. On AgriVeda you can explore FoodGuard and NutriVision models for deeper technical evaluation.",
      actions: [
        { label: "Open Pulse360", to: "/pulse360" },
        { label: "Nutrition Models", to: "/agriveda/models?search=nutrition" },
      ],
    };
  }

  if (q.includes("model") || q.includes("dataset") || q.includes("api") || q.includes("agriveda")) {
    return {
      text:
        "AgriVeda is the one-stop CropXon model and dataset hub. You can filter by crop type, language, ecosystem module fit, and then test responses in the cloud playground.",
      actions: [
        { label: "Browse Models", to: "/agriveda/models" },
        { label: "Explore Datasets", to: "/agriveda/datasets" },
        { label: "Try Playground", to: "/agriveda/playground" },
      ],
    };
  }

  return {
    text:
      "I can help with crop disease, pest alerts, soil planning, scheme eligibility, nutrition workflows, AgriVeda models/datasets, and ecosystem navigation. Tell me your goal and I will guide step by step.",
    actions: [
      { label: "Ecosystem Overview", to: "/ecosystem" },
      { label: "Get Started", to: "/get-started" },
    ],
  };
};

const BhumitraAssistant = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AssistantMode>("text");
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [messages, setMessages] = useState<AssistantMessage[]>([introMessage]);
  const [error, setError] = useState("");

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const shouldResumeConversationRef = useRef(false);
  const startListeningRef = useRef<() => void>(() => {});
  const handleSendRef = useRef<(text?: string) => void>(() => {});
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const speechSupported = useMemo(
    () => typeof window !== "undefined" && (!!window.SpeechRecognition || !!window.webkitSpeechRecognition),
    [],
  );

  const ttsSupported = useMemo(
    () => typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
    [],
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!speechSupported || recognitionRef.current) return;

    const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechAPI) return;

    const recognition = new SpeechAPI();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const current = event.results[event.resultIndex];
      if (!current?.isFinal) return;
      const transcript = current[0].transcript.trim();
      setInput(transcript);
      setIsListening(false);
      if (mode === "s2s" && transcript.length > 0) {
        handleSendRef.current(transcript);
      }
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      setError(`Voice error: ${event.error}`);
      shouldResumeConversationRef.current = false;
    };

    recognition.onend = () => {
      setIsListening(false);
      if (shouldResumeConversationRef.current && mode === "s2s") {
        startListeningRef.current();
      }
    };

    recognitionRef.current = recognition;
  }, [mode, speechSupported]);

  useEffect(() => {
    if (!open) {
      shouldResumeConversationRef.current = false;
      stopListening();
      if (ttsSupported) window.speechSynthesis.cancel();
    }
  }, [open, ttsSupported]);

  const speak = (text: string, onComplete?: () => void) => {
    if (!ttsSupported || !ttsEnabled) {
      onComplete?.();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onend = () => onComplete?.();
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!speechSupported || !recognitionRef.current) {
      setError("Speech-to-text is not supported in this browser.");
      return;
    }
    setError("");
    try {
      setIsListening(true);
      recognitionRef.current.start();
    } catch {
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
    } catch {
      // no-op for repeated stop calls
    }
    setIsListening(false);
  };

  const handleSend = (forcedText?: string) => {
    const text = (forcedText ?? input).trim();
    if (!text) return;

    const userMessage: AssistantMessage = {
      id: `${Date.now()}-u`,
      role: "user",
      text,
    };

    const reply = generateReply(text);
    const assistantMessage: AssistantMessage = {
      id: `${Date.now()}-a`,
      role: "assistant",
      text: reply.text,
      actions: reply.actions,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");

    if (mode === "s2s") {
      shouldResumeConversationRef.current = true;
      speak(reply.text, () => {
        if (shouldResumeConversationRef.current) startListening();
      });
      return;
    }

    shouldResumeConversationRef.current = false;
    speak(reply.text);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSend();
  };

  const changeMode = (nextMode: AssistantMode) => {
    setMode(nextMode);
    setError("");
    shouldResumeConversationRef.current = nextMode === "s2s";
    if (nextMode === "s2s") {
      speak("Speech to speech mode enabled. You can speak now.", () => startListening());
      return;
    }
    stopListening();
  };

  useEffect(() => {
    startListeningRef.current = startListening;
    handleSendRef.current = handleSend;
  });

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      {open ? (
        <div className="w-[92vw] max-w-md rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-lg">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">BHUMITRA</p>
                <p className="text-[11px] text-muted-foreground">CropXon Agentic Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTtsEnabled((v) => !v)}
                className="rounded-md border border-border p-1.5 text-muted-foreground hover:text-foreground"
                title={ttsEnabled ? "Disable voice response" : "Enable voice response"}
              >
                {ttsEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-border p-1.5 text-muted-foreground hover:text-foreground"
                title="Close assistant"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 px-4 py-3">
            <button
              onClick={() => changeMode("text")}
              className={`rounded-full px-3 py-1 text-xs font-medium ${mode === "text" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
            >
              Text
            </button>
            <button
              onClick={() => changeMode("stt")}
              className={`rounded-full px-3 py-1 text-xs font-medium ${mode === "stt" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
            >
              Speech to Text
            </button>
            <button
              onClick={() => changeMode("s2s")}
              className={`rounded-full px-3 py-1 text-xs font-medium ${mode === "s2s" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
            >
              Speech to Speech
            </button>
          </div>

          <div className="max-h-[46vh] overflow-y-auto px-4 pb-2">
            {messages.map((message) => (
              <div key={message.id} className={`mb-3 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                  {message.text}
                  {message.role === "assistant" && message.actions ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.actions.map((action) => (
                        <button
                          key={`${message.id}-${action.to}`}
                          onClick={() => navigate(action.to)}
                          className="rounded-full border border-border/70 bg-card px-2.5 py-1 text-[10px] font-medium text-foreground hover:border-primary/40"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {error ? <p className="px-4 pb-2 text-xs text-red-400">{error}</p> : null}

          <form onSubmit={onSubmit} className="border-t border-border p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask BHUMITRA anything..."
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1"
              />
              <button
                type="button"
                onClick={() => (isListening ? stopListening() : startListening())}
                className={`rounded-lg border px-2.5 py-2 ${isListening ? "border-red-400 text-red-400" : "border-border text-muted-foreground hover:text-foreground"}`}
                title={isListening ? "Stop listening" : "Start listening"}
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button type="submit" className="rounded-lg bg-primary px-3 py-2 text-primary-foreground hover:glow-emerald" title="Send">
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Mode: {mode === "text" ? "Text" : mode === "stt" ? "Speech to Text" : "Speech to Speech"} | Tone: Human-first advisory assistant
            </p>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-xl transition-all hover:glow-emerald"
        >
          <Bot size={16} />
          BHUMITRA
        </button>
      )}
    </div>
  );
};

export default BhumitraAssistant;
