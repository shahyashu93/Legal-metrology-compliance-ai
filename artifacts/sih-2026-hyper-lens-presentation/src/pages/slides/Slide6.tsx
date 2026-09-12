import React from "react";
const base=import.meta.env.BASE_URL;

export default function Slide6(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
  <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
  <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center">[TEAM NAME]</div>
  <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none">RESEARCH AND REFERENCES</h1>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
  <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
  <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
  <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">06 / 06</div>

  <div className="absolute left-[4vw] top-[18vh] w-[42vw] h-[63vh]">
    <h2 className="text-[1.6vw] font-black text-[#1f497d] tracking-wider">EVIDENCE BASE</h2>
    <div className="mt-[1.6vh] bg-[#dcebf7] border-t-[.6vh] border-[#0070c0] p-[1.1vw]"><b className="text-[1.65vw]">LEGAL METROLOGY ACT, 2009</b><p className="text-[1.5vw] text-[#4d5c68]">India Code · indiacode.nic.in</p></div>
    <div className="mt-[1.5vh] bg-[#dcebf7] border-t-[.6vh] border-[#0070c0] p-[1.1vw]"><b className="text-[1.65vw]">PACKAGED COMMODITIES RULES, 2011</b><p className="text-[1.5vw] text-[#4d5c68]">Department of Consumer Affairs</p></div>
    <div className="mt-[1.5vh] bg-[#eaf1df] border-t-[.6vh] border-[#77933c] p-[1.1vw]"><b className="text-[1.65vw]">GEMINI API</b><p className="text-[1.5vw] text-[#4d5c68]">Image understanding + structured output</p></div>
    <div className="mt-[1.5vh] bg-[#eaf1df] border-t-[.6vh] border-[#77933c] p-[1.1vw]"><b className="text-[1.65vw]">OPENAPI SPECIFICATION</b><p className="text-[1.5vw] text-[#4d5c68]">Shared frontend / backend contract</p></div>
  </div>

  <div className="absolute right-[4vw] top-[18vh] w-[46vw] h-[63vh]">
    <h2 className="text-[1.6vw] font-black text-[#1f497d] tracking-wider">VALIDATION PRINCIPLE</h2>
    <div className="mt-[2vh] flex items-center">
      <div className="w-[12vw] h-[11vh] bg-[#4bacc6] flex items-center justify-center text-center p-[.8vw] text-[1.55vw] font-bold">VISIBLE TEXT</div>
      <div className="w-[3vw] text-center text-[2.5vw] text-[#0070c0]">→</div>
      <div className="w-[12vw] h-[11vh] bg-[#9bbb59] flex items-center justify-center text-center p-[.8vw] text-[1.55vw] font-bold">EDITABLE DATA</div>
      <div className="w-[3vw] text-center text-[2.5vw] text-[#0070c0]">→</div>
      <div className="w-[15vw] h-[11vh] bg-[#1f497d] text-white flex items-center justify-center text-center p-[.8vw] text-[1.55vw] font-bold">DETERMINISTIC FINDING</div>
    </div>
    <div className="mt-[2.5vh] border-[.22vw] border-[#1f497d] bg-[#eef5fb] p-[1.2vw] text-[1.6vw] font-bold text-center">The language model reads the label. The rule engine evaluates compliance.</div>
    <img src={`${base}hyper-lens-scanner.jpg`} crossOrigin="anonymous" alt="HYPER LENS package scanner" className="mt-[2.5vh] w-full h-[23vh] object-cover object-top border-[.18vw] border-[#8aa8c0]" />
    <div className="mt-[1.4vh] flex justify-between text-[1.5vw] font-bold text-[#1f497d]"><span>WORKING PROTOTYPE</span><span>EDITABLE EXTRACTION</span><span>RULE-LINKED REPORT</span></div>
  </div>
</div>}