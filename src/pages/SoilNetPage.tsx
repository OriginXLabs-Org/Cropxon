import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  FlaskConical,
  Smartphone,
  Sprout,
  CloudSun,
  Droplets,
  TrendingUp,
  Leaf,
  CheckCircle2,
  Thermometer,
  Wifi,
  Beaker,
  HandCoins,
  Shield,
  Clock3,
} from "lucide-react";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const capabilities = [
  {
    icon: <FlaskConical size={20} />,
    title: "8-in-1 Soil Sensor",
    desc: "Instant capture of key soil health parameters to reduce guesswork and improve agronomy decisions.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Android First Experience",
    desc: "Farmers get real-time, easy-to-read SoilNet metrics directly on mobile with field-ready usability.",
  },
  {
    icon: <Sprout size={20} />,
    title: "Crop Prediction Intelligence",
    desc: "Soil indicators are mapped to crop suitability recommendations for season-wise planning.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Irrigation Planning",
    desc: "Actionable irrigation scheduling suggestions based on soil moisture behavior and local patterns.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Yield Planning",
    desc: "Field-level forecasting support to align input strategy and expected production outcomes.",
  },
  {
    icon: <CloudSun size={20} />,
    title: "Weather & Climate Layer",
    desc: "Built-in weather and climate context to strengthen soil-led crop and risk planning decisions.",
  },
  {
    icon: <Leaf size={20} />,
    title: "CO2 Credit Insights",
    desc: "Sustainability-linked insights to help farmers and partners prepare for carbon-linked opportunities.",
  },
];

const solutionComponents = [
  {
    component: "Scientific Soil Testing (IoT-enabled)",
    whatWeDo:
      "Use IoT-enabled soil testing tools along with laboratory analysis to measure key soil health parameters accurately.",
    benefitTitle: "Scientific Insight",
    benefitText: "Reliable soil data that replaces guesswork.",
  },
  {
    component: "Farmer-Friendly Soil Health Reports",
    whatWeDo:
      "Convert complex soil test results into simple, easy-to-understand reports using clear indicators (Low / Medium / High).",
    benefitTitle: "Simplified Data",
    benefitText: "Understand soil condition without technical knowledge.",
  },
  {
    component: "Crop-Specific Recommendations",
    whatWeDo:
      "Provide customized fertilizer and nutrient recommendations based on soil condition, crop type, and local practices.",
    benefitTitle: "Cost Reduction",
    benefitText: "Right input, right quantity, right time — better yield.",
  },
  {
    component: "Digital Access via CROPXON Platform",
    whatWeDo:
      "Offer digital access to soil reports and advisory through the CROPXON platform for easy storage and reference.",
    benefitTitle: "Easy Access",
    benefitText: "Track soil health history and access reports anytime.",
  },
  {
    component: "Expert Support & Advisory",
    whatWeDo:
      "Agronomy experts guide farmers to correctly implement recommendations at critical crop stages.",
    benefitTitle: "Expert Guidance",
    benefitText: "Timely decisions, reduced risk, and improved performance.",
  },
];

const sensorMetrics = [
  { label: "Temperature", icon: <Thermometer size={16} />, tone: "from-emerald-500/20 to-emerald-300/10" },
  { label: "Moisture", icon: <Droplets size={16} />, tone: "from-sky-500/20 to-sky-300/10" },
  { label: "EC", icon: <Wifi size={16} />, tone: "from-indigo-500/20 to-indigo-300/10" },
  { label: "pH", icon: <Beaker size={16} />, tone: "from-amber-500/20 to-amber-300/10" },
  { label: "Nitrogen (N)", icon: <Sprout size={16} />, tone: "from-fuchsia-500/20 to-fuchsia-300/10" },
  { label: "Phosphorus (P)", icon: <Leaf size={16} />, tone: "from-cyan-500/20 to-cyan-300/10" },
  { label: "Potassium (K)", icon: <FlaskConical size={16} />, tone: "from-lime-500/20 to-lime-300/10" },
  { label: "Fertility", icon: <TrendingUp size={16} />, tone: "from-rose-500/20 to-rose-300/10" },
];

const rentalPlans = [
  {
    title: "Daily Rental",
    value: "Discounted",
    note: "Available for any farmer with flexible day-wise booking.",
  },
  {
    title: "Weekly Rental",
    value: "Best Value",
    note: "Lower effective cost with advisory support and report access.",
  },
  {
    title: "Season Package",
    value: "Farmer Priority",
    note: "Ideal for crop-cycle planning with recurring tests and guidance.",
  },
];

const SoilNetPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
      <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "SoilNet", icon: FlaskConical }]} />

      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <FlaskConical size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">CROPXON Soil Intelligence</p>
          </div>
          <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl">
            <span className="text-gradient-primary">CROPXON SoilNet</span>
          </h1>
          <p className="mt-2 text-xl text-accent font-medium">8-in-1 Soil Health Analysis + Android Experience</p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            SoilNet delivers instant soil health metrics, supports crop prediction, integrates with AgriSakha,
            enables irrigation and yield planning, and adds weather, climate, and CO2 credits intelligence in one
            unified CROPXON workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/features"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald"
            >
              Explore All Features
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Request SoilNet Demo
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
          <img src="/image1.jpg" alt="LABART 8-in-1 Soil Tester in field setup" className="w-full max-w-md mx-auto rounded-2xl" />
        </motion.div>
      </div>

      <div className="mt-20 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-card/80 to-accent/10 p-1">
        <div className="rounded-xl glass-surface p-6 md:p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">SoilNet Device Offering</p>
            <h2 className="mt-3 text-2xl font-bold font-display md:text-4xl text-foreground">
              LABART Professional <span className="text-gradient-primary">8 in 1 Soil Tester</span>
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-muted-foreground">
              Temperature, Moisture, EC, pH, NPK and Fertility sensing with Portable USB Type-C support,
              integrated into CROPXON advisory workflows for every farmer.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-border/70 bg-card/70">
                  <img src="/image1.jpg" alt="LABART 8 in 1 Soil Tester showcase" className="h-56 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl border border-border/70 bg-card/70">
                  <img src="/image2.jpg" alt="Soil sensor parameters and mobile app interface" className="h-56 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl border border-border/70 bg-card/70">
                  <img src="/image3.png" alt="Wireless soil sensor deployment with real-time dashboard" className="h-56 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl border border-border/70 bg-card/70">
                  <img src="/image4.jpg" alt="Monitoring units at different depths in connected farm" className="h-56 w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
              <h3 className="text-lg font-bold font-display text-foreground">Farmer Rental Availability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We are renting 8-in-1 Soil Sensors at discounted pricing and making it available to any farmer.
              </p>
              <div className="mt-4 space-y-3">
                {rentalPlans.map((plan) => (
                  <div key={plan.title} className="rounded-lg border border-primary/25 bg-card/70 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">{plan.title}</p>
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-semibold text-primary">{plan.value}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{plan.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground"><HandCoins size={14} className="text-primary" /> Discounted farmer pricing</div>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground"><Shield size={14} className="text-primary" /> Reliable and portable hardware</div>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground"><Clock3 size={14} className="text-primary" /> Instant readings and reports</div>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald"
              >
                Book Soil Sensor Rental
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sensorMetrics.map((metric) => (
              <div key={metric.label} className={`rounded-lg border border-border/70 bg-gradient-to-br ${metric.tone} p-3`}>
                <div className="inline-flex items-center gap-2 text-foreground">
                  <span className="text-primary">{metric.icon}</span>
                  <span className="text-sm font-semibold">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold font-display text-foreground mb-10">
          SoilNet Capabilities for <span className="text-gradient-gold">CROPXON Farmers</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-surface rounded-xl p-6"
            >
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold font-display text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">Solution Components</p>
          <h2 className="mt-3 text-3xl font-bold font-display md:text-5xl text-foreground">
            From Soil Data to <span className="text-gradient-primary">Farmer Outcomes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-1 lg:block"
        >
          <div className="overflow-x-auto rounded-xl glass-surface">
            <table className="w-full text-left">
              <thead className="bg-card/80">
                <tr>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.2em] text-accent">Solution Component</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.2em] text-accent">What We Do</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.2em] text-accent">Farmer Benefit</th>
                </tr>
              </thead>
              <tbody>
                {solutionComponents.map((item) => (
                  <tr key={item.component} className="border-t border-border/70 align-top">
                    <td className="px-6 py-5 text-base font-bold font-display text-foreground">{item.component}</td>
                    <td className="px-6 py-5 text-sm leading-relaxed text-muted-foreground">{item.whatWeDo}</td>
                    <td className="px-6 py-5">
                      <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                        <div className="inline-flex items-center gap-2 text-primary">
                          <CheckCircle2 size={16} />
                          <span className="text-sm font-semibold">{item.benefitTitle}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.benefitText}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-10 space-y-5 lg:hidden">
          {solutionComponents.map((item, i) => (
            <motion.div
              key={item.component}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-1"
            >
              <div className="rounded-xl glass-surface p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Solution Component</p>
                <h3 className="mt-2 text-lg font-bold font-display text-foreground">{item.component}</h3>

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent">What We Do</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.whatWeDo}</p>

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent">Farmer Benefit</p>
                <div className="mt-2 rounded-lg border border-primary/30 bg-primary/10 p-3">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <CheckCircle2 size={16} />
                    <span className="text-sm font-semibold">{item.benefitTitle}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.benefitText}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SoilNetPage;
