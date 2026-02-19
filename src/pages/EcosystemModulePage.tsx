import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Sprout, Home } from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";

type ModuleDetails = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

const moduleDetailsMap: Record<string, ModuleDetails> = {
  agrisakha: {
    name: "AgriSakha",
    title: "CROPXON AgriSakha",
    subtitle: "AI Crop Advisory",
    description:
      "Multilingual voice and chat advisory for crop decisions, pest alerts, fertilizer guidance, and season planning.",
    highlights: ["Multilingual Voice + Chat", "Pest & Disease Advisory", "Fertilizer Planning", "Yield Guidance"],
  },
  bhunetra: {
    name: "BhuNetra",
    title: "CROPXON BhuNetra",
    subtitle: "IoT Soil & Satellite Intelligence",
    description:
      "Ground sensor and satellite-backed farm intelligence for monitoring soil conditions and field-level variability.",
    highlights: ["Soil Monitoring", "Satellite Insights", "Field Variability Mapping", "Decision Support Data"],
  },
  mandisetu: {
    name: "MandiSetu",
    title: "CROPXON MandiSetu",
    subtitle: "Market & Price Intelligence",
    description:
      "Live mandi trends, pricing context, and market timing insights to help farmers improve selling outcomes.",
    highlights: ["Market Price Tracking", "Trend Analysis", "Price Insights", "Market Timing Signals"],
  },
  dhanushakti: {
    name: "DhanuShakti",
    title: "CROPXON DhanuShakti",
    subtitle: "Agri Finance & Insurance",
    description:
      "Financial inclusion stack for loans, insurance, and risk-aware support tailored to agriculture workflows.",
    highlights: ["Loan Enablement", "Insurance Support", "Risk Insights", "Farmer Financial Access"],
  },
  krishisetu: {
    name: "KrishiSetu",
    title: "CROPXON KrishiSetu",
    subtitle: "Q-Commerce & Logistics",
    description:
      "Farm-to-market and farm-to-home logistics coordination with inventory, warehousing, and movement visibility.",
    highlights: ["Supply Chain Visibility", "Warehousing", "Q-Commerce Flows", "Delivery Coordination"],
  },
  nitibandhu: {
    name: "NitiBandhu",
    title: "CROPXON NitiBandhu",
    subtitle: "Govt Scheme Integration",
    description:
      "Government scheme guidance and process support to improve farmer access to benefits and compliance programs.",
    highlights: ["Scheme Discovery", "Eligibility Support", "Policy Mapping", "Submission Guidance"],
  },
  krishikutumba: {
    name: "KrishiKutumba",
    title: "CROPXON KrishiKutumba",
    subtitle: "Farmer Community Hub",
    description:
      "A collaborative knowledge network for farmers, FPOs, and communities through vernacular learning and support.",
    highlights: ["Community Learning", "FPO Collaboration", "Vernacular Content", "Peer Network Support"],
  },
};

const EcosystemModulePage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const moduleData = moduleId ? moduleDetailsMap[moduleId] : undefined;

  if (!moduleData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-24">
          <AppBreadcrumb
            items={[
              { label: "Home", href: "/", icon: Home },
              { label: "Ecosystem", href: "/ecosystem", icon: Sprout },
              { label: "Module Not Found", icon: Sprout },
            ]}
          />
          <div className="mt-10 glass-surface rounded-2xl p-8 text-center">
            <h1 className="text-2xl font-bold font-display text-foreground">Module Not Found</h1>
            <p className="mt-3 text-muted-foreground">This ecosystem module route does not exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/", icon: Home },
            { label: "Ecosystem", href: "/ecosystem", icon: Sprout },
            { label: moduleData.name, icon: Sprout },
          ]}
        />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sprout size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">Ecosystem Module</p>
          </div>
          <h1 className="text-4xl font-bold font-display md:text-6xl">
            <span className="text-gradient-primary">{moduleData.title}</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-accent">{moduleData.subtitle}</p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{moduleData.description}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {moduleData.highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-surface rounded-xl p-6"
            >
              <h3 className="text-lg font-bold font-display text-foreground">{item}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Built into the CROPXON ecosystem for practical, farmer-first outcomes.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemModulePage;
