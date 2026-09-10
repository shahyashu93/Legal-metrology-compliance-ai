import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useScans } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, XCircle, ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Results() {
  const { currentAnalysis } = useScans();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!currentAnalysis) {
      setLocation("/");
    }
  }, [currentAnalysis, setLocation]);

  if (!currentAnalysis) return null;

  const getStatusColor = (status: string) => {
    if (status === 'compliant') return 'text-success';
    if (status === 'warning') return 'text-warning';
    return 'text-destructive';
  };

  const StatusIcon = ({ status, className }: { status: string, className?: string }) => {
    if (status === 'compliant') return <CheckCircle className={`w-5 h-5 ${className}`} />;
    if (status === 'warning') return <AlertTriangle className={`w-5 h-5 ${className}`} />;
    return <XCircle className={`w-5 h-5 ${className}`} />;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full border border-thin">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="font-sans text-3xl font-bold tracking-tight uppercase">Analysis Result</h1>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">{currentAnalysis.assessmentId}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/reports">
            <Button variant="outline" className="font-mono">
              View Report <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Score & Summary */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-foreground text-background border-none rounded-none">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">Compliance Score</span>
              <div className="relative mb-6">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-20" />
                  <motion.circle 
                    initial={{ strokeDasharray: "0 1000" }}
                    animate={{ strokeDasharray: `${(currentAnalysis.score / 100) * 553} 1000` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="6" fill="none" 
                    className={currentAnalysis.overallStatus === 'compliant' ? 'text-success' : currentAnalysis.overallStatus === 'warning' ? 'text-warning' : 'text-accent'}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="font-sans text-6xl font-bold tracking-tighter">{currentAnalysis.score}</span>
                </div>
              </div>
              <Badge variant={currentAnalysis.overallStatus as any} className="text-sm px-4 py-1">
                {currentAnalysis.overallStatus.replace('-', ' ')}
              </Badge>
            </CardContent>
          </Card>

          <Card className="rounded-none border-thin">
            <CardHeader className="bg-background">
              <CardTitle className="text-lg">AI Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-mono text-sm leading-relaxed">
                {currentAnalysis.summary}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Extracted Data & Checks */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-none border-thin overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-background border-r border-thin border-border p-6 flex items-center justify-center min-h-[300px]">
                {currentAnalysis.image ? (
                  <img src={currentAnalysis.image} alt="Product" className="max-h-[300px] object-contain mix-blend-multiply" />
                ) : (
                  <div className="font-mono text-muted-foreground uppercase text-sm">Image Unavailable</div>
                )}
              </div>
              <div className="p-0">
                <div className="px-6 py-4 border-b border-thin border-border bg-background">
                  <h3 className="font-sans font-bold uppercase tracking-wide text-sm">Confirmed Declarations</h3>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {currentAnalysis.fields.map((field, i) => (
                    <div key={i} className="px-6 py-4 border-b border-thin border-border last:border-b-0 hover:bg-background transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-sans font-bold text-sm">{field.label}</span>
                        <Badge variant="outline" className={`text-[10px] ${getStatusColor(field.status)} border-current`}>
                          {field.status}
                        </Badge>
                      </div>
                      <p className="font-mono text-sm mb-2 break-words text-muted-foreground">
                        {field.value || "Left empty"}
                      </p>
                      <div className="flex items-center justify-between w-full mt-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Original OCR confidence</span>
                        <div className="w-24 h-1 bg-border">
                          <div className="h-full bg-foreground" style={{ width: `${field.confidence * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-6">Rule Validation</h3>
            <div className="space-y-4">
              {currentAnalysis.checks.map((check, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white border border-thin border-border p-6 flex flex-col md:flex-row gap-6 md:items-center"
                >
                  <div className={`flex-shrink-0 p-3 rounded-full bg-background ${getStatusColor(check.status)}`}>
                    <StatusIcon status={check.status} className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-sans font-bold text-lg">{check.requirement}</h4>
                      {check.severity === 'critical' && (
                        <Badge variant="destructive" className="h-5 text-[10px]">Critical</Badge>
                      )}
                    </div>
                    <p className="font-mono text-sm text-muted-foreground mb-3">
                      Detected: <span className="text-foreground">{check.detectedValue || 'None'}</span>
                    </p>
                    
                    {check.status !== 'compliant' && (
                      <div className="bg-background border border-thin border-border p-3 text-sm font-mono flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{check.recommendation}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
