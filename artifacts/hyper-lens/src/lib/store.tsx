import { useState, useEffect, createContext, useContext } from 'react';
import { Analysis } from './types';

interface ScanContextType {
  analyses: Analysis[];
  currentAnalysis: Analysis | null;
  addAnalysis: (analysis: Analysis) => void;
  setCurrentAnalysis: (id: string) => void;
  clearHistory: () => void;
}

const ScanContext = createContext<ScanContextType | null>(null);

export function ScanProvider({ children }: { children: React.ReactNode }) {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [currentAnalysisId, setCurrentAnalysisId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('hyperlens_analyses');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnalyses(parsed);
        if (parsed.length > 0) {
          setCurrentAnalysisId(parsed[0].assessmentId);
        }
      } catch {
        console.error('Failed to parse stored analyses');
      }
    }
  }, []);

  const addAnalysis = (analysis: Analysis) => {
    setAnalyses((prev) => {
      const updated = [analysis, ...prev].slice(0, 50);
      localStorage.setItem('hyperlens_analyses', JSON.stringify(updated));
      return updated;
    });
    setCurrentAnalysisId(analysis.assessmentId);
  };

  const setCurrentAnalysis = (id: string) => {
    setCurrentAnalysisId(id);
  };

  const clearHistory = () => {
    setAnalyses([]);
    setCurrentAnalysisId(null);
    localStorage.removeItem('hyperlens_analyses');
  };

  const currentAnalysis =
    analyses.find((analysis) => analysis.assessmentId === currentAnalysisId) ||
    null;

  return (
    <ScanContext.Provider
      value={{
        analyses,
        currentAnalysis,
        addAnalysis,
        setCurrentAnalysis,
        clearHistory,
      }}
    >
      {children}
    </ScanContext.Provider>
  );
}

export function useScans() {
  const context = useContext(ScanContext);
  if (!context) {
    throw new Error('useScans must be used within a ScanProvider');
  }
  return context;
}