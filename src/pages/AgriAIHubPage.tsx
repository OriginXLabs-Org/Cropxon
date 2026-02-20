import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Database, Filter, PlayCircle, BookOpen, Code2, Home } from "lucide-react";
import { useMemo, useState } from "react";
import {
  agrivedaDatasets,
  agrivedaModels,
  agrivedaPillars,
  cropxonEightFeatures,
  datasetTagsByName,
  huggingFaceDiscovery,
  modelTagsById,
} from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaPage = () => {
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
        <AppBreadcrumb items={[{ label: "Home", href: "/", icon: Home }, { label: "AgriVeda", icon: Brain }]} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Brain size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.3em]">AI Model & Data Hub for Agriculture</p>
          </div>
          <h1 className="text-3xl font-bold font-display sm:text-4xl md:text-6xl">
            <span className="text-gradient-primary">Cropxon AgriVeda</span>
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-lg text-muted-foreground">
            Built under Cropxon, a product of OriginX Labs Private Limited. Fine-tuned from leading open-source architectures and enhanced with proprietary agricultural datasets.
          </p>
          <p className="mt-3 text-sm text-accent font-medium">Where Agricultural Intelligence Grows.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Agentic AgTech SaaS for a futuristic, sustainable Agriculture + Food + Humanity ecosystem.
          </p>
          <div className="mx-auto mt-3 flex max-w-4xl flex-wrap items-center justify-center gap-2">
            {cropxonEightFeatures.map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/agriveda/models" className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">Browse Models</Link>
            <Link to="/agriveda/datasets" className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary">Explore Datasets</Link>
            <Link to="/agriveda/playground" className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary">Try Playground</Link>
            <Link to="/agriveda/api-docs" className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary">API Docs</Link>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
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
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setTaskType("All");
                    setCropType("All");
                    setLanguage("All");
                    setEcosystemFit("All");
                    setEdgeOnly(false);
                    setSatelliteOnly(false);
                  }}
                  className="w-full rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <div className="glass-surface rounded-xl p-6">
              <h2 className="text-xl font-bold font-display text-foreground">Platform Identity</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wider text-accent">Platform Name</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Cropxon AgriVeda</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wider text-accent">Meaning</p>
                  <p className="mt-1 text-sm text-muted-foreground">Agri = Agriculture, Veda = Knowledge, AgriVeda = Agricultural Intelligence Engine.</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wider text-accent">Platform Positioning</p>
                  <p className="mt-1 text-sm text-muted-foreground">The one and only CropXon destination for fine-tuned agriculture models, datasets, and cloud-assisted playground experiences.</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs uppercase tracking-wider text-accent">Company</p>
                  <p className="mt-1 text-sm text-muted-foreground">Product of OriginX Labs Private Limited under the CropXon platform.</p>
                </div>
              </div>
            </div>

            <div className="glass-surface rounded-xl p-6">
              <h2 className="text-xl font-bold font-display text-foreground">Architecture Overview</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {agrivedaPillars.map((pillar) => (
                  <div key={pillar.category} className="rounded-lg border border-border p-4">
                    <p className="text-sm font-semibold text-foreground">{pillar.emoji} {pillar.category}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pillar.purpose}</p>
                    <p className="mt-2 text-xs text-accent font-medium">Model: {pillar.model}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-surface rounded-xl p-6">
              <h2 className="text-xl font-bold font-display text-foreground">Hugging Face Reference Models</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Curated open models used as reference baselines for Cropxon fine-tuning in AgriVeda.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {huggingFaceDiscovery.map((item) => (
                  <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40">
                    <p className="text-sm font-semibold text-primary">{item.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.focus}</p>
                  </a>
                ))}
              </div>
            </div>

            <div id="models" className="glass-surface rounded-xl p-6">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Brain size={18} />
                <h2 className="text-xl font-bold font-display text-foreground">Cropxon Model Hub</h2>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">Showing {filteredModels.length} models across crop disease prediction, speech, pests, floriculture, foods, soils, geo-monitoring, and technical agri LLM workloads.</p>
              <div className="grid gap-5 md:grid-cols-2">
                {filteredModels.map((model) => (
                  <Link key={model.id} to={`/agriveda/models/${model.id}`} className="group rounded-lg border border-border p-5 transition-all hover:border-primary/40 hover:glow-emerald">
                    <p className="text-sm font-semibold text-primary">{model.emoji} {model.repo}</p>
                    <p className="mt-1 text-xs text-accent">{model.task}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{model.summary}</p>
                    <p className="mt-3 text-xs text-muted-foreground">Base: {model.baseModel}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
                      <span className="rounded-full border border-border px-2 py-0.5">{model.taskType}</span>
                      <span className="rounded-full border border-border px-2 py-0.5">{model.edgeCompatible ? "Edge" : "Cloud"}</span>
                      <span className="rounded-full border border-border px-2 py-0.5">{model.satellite ? "Satellite" : "Ground"}</span>
                    </div>
                    {model.huggingFaceRef ? (
                      <p className="mt-2 text-[11px] font-medium text-primary">HF Ref: {model.huggingFaceRef.name}</p>
                    ) : null}
                    <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
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
              {filteredModels.length === 0 && (
                <div className="mt-4 rounded-lg border border-border p-4 text-sm text-muted-foreground">
                  No models matched your filters. Try broadening task, crop, or language options.
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="datasets" className="mt-10 glass-surface rounded-xl p-6">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Database size={18} />
            <h2 className="text-xl font-bold font-display text-foreground">Cropxon DataLake (Dataset Hub)</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {agrivedaDatasets.map((dataset) => (
              <div key={dataset.name} className="rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground">📁 {dataset.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{dataset.details}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                  {(datasetTagsByName[dataset.name]?.domains ?? []).map((tag) => (
                    <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                      {tag}
                    </span>
                  ))}
                  {(datasetTagsByName[dataset.name]?.cropTypes ?? []).slice(0, 2).map((crop) => (
                    <span key={crop} className="rounded-full border border-border/70 bg-card px-2 py-0.5 text-muted-foreground">
                      {crop}
                    </span>
                  ))}
                  {(datasetTagsByName[dataset.name]?.ecosystemFit ?? []).slice(0, 2).map((fit) => (
                    <span key={fit} className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                      {fit}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-accent">Open source base: {dataset.source}</p>
                <a href={dataset.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-xs font-medium text-primary underline underline-offset-4">
                  Source reference
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="playground" className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <PlayCircle size={18} />
              <h3 className="text-lg font-bold font-display text-foreground">Try Playground (Powered by CropXon Cloud)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Snap & Solve pipeline: user uploads crop image, LeafGuard detects disease, AgriLLM generates treatment plan, and marketplace APIs suggest nearby supply options.
            </p>
              <div className="mt-4 rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
                Cloud inference path: Upload image/audio/text -&gt; CropXon Cloud router -&gt; Model gateway -&gt; Advisory response.
              </div>
          </div>
          <div id="api-docs" className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <Code2 size={18} />
              <h3 className="text-lg font-bold font-display text-foreground">API Docs</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Backend: FastAPI, TorchServe, Triton Inference Server. Storage: S3-compatible object storage, PostgreSQL metadata, FAISS/Weaviate. Training: PyTorch, HuggingFace Transformers, PEFT (LoRA).
            </p>
            <div className="mt-4 space-y-2 rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
              {agrivedaModels.slice(0, 4).map((model) => (
                <p key={model.id}><span className="text-foreground">{model.repo}</span>: {model.apiEndpoint}</p>
              ))}
              <p className="pt-1 text-accent">Audience-ready APIs for farmers, government programs, agri institutions, and developers.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 glass-surface rounded-xl p-6">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <BookOpen size={18} />
            <h3 className="text-lg font-bold font-display text-foreground">Open-Source Foundations + Cropxon Fine-Tuning</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            AgriVeda builds from open model ecosystems and public agricultural datasets, then fine-tunes them under Cropxon for regionally adapted, production-ready usage.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• Open foundations: YOLO, Llama, SegFormer, LLaVA, Whisper.</li>
            <li>• Agricultural data roots: PlantVillage, IP102, BigEarthNet, SoilGrids, AGROVOC, Food-101, Oxford Flowers 102, Common Voice, and FAOSTAT.</li>
            <li>• Cropxon layer: localization, multilingual adaptation, domain safety checks, and API packaging for public and private deployments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgriVedaPage;
