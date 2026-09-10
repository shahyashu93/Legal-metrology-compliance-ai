import { motion } from 'framer-motion';
import { SceneLayout, VideoText } from '@/lib/video';
import { sceneTransitions, easings } from '@/lib/video/animations';
import { useEffect, useState } from 'react';

export const Scene4 = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= 85) {
          setScore(85);
          clearInterval(interval);
        } else {
          setScore(current);
        }
      }, 30);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const checks = [
    { req: "Product Name Present", status: "compliant", delay: 1.5 },
    { req: "Net Quantity Format", status: "compliant", delay: 2.0 },
    { req: "MRP Declaration", status: "compliant", delay: 2.5 },
    { req: "Manufacturer Address", status: "critical", delay: 3.0 },
  ];

  return (
    <SceneLayout className="bg-[hsl(0_0%_7%)] relative p-[5vw] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"
      />
      <motion.div
        className="absolute bottom-[-20vw] right-[-10vw] w-[50vw] h-[50vw] bg-[hsl(350_85%_55%)] rounded-full mix-blend-screen blur-[120px] opacity-20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      
      <motion.div
        {...sceneTransitions.perspectiveFlip}
        className="w-full h-full flex flex-col relative z-10"
      >
        <div className="mb-[3vw] flex justify-between items-center">
          <VideoText as="h2" scale="heading" className="font-display font-bold text-[3.5vw] uppercase tracking-tighter text-[hsl(45_20%_96%)]">
            Rule Validation
          </VideoText>
          <div className="font-mono text-[1.2vw] text-[hsl(0_0%_40%)] uppercase tracking-widest border border-[hsl(0_0%_40%)] px-[1vw] py-[0.5vw]">
            Deterministic Engine
          </div>
        </div>

        <div className="flex-1 flex gap-[4vw] items-center">
          <motion.div 
            className="w-[40%] flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easings.easeOut.ease }}
          >
            <VideoText as="p" scale="body" className="font-mono text-[1.2vw] uppercase tracking-[0.2em] text-[hsl(0_0%_40%)] mb-[2vw]">
              Compliance Score
            </VideoText>
            
            <div className="relative w-[25vw] h-[25vw] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="hsl(0 0% 20%)" strokeWidth="2%" fill="none" />
                <motion.circle 
                  cx="50%" cy="50%" r="45%" 
                  stroke={score >= 85 ? "hsl(35 90% 50%)" : "hsl(150 80% 35%)"} 
                  strokeWidth="2%" 
                  fill="none" 
                  initial={{ strokeDasharray: "0 1000" }}
                  animate={{ strokeDasharray: `${(score / 100) * 283}% 1000` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  style={{ strokeLinecap: "round" }}
                />
              </svg>
              <div className="flex flex-col items-center">
                <span className="font-display text-[7vw] font-bold tracking-tighter text-[hsl(45_20%_96%)] leading-none">
                  {score}
                </span>
              </div>
            </div>
            
            <motion.div
              className="mt-[3vw] px-[2vw] py-[0.8vw] font-mono text-[1.2vw] uppercase tracking-widest bg-[hsl(35_90%_50%)]/20 text-[hsl(35_90%_50%)] border border-[hsl(35_90%_50%)]/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              Warning Status
            </motion.div>
          </motion.div>

          <div className="w-[60%] flex flex-col gap-[1.2vw]">
            {checks.map((check, i) => (
              <motion.div 
                key={i}
                className="bg-[hsl(0_0%_10%)] border border-[hsl(0_0%_20%)] p-[1.5vw] flex items-center gap-[2vw]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: check.delay, duration: 0.5, ease: easings.easeOut.ease }}
              >
                <div className={`w-[1vw] h-[1vw] rounded-full ${check.status === 'compliant' ? 'bg-[hsl(150_80%_35%)] shadow-[0_0_10px_hsl(150_80%_35%)]' : 'bg-[hsl(350_85%_55%)] shadow-[0_0_10px_hsl(350_85%_55%)]'}`} />
                <div className="flex-1">
                  <VideoText as="h2" scale="heading" className="font-sans font-bold text-[1.6vw] text-[hsl(45_20%_96%)] uppercase">
                    {check.req}
                  </VideoText>
                </div>
                {check.status === 'critical' ? (
                  <div className="font-mono text-[1vw] bg-[hsl(350_85%_55%)]/20 text-[hsl(350_85%_55%)] px-[1vw] py-[0.5vw] uppercase">
                    Missing
                  </div>
                ) : (
                  <div className="font-mono text-[1vw] bg-[hsl(150_80%_35%)]/20 text-[hsl(150_80%_35%)] px-[1vw] py-[0.5vw] uppercase">
                    Passed
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SceneLayout>
  );
};
