import { motion } from "framer-motion";
import agrisakha from "@/assets/agrisakha.png";
import mandisetu from "@/assets/mandisetu.png";
import dhanushakti from "@/assets/dhanushakti.png";
import krishisetu from "@/assets/krishisetu.png";
import nitibandhu from "@/assets/nitibandhu.png";
import krishikutumba from "@/assets/krishikutumba.png";

const features = [
  {
    title: "AgriSakha",
    subtitle: "Smart Crop Advisory",
    desc: "Multilingual AI advisory via voice & chat. Pest, irrigation, fertilizer guidance with hectare-based yield predictions.",
    image: agrisakha,
    tags: ["WhatsApp Integration", "Regional Languages", "Voice Support"],
  },
  {
    title: "MandiSetu",
    subtitle: "Market & Price Intelligence",
    desc: "Real-time mandi price alerts, market trend reports, predictive pricing, and direct farmer-market connect.",
    image: mandisetu,
    tags: ["Price Alerts", "Trend Reports", "Predictive Pricing"],
  },
  {
    title: "DhanuShakti",
    subtitle: "Krishi Finance & Insurance",
    desc: "Micro & macro agri loans, AI risk assessment, crop insurance, and embedded fintech layer for farmers.",
    image: dhanushakti,
    tags: ["Micro Loans", "Crop Insurance", "AI Risk Scoring"],
  },
  {
    title: "KrishiSetu",
    subtitle: "Q-Commerce & Logistics",
    desc: "Supply chain tracking, warehousing, inventory management, and farm-to-home delivery infrastructure.",
    image: krishisetu,
    tags: ["Supply Chain", "Warehousing", "Q-Commerce"],
  },
  {
    title: "SoilNet",
    subtitle: "Soil Health Intelligence",
    desc: "8-in-1 soil sensor with Android-first instant soil health metrics. Uses nutrient and field parameters to support crop prediction, integrates with AgriSakha for advisory, and enables irrigation + yield planning with weather, climate, and CO2 credits insights.",
    image: "/image1.jpg",
    tags: ["8-in-1 Soil Sensor", "Android App", "Instant Soil Metrics", "Crop Prediction", "AgriSakha Integration", "Irrigation Planning", "Yield Planning", "Weather & Climate", "CO2 Credits"],
  },
  {
    title: "NitiBandhu",
    subtitle: "Govt Scheme Integration",
    desc: "Government scheme mapping, document automation, portal integrations, and policy intelligence dashboards.",
    image: nitibandhu,
    tags: ["Scheme Mapping", "Document Upload", "Policy Dashboard"],
  },
  {
    title: "KrishiKutumba",
    subtitle: "Farmer Community Hub",
    desc: "AI-powered knowledge hub with vernacular learning, blogs, videos, community network, and FPO connectivity.",
    image: krishikutumba,
    tags: ["Community", "Learning", "FPO Network"],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Platform Features</p>
          <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl text-foreground">
            Powering Every Layer of Agriculture
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full max-w-md mx-auto rounded-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold font-display text-gradient-primary md:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-1 text-lg text-accent font-medium">{f.subtitle}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
