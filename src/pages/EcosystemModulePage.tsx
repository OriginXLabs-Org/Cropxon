import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Sprout, Home, CheckCircle2, Target, Milestone, Languages } from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import agrisakha from "@/assets/agrisakha.png";
import mandisetu from "@/assets/mandisetu.png";
import dhanushakti from "@/assets/dhanushakti.png";
import krishisetu from "@/assets/krishisetu.png";
import nitibandhu from "@/assets/nitibandhu.png";
import krishikutumba from "@/assets/krishikutumba.png";

type DetailCard = {
  title: string;
  desc: string;
};

type ModuleDetails = {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featureHighlights: DetailCard[];
  problemsSolved: string[];
  plannedRoadmap: string[];
  focusAreas: string[];
  languageSupport?: string[];
};

const moduleDetailsMap: Record<string, ModuleDetails> = {
  agrisakha: {
    name: "AgriSakha",
    title: "CROPXON AgriSakha",
    subtitle: "Multilingual Mobile Advisory Intelligence",
    description:
      "AgriSakha enables farmers to speak in their own language on mobile and receive advisory responses in the same language. It supports major Indian languages and English while delivering crop disease detection support, crop details, pesticide references, irrigation guidance, live weather, live AQI, and SoilNet-linked field intelligence.",
    image: agrisakha,
    featureHighlights: [
      {
        title: "Voice-to-Voice in Native Language",
        desc: "Farmers can ask questions in local language and receive spoken and text advisory in the same language.",
      },
      {
        title: "Major Indian Languages + English",
        desc: "Designed for multilingual adoption across states with regional language support at field level.",
      },
      {
        title: "Crop Disease & Pest Guidance",
        desc: "Early detection support with symptom-based references and actionable next-step advisories.",
      },
      {
        title: "Pesticide & Input References",
        desc: "Guidance includes safer usage context, dosage direction, and responsible farm-practice references.",
      },
      {
        title: "Irrigation + Crop Planning",
        desc: "Field advisory combines crop stage context with irrigation planning and operational alerts.",
      },
      {
        title: "Live Weather + Live AQI + SoilNet",
        desc: "Hyperlocal weather, air-quality signals, and SoilNet soil metrics are merged into decision-ready recommendations.",
      },
    ],
    problemsSolved: [
      "Removes language barriers in advisory for first-generation digital users.",
      "Reduces delayed crop decisions caused by fragmented information sources.",
      "Improves disease and pest response speed with mobile-first support.",
      "Connects weather, AQI, and soil data for better on-ground decisions.",
    ],
    plannedRoadmap: [
      "Expand regional voice model quality for dialect-level accuracy.",
      "Deepen SoilNet integration for automated irrigation and nutrient suggestions.",
      "Launch assistant-led seasonal planning workflows for village-level rollout.",
      "Strengthen crop-stage alerts with market and risk overlays.",
    ],
    focusAreas: ["Voice AI", "Multilingual", "Crop Advisory", "Pest & Disease", "Live Weather", "Live AQI", "SoilNet"],
    languageSupport: ["Hindi", "Odia", "Bengali", "Telugu", "Tamil", "Kannada", "Marathi", "Punjabi", "English"],
  },
  bhunetra: {
    name: "BhuNetra",
    title: "CROPXON BhuNetra",
    subtitle: "IoT Soil & Satellite Intelligence",
    description:
      "Ground sensor and satellite-backed farm intelligence for monitoring soil conditions and field-level variability.",
    image: "/image4.jpg",
    featureHighlights: [
      {
        title: "Field Sensor Monitoring",
        desc: "Collects field-level observations to monitor variability and improve operational planning.",
      },
      {
        title: "Satellite Insight Layer",
        desc: "Adds remote-sensing intelligence for broader visibility beyond individual farm plots.",
      },
      {
        title: "Soil + Field Variability Mapping",
        desc: "Converts complex signals into map-friendly zones for prioritizing interventions.",
      },
      {
        title: "Data-Ready Decision Support",
        desc: "Powers risk-aware decisions for crop health, irrigation, and advisory workflows.",
      },
    ],
    problemsSolved: [
      "Closes field-visibility gaps where manual inspection is inconsistent.",
      "Improves early identification of stress zones in larger farms.",
      "Supports precision decisions with evidence-backed field data.",
    ],
    plannedRoadmap: [
      "Introduce advanced farm-zone risk scoring.",
      "Enable deeper integration with AgriSakha and DhanuShakti workflows.",
      "Improve district-scale monitoring dashboards for institutional users.",
    ],
    focusAreas: ["IoT", "Satellite", "Field Monitoring", "Decision Intelligence"],
  },
  mandisetu: {
    name: "MandiSetu",
    title: "CROPXON MandiSetu",
    subtitle: "Market & Price Intelligence",
    description:
      "Live mandi trends, pricing context, and market timing insights to help farmers improve selling outcomes.",
    image: mandisetu,
    featureHighlights: [
      {
        title: "Market Price Tracking",
        desc: "Tracks mandi price movements to help farmers choose better selling windows.",
      },
      {
        title: "Trend & Demand Signals",
        desc: "Combines trend analysis with demand context for smarter produce movement.",
      },
      {
        title: "Advisory for Timing",
        desc: "Supports better price realization through timing-focused market intelligence.",
      },
      {
        title: "Farmer-Market Connection",
        desc: "Improves market access pathways for informed selling decisions.",
      },
    ],
    problemsSolved: [
      "Reduces information asymmetry in mandi pricing.",
      "Helps avoid rushed selling during unfavorable price windows.",
      "Improves post-harvest planning with market visibility.",
    ],
    plannedRoadmap: [
      "Add expanded regional mandi coverage and forecasting confidence bands.",
      "Integrate logistics signal overlays from KrishiSetu.",
      "Enable crop-wise demand dashboards for farmer groups and FPOs.",
    ],
    focusAreas: ["Pricing", "Market Intelligence", "Forecasting", "Farmer Market Access"],
  },
  dhanushakti: {
    name: "DhanuShakti",
    title: "CROPXON DhanuShakti",
    subtitle: "Agri Finance & Insurance",
    description:
      "Financial inclusion stack for loans, insurance, and risk-aware support tailored to agriculture workflows.",
    image: dhanushakti,
    featureHighlights: [
      {
        title: "Loan Enablement",
        desc: "Supports farmer financing workflows with structured application support.",
      },
      {
        title: "Insurance Support",
        desc: "Improves discoverability and process guidance for crop-risk protection options.",
      },
      {
        title: "Risk Insight Layer",
        desc: "Combines field and planning data for better risk awareness in financial decisions.",
      },
      {
        title: "Farmer Financial Access",
        desc: "Builds inclusive access pathways for micro and growth-oriented finance needs.",
      },
    ],
    problemsSolved: [
      "Reduces barriers to finance and insurance for smallholder farmers.",
      "Improves confidence in selecting suitable financial products.",
      "Supports risk-aware planning before and during crop cycles.",
    ],
    plannedRoadmap: [
      "Strengthen lender ecosystem integrations.",
      "Expand AI risk signals using BhuNetra and SoilNet inputs.",
      "Launch simplified assisted journeys for first-time applicants.",
    ],
    focusAreas: ["Finance", "Insurance", "Risk Intelligence", "Farmer Inclusion"],
  },
  krishisetu: {
    name: "KrishiSetu",
    title: "CROPXON KrishiSetu",
    subtitle: "Q-Commerce & Logistics",
    description:
      "Farm-to-market and farm-to-home logistics coordination with inventory, warehousing, and movement visibility.",
    image: krishisetu,
    featureHighlights: [
      {
        title: "Supply Chain Visibility",
        desc: "Tracks produce flow from collection to delivery touchpoints.",
      },
      {
        title: "Warehousing Support",
        desc: "Improves storage and movement planning for better shelf and supply outcomes.",
      },
      {
        title: "Q-Commerce Flow",
        desc: "Supports faster, structured farm-to-home and farm-to-buyer operations.",
      },
      {
        title: "Delivery Coordination",
        desc: "Optimizes logistics handoffs and reduces avoidable movement delays.",
      },
    ],
    problemsSolved: [
      "Fixes fragmented farm logistics and weak distribution visibility.",
      "Reduces post-harvest movement delays and coordination overhead.",
      "Improves fulfillment reliability for ecosystem commerce journeys.",
    ],
    plannedRoadmap: [
      "Add route optimization and cold-chain indicators.",
      "Enable direct integrations with MandiSetu and Pulse360 demand layers.",
      "Expand fulfillment orchestration for district clusters.",
    ],
    focusAreas: ["Logistics", "Q-Commerce", "Warehousing", "Distribution"],
  },
  nitibandhu: {
    name: "NitiBandhu",
    title: "CROPXON NitiBandhu",
    subtitle: "Govt Scheme Integration",
    description:
      "Government scheme guidance and process support to improve farmer access to benefits and compliance programs.",
    image: nitibandhu,
    featureHighlights: [
      {
        title: "Scheme Discovery",
        desc: "Maps relevant central and state schemes based on farmer context.",
      },
      {
        title: "Eligibility Assistance",
        desc: "Guides farmers through required criteria and application prerequisites.",
      },
      {
        title: "Policy Mapping",
        desc: "Translates policy intent into practical farmer action checkpoints.",
      },
      {
        title: "Submission Guidance",
        desc: "Simplifies process readiness for documentation and assisted submission.",
      },
    ],
    problemsSolved: [
      "Reduces confusion around scheme eligibility and application pathways.",
      "Improves participation in relevant government support programs.",
      "Decreases drop-offs due to documentation complexity.",
    ],
    plannedRoadmap: [
      "Expand dynamic policy updates by region.",
      "Strengthen multilingual assisted form workflows with AgriSakha.",
      "Build institution-facing dashboards for implementation monitoring.",
    ],
    focusAreas: ["Schemes", "Eligibility", "Policy Intelligence", "Farmer Enablement"],
  },
  krishikutumba: {
    name: "KrishiKutumba",
    title: "CROPXON KrishiKutumba",
    subtitle: "Farmer Community Hub",
    description:
      "A collaborative knowledge network for farmers, FPOs, and communities through vernacular learning and support.",
    image: krishikutumba,
    featureHighlights: [
      {
        title: "Community Learning",
        desc: "Enables practical peer learning through structured farmer-centric content.",
      },
      {
        title: "FPO Collaboration",
        desc: "Supports group-level coordination and knowledge exchange with FPO networks.",
      },
      {
        title: "Vernacular Content",
        desc: "Delivers localized communication formats to improve understanding and adoption.",
      },
      {
        title: "Peer Support Network",
        desc: "Builds trust-based support channels for resilient farming communities.",
      },
    ],
    problemsSolved: [
      "Reduces farmer isolation by improving local knowledge sharing.",
      "Strengthens collective learning and adoption of best practices.",
      "Improves access to practical answers through peer participation.",
    ],
    plannedRoadmap: [
      "Scale expert-led regional communities with moderation tools.",
      "Integrate AgriSakha smart summaries for common local issues.",
      "Launch community trust and impact indicators for FPO partners.",
    ],
    focusAreas: ["Community", "Vernacular", "FPO", "Knowledge Network"],
  },
};

