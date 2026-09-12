import React from "react";
const base=import.meta.env.BASE_URL;

export default function Slide4(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
  <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
  <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center">[TEAM NAME]</div>
  <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none">FEASIBILITY AND VIABILITY</h1>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
  <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
  <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
  <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">04 / 06</div>

  <div className="absolute left-[4vw] top-[18vh] w-[43vw] h-[40vh]">
    <h2 className="text-[1.6vw] font-black text-[#1f497d] tracking-wider">FEASIBILITY MATRIX</h2>
    <div className="mt-[1.5vh] grid grid-cols-2 gap-[1vw]">
      <div className="bg-[#dcebf7] border-t-[.55vh] border-[#0070c0] p-[1.1vw] h-[14vh]"><b className="text-[1.65vw]">TECHNICAL</b><p className="mt-[.6vh] text-[1.5vw]">Capture, OCR, correction, checks, report</p></div>
      <div className="bg-[#eaf1df] border-t-[.55vh] border-[#77933c] p-[1.1vw] h-[14vh]"><b className="text-[1.65vw]">OPERATIONAL</b><p className="mt-[.6vh] text-[1.5vw]">Phone or laptop; no dedicated scanner</p></div>
      <div className="bg-[#f8eceb] border-t-[.55vh] border-[#c0504d] p-[1.1vw] h-[14vh]"><b className="text-[1.65vw]">REGULATORY</b><p className="mt-[.6vh] text-[1.5vw]">Reviewable checks; versioned rule packs</p></div>
      <div className="bg-[#f1edf6] border-t-[.55vh] border-[#8064a2] p-[1.1vw] h-[14vh]"><b className="text-[1.65vw]">SCALABLE</b><p className="mt-[.6vh] text-[1.5vw]">Stateless API; category and language expansion</p></div>
    </div>
  </div>

  <div className="absolute right-[4vw] top-[18vh] w-[43vw] h-[40vh]">
    <h2 className="text-[1.6vw] font-black text-[#1f497d] tracking-wider">RISK → CONTROL</h2>
    <div className="mt-[1.5vh] grid grid-cols-[.8fr_.18fr_1.4fr] text-[1.5vw] items-stretch">
      <div className="bg-[#dce6f2] font-bold p-[.8vw]">Blur / glare</div><div className="flex items-center justify-center text-[#0070c0]">→</div><div className="border border-[#b5c6d4] p-[.8vw]">Confidence + recapture + edit</div>
      <div className="bg-[#dce6f2] font-bold p-[.8vw]">Rule change</div><div className="flex items-center justify-center text-[#0070c0]">→</div><div className="border border-[#b5c6d4] p-[.8vw]">Version + effective date</div>
      <div className="bg-[#dce6f2] font-bold p-[.8vw]">AI outage</div><div className="flex items-center justify-center text-[#0070c0]">→</div><div className="border border-[#b5c6d4] p-[.8vw]">Bounded retry + explicit error</div>
      <div className="bg-[#dce6f2] font-bold p-[.8vw]">False certainty</div><div className="flex items-center justify-center text-[#0070c0]">→</div><div className="border border-[#b5c6d4] p-[.8vw]">Human verification gate</div>
    </div>
  </div>

  <div className="absolute left-[4vw] top-[63vh] right-[4vw]">
    <h2 className="text-[1.5vw] font-black text-[#1f497d] tracking-wider">IMPLEMENTATION PATH</h2>
    <div className="mt-[1.2vh] flex items-center">
      <div className="w-[20vw] h-[13vh] bg-[#eef5fb] border-t-[.6vh] border-[#0070c0] p-[.9vw]"><b className="text-[1.65vw]">1 · PILOT</b><p className="text-[1.5vw]">Curated categories</p></div><div className="w-[3vw] text-center text-[2.7vw] text-[#0070c0]">→</div>
      <div className="w-[20vw] h-[13vh] bg-[#eef5fb] border-t-[.6vh] border-[#0070c0] p-[.9vw]"><b className="text-[1.65vw]">2 · VALIDATE</b><p className="text-[1.5vw]">Expert-reviewed cases</p></div><div className="w-[3vw] text-center text-[2.7vw] text-[#0070c0]">→</div>
      <div className="w-[20vw] h-[13vh] bg-[#eef5fb] border-t-[.6vh] border-[#0070c0] p-[.9vw]"><b className="text-[1.65vw]">3 · INTEGRATE</b><p className="text-[1.5vw]">Inspection workflow</p></div><div className="w-[3vw] text-center text-[2.7vw] text-[#0070c0]">→</div>
      <div className="w-[20vw] h-[13vh] bg-[#eef5fb] border-t-[.6vh] border-[#0070c0] p-[.9vw]"><b className="text-[1.65vw]">4 · SCALE</b><p className="text-[1.5vw]">Rules + languages</p></div>
    </div>
  </div>
</div>}