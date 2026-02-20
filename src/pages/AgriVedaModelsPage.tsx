import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Filter, Home } from "lucide-react";
import { agrivedaModels, cropxonEightFeatures, huggingFaceDiscovery, modelTagsById } from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaModelsPage = () => {
  const [query, setQuery] = useState("");
  const [taskType, setTaskType] = useState("All");
  const [cropType, setCropType] = useState("All");
  const [language, setLanguage] = useState("All");
  const [ecosystemFit, setEcosystemFit] = useState("All");
  const [edgeOnly, setEdgeOnly] = useState(false);
  const [satelliteOnly, setSatelliteOnly] = useState(false);

  const taskTypes = useMemo(
    () => ["All", ...Array.from(new Set(agrivedaModels.map((model) => model.taskType)))],
    [],
  );
  const cropTypes = useMemo(
    () => ["All", ...Array.from(new Set(agrivedaModels.flatMap((model) => model.cropTypes))).sort()],
    [],
  );
  const languages = useMemo(
    () => ["All", ...Array.from(new Set(agrivedaModels.flatMap((model) => model.languages))).sort()],
    [],
  );
  const ecosystemFits = useMemo(
    () =>
      [
        "All",
        ...Array.from(
          new Set(
            agrivedaModels.flatMap((model) => modelTagsById[model.id]?.ecosystemFit ?? []),
          ),
        ).sort(),
      ],
    [],
  );

  const filteredModels = useMemo(
    () =>
      agrivedaModels.filter((model) => {
        const searchableText = [
          model.repo,
          model.task,
          model.summary,
          model.taskType,
          model.cropTypes.join(" "),
          model.languages.join(" "),
          (modelTagsById[model.id]?.domains ?? []).join(" "),
          (modelTagsById[model.id]?.ecosystemFit ?? []).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        const matchesQuery =
          query.trim().length === 0 ||
          searchableText.includes(query.toLowerCase());
        const matchesTask = taskType === "All" || model.taskType === taskType;
        const matchesCrop = cropType === "All" || model.cropTypes.includes(cropType);
        const matchesLanguage = language === "All" || model.languages.includes(language);
        const matchesEcosystem =
          ecosystemFit === "All" || (modelTagsById[model.id]?.ecosystemFit ?? []).includes(ecosystemFit);
        const matchesEdge = !edgeOnly || model.edgeCompatible;
        const matchesSatellite = !satelliteOnly || model.satellite;
        return matchesQuery && matchesTask && matchesCrop && matchesLanguage && matchesEcosystem && matchesEdge && matchesSatellite;
      }),
    [query, taskType, cropType, language, ecosystemFit, edgeOnly, satelliteOnly],
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/", icon: Home },
            { label: "AgriVeda", href: "/agriveda", icon: Brain },
            { label: "Browse Models", icon: Brain },
          ]}
        />

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Brain size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">Cropxon AgriVeda</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground">Browse Models</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            The one and only AgriVeda catalog for Cropxon fine-tuned agriculture, food, flowers, soil health, scheme intelligence, nutrition, and humanity-focused AI model workloads.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {cropxonEightFeatures.map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wider text-accent">Hugging Face References</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {huggingFaceDiscovery.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] text-primary hover:bg-primary/15">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="sticky top-24 glass-surface rounded-xl p-5">
              <div className="inline-flex items-center gap-2 text-primary mb-3">
                <Filter size={16} />
                <p className="text-sm font-semibold">Model Filters</p>
              </div>
              <div className="space-y-3">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search models..."
                  className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1"
                />
                <select value={taskType} onChange={(event) => setTaskType(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
                  {taskTypes.map((item) => <option key={item}>{item}</option>)}
                </select>
                <select value={cropType} onChange={(event) => setCropType(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
                  {cropTypes.map((item) => <option key={item}>{item}</option>)}
                </select>
                <select value={language} onChange={(event) => setLanguage(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
                  {languages.map((item) => <option key={item}>{item}</option>)}
                </select>
                <select value={ecosystemFit} onChange={(event) => setEcosystemFit(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
                  {ecosystemFits.map((item) => <option key={item}>{item}</option>)}
                </select>
                <label className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-foreground">
                  <input type="checkbox" checked={edgeOnly} onChange={(event) => setEdgeOnly(event.target.checked)} />
                  Edge Compatible only
                </label>
                <label className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-foreground">
                  <input type="checkbox" checked={satelliteOnly} onChange={(event) => setSatelliteOnly(event.target.checked)} />
                  Satellite models only
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="mb-4 text-sm text-muted-foreground">Showing {filteredModels.length} models</p>
            <div className="grid gap-5 md:grid-cols-2">
              {filteredModels.map((model) => (
                <Link key={model.id} to={`/agriveda/models/${model.id}`} className="group rounded-lg border border-border p-5 transition-all hover:border-primary/40 hover:glow-emerald">
                  <p className="text-sm font-semibold text-primary">{model.emoji} {model.repo}</p>
                  <p className="mt-1 text-xs text-accent">{model.task}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{model.summary}</p>
                  <p className="mt-3 text-xs text-muted-foreground">Base: {model.baseModel}</p>
                  {model.huggingFaceRef ? (
                    <p className="mt-2 text-[11px] font-medium text-primary">HF Ref: {model.huggingFaceRef.name}</p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                    {model.cropTypes.slice(0, 3).map((crop) => (
                      <span key={crop} className="rounded-full border border-border/70 bg-card px-2 py-0.5 text-muted-foreground">
                        {crop}
                      </span>
                    ))}
                    {(modelTagsById[model.id]?.domains ?? []).map((tag) => (
                      <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                        {tag}
                      </span>
                    ))}
                    {(modelTagsById[model.id]?.ecosystemFit ?? []).slice(0, 2).map((fit) => (
                      <span key={fit} className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                        {fit}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriVedaModelsPage;
