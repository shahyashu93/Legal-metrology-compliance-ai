import { motion } from 'framer-motion';
import { SceneLayout, VideoText } from '@/lib/video';
import { sceneTransitions, charContainerVariants, charVariants, easings } from '@/lib/video/animations';

export const Scene1 = () => {
  const title = "COMPLIANCE MADE VISIBLE.";
  const subtitle = "Hyper Lens extracts, analyzes, and verifies Legal Metrology requirements on consumer packaging in seconds using advanced OCR and rules-engine validation.";
  
  return (
    <SceneLayout className="bg-grid-pattern relative flex items-center justify-start p-[10vw]">
      {/* Background ambient motion */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-[hsl(45_20%_96%)] via-transparent to-transparent opacity-80"
      />
      <motion.div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[hsl(350_85%_55%)] rounded-full mix-blend-multiply blur-[120px] opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, ease: "easeInOut" }}
      />
      
      <motion.div
        {...sceneTransitions.wipe}
        className="relative z-10 w-full max-w-[70vw]"
      >
        <motion.div 
          className="flex items-center gap-4 mb-[4vw]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easings.easeOut.ease }}
        >
          <div className="bg-[hsl(350_85%_55%)] text-[hsl(45_20%_96%)] font-mono text-[1.2vw] font-bold px-[1vw] py-[0.3vw] uppercase">
            SIH Prototype
          </div>
          <div className="font-mono text-[1vw] text-[hsl(0_0%_40%)] uppercase tracking-widest">
            Compliance Engine Active
          </div>
        </motion.div>

        <VideoText 
          as="h1" 
          scale="display"
          className="font-display font-bold leading-[0.9] tracking-tighter uppercase mb-[3vw] text-[hsl(0_0%_7%)] text-[7vw] max-w-[60vw]"
        >
          <motion.div
            variants={charContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[2vw]">
                {word.split('').map((char, j) => (
                  <motion.span key={j} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </VideoText>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: easings.easeOut.ease }}
        >
          <VideoText 
            as="p" 
            scale="body"
            className="font-mono text-[hsl(0_0%_40%)] text-[1.8vw] leading-relaxed max-w-[50vw]"
          >
            {subtitle}
          </VideoText>
        </motion.div>
      </motion.div>
    </SceneLayout>
  );
};
