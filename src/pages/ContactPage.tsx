import { motion } from "framer-motion";
import { Mail, FlaskConical, CalendarDays, Handshake, Landmark, Home } from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const contactOptions = [
  { label: "Purchase Soil Test Kit", icon: <FlaskConical size={22} />, desc: "Get started with IoT-powered soil analysis for your farm." },
  { label: "Schedule a Demo", icon: <CalendarDays size={22} />, desc: "See the full CROPXON ecosystem in action." },
  { label: "Become FPO Partner", icon: <Handshake size={22} />, desc: "Join our network and empower farming communities." },
  { label: "Government Onboarding", icon: <Landmark size={22} />, desc: "Integrate CROPXON with government agriculture programs." },
];

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-6 py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "Contact", icon: Mail }]} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Mail size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">Get In Touch</p>
        </div>
        <h1 className="text-4xl font-bold font-display md:text-6xl text-foreground">
          Partner with <span className="text-gradient-primary">CROPXON</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-lg">
          Whether you're a farmer, government body, FPO, or investor — we'd love to connect.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
        {contactOptions.map((item, i) => (
          <motion.button key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="glass-surface flex flex-col items-start gap-3 rounded-xl p-6 text-left transition-all hover:glow-emerald">
            <div className="text-primary">{item.icon}</div>
            <span className="text-lg font-semibold text-foreground">{item.label}</span>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.button>
        ))}
      </div>
    </div>
  </div>
);

export default ContactPage;
