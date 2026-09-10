import { motion } from 'framer-motion';
import { SceneLayout, VideoText } from '@/lib/video';
import { sceneTransitions, easings, elementAnimations } from '@/lib/video/animations';

export const Scene6 = () => {
  return (
    <SceneLayout className="bg-grid-pattern relative flex items-center justify-center p-[5vw] overflow-hidden bg-[hsl(45_20%_96%)]">
      
      {/* Background ambient motion */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[hsl(0_0%_7%)] rounded-full mix-blend-multiply blur-[120px] opacity-[0.03]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, ease: "easeInOut" }}
      />
      
      <motion.div
        {...sceneTransitions.zoomThrough}
        className="w-full h-full flex flex-col items-center justify-center relative z-10"
      >
        <motion.div
          className="flex items-center gap-[1.5vw] mb-[2vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easings.easeOut.ease }}
        >
          <div className="bg-[hsl(0_0%_7%)] text-[hsl(45_20%_96%)] font-display font-bold text-[3vw] px-[1vw] py-[0.5vw] leading-none">
            HL
          </div>
          <VideoText as="h1" scale="display" className="font-display font-bold text-[4vw] tracking-tight uppercase text-[hsl(0_0%_7%)]">
            Hyper Lens
          </VideoText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: easings.easeOut.ease }}
        >
          <VideoText as="p" scale="body" className="font-mono text-[1.5vw] text-[hsl(0_0%_40%)] uppercase tracking-widest mb-[4vw]">
            Compliance Made Visible
          </VideoText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: easings.easeOut.ease }}
          className="flex flex-col items-center gap-[0.5vw]"
        >
          <div className="h-[1px] w-[20vw] bg-[hsl(0_0%_80%)] mb-[1vw]" />
          <VideoText as="p" scale="caption" className="font-mono text-[1vw] text-[hsl(0_0%_7%)] uppercase tracking-[0.2em] font-bold">
            AI-Assisted Legal Metrology
          </VideoText>
          <VideoText as="p" scale="caption" className="font-mono text-[0.8vw] text-[hsl(350_85%_55%)] uppercase tracking-[0.3em]">
            System Online // V1.0.0
          </VideoText>
        </motion.div>
      </motion.div>
    </SceneLayout>
  );
};
