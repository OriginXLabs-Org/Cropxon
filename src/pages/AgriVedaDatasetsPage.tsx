import { useMemo, useState } from "react";
import { Database, Brain, Home } from "lucide-react";
import { agrivedaDatasets, cropxonEightFeatures, datasetTagsByName } from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaDatasetsPage = () => {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("All");
  const [cropType, setCropType] = useState("All");
  const [ecosystemFit, setEcosystemFit] = useState("All");

  const domainOptions = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(agrivedaDatasets.flatMap((item) => datasetTagsByName[item.name]?.domains ?? [])),
      ).sort(),
    ],
    [],
  );

  const cropOptions = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(agrivedaDatasets.flatMap((item) => datasetTagsByName[item.name]?.cropTypes ?? [])),
      ).sort(),
    ],
    [],
  );

  const ecosystemOptions = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(agrivedaDatasets.flatMap((item) => datasetTagsByName[item.name]?.ecosystemFit ?? [])),
      ).sort(),
    ],
    [],
  );

  const filteredDatasets = useMemo(
    () =>
      agrivedaDatasets.filter((dataset) => {
        const tags = datasetTagsByName[dataset.name];
        const searchableText = [
          dataset.name,
          dataset.details,
          dataset.source,
          ...(tags?.domains ?? []),
          ...(tags?.cropTypes ?? []),
          ...(tags?.ecosystemFit ?? []),
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery = query.trim().length === 0 || searchableText.includes(query.toLowerCase());
        const matchesDomain = domain === "All" || (tags?.domains ?? []).includes(domain);
        const matchesCrop = cropType === "All" || (tags?.cropTypes ?? []).includes(cropType);
        const matchesEcosystem = ecosystemFit === "All" || (tags?.ecosystemFit ?? []).includes(ecosystemFit);
        return matchesQuery && matchesDomain && matchesCrop && matchesEcosystem;
      }),
    [query, domain, cropType, ecosystemFit],
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/", icon: Home },
            { label: "AgriVeda", href: "/agriveda", icon: Brain },
            { label: "Datasets", icon: Database },
          ]}
        />

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Database size={18} />
            <p className="text-sm font-medium uppercase tracking-[0.2em]">Cropxon AgriVeda DataLake</p>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground">Explore Datasets</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Public open-source data foundations and Cropxon domain adaptation datasets for agriculture AI. This is the canonical and one-stop catalog for AgriVeda fine-tuning, evaluation, and deployment.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {cropxonEightFeatures.map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-medium text-primary">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-3 md:grid-cols-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search datasets..."
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1"
          />
          <select value={domain} onChange={(event) => setDomain(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
            {domainOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={cropType} onChange={(event) => setCropType(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
            {cropOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={ecosystemFit} onChange={(event) => setEcosystemFit(event.target.value)} className="w-full rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground outline-none ring-primary/40 focus:ring-1">
            {ecosystemOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredDatasets.map((dataset) => (
            <div key={dataset.name} className="rounded-lg border border-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground">📁 {dataset.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{dataset.details}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                {(datasetTagsByName[dataset.name]?.domains ?? []).map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                    {tag}
                  </span>
                ))}
                {(datasetTagsByName[dataset.name]?.cropTypes ?? []).slice(0, 2).map((crop) => (
                  <span key={crop} className="rounded-full border border-border/70 bg-background px-2 py-0.5 text-muted-foreground">
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
    </div>
  );
};

export default AgriVedaDatasetsPage;
