import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, Leaf, Home } from "lucide-react";
import ecosystemHub from "@/assets/ecosystem-hub.png";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const spokes = [
  { name: "AgriSakha", desc: "AI Crop Advisory – Multilingual Voice + Chat for real-time crop guidance.", icon: "🌾", link: "/ecosystem/agrisakha" },
  { name: "BhuNetra", desc: "IoT Soil & Satellite Intelligence – Real-time soil health monitoring.", icon: "🌍", link: "/ecosystem/bhunetra" },
  { name: "SoilNet", desc: "8-in-1 Soil Health Analysis + Android app for instant metrics, crop prediction inputs, AgriSakha integration, irrigation and yield planning, with weather, climate, and CO2 credits insights.", icon: "🧪", link: "/soilnet" },
  { name: "MandiSetu", desc: "Market & Price Intelligence – Real-time mandi prices & trend reports.", icon: "🛒", link: "/ecosystem/mandisetu" },
  { name: "DhanuShakti", desc: "Agri Finance & Insurance – Micro loans, crop insurance, AI risk scoring.", icon: "🏦", link: "/ecosystem/dhanushakti" },
  { name: "KrishiSetu", desc: "Farm-to-Home Logistics & Q-Commerce – Supply chain & warehousing.", icon: "🚜", link: "/ecosystem/krishisetu" },
  { name: "NitiBandhu", desc: "Govt Scheme & Policy Integration – Scheme mapping & automation.", icon: "🏛", link: "/ecosystem/nitibandhu" },
  { name: "KrishiKutumba", desc: "Farmer Community Network – AI-powered knowledge & FPO connectivity.", icon: "👨‍🌾", link: "/ecosystem/krishikutumba" },
  { name: "Pulse360", desc: "AI Nutrition Intelligence – Food scanning & health tracking.", icon: "🍎", link: "/pulse360" },
];

const EcosystemPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "Ecosystem", icon: Sprout }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Sprout size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">The Ecosystem</p>
        </div>
        <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl">
          <span className="text-gradient-primary">CROPXON AI HUB</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
          One unified platform connecting every layer of agriculture — from soil intelligence to consumer nutrition. The world's first vertically integrated AI Agriculture & Nutrition Super Ecosystem.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="mx-auto mt-16 max-w-3xl">
        <img src={ecosystemHub} alt="CROPXON Ecosystem Hub" className="w-full rounded-2xl" />
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Now expanded with SoilNet for 8-in-1 soil intelligence.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {spokes.map((spoke, i) => (
          <motion.div key={spoke.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
            <Link to={spoke.link} className="glass-surface rounded-xl p-6 block transition-all hover:glow-emerald group h-full">
              <span className="text-3xl">{spoke.icon}</span>
              <h3 className="mt-3 text-xl font-bold font-display text-primary group-hover:text-emerald-glow transition-colors">{spoke.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{spoke.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">
                <Leaf size={12} /> Explore
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default EcosystemPage;
