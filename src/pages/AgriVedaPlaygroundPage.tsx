import { FormEvent, useMemo, useState } from "react";
import { PlayCircle, Brain, Home } from "lucide-react";
import { agrivedaModels } from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaPlaygroundPage = () => {
  const [selectedModel, setSelectedModel] = useState(agrivedaModels[0]?.id ?? "");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const model = useMemo(() => agrivedaModels.find((item) => item.id === selectedModel), [selectedModel]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const promptText = prompt.trim();
    if (!model || !promptText) return;

    setResponse(
      `CropXon Cloud Simulation\nModel: ${model.repo}\nTask: ${model.task}\nInput: ${promptText}\n\nThis preview shows how AgriVeda agentic inference flows in production for farmers, government teams, and partners. Connect your account for live API responses.`,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/", icon: Home },
            { label: "AgriVeda", href: "/agriveda", icon: Brain },
            { label: "Playground", icon: PlayCircle },
          ]}
        />

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <PlayCircle size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">CropXon Cloud Assisted</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground">Try Playground</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Test fine-tuned agriculture models from one place. This is the AgriVeda hands-on console for agentic model evaluation before production API integration.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6">
            <label className="mb-2 block text-sm font-medium text-foreground">Model</label>
            <select value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1">
              {agrivedaModels.map((item) => (
                <option key={item.id} value={item.id}>{item.repo}</option>
              ))}
            </select>

            <label className="mb-2 mt-5 block text-sm font-medium text-foreground">Prompt or Input Description</label>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Example: My paddy crop has yellow leaves at 40 days..."
              rows={6}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1"
            />

            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">
              <PlayCircle size={16} /> Run on CropXon Cloud
            </button>
          </form>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold font-display text-foreground">Response Preview</h2>
            <pre className="mt-4 min-h-52 overflow-x-auto rounded-lg border border-border bg-background p-4 text-xs text-muted-foreground whitespace-pre-wrap">
              {response || "Run a prompt to preview model output."}
            </pre>
            {model && (
              <p className="mt-3 text-xs text-accent">
                Active endpoint: {model.apiEndpoint}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriVedaPlaygroundPage;
