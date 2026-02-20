import { motion } from "framer-motion";
import { Smartphone, Mic, ScanLine, FlaskConical } from "lucide-react";

const screens = [
  {
    icon: <Mic size={20} />,
    title: "AgriSakha Android",
    desc: "Voice + chat advisory with multilingual crop guidance, now available in CropXon app experience.",
    platform: "Android",
    color: "from-primary to-emerald-glow",
  },
  {
    icon: <Mic size={20} />,
    title: "AgriSakha iOS",
    desc: "AgriSakha advisory interface optimized for iOS users with the same multilingual intelligence.",
    platform: "iOS",
    color: "from-accent to-gold-light",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "SoilNet Android",
    desc: "Capture instant 8-in-1 soil metrics and receive crop prediction, irrigation planning, and yield planning support integrated with AgriSakha.",
    platform: "Android",
    color: "from-accent to-gold-light",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "SoilNet iOS",
    desc: "Soil health workflows and advisory sync designed for iOS app users.",
    platform: "iOS",
    color: "from-primary to-emerald-glow",
  },
  {
    icon: <ScanLine size={20} />,
    title: "Pulse360 Android",
    desc: "Point your camera at any food item for quality, nutrition, and adulteration analysis. Android release coming soon.",
    platform: "Android",
    status: "Coming Soon",
    color: "from-primary to-emerald-glow",
  },
  {
    icon: <ScanLine size={20} />,
    title: "Pulse360 iOS",
    desc: "Pulse360 scanner and nutrition workflows for iOS users. iOS release coming soon.",
    platform: "iOS",
    status: "Coming Soon",
    color: "from-primary to-emerald-glow",
  },
];

const appSuites = [
  { name: "AgriSakha", android: "Available Soon", ios: "Available Soon" },
  { name: "SoilNet", android: "Available Soon", ios: "Available Soon" },
  { name: "Pulse360", android: "Coming Soon", ios: "Coming Soon" },
  { name: "KrishiSetu", android: "Available Soon", ios: "Available Soon" },
];

const qrData = encodeURIComponent("https://app.cropxon.com");
const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`;

const MobileAppShowcase = () => (
  <section className="overflow-hidden py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Smartphone size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.3em]">Mobile Experience</p>
        </div>
        <h2 className="text-2xl font-bold font-display text-foreground sm:text-3xl md:text-5xl">
          CROPXON in Your <span className="text-gradient-primary">Pocket</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          The full power of India's AI agriculture ecosystem, including AgriSakha, SoilNet, and Pulse360 experiences for both Android and iOS users.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {screens.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-48 sm:w-56 md:w-64">
              <div className="aspect-[9/18] rounded-[2rem] border-2 border-border bg-card overflow-hidden shadow-xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 pb-2 pt-3 sm:px-5">
                  <span className="text-[10px] text-muted-foreground">9:41</span>
                  <div className="h-5 w-16 rounded-full bg-background" />
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>
                {/* Screen content */}
                <div className="flex h-[calc(100%-2.5rem)] flex-col items-center justify-center px-3 py-6 text-center sm:px-4 sm:py-8">
                  <span className="mb-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{s.platform}</span>
                  <motion.div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-primary-foreground">{s.icon}</div>
                  </motion.div>
                  <h4 className="mt-4 text-xs font-bold font-display text-foreground sm:text-sm">{s.title}</h4>
                  <div className="mt-3 space-y-2 w-full">
                    {[1, 2, 3].map((n) => (
                      <motion.div
                        key={n}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + n * 8}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + n * 0.15, duration: 0.5 }}
                        className="mx-auto h-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/10"
                      />
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 w-full">
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="h-8 rounded bg-primary/10" />
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="h-8 rounded bg-accent/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-base font-bold font-display text-foreground sm:text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground text-center max-w-xs">{s.desc}</p>
            {s.status ? <p className="mt-2 text-xs font-semibold text-accent uppercase tracking-wide">{s.status}</p> : null}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid gap-6 lg:grid-cols-2"
      >
        <div className="glass-surface rounded-xl p-6">
          <h3 className="text-xl font-bold font-display text-foreground">App Downloads & Status</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Android and iOS distribution will be managed via <span className="text-primary font-semibold">app.cropxon.com</span>.
          </p>
          <div className="mt-4 space-y-3">
            {appSuites.map((app) => (
              <div key={app.name} className="rounded-lg border border-border p-3">
                <p className="text-sm font-semibold text-foreground">{app.name}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href="https://app.cropxon.com" target="_blank" rel="noreferrer" className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                    Android: {app.android}
                  </a>
                  <a href="https://app.cropxon.com" target="_blank" rel="noreferrer" className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground">
                    iOS: {app.ios}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-surface rounded-xl p-6">
          <h3 className="text-xl font-bold font-display text-foreground">Scan QR to Open app.cropxon.com</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Scanning either QR below redirects to <span className="text-primary font-semibold">https://app.cropxon.com</span>.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-3 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Play Store</p>
              <a href="https://app.cropxon.com" target="_blank" rel="noreferrer">
                <img src={qrImageUrl} alt="Cropxon Play Store QR" className="mx-auto mt-2 h-28 w-28 rounded-md border border-border sm:h-36 sm:w-36" />
              </a>
            </div>
            <div className="rounded-lg border border-border p-3 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">App Store</p>
              <a href="https://app.cropxon.com" target="_blank" rel="noreferrer">
                <img src={qrImageUrl} alt="Cropxon App Store QR" className="mx-auto mt-2 h-28 w-28 rounded-md border border-border sm:h-36 sm:w-36" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MobileAppShowcase;
