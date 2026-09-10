import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const isPresentation = location.startsWith("/presentation");
  if (isPresentation) {
    return <main className="min-h-[100dvh] w-full bg-background text-foreground">{children}</main>;
  }

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col selection:bg-accent selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-thin border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-bold tracking-tighter transition-transform group-hover:rotate-90">
              HL
            </div>
            <span className="font-sans font-bold text-lg tracking-tight uppercase">Hyper Lens</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <Link href="/demo" className={location === "/demo" ? "text-accent" : "text-muted-foreground hover:text-foreground transition-colors"}>
              Demo
            </Link>
            <Link href="/scanner" className={location === "/scanner" ? "text-accent" : "text-muted-foreground hover:text-foreground transition-colors"}>
              Scanner
            </Link>
            <Link href="/dashboard" className={location === "/dashboard" ? "text-accent" : "text-muted-foreground hover:text-foreground transition-colors"}>
              Dashboard
            </Link>
            <Link href="/reports" className={location === "/reports" ? "text-accent" : "text-muted-foreground hover:text-foreground transition-colors"}>
              Reports
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/demo">
              <Button size="sm" className="bg-accent text-white hover:bg-accent/90 border-transparent">
                Start Demo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      <footer className="border-t border-thin border-border py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <h3 className="font-bold font-sans text-xl mb-2">HYPER LENS</h3>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed">
              AI-assisted Legal Metrology compliance verification. Not a substitute for official legal counsel.
              For SIH Demonstration purposes.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs font-mono text-muted-foreground uppercase">v1.0.0</span>
            <span className="text-xs font-mono text-muted-foreground uppercase">System: Online</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
