import { Link } from "wouter";
import { DEMO_PRODUCTS } from "@/lib/engine";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight } from "lucide-react";
import { useScans } from "@/lib/store";
import { useLocation } from "wouter";
import { ComplianceEngine } from "@/lib/engine";

export default function DemoSelector() {
  const { addAnalysis } = useScans();
  const [, setLocation] = useLocation();

  const runDemo = (productId: string) => {
    const product = DEMO_PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // Create a mock image visual for the demo
    const mockImage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f4f4f0"/><text x="200" y="200" font-family="sans-serif" font-size="24" text-anchor="middle" fill="%23111">${product.name}</text></svg>`;

    const analysis = ComplianceEngine.analyze(
      product.name,
      mockImage,
      product.mockExtractedFields as Record<string, string>
    );
    
    addAnalysis(analysis);
    setLocation(`/results`);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
          Select Demo Case
        </h1>
        <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
          Choose a pre-configured packaging scenario to test the extraction and rules engine immediately without uploading.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DEMO_PRODUCTS.map((product) => {
          const calculatedScore = ComplianceEngine.analyze(
            product.name,
            "",
            product.mockExtractedFields as Record<string, string>,
          ).score;
          return (
          <Card key={product.id} className="border-thin rounded-none overflow-hidden hover:border-foreground transition-colors group flex flex-col cursor-pointer" onClick={() => runDemo(product.id)}>
            <div className={`h-48 w-full ${product.imageColor} flex items-center justify-center border-b border-thin border-border transition-transform group-hover:scale-[1.02] duration-500`}>
              <Package className="w-16 h-16 opacity-50" />
            </div>
            
            <div className="p-6 flex flex-col flex-1 bg-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-sans text-xl font-bold leading-tight">{product.name}</h3>
                <span className={`font-mono text-sm font-bold px-2 py-1 ${
                   calculatedScore >= 90 ? 'bg-success/10 text-success' : 
                   calculatedScore >= 65 ? 'bg-warning/10 text-warning' : 
                  'bg-destructive/10 text-destructive'
                }`}>
                  Score {calculatedScore}
                </span>
              </div>
              
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-auto pt-6 border-t border-thin border-border flex items-center justify-between">
                Run Analysis <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" />
              </p>
            </div>
          </Card>
          );
        })}
      </div>
      
      <div className="mt-20 text-center">
        <p className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest">Or test your own product</p>
        <Link href="/scanner">
          <Button variant="outline" size="lg" className="border-thin">
            Open Live Scanner
          </Button>
        </Link>
      </div>
    </div>
  );
}
