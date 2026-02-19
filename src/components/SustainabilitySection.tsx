import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const counters = [
  { label: "Farmers Onboarded", target: 50000, suffix: "+" },
  { label: "Carbon Credits Generated", target: 12500, suffix: "+" },
  { label: "Trees Supported", target: 85000, suffix: "+" },
  { label: "Villages Reached", target: 2400, suffix: "+" },
];

function useCounter(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, inView]);
  return count;
}

const CounterCard = ({ label, target, suffix, inView }: { label: string; target: number; suffix: string; inView: boolean }) => {
  const count = useCounter(target, inView);
  return (
    <div className="glass-surface rounded-xl p-6 text-center" style={{ animation: "counter-glow 3s ease-in-out infinite" }}>
      <p className="text-3xl font-bold font-display text-gradient-primary md:text-4xl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const SustainabilitySection = () => {
  const [inView, setInView] = useState(false);

  return (
    <section id="sustainability" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Impact & Sustainability</p>
          <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl text-foreground">
            Green Revolution <span className="text-gradient-primary">2.0</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Carbon credit tracking, regenerative farming analytics, reforestation commitment, and ESG compliance.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <CounterCard {...c} inView={inView} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { title: "Carbon Credit Tracking", desc: "Blockchain-ready carbon tracking dashboard for transparent sustainability metrics." },
            { title: "Regenerative Farming", desc: "AI analytics promoting soil health regeneration and sustainable crop practices." },
            { title: "ESG Compliance", desc: "Enterprise-grade ESG reporting and metrics for government and investor readiness." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-surface rounded-xl p-6"
            >
              <h3 className="text-lg font-bold font-display text-accent">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
