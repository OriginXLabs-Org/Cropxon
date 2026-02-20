import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">About CROPXON</p>
            <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl text-foreground">
              Rebuilding Agriculture through{" "}
              <span className="text-gradient-primary">AI, Data & Community</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              CROPXON is the world's only AI-driven ecosystem integrating Soil Intelligence, Crop Advisory,
              Market Intelligence, Finance, Governance, Logistics, and Consumer Nutrition into one unified platform.
            </p>
            <div className="mt-8 space-y-4">
              <div className="glass-surface rounded-xl p-5">
                <h3 className="text-lg font-bold font-display text-gradient-gold">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rebuilding Agriculture through AI, Data & Community — empowering every farmer in India and beyond.
                </p>
              </div>
              <div className="glass-surface rounded-xl p-5">
                <h3 className="text-lg font-bold font-display text-gradient-gold">Our Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Empower every farmer. Enhance every crop. Improve every plate.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-foreground">OriginX Labs Pvt. Ltd.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">For Stakeholders</p>
            <h3 className="mt-3 text-2xl font-bold font-display text-foreground">Built for Everyone</h3>
            <div className="mt-6 space-y-4">
              {[
                { title: "For Farmers", desc: "Simple UI, voice AI, soil testing access, and financial tools in local languages." },
                { title: "For Government", desc: "Policy dashboards, scheme integration, carbon tracking, and compliance reporting." },
                { title: "For FPOs", desc: "Community enablement, supply chain tools, collective bargaining, and market access." },
                { title: "For Investors", desc: "₹8L Cr TAM opportunity. AgTech + NutriTech projections with multiple revenue streams." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-surface rounded-xl p-5"
                >
                  <h4 className="font-bold font-display text-primary">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-bold font-display text-accent">Technology Stack</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "AI Agentic System", "Computer Vision", "IoT & Edge", "Satellite APIs",
              "Blockchain", "Cloud Infrastructure", "Big Data", "Predictive ML",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
