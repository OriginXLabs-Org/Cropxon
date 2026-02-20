import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Globe,
  Sprout,
  ChevronDown,
  MessageSquare,
  Store,
  Shield,
  Truck,
  Landmark,
  Users,
  FlaskConical,
  ScanLine,
  Layers,
  Brain,
  Building2,
  Mail,
  Orbit,
  Sun,
  Moon,
} from "lucide-react";
import { languages, useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const ecosystemLinks = [
  { label: "Ecosystem Overview", href: "/ecosystem", icon: Orbit },
  { label: "AgriSakha", href: "/ecosystem/agrisakha", icon: MessageSquare },
  { label: "BhuNetra", href: "/ecosystem/bhunetra", icon: Layers },
  { label: "MandiSetu", href: "/ecosystem/mandisetu", icon: Store },
  { label: "DhanuShakti", href: "/ecosystem/dhanushakti", icon: Shield },
  { label: "KrishiSetu", href: "/ecosystem/krishisetu", icon: Truck },
  { label: "NitiBandhu", href: "/ecosystem/nitibandhu", icon: Landmark },
  { label: "KrishiKutumba", href: "/ecosystem/krishikutumba", icon: Users },
  { label: "Pulse360", href: "/pulse360", icon: ScanLine },
  { label: "All Features", href: "/features", icon: Sprout },
];

const topLinks = [
  { label: "SoilNet", href: "/soilnet", icon: FlaskConical },
  { label: "AgriVeda", href: "/agriveda", icon: Brain },
  { label: "About", href: "/about", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const { currentLanguage, setLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const langRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target as Node)) setEcosystemOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-surface shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/45 bg-gradient-to-br from-primary/25 via-background to-accent/25 p-1 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-1.5 shadow-[0_0_28px_-10px_hsl(var(--emerald-glow)/0.7)] transition-transform duration-300 group-hover:scale-105">
            <img src="/logo1.png" alt="CROPXON" className="h-full w-full rounded-xl object-contain" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold font-display text-gradient-primary leading-tight sm:text-lg">CROPXON</span>
            <span className="hidden text-[9px] text-muted-foreground leading-tight sm:block">By OriginX Labs Pvt. Ltd.</span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div ref={ecosystemRef} className="relative">
            <button
              onClick={() => setEcosystemOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Sprout size={14} />
              Ecosystem
              <ChevronDown size={14} className={`transition-transform ${ecosystemOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {ecosystemOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute left-0 top-full mt-3 w-64 glass-surface rounded-lg border border-border p-2 shadow-xl"
                >
                  {ecosystemLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setEcosystemOpen(false)}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <item.icon size={14} />
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {topLinks.map((link) => (
            <Link key={link.label} to={link.href} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
              <link.icon size={14} />
              {link.label}
            </Link>
          ))}

          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <Globe size={14} />
              {currentLanguage.short}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 top-full mt-2 w-40 glass-surface rounded-lg border border-border p-2 shadow-xl"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs rounded-md transition-colors ${
                        currentLanguage.code === l.code
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {l.short} - {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
            {isDark ? "Light" : "Dark"}
          </button>

          <Link
            to="/get-started"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald"
          >
            Get Started
          </Link>
        </div>

        <button className="text-foreground lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-surface border-t border-border lg:hidden"
        >
          <div className="flex flex-col gap-4 px-4 sm:px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ecosystem Menu</p>
            {ecosystemLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <item.icon size={14} />
                {item.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-border pt-4">
              {topLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <link.icon size={14} />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                  }}
                  className={`px-2 py-1 text-xs rounded border ${
                    currentLanguage.code === l.code
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            <Link
              to="/get-started"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
