import { motion } from "framer-motion";
import pulse360Img from "@/assets/pulse360.png";

const Pulse360Section = () => {
  return (
    <section id="pulse360" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-emerald opacity-30" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Nutrition Intelligence</p>
            <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl">
              <span className="text-gradient-primary">Pulse360</span>
            </h2>
            <p className="mt-2 text-lg text-accent font-medium">From Farm to Fork, Powered by Intelligence</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AI-powered food scanner that detects fruit quality, adulteration, and provides nutritional breakdowns.
              Personalized recommendations for children and adults with wearable integration.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "AI Food Scanner",
                "Quality Detection",
                "Nutritional Breakdown",
                "Health Tracking",
                "Wearable Sync",
                "Global Food DB",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img src={pulse360Img} alt="Pulse360" className="w-full max-w-md mx-auto rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pulse360Section;
