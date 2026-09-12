import React from "react";
const base=import.meta.env.BASE_URL;

export default function Slide5(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
  <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
  <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center">[TEAM NAME]</div>
  <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none">IMPACT AND BENEFITS</h1>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
  <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
  <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
  <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">05 / 06</div>

  <div className="absolute left-[4vw] top-[18vh] w-[55vw] h-[64vh]">
    <div className="absolute left-[18.5vw] top-[19vh] w-[18vw] h-[18vw] rounded-full bg-[#1f497d] text-white flex items-center justify-center text-center text-[1.7vw] font-black p-[2vw]">TRUSTED PACKAGE DECLARATIONS</div>
    <div className="absolute left-[3vw] top-0 w-[16vw] h-[13vh] bg-[#dce6f2] border-t-[.6vh] border-[#0070c0] p-[1vw] text-center"><b className="text-[1.65vw]">CONSUMERS</b><p className="text-[1.5vw]">Clear information</p></div>
    <div className="absolute right-[3vw] top-0 w-[16vw] h-[13vh] bg-[#eaf1df] border-t-[.6vh] border-[#77933c] p-[1vw] text-center"><b className="text-[1.65vw]">MANUFACTURERS</b><p className="text-[1.5vw]">Earlier correction</p></div>
    <div className="absolute left-[3vw] bottom-0 w-[16vw] h-[13vh] bg-[#f7e5e3] border-t-[.6vh] border-[#c0504d] p-[1vw] text-center"><b className="text-[1.65vw]">INSPECTORS</b><p className="text-[1.5vw]">Structured evidence</p></div>
    <div className="absolute right-[3vw] bottom-0 w-[16vw] h-[13vh] bg-[#eee8f5] border-t-[.6vh] border-[#8064a2] p-[1vw] text-center"><b className="text-[1.65vw]">RETAILERS</b><p className="text-[1.5vw]">Faster screening</p></div>
    <div className="absolute left-[17vw] top-[10vh] text-[3vw] text-[#0070c0] rotate-45">→</div>
    <div className="absolute right-[17vw] top-[10vh] text-[3vw] text-[#77933c] rotate-[135deg]">→</div>
    <div className="absolute left-[17vw] bottom-[11vh] text-[3vw] text-[#c0504d] -rotate-45">→</div>
    <div className="absolute right-[17vw] bottom-[11vh] text-[3vw] text-[#8064a2] rotate-[-135deg]">→</div>
  </div>

  <div className="absolute right-[4vw] top-[18vh] w-[31vw] h-[64vh]">
    <h2 className="text-[1.6vw] font-black text-[#1f497d] tracking-wider">VALUE CHAIN</h2>
    <div className="mt-[2vh] h-[11vh] bg-[#eef5fb] border-l-[.5vw] border-[#0070c0] px-[1.1vw] flex flex-col justify-center"><b className="text-[1.55vw]">SOCIAL</b><p className="text-[1.5vw]">Explainable package information</p></div>
    <div className="h-[4vh] flex items-center justify-center text-[2vw] text-[#0070c0]">↓</div>
    <div className="h-[11vh] bg-[#f1f5ea] border-l-[.5vw] border-[#77933c] px-[1.1vw] flex flex-col justify-center"><b className="text-[1.55vw]">OPERATIONAL</b><p className="text-[1.5vw]">Consistent inspection flow</p></div>
    <div className="h-[4vh] flex items-center justify-center text-[2vw] text-[#0070c0]">↓</div>
    <div className="h-[11vh] bg-[#f8eceb] border-l-[.5vw] border-[#c0504d] px-[1.1vw] flex flex-col justify-center"><b className="text-[1.55vw]">ECONOMIC</b><p className="text-[1.5vw]">Issues found before distribution</p></div>
    <div className="h-[4vh] flex items-center justify-center text-[2vw] text-[#0070c0]">↓</div>
    <div className="h-[11vh] bg-[#f1edf6] border-l-[.5vw] border-[#8064a2] px-[1.1vw] flex flex-col justify-center"><b className="text-[1.55vw]">GOVERNANCE</b><p className="text-[1.5vw]">Reviewable finding trail</p></div>
  </div>
</div>}