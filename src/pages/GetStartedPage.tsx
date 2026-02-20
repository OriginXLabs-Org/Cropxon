import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Sprout, TrendingUp, Shield, Mail, Home } from "lucide-react";
import { FormEvent, useState } from "react";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const GetStartedPage = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const mobileDigits = mobile.replace(/\D/g, "");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (mobileDigits.length < 10 || mobileDigits.length > 15) {
      setError("Please enter a valid mobile number.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email or leave it blank.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "Get Started", icon: Rocket }]} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Rocket size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">Get Started</p>
          </div>
          <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl text-foreground">
            Start Your <span className="text-gradient-primary">CROPXON</span> Journey
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
            CropXon is a futuristic, sustainable Agriculture + Food + Humanity platform powered by AI and agentization. Product by OriginX Labs Private Limited.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold font-display text-foreground">Tell us about you</h2>
          <p className="mt-2 text-sm text-muted-foreground">Required: Name and Mobile No. Email is optional.</p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Name *</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Mobile No *</label>
              <input
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email (optional)</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 focus:ring-1"
                placeholder="name@example.com"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {submitted && (
              <div className="rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm text-foreground">
                Thank you. Your request is captured for CropXon onboarding.
              </div>
            )}

            <button type="submit" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">
              Submit & Continue
            </button>
          </form>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { icon: <Sprout size={28} />, title: "For Farmers", desc: "Access AI advisory, soil testing, market intelligence and financial tools in your local language.", cta: "Explore Farmer Tools", link: "/features" },
            { icon: <Shield size={28} />, title: "For Government", desc: "Policy dashboards, scheme integration, carbon tracking, and ESG compliance metrics.", cta: "Explore Gov Solutions", link: "/about" },
            { icon: <TrendingUp size={28} />, title: "For Investors", desc: "Agentic AgTech SaaS with multi-layer revenue opportunities across data, APIs, and ecosystem products.", cta: "View Company Profile", link: "/about" },
            { icon: <Mail size={28} />, title: "Partner With Us", desc: "FPOs, enterprises, and institutions - build with CropXon Cloud and AgriVeda APIs.", cta: "Contact Us", link: "/contact" },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
              <Link to={item.link} className="glass-surface rounded-xl p-8 block transition-all hover:glow-emerald group h-full">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-display text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-6 text-sm font-semibold text-primary">{item.cta} →</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
