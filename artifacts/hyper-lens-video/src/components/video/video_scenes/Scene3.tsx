import { motion } from 'framer-motion';
import { SceneLayout, VideoText, MediaFrame } from '@/lib/video';
import { sceneTransitions, easings, staggerConfigs } from '@/lib/video/animations';

export const Scene3 = () => {
  const fields = [
    { label: "Product Name", val: "NUTRITION BAR", conf: "95%" },
    { label: "Net Quantity", val: "50g", conf: "98%" },
    { label: "MRP", val: "₹150", conf: "92%" },
    { label: "Best Before", val: "12 Months from Mfg", conf: "89%" },
  ];

  return (
    <SceneLayout className="bg-grid-pattern relative p-[5vw] overflow-hidden bg-[hsl(45_20%_96%)]">
      <motion.div
        {...sceneTransitions.wipe}
        className="w-full h-full flex flex-col relative z-10"
      >
        <div className="mb-[4vw] border-b border-[hsl(0_0%_80%)] pb-[2vw] flex justify-between items-end">
          <div>
            <VideoText as="h2" scale="heading" className="font-display font-bold text-[3.5vw] uppercase tracking-tighter text-[hsl(0_0%_7%)]">
              Editable OCR Review
            </VideoText>
            <VideoText as="p" scale="body" className="font-mono text-[1.2vw] text-[hsl(0_0%_40%)] uppercase tracking-widest mt-[0.5vw]">
              Review & Correct Extractions Before Analysis
            </VideoText>
          </div>
          <motion.div 
            className="font-mono text-[hsl(150_80%_35%)] bg-[hsl(150_80%_35%)]/10 px-[1.5vw] py-[0.5vw] font-bold text-[1.2vw] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Extraction Complete
          </motion.div>
        </div>

        <div className="flex-1 flex gap-[4vw]">
          <motion.div 
            className="w-[40%] h-full relative border border-[hsl(0_0%_80%)] bg-white p-[1vw]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easings.easeOut.ease }}
          >
            <div className="w-full h-full relative overflow-hidden bg-[hsl(45_20%_96%)]">
              <MediaFrame fit="contain">
                <img src={`${import.meta.env.BASE_URL}images/packaging_scan.jpg`} alt="" />
              </MediaFrame>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-[60%] flex flex-col gap-[1.5vw] justify-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: staggerConfigs.medium as any } }}
          >
            {fields.map((field, i) => (
              <motion.div 
                key={field.label}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easings.easeOut.ease } as any }
                }}
                className="bg-white border border-[hsl(0_0%_80%)] p-[2vw] relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-[1vw]">
                  <VideoText as="p" scale="body" className="font-sans font-bold text-[1.5vw] uppercase tracking-tight">
                    {field.label}
                  </VideoText>
                  <VideoText as="p" scale="body" className="font-mono text-[1vw] text-[hsl(0_0%_40%)] uppercase">
                    OCR Confidence {field.conf}
                  </VideoText>
                </div>
                
                <div className="relative">
                  <div className="font-mono text-[1.4vw] text-[hsl(0_0%_7%)] bg-[hsl(45_20%_96%)] border border-[hsl(0_0%_80%)] p-[1vw] w-full">
                    {field.val}
                  </div>
                  
                  {/* Simulate typing for correction on the last one */}
                  {i === 3 && (
                    <motion.div
                      className="absolute inset-0 bg-[hsl(45_20%_96%)] border border-[hsl(350_85%_55%)] p-[1vw] font-mono text-[1.4vw] text-[hsl(0_0%_7%)] overflow-hidden whitespace-nowrap"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 3, duration: 1.5, ease: "linear" }}
                    >
                      12 Months from Date of Mfg<span className="animate-pulse">_</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SceneLayout>
  );
};
