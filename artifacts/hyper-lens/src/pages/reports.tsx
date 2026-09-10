import { useScans } from "@/lib/store";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Printer, Share2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Reports() {
  const { currentAnalysis } = useScans();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!currentAnalysis) {
      setLocation("/");
    }
  }, [currentAnalysis, setLocation]);

  if (!currentAnalysis) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl print:p-0 print:m-0 print:max-w-none">
      
      {/* Controls - Hidden in print */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link href="/results">
          <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Results</Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-mono"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
          <Button size="sm" className="font-mono bg-foreground" onClick={handlePrint}><Printer className="w-4 h-4 mr-2" /> Print / Save PDF</Button>
        </div>
      </div>

      {/* Official Document Style */}
      <div className="bg-white border border-thin border-border p-12 md:p-16 print:border-none print:p-4 shadow-sm">
        
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-foreground pb-8 mb-8">
          <div>
            <div className="font-sans font-bold text-3xl tracking-tighter uppercase mb-2">HYPER LENS</div>
            <div className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Automated Compliance Report</div>
          </div>
          <div className="text-right font-mono text-xs space-y-1">
            <div className="text-muted-foreground uppercase">Assessment ID</div>
            <div className="font-bold text-sm">{currentAnalysis.assessmentId}</div>
            <div className="text-muted-foreground uppercase mt-2">Date Generated</div>
            <div>{new Date(currentAnalysis.timestamp).toLocaleString()}</div>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Subject Artifact</h2>
          <p className="font-sans text-2xl font-bold uppercase">{currentAnalysis.productName}</p>
        </div>

        {/* Executive Summary */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 border border-thin border-border p-6 text-center flex flex-col justify-center bg-background">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Final Score</span>
            <span className={`font-sans text-5xl font-bold ${currentAnalysis.score < 60 ? 'text-destructive' : currentAnalysis.score < 90 ? 'text-warning' : 'text-foreground'}`}>
              {currentAnalysis.score}
            </span>
          </div>
          <div className="md:col-span-3 border border-thin border-border p-6 bg-background">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">System Summary</span>
            <p className="font-mono text-sm leading-relaxed">{currentAnalysis.summary}</p>
          </div>
        </div>

        {/* Details Table */}
        <div className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Detailed Findings</h2>
          <table className="w-full text-left border-collapse border border-thin border-border">
            <thead>
              <tr className="bg-background">
                <th className="border border-thin border-border p-3 font-mono text-xs uppercase tracking-wider w-1/4">Rule Requirement</th>
                <th className="border border-thin border-border p-3 font-mono text-xs uppercase tracking-wider w-1/4">Detected Value</th>
                <th className="border border-thin border-border p-3 font-mono text-xs uppercase tracking-wider w-1/4">Status</th>
                <th className="border border-thin border-border p-3 font-mono text-xs uppercase tracking-wider w-1/4">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {currentAnalysis.checks.map((check, i) => (
                <tr key={i}>
                  <td className="border border-thin border-border p-3 font-sans font-bold text-sm">{check.requirement}</td>
                  <td className="border border-thin border-border p-3 font-mono text-xs text-muted-foreground">{check.detectedValue || 'NULL'}</td>
                  <td className="border border-thin border-border p-3 font-mono text-xs uppercase font-bold">
                    <span className={check.status === 'compliant' ? 'text-success' : check.status === 'warning' ? 'text-warning' : 'text-destructive'}>
                      {check.status}
                    </span>
                  </td>
                  <td className="border border-thin border-border p-3 font-mono text-xs">{check.recommendation || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Legal */}
        <div className="mt-24 pt-8 border-t border-thin border-border">
          <p className="font-mono text-[10px] text-muted-foreground uppercase leading-relaxed text-justify">
            Disclaimer: This report is generated algorithmically by the Hyper Lens heuristic engine for preliminary assessment purposes. 
            It evaluates imagery against generalized Legal Metrology and FSSAI rulesets but does not account for all product-specific exemptions. 
            This document carries no legal authority and cannot replace certification by official regulatory bodies. 
            Confidence scores represent optical character recognition certainty, not legal validity.
          </p>
        </div>

      </div>
    </div>
  );
}
