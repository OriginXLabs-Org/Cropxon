import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, ArrowRight } from "lucide-react";

const spokes = [
  { name: "AgriSakha", desc: "AI Crop Advisory", problem: "Solves delayed crop decisions and language barriers in advisory.", icon: "🌾", color: "text-primary", link: "/ecosystem/agrisakha" },
  { name: "BhuNetra", desc: "IoT & Satellite Intelligence", problem: "Solves blind spots in soil and field-condition monitoring.", icon: "🌍", color: "text-primary", link: "/ecosystem/bhunetra" },
  { name: "SoilNet", desc: "8-in-1 Soil Sensor + Android Soil Health Intelligence", problem: "Solves guesswork in nutrient and soil-parameter understanding.", icon: "🧪", color: "text-primary", link: "/soilnet" },
  { name: "MandiSetu", desc: "Market & Price Intelligence", problem: "Solves poor market timing and price-discovery issues.", icon: "🛒", color: "text-primary", link: "/ecosystem/mandisetu" },
  { name: "DhanuShakti", desc: "Agri Finance & Insurance", problem: "Solves farmer access gaps in loans, protection, and risk coverage.", icon: "🏦", color: "text-accent", link: "/ecosystem/dhanushakti" },
  { name: "KrishiSetu", desc: "Farm-to-Home Logistics", problem: "Solves logistics inefficiency from farm gate to buyers.", icon: "🚜", color: "text-accent", link: "/ecosystem/krishisetu" },
  { name: "NitiBandhu", desc: "Govt Scheme Integration", problem: "Solves complexity in scheme discovery, eligibility, and submission.", icon: "🏛", color: "text-accent", link: "/ecosystem/nitibandhu" },
  { name: "KrishiKutumba", desc: "Farmer Community Network", problem: "Solves isolation by enabling shared learning and community support.", icon: "👨‍🌾", color: "text-accent", link: "/ecosystem/krishikutumba" },
  { name: "Pulse360", desc: "AI Nutrition Intelligence", problem: "Solves uncertainty in food quality and nutrition visibility.", icon: "🍎", color: "text-primary", link: "/pulse360" },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-emerald opacity-50" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sprout size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">The Ecosystem</p>
          </div>
          <h2 className="mt-1 text-3xl font-bold font-display md:text-5xl">
            <span className="text-gradient-primary">CROPXON AI HUB</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            One unified platform connecting every layer of agriculture — from soil intelligence to consumer nutrition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">Ecosystem Overview</p>
            <h3 className="mt-3 text-2xl font-bold font-display text-foreground md:text-3xl">
              CROPXON Connected Agriculture Network
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Soil intelligence, advisory, market access, finance, logistics, governance support, and nutrition
              intelligence in one unified farmer-first ecosystem.
            </p>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            A simple overview of the CROPXON ecosystem.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spokes.map((spoke, i) => (
            <motion.div key={spoke.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={spoke.link} className="glass-surface rounded-xl p-5 transition-all hover:glow-emerald cursor-pointer group block h-full">
                <span className="text-2xl">{spoke.icon}</span>
                <h3 className={`mt-2 text-lg font-bold font-display ${spoke.color}`}>{spoke.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{spoke.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Explore Full Ecosystem <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
