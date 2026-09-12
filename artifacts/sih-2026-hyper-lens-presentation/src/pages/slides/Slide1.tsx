import React from "react";
const base = import.meta.env.BASE_URL;
export default function Slide1(){return <div className="w-screen h-screen overflow-hidden relative bg-[#f8fbff] text-[#111] font-sans">
  <div className="absolute left-[12.5vw] top-0 h-full w-[75vw] bg-[#4f81bd]" />
  <div className="absolute left-[12.5vw] top-0 h-full w-[75vw] opacity-20" style={{backgroundImage:"linear-gradient(90deg,rgba(255,255,255,.22) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px)",backgroundSize:"3vw 3vw"}} />
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[1.5vw] top-[0.4vh] w-[18vw] h-[13vh] object-contain bg-white/95" />
  <div className="absolute left-[5vw] top-[4vh] text-[#1f497d] font-serif font-bold text-[3.25vw] tracking-tight">SMART INDIA HACKATHON 2026</div>
  <div className="absolute left-[6vw] top-[20vh] w-[51vw] bg-white/95 border-t-[0.8vh] border-[#1f497d] p-[3vw] shadow-[0_1.2vh_0_rgba(31,73,125,.16)]">
    <div className="text-[#0070c0] text-[1.6vw] font-bold tracking-[0.16em]">AI-ASSISTED LEGAL METROLOGY COMPLIANCE</div>
    <h1 className="mt-[1.6vh] text-[5.2vw] font-black leading-[0.9] tracking-[-0.06em]">HYPER<br/>LENS</h1>
    <div className="mt-[2vh] h-[0.55vh] w-[11vw] bg-[#e52545]" />
    <p className="mt-[2.2vh] text-[1.8vw] leading-snug text-[#3b4654]">Compliance made visible—from a package image to a rule-linked inspection report.</p>
  </div>
  <div className="absolute left-[61vw] top-[22vh] w-[31vw] bg-[#f8fbff] border-[0.22vw] border-[#1f497d] p-[2.1vw] text-[1.55vw] leading-[1.55]">
    <p><b>Problem Statement ID</b> — [ENTER PS ID]</p>
    <p><b>Problem Statement Title</b> — AI-assisted package declaration compliance</p>
    <p><b>Theme</b> — Smart Automation</p>
    <p><b>PS Category</b> — Software</p>
    <p><b>Team ID</b> — [ENTER TEAM ID]</p>
    <p><b>Team Name</b> — [ENTER REGISTERED NAME]</p>
  </div>
  <div className="absolute right-[5vw] bottom-[6vh] w-[34vw] text-right text-white text-[1.5vw] tracking-[0.08em] font-bold">SCAN · VERIFY · EXPLAIN · REPORT</div>
</div>}