import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Presentation() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "THE COMPLIANCE GAP",
      text: "Millions of packaged goods enter the Indian market daily. Validating Legal Metrology compliance manually is slow, error-prone, and unscalable."
    },
    {
      title: "ENTER HYPER LENS",
      text: "An AI-powered extraction and rules engine that verifies mandatory declarations (MRP, Net Weight, Manufacturer details) in seconds."
    },
    {
      title: "THE ENGINE",
      text: "1. Computer Vision identifies text bounding boxes.\n2. OCR extracts literal strings.\n3. Rules Engine validates against LM Act 2009."
    },
    {
      title: "IMPACT",
      text: "For regulators: 100x faster auditing.\nFor manufacturers: Instant pre-market validation.\nFor consumers: Verified trust."
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setSlide(s => Math.min(s + 1, slides.length)); // +1 for the final CTA slide
      } else if (e.key === 'ArrowLeft') {
        setSlide(s => Math.max(s - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="h-screen w-full bg-foreground text-background flex flex-col justify-center p-12 md:p-24 overflow-hidden relative">
      
      {/* Slide Counter Indicator */}
      <div className="absolute top-12 left-12 font-mono text-sm tracking-widest opacity-50 uppercase">
        HL // Slide {slide + 1} of {slides.length + 1}
      </div>
      <Link href="/" className="absolute top-12 right-12">
        <Button variant="ghost" className="text-background hover:bg-background/20 font-mono text-xs uppercase tracking-widest">
          Exit Presentation
        </Button>
      </Link>

      <motion.div 
        key={slide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        {slide < slides.length ? (
          <>
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-sans font-bold leading-[0.85] tracking-tighter mb-12 text-accent">
              {slides[slide].title}
            </h1>
            <p className="font-mono text-xl md:text-3xl leading-relaxed whitespace-pre-line max-w-4xl text-background/80">
              {slides[slide].text}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-6xl md:text-[8rem] font-sans font-bold leading-[0.85] tracking-tighter mb-12 text-white">
              SEE IT WORK.
            </h1>
            <div className="flex gap-6">
              <Link href="/demo">
                <Button size="lg" className="h-20 px-12 text-2xl bg-accent text-white hover:bg-accent/80 rounded-none border-none">
                  Start Live Demo
                </Button>
              </Link>
            </div>
          </>
        )}
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-background/20">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${(slide / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
