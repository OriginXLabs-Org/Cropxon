import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sprout, Wheat, TrendingUp, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden sm:min-h-screen">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 gradient-radial-emerald" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 text-center sm:px-6 sm:pt-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.3em]">
            🌱 From Soil to Soul — Powered by AI & Bharat
          </p>
          <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight font-display sm:text-4xl md:text-6xl lg:text-7xl">
            <span className="hero-word-reveal text-gradient-primary">The World's First</span><br />
            <span className="hero-word-reveal text-foreground">AI-Powered</span>{" "}
            <span className="hero-word-reveal text-gradient-gold">Soil-to-Soul</span><br />
            <span className="hero-word-reveal text-foreground">Ecosystem</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Empowering Farmers. Transforming Agriculture. Enhancing Nutrition. Sustaining the Planet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link to="/ecosystem" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald sm:w-auto sm:px-8 sm:py-3.5">
            <Sprout size={16} /> Explore Ecosystem
          </Link>
          <Link to="/features" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent/30 px-5 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10 sm:w-auto sm:px-8 sm:py-3.5">
            <Wheat size={16} /> For Farmers
          </Link>
          <Link to="/agriveda" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 sm:w-auto sm:px-8 sm:py-3.5">
            <Brain size={16} /> Explore AgriVeda
          </Link>
          <Link to="/about" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary sm:w-auto sm:px-8 sm:py-3.5">
            <TrendingUp size={16} /> For Investors
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-14 flex flex-col items-center gap-2 sm:mt-20"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
