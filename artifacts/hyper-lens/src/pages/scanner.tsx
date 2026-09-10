import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComplianceEngine } from "@/lib/engine";
import { useScans } from "@/lib/store";
import { useExtractProductDetails } from "@workspace/api-client-react";

export default function Scanner() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanError, setScanError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();
  const { addAnalysis } = useScans();
  const extraction = useExtractProductDetails();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.match('image/(jpeg|png|webp)')) {
      alert('Only JPG, PNG, and WEBP files are supported.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('File too large. Max 10MB.');
      return;
    }
    setFile(file);
    setScanError(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const startScan = async () => {
    if (!preview) return;
    setIsScanning(true);
    setScanStep(0);
    setScanError(null);

    const interval = window.setInterval(() => {
      setScanStep((step) => Math.min(step + 1, 4));
    }, 600);

    try {
      const [result] = await Promise.all([
        extraction.mutateAsync({ data: { imageDataUrl: preview } }),
        new Promise((resolve) => window.setTimeout(resolve, 2400)),
      ]);
      const analysis = ComplianceEngine.analyze(
        result.productName,
        preview,
        result.declarations,
      );
      addAnalysis(analysis);
      setLocation("/results");
    } catch {
      setScanError(
        "The package could not be read reliably. Try a sharper, well-lit image showing the full label.",
      );
      setIsScanning(false);
      setScanStep(0);
    } finally {
      window.clearInterval(interval);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="mb-12">
        <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">
          New Analysis
        </h1>
        <p className="font-mono text-muted-foreground">Upload product packaging for compliance verification.</p>
      </div>

      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className={`
              relative border-2 border-dashed transition-colors duration-200
              ${isDragging ? 'border-accent bg-accent/5' : 'border-border bg-white'}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="p-16 md:p-32 flex flex-col items-center justify-center text-center">
              <Upload className="w-12 h-12 mb-6 text-muted-foreground" strokeWidth={1} />
              <h3 className="font-sans text-2xl font-bold mb-2">Drag & Drop Image</h3>
              <p className="font-mono text-sm text-muted-foreground mb-8">JPG, PNG, WEBP up to 10MB</p>
              
              <div className="flex gap-4">
                <Button onClick={() => fileInputRef.current?.click()}>
                  Browse Files
                </Button>
                <Button variant="outline" className="hidden md:flex">
                  <Camera className="w-4 h-4 mr-2" /> Use Camera
                </Button>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/jpeg, image/png, image/webp" 
                onChange={(e) => e.target.files && processFile(e.target.files[0])}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            <div className="relative border border-thin border-border bg-white p-2">
              <img src={preview} alt="Preview" className="w-full h-auto object-contain bg-background max-h-[600px]" />
              
              {isScanning && (
                <>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent animate-scan-beam" />
                </>
              )}
            </div>
            
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-sans text-2xl font-bold mb-6 pb-4 border-b border-thin border-border">Target Acquired</h3>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-thin border-border pb-2">
                    <span className="text-muted-foreground">Filename</span>
                    <span className="truncate max-w-[200px]">{file?.name || "Demo Image"}</span>
                  </div>
                  <div className="flex justify-between border-b border-thin border-border pb-2">
                    <span className="text-muted-foreground">Size</span>
                    <span>{file ? (file.size / 1024 / 1024).toFixed(2) : "0.00"} MB</span>
                  </div>
                  <div className="flex justify-between border-b border-thin border-border pb-2">
                    <span className="text-muted-foreground">Ruleset</span>
                    <span>LM Act 2009, FSSAI</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                {scanError && (
                  <div role="alert" className="mb-4 border border-destructive bg-destructive/5 p-4 font-mono text-sm text-destructive">
                    {scanError}
                  </div>
                )}
                {isScanning ? (
                  <div className="bg-background border border-thin border-border p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-sm uppercase text-accent font-bold animate-pulse">Processing</span>
                      <span className="font-mono text-sm">{Math.round((scanStep / 4) * 100)}%</span>
                    </div>
                    <div className="w-full h-1 bg-border overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-500 ease-out"
                        style={{ width: `${(scanStep / 4) * 100}%` }}
                      />
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mt-4 uppercase">
                      {[
                        "Initializing OCR Engine...",
                        "Detecting Text Regions...",
                        "Extracting Key-Value Pairs...",
                        "Running Rules Engine...",
                        "Generating Compliance Report..."
                      ][scanStep]}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" className="flex-1" onClick={() => { setPreview(null); setFile(null); setScanError(null); }}>
                      Cancel
                    </Button>
                    <Button size="lg" className="flex-2 bg-foreground text-background hover:bg-accent" onClick={startScan}>
                      Start Extraction <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
