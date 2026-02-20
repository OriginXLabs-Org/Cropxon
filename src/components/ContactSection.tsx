import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Get In Touch</p>
          <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl text-foreground">
            Partner with <span className="text-gradient-primary">CROPXON</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're a farmer, government body, FPO, or investor — we'd love to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {[
            { label: "Purchase Soil Test Kit", icon: "🔬" },
            { label: "Schedule a Demo", icon: "📅" },
            { label: "Become FPO Partner", icon: "🤝" },
            { label: "Government Onboarding", icon: "🏛" },
          ].map((item) => (
            <button
              key={item.label}
              className="glass-surface flex items-center gap-3 rounded-xl p-5 text-left transition-all hover:glow-emerald"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-foreground">{item.label}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
