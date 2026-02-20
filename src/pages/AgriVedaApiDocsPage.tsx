import { Code2, Brain, Home } from "lucide-react";
import { agrivedaModels } from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaApiDocsPage = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
      <AppBreadcrumb
        items={[
          { label: "Home", href: "/", icon: Home },
          { label: "AgriVeda", href: "/agriveda", icon: Brain },
          { label: "API Docs", icon: Code2 },
        ]}
      />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-primary mb-3">
          <Code2 size={18} />
          <p className="text-sm font-medium uppercase tracking-[0.2em]">Agentic AgTech SaaS APIs</p>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground">API Docs</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Production-ready endpoints for farmers, government programs, agri-enterprises, and developer teams. Powered by CropXon Cloud and managed under Cropxon AgriVeda.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 mb-6">
        <h2 className="text-lg font-bold font-display text-foreground">Base Stack</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          FastAPI, TorchServe, Triton Inference Server, S3-compatible object storage, PostgreSQL metadata, and vector indexing via FAISS/Weaviate.
        </p>
      </div>

      <div className="space-y-4">
        {agrivedaModels.map((model) => (
          <div key={model.id} className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm font-semibold text-primary">{model.emoji} {model.repo}</p>
            <p className="mt-1 text-xs text-accent">{model.task}</p>
            <p className="mt-2 text-sm text-muted-foreground">{model.apiEndpoint}</p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-background p-4 text-xs text-muted-foreground">
{model.apiSnippet}
            </pre>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AgriVedaApiDocsPage;
