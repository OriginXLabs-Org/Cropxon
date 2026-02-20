import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home, Brain, Sprout } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <AlertTriangle size={26} />
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">Cropxon 404</p>
          <h1 className="mt-3 text-3xl font-bold font-display text-foreground sm:text-4xl md:text-5xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            This route does not exist in the CropXon ecosystem. Explore AgriVeda, ecosystem modules, or return to the home platform.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Requested path: <span className="font-medium text-foreground">{location.pathname}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">
              <Home size={16} /> Go to Home
            </Link>
            <Link to="/agriveda" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              <Brain size={16} /> Explore AgriVeda
            </Link>
            <Link to="/ecosystem" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              <Sprout size={16} /> Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
