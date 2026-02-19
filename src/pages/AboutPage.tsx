import { motion } from "framer-motion";
import { Target, Rocket, Lightbulb, Users, Building2, Wheat, Home } from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const stakeholders = [
  { icon: <Wheat size={20} />, title: "For Farmers", desc: "Simple UI, voice AI, soil testing access, and financial tools in local languages." },
  { icon: <Building2 size={20} />, title: "For Government", desc: "Policy dashboards, scheme integration, carbon tracking, and compliance reporting." },
  { icon: <Users size={20} />, title: "For FPOs", desc: "Community enablement, supply chain tools, collective bargaining, and market access." },
  { icon: <Lightbulb size={20} />, title: "For Investors", desc: "₹8L Cr TAM opportunity. AgTech + NutriTech projections with multiple revenue streams." },
];

const techStack = [
  "AI Agentic System", "Computer Vision", "IoT & Edge Computing", "Satellite Data APIs",
  "Blockchain", "Cloud Infrastructure", "Big Data & Analytics", "Predictive ML Models",
];

const companyDetails = [
  { label: "Legal Name", value: "OriginX Labs Private Limited" },
  { label: "CIN", value: "U62010OD2025PTC051089" },
  { label: "GSTIN", value: "21AANCC1954F1ZW" },
  { label: "PAN", value: "AANCC1954F" },
  { label: "Udyam Registration", value: "UDYAM-OD-03-0076858" },
  { label: "DPIIT Recognition", value: "DIPP230789" },
  { label: "Incorporation Date", value: "16 October 2025" },
  { label: "Company Type", value: "Private Limited" },
  { label: "Registered Office", value: "Odisha, India" },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-6 py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "About CROPXON", icon: Target }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Target size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">About CROPXON</p>
        </div>
        <h1 className="text-4xl font-bold font-display md:text-6xl text-foreground">
          Rebuilding Agriculture through <span className="text-gradient-primary">AI, Data & Community</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg">
          CROPXON is the world's only AI-driven ecosystem integrating Soil Intelligence, Crop Advisory, Market Intelligence, Finance, Governance, Logistics, and Consumer Nutrition into one unified platform.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-surface rounded-xl p-8">
          <div className="inline-flex items-center gap-2 text-accent mb-3"><Rocket size={18} /><h2 className="text-xl font-bold font-display text-gradient-gold">Our Vision</h2></div>
          <p className="text-muted-foreground leading-relaxed">Rebuilding Agriculture through AI, Data & Community — empowering every farmer in India and beyond to thrive in the digital age.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-surface rounded-xl p-8">
          <div className="inline-flex items-center gap-2 text-accent mb-3"><Target size={18} /><h2 className="text-xl font-bold font-display text-gradient-gold">Our Mission</h2></div>
          <p className="text-muted-foreground leading-relaxed">Empower every farmer. Enhance every crop. Improve every plate. From soil to soul, we're transforming every link in the chain.</p>
        </motion.div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold font-display text-foreground text-center mb-8">Built for Everyone</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-surface rounded-xl p-6">
              <div className="text-primary mb-3">{s.icon}</div>
              <h3 className="font-bold font-display text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold font-display text-accent mb-6">Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((t) => (
            <span key={t} className="rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground">{t}</span>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Powered by <span className="font-semibold text-foreground">OriginX Labs Pvt. Ltd.</span></p>
      </div>

      <div className="mt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-2xl font-bold font-display text-foreground">Official Company Details</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Presented under CROPXON platform branding by <span className="font-semibold text-foreground">OriginX Labs Pvt. Ltd.</span>
          </p>
        </motion.div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companyDetails.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-surface rounded-xl p-5">
              <p className="text-xs uppercase tracking-wider text-accent">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-foreground break-words">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
