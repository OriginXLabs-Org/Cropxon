import { Link, useParams } from "react-router-dom";
import { BookOpen, CloudDownload, Code2, MessageCircle, ShieldCheck, Home, Brain } from "lucide-react";
import { agrivedaModels, modelTagsById } from "@/data/agriveda";
import AppBreadcrumb from "@/components/AppBreadcrumb";

const AgriVedaModelPage = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const model = agrivedaModels.find((m) => m.id === modelId);

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
          <AppBreadcrumb
            items={[
              { label: "Home", href: "/", icon: Home },
              { label: "AgriVeda", href: "/agriveda", icon: Brain },
              { label: "Model Not Found", icon: Brain },
            ]}
          />
          <div className="mt-8 glass-surface rounded-xl p-8 text-center">
            <h1 className="text-2xl font-bold font-display text-foreground">Model not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
        <AppBreadcrumb
          items={[
            { label: "Home", href: "/", icon: Home },
            { label: "AgriVeda", href: "/agriveda", icon: Brain },
            { label: "Models", href: "/agriveda/models", icon: Brain },
            { label: model.repo, icon: Brain },
          ]}
        />

        <div className="glass-surface rounded-xl p-6">
          <p className="text-sm font-semibold text-primary">{model.emoji} {model.repo}</p>
          <h1 className="mt-2 text-3xl font-bold font-display text-foreground">{model.task}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{model.summary}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border p-3"><p className="text-xs text-accent">Base Architecture</p><p className="text-sm text-foreground">{model.baseModel}</p></div>
            <div className="rounded-lg border border-border p-3"><p className="text-xs text-accent">Fine-tuning</p><p className="text-sm text-foreground">{model.fineTuning}</p></div>
            <div className="rounded-lg border border-border p-3"><p className="text-xs text-accent">Developed Under</p><p className="text-sm text-foreground">{model.developedUnder}</p></div>
            <div className="rounded-lg border border-border p-3"><p className="text-xs text-accent">API Endpoint</p><p className="text-sm text-foreground">{model.apiEndpoint}</p></div>
          </div>
          <div className="mt-4 rounded-lg border border-border p-3">
            <p className="text-xs text-accent">Open-Source Foundation</p>
            <a href={model.openSourceSource.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary underline underline-offset-4">
              {model.openSourceSource.name}
            </a>
            {model.huggingFaceRef ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Hugging Face:{" "}
                <a href={model.huggingFaceRef.url} target="_blank" rel="noreferrer" className="font-medium text-primary underline underline-offset-4">
                  {model.huggingFaceRef.name}
                </a>
              </p>
            ) : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
            {model.cropTypes.map((crop) => (
              <span key={crop} className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                {crop}
              </span>
            ))}
            {(modelTagsById[model.id]?.domains ?? []).map((tag) => (
              <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                {tag}
              </span>
            ))}
            {(modelTagsById[model.id]?.ecosystemFit ?? []).map((fit) => (
              <span key={fit} className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-accent">
                {fit}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass-surface rounded-xl p-6">
            <h2 className="text-lg font-bold font-display text-foreground">Training Data</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {model.trainingData.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="glass-surface rounded-xl p-6">
            <h2 className="text-lg font-bold font-display text-foreground">Intended Use</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {model.intendedUse.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="glass-surface rounded-xl p-6">
            <h2 className="text-lg font-bold font-display text-foreground">Limitations</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {model.limitations.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <ShieldCheck size={16} />
              <h2 className="text-lg font-bold font-display text-foreground">Ethical Considerations</h2>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {model.ethicalConsiderations.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-8 glass-surface rounded-xl p-6">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Code2 size={16} />
            <h2 className="text-lg font-bold font-display text-foreground">Inference API</h2>
          </div>
          <pre className="overflow-x-auto rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
{model.apiSnippet}
          </pre>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="glass-surface rounded-xl p-6">
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <BookOpen size={16} />
              <h3 className="text-lg font-bold font-display text-foreground">Citation</h3>
            </div>
            <p className="text-sm text-muted-foreground">{model.citation}</p>
            <h4 className="mt-4 text-sm font-semibold text-foreground">Version History</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {model.versionHistory.map((v) => <li key={v}>• {v}</li>)}
            </ul>
          </div>
          <div className="glass-surface rounded-xl p-6">
            <div className="space-y-3">
              <a href={model.openSourceSource.url} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald">
                <CloudDownload size={16} /> {model.downloadLabel}
              </a>
              <Link to="/agriveda/api-docs" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary">
                <MessageCircle size={16} /> {model.communityLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriVedaModelPage;
