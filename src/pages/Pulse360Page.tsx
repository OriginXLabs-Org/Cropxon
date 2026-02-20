import { motion } from "framer-motion";
import { ScanLine, Apple, Heart, Watch, Database, Home, Smartphone } from "lucide-react";
import pulse360Img from "@/assets/pulse360.png";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const features = [
  { icon: <ScanLine size={20} />, title: "AI Food Scanner", desc: "Computer vision-powered food scanning for instant quality assessment and adulteration detection." },
  { icon: <Apple size={20} />, title: "Nutritional Breakdown", desc: "Complete macro/micro nutrient analysis with personalized dietary recommendations." },
  { icon: <Heart size={20} />, title: "Health Tracking", desc: "Child & adult nutrient recommendations with comprehensive health monitoring." },
  { icon: <Watch size={20} />, title: "Wearable Sync", desc: "Integration with smartwatches and wearables for continuous health data tracking." },
  { icon: <Database size={20} />, title: "Global Food DB", desc: "Access to a comprehensive global food database for accurate nutritional information." },
  { icon: <ScanLine size={20} />, title: "Quality Detection", desc: "AI-powered fruit quality assessment and food adulteration detection in real-time." },
];

const Pulse360Page = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "Pulse360", icon: ScanLine }]} />

      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <ScanLine size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">Nutrition Intelligence</p>
          </div>
          <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl">
            <span className="text-gradient-primary">Pulse360</span>
          </h1>
          <p className="mt-2 text-xl text-accent font-medium">From Farm to Fork, Powered by Intelligence</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            AI-powered food scanner that detects fruit quality, adulteration, and provides nutritional breakdowns. Personalized recommendations with wearable integration and global food database.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
          <img src={pulse360Img} alt="Pulse360" className="w-full max-w-md mx-auto rounded-2xl" />
        </motion.div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-surface rounded-xl p-6">
            <div className="text-primary mb-3">{f.icon}</div>
            <h3 className="text-lg font-bold font-display text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 glass-surface rounded-xl p-6">
        <div className="inline-flex items-center gap-2 text-primary">
          <Smartphone size={16} />
          <h3 className="text-lg font-bold font-display text-foreground">Pulse360 Mobile Apps</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Pulse360 for Android and iOS is coming soon. Use the CropXon app portal for release updates and early access.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://app.cropxon.com" target="_blank" rel="noreferrer" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Android Coming Soon
          </a>
          <a href="https://app.cropxon.com" target="_blank" rel="noreferrer" className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground">
            iOS Coming Soon
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Pulse360Page;
