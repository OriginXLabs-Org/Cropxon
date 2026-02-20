import { Link } from "react-router-dom";
import { Sprout, Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/45 bg-gradient-to-br from-primary/25 via-background to-accent/25 p-1 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-1.5 shadow-[0_0_28px_-10px_hsl(var(--emerald-glow)/0.7)] transition-transform duration-300 group-hover:scale-105">
              <img src="/logo1.png" alt="CROPXON" className="h-full w-full rounded-xl object-contain" />
            </span>
            <div>
              <span className="text-base font-bold font-display text-gradient-primary sm:text-lg">CROPXON</span>
              <p className="text-[9px] text-muted-foreground sm:text-[10px]">By OriginX Labs Pvt. Ltd.</p>
              <p className="text-[9px] text-muted-foreground sm:text-[10px]">From Soil to Soul 🌱</p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/ecosystem" className="inline-flex items-center gap-1 hover:text-primary transition-colors"><Sprout size={12} />Ecosystem</Link>
            <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
            <Link to="/agriveda" className="inline-flex items-center gap-1 hover:text-primary transition-colors"><Brain size={12} />AgriVeda</Link>
            <Link to="/pulse360" className="hover:text-primary transition-colors">Pulse360</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-8 line-glow" />

        <div className="mt-6 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <p>Powered by OriginX Labs Pvt. Ltd.</p>
          <p>© 2026 CROPXON. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Investor Deck</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
