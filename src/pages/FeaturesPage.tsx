import { motion } from "framer-motion";
import { Cpu, MessageSquare, Store, Shield, Truck, Landmark, Users, FlaskConical, Home } from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import agrisakha from "@/assets/agrisakha.png";
import mandisetu from "@/assets/mandisetu.png";
import dhanushakti from "@/assets/dhanushakti.png";
import krishisetu from "@/assets/krishisetu.png";
import nitibandhu from "@/assets/nitibandhu.png";
import krishikutumba from "@/assets/krishikutumba.png";

const features = [
  {
    title: "AgriSakha", subtitle: "Smart Crop Advisory", icon: <MessageSquare size={20} />,
    desc: "Multilingual AI advisory via voice & chat. Pest, irrigation, fertilizer guidance with hectare-based yield predictions. WhatsApp integration and regional language support.",
    image: agrisakha, tags: ["WhatsApp Integration", "Regional Languages", "Voice Support", "Yield Predictions"],
  },
  {
    title: "MandiSetu", subtitle: "Market & Price Intelligence", icon: <Store size={20} />,
    desc: "Real-time mandi price alerts, market trend reports, predictive pricing, and direct farmer-market connect for maximum value.",
    image: mandisetu, tags: ["Price Alerts", "Trend Reports", "Predictive Pricing", "Market Connect"],
  },
  {
    title: "DhanuShakti", subtitle: "Krishi Finance & Insurance", icon: <Shield size={20} />,
    desc: "Micro & macro agri loans, AI risk assessment, crop insurance, financial tracking, and embedded fintech layer for every farmer.",
    image: dhanushakti, tags: ["Micro Loans", "Crop Insurance", "AI Risk Scoring", "Fintech Layer"],
  },
  {
    title: "KrishiSetu", subtitle: "Q-Commerce & Logistics", icon: <Truck size={20} />,
    desc: "Supply chain tracking, warehousing, inventory management, and farm-to-home delivery infrastructure with Q-Commerce capabilities.",
    image: krishisetu, tags: ["Supply Chain", "Warehousing", "Q-Commerce", "Farm-to-Home"],
  },
  {
    title: "SoilNet", subtitle: "Soil Health Intelligence", icon: <FlaskConical size={20} />,
    desc: "8-in-1 soil sensor with Android-first instant soil health metrics. Uses nutrient and field parameters to support crop prediction, integrates with AgriSakha for advisory, and enables irrigation + yield planning with weather, climate, and CO2 credits insights.",
    image: "/image1.jpg", tags: ["8-in-1 Soil Sensor", "Android App", "Instant Soil Metrics", "Crop Prediction", "AgriSakha Integration", "Irrigation Planning", "Yield Planning", "Weather & Climate", "CO2 Credits"],
  },
  {
    title: "NitiBandhu", subtitle: "Govt Scheme Integration", icon: <Landmark size={20} />,
    desc: "Government scheme mapping, document automation, portal integrations, and policy intelligence dashboards for every farmer.",
    image: nitibandhu, tags: ["Scheme Mapping", "Document Upload", "Policy Dashboard", "Portal Integration"],
  },
  {
    title: "KrishiKutumba", subtitle: "Farmer Community Hub", icon: <Users size={20} />,
    desc: "AI-powered knowledge hub with vernacular learning, blogs, videos, community network, and FPO connectivity for collective growth.",
    image: krishikutumba, tags: ["Community", "Learning", "FPO Network", "Knowledge Hub"],
  },
];

const FeaturesPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-6 py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "All Features", icon: Cpu }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Cpu size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">Platform Features</p>
        </div>
        <h1 className="text-4xl font-bold font-display md:text-6xl text-foreground">
          Powering Every Layer of <span className="text-gradient-primary">Agriculture</span>
        </h1>
      </motion.div>

      <div className="mt-16 space-y-24">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center gap-12 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="w-full lg:w-1/2">
              <img src={f.image} alt={f.title} className="w-full max-w-md mx-auto rounded-2xl" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-primary mb-2">{f.icon}<span className="text-sm font-medium uppercase tracking-wider">{f.subtitle}</span></div>
              <h2 className="text-3xl font-bold font-display text-gradient-primary md:text-4xl">{f.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{f.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesPage;
