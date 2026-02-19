import { motion } from "framer-motion";
import { Smartphone, Mic, ScanLine, BarChart3, FlaskConical } from "lucide-react";

const screens = [
  {
    icon: <BarChart3 size={20} />,
    title: "Smart Dashboard",
    desc: "Real-time farm analytics, weather data, crop health, and market prices — all in one view.",
    color: "from-primary to-emerald-glow",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "SoilNet Android",
    desc: "Capture instant 8-in-1 soil metrics and receive crop prediction, irrigation planning, and yield planning support integrated with AgriSakha.",
    color: "from-primary to-emerald-glow",
  },
  {
    icon: <Mic size={20} />,
    title: "Voice Advisory",
    desc: "AgriSakha AI assistant in 9+ languages. Just speak and get instant crop guidance.",
    color: "from-accent to-gold-light",
  },
  {
    icon: <ScanLine size={20} />,
    title: "Pulse360 Scanner",
    desc: "Point your camera at any food item for instant quality, nutrition, and adulteration analysis.",
    color: "from-primary to-emerald-glow",
  },
];

const MobileAppShowcase = () => (
  <section className="py-24 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Smartphone size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">Mobile Experience</p>
        </div>
        <h2 className="text-3xl font-bold font-display md:text-5xl text-foreground">
          CROPXON in Your <span className="text-gradient-primary">Pocket</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          The full power of India's AI agriculture ecosystem, including SoilNet Android instant soil health intelligence, available on your smartphone.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {screens.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-56 md:w-64">
              <div className="aspect-[9/18] rounded-[2rem] border-2 border-border bg-card overflow-hidden shadow-xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-2">
                  <span className="text-[10px] text-muted-foreground">9:41</span>
                  <div className="h-5 w-16 rounded-full bg-background" />
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>
                {/* Screen content */}
                <div className="flex flex-col items-center justify-center px-4 py-8 text-center h-[calc(100%-2.5rem)]">
                  <motion.div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-primary-foreground">{s.icon}</div>
                  </motion.div>
                  <h4 className="mt-4 text-sm font-bold font-display text-foreground">{s.title}</h4>
                  <div className="mt-3 space-y-2 w-full">
                    {[1, 2, 3].map((n) => (
                      <motion.div
                        key={n}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + n * 8}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + n * 0.15, duration: 0.5 }}
                        className="mx-auto h-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/10"
                      />
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 w-full">
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="h-8 rounded bg-primary/10" />
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="h-8 rounded bg-accent/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold font-display text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground text-center max-w-xs">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap items-center justify-center gap-4"
      >
        <button className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">
          Download for Android
        </button>
        <button className="rounded-xl border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary">
          Download for iOS
        </button>
      </motion.div>
    </div>
  </section>
);

export default MobileAppShowcase;
