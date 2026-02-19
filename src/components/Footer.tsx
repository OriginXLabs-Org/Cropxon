import { Link } from "react-router-dom";
import { Sprout, Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo1.png" alt="CROPXON" className="h-10 w-10 rounded-full object-cover border border-primary/30" />
            <div>
              <span className="text-lg font-bold font-display text-gradient-primary">CROPXON</span>
              <p className="text-[9px] text-muted-foreground">By OriginX Labs Pvt. Ltd.</p>
              <p className="text-[9px] text-muted-foreground">From Soil to Soul 🌱</p>
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
