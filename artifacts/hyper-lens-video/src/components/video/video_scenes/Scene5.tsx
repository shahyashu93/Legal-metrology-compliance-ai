import { motion } from 'framer-motion';
import { SceneLayout, VideoText } from '@/lib/video';
import { sceneTransitions, easings, charContainerVariants, charVariants } from '@/lib/video/animations';

export const Scene5 = () => {
  const recommendation = "Add full registered address of manufacturer/packer on the principal display panel to comply with LM Rule 6(1)(a).";

  return (
    <SceneLayout className="bg-grid-pattern relative p-[5vw] overflow-hidden bg-[hsl(45_20%_96%)] flex items-center justify-center">
      <motion.div
        {...sceneTransitions.splitHorizontal}
        className="w-full max-w-[80vw] bg-white border border-[hsl(0_0%_80%)] shadow-2xl relative z-10 flex flex-col"
      >
        <div className="bg-[hsl(350_85%_55%)] p-[2vw] flex justify-between items-center">
          <div className="flex items-center gap-[1vw]">
            <motion.div 
              className="w-[1vw] h-[1vw] bg-white rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <VideoText as="h2" scale="heading" className="font-mono text-white text-[1.2vw] uppercase tracking-widest font-bold">
              Critical Violation Detected
            </VideoText>
          </div>
          <VideoText as="p" scale="body" className="font-mono text-white/80 text-[1vw] uppercase">
            LM Rule 6(1)(a)
          </VideoText>
        </div>

        <div className="p-[4vw] flex flex-col gap-[3vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <VideoText as="p" scale="body" className="font-mono text-[hsl(0_0%_40%)] text-[1vw] uppercase tracking-widest mb-[1vw]">
              Missing Information
            </VideoText>
            <VideoText as="h2" scale="heading" className="font-display font-bold text-[3vw] uppercase tracking-tighter text-[hsl(0_0%_7%)] leading-none">
              Manufacturer Address
            </VideoText>
          </motion.div>

          <div className="h-[1px] w-full bg-[hsl(0_0%_80%)]" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <VideoText as="p" scale="body" className="font-mono text-[hsl(350_85%_55%)] text-[1vw] uppercase tracking-widest mb-[1vw]">
              AI Recommendation
            </VideoText>
            <VideoText as="p" scale="body" className="font-sans text-[2vw] text-[hsl(0_0%_7%)] leading-relaxed font-medium">
              <motion.span
                variants={charContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {recommendation.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-[0.5vw]">
                    {word.split('').map((char, j) => (
                      <motion.span key={j} variants={charVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.span>
            </VideoText>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Accent elements */}
      <motion.div 
        className="absolute bottom-[5vw] left-[5vw] w-[15vw] h-[15vw] border border-[hsl(350_85%_55%)]/30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: easings.easeOut.ease }}
      />
      <motion.div 
        className="absolute bottom-[2vw] left-[2vw] w-[21vw] h-[21vw] border border-[hsl(350_85%_55%)]/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: easings.easeOut.ease }}
      />
    </SceneLayout>
  );
};
