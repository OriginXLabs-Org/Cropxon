import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import EcosystemPage from "./pages/EcosystemPage";
import FeaturesPage from "./pages/FeaturesPage";
import SoilNetPage from "./pages/SoilNetPage";
import EcosystemModulePage from "./pages/EcosystemModulePage";
import Pulse360Page from "./pages/Pulse360Page";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GetStartedPage from "./pages/GetStartedPage";
import AgriAIHubPage from "./pages/AgriAIHubPage";
import AgriVedaModelPage from "./pages/AgriVedaModelPage";
import AgriVedaModelsPage from "./pages/AgriVedaModelsPage";
import AgriVedaDatasetsPage from "./pages/AgriVedaDatasetsPage";
import AgriVedaPlaygroundPage from "./pages/AgriVedaPlaygroundPage";
import AgriVedaApiDocsPage from "./pages/AgriVedaApiDocsPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BhumitraAssistant from "./components/BhumitraAssistant";

const queryClient = new QueryClient();

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ecosystem" element={<PageLayout><EcosystemPage /></PageLayout>} />
              <Route path="/ecosystem/:moduleId" element={<PageLayout><EcosystemModulePage /></PageLayout>} />
              <Route path="/soilnet" element={<PageLayout><SoilNetPage /></PageLayout>} />
              <Route path="/features" element={<PageLayout><FeaturesPage /></PageLayout>} />
              <Route path="/pulse360" element={<PageLayout><Pulse360Page /></PageLayout>} />
              <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
              <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
              <Route path="/get-started" element={<PageLayout><GetStartedPage /></PageLayout>} />
              <Route path="/agriveda" element={<PageLayout><AgriAIHubPage /></PageLayout>} />
              <Route path="/agriveda/models" element={<PageLayout><AgriVedaModelsPage /></PageLayout>} />
              <Route path="/agriveda/models/:modelId" element={<PageLayout><AgriVedaModelPage /></PageLayout>} />
              <Route path="/agriveda/datasets" element={<PageLayout><AgriVedaDatasetsPage /></PageLayout>} />
              <Route path="/agriveda/playground" element={<PageLayout><AgriVedaPlaygroundPage /></PageLayout>} />
              <Route path="/agriveda/api-docs" element={<PageLayout><AgriVedaApiDocsPage /></PageLayout>} />
              <Route path="/agri-ai-hub" element={<Navigate to="/agriveda" replace />} />
              <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
            </Routes>
            <BhumitraAssistant />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