const EcosystemModulePage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const moduleData = moduleId ? moduleDetailsMap[moduleId] : undefined;

  if (!moduleData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
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
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
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
          <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl">
            <span className="text-gradient-primary">{moduleData.title}</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-accent">{moduleData.subtitle}</p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{moduleData.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-card/70"
        >
          <img src={moduleData.image} alt={`${moduleData.name} module`} className="h-[260px] w-full object-cover md:h-[380px]" />
        </motion.div>

        {moduleData.languageSupport && (
          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Languages size={16} />
              <h3 className="text-lg font-bold font-display text-foreground">Language Support</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Mobile advisory in major Indian languages with English support for broader accessibility.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {moduleData.languageSupport.map((lang) => (
                <span key={lang} className="rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-xs font-semibold text-primary">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-2">
          {moduleData.focusAreas.map((item) => (
            <span key={item} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moduleData.featureHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-surface rounded-xl p-6"
            >
              <h3 className="text-lg font-bold font-display text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Target size={16} />
              <h3 className="text-lg font-bold font-display text-foreground">Problems This Solves</h3>
            </div>
            <div className="mt-4 space-y-3">
              {moduleData.problemsSolved.map((item) => (
                <div key={item} className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Milestone size={16} />
              <h3 className="text-lg font-bold font-display text-foreground">What We Have Planned</h3>
            </div>
            <div className="mt-4 space-y-3">
              {moduleData.plannedRoadmap.map((item) => (
                <div key={item} className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemModulePage;
