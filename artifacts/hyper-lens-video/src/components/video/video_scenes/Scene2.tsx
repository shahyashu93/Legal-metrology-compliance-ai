import { motion } from 'framer-motion';
import { SceneLayout, MediaFrame, VideoText } from '@/lib/video';
import { sceneTransitions, easings, elementAnimations } from '@/lib/video/animations';

export const Scene2 = () => {
  return (
    <SceneLayout className="bg-grid-pattern relative flex items-center justify-center p-[5vw] overflow-hidden bg-[hsl(45_20%_96%)]">
      
      {/* Background ambient motion */}
      <motion.div
        className="absolute top-[-10vw] left-[-10vw] w-[40vw] h-[40vw] bg-[hsl(0_0%_7%)] rounded-full mix-blend-multiply blur-[100px] opacity-[0.05]"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, ease: "easeInOut" }}
      />
      
      <motion.div
        {...sceneTransitions.scaleFade}
        className="w-full h-full flex flex-row gap-[4vw] relative z-10"
      >
        <motion.div 
          className="w-[45%] h-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easings.easeOut.ease }}
        >
          <div className="border-b-2 border-[hsl(0_0%_80%)] pb-[2vw] mb-[3vw]">
            <VideoText as="h2" scale="heading" className="font-display font-bold text-[4.5vw] uppercase tracking-tighter leading-none mb-[1vw] text-[hsl(0_0%_7%)]">
              Target<br/>Acquired
            </VideoText>
            <VideoText as="p" scale="body" className="font-mono text-[1.5vw] text-[hsl(0_0%_40%)] uppercase tracking-widest">
              Initializing OCR Engine
            </VideoText>
          </div>
          
          <div className="space-y-[2vw]">
            {[
              { label: "Ruleset", val: "LM Act 2009, FSSAI" },
              { label: "Target", val: "Cosmetics Packaging" },
              { label: "Status", val: "Scanning...", color: "text-[hsl(350_85%_55%)]" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                className="flex justify-between border-b border-[hsl(0_0%_80%)] pb-[1vw] font-mono text-[1.4vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (i * 0.2) }}
              >
                <span className="text-[hsl(0_0%_40%)]">{item.label}</span>
                <span className={`font-bold ${item.color || "text-[hsl(0_0%_7%)]"}`}>{item.val}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="w-[55%] h-full relative border border-[hsl(0_0%_80%)] bg-white p-[1vw]"
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          <div className="w-full h-full relative overflow-hidden bg-[hsl(45_20%_96%)]">
            <MediaFrame fit="contain">
              <img src={`${import.meta.env.BASE_URL}images/packaging_hero.jpg`} alt="" />
            </MediaFrame>
            {/* Scan Beam */}
            <motion.div 
              className="absolute inset-0 bg-black/10 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <motion.div 
              className="absolute top-0 left-0 w-full h-[4px] bg-[hsl(350_85%_55%)] z-20 shadow-[0_0_20px_hsl(350_85%_55%)]"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.5, duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Detection boxes */}
            <motion.div 
              className="absolute top-[30%] left-[20%] w-[30%] h-[15%] border-2 border-[hsl(150_80%_35%)] bg-[hsl(150_80%_35%)]/20 z-20"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.3 }}
            />
            <motion.div 
              className="absolute top-[60%] left-[25%] w-[40%] h-[20%] border-2 border-[hsl(150_80%_35%)] bg-[hsl(150_80%_35%)]/20 z-20"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5, duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </SceneLayout>
  );
};
