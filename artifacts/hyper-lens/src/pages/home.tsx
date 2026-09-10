import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Scale, FileSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 px-4 overflow-hidden border-b border-thin border-border">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-3 py-1 bg-accent text-white text-xs font-mono uppercase tracking-widest font-bold">
                SIH Prototype
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Compliance Engine Active
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-bold leading-[0.85] tracking-tighter mb-8"
            >
              COMPLIANCE<br/>
              <span className="text-muted-foreground">MADE</span> VISIBLE.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-mono text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              Hyper Lens extracts, analyzes, and verifies Legal Metrology requirements on consumer packaging in seconds using advanced OCR and rules-engine validation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/demo">
                <Button size="lg" className="h-16 px-8 text-lg bg-foreground text-background hover:bg-accent hover:text-white transition-all border-none group">
                  Run Demo Analysis 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/presentation">
                <Button variant="outline" size="lg" className="h-16 px-8 text-lg">
                  Judge Presentation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-b border-thin border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { icon: FileSearch, title: "1. Scan", desc: "Capture or upload packaging imagery." },
              { icon: Zap, title: "2. Extract", desc: "Machine vision pulls key labels instantly." },
              { icon: Scale, title: "3. Verify", desc: "Checks against LM Act & FSSAI rules." },
              { icon: ShieldCheck, title: "4. Report", desc: "Generates actionable compliance score." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 md:p-12 hover:bg-background transition-colors group">
                <step.icon className="w-10 h-10 mb-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                <h3 className="font-sans font-bold text-xl mb-3">{step.title}</h3>
                <p className="font-mono text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">
            *Preliminary Assessment Only. Hyper Lens provides automated heuristic checks and does not constitute definitive legal validity. Always consult official Legal Metrology officers for certification.
          </p>
        </div>
      </section>
    </div>
  );
}
