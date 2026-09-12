import React from "react";
const base = import.meta.env.BASE_URL;

export default function Slide1(){return <div className="w-screen h-screen overflow-hidden relative bg-white text-[#111] font-sans">
  <div className="absolute left-[12.5vw] top-0 h-full w-[75vw] bg-[#4f81bd]" />
  <div className="absolute left-[46.5vw] top-[12.4vh] h-[75.2vh] w-[38vw] bg-[#808080]/15 [clip-path:polygon(30%_0,72%_0,100%_50%,72%_100%,30%_100%,0_50%)]" />
  <div className="absolute left-[56vw] top-[24vh] h-[50vh] w-[26vw] border-[0.3vw] border-white/25 [clip-path:polygon(30%_0,72%_0,100%_50%,72%_100%,30%_100%,0_50%)]" />
  <div className="absolute left-[2.7vw] top-[-7.7vh] w-[85vw] h-[30vh] flex items-center justify-center">
    <div className="font-serif font-bold text-[#1f497d] text-[3.15vw] tracking-tight">SMART INDIA HACKATHON 2026</div>
  </div>
  <div className="absolute left-[10.2vw] top-[9.5vh] w-[70vw] h-[25.5vh] flex flex-col items-center justify-center">
    <div className="font-serif font-bold text-[2.5vw]">TITLE PAGE</div>
    <div className="mt-[1.2vh] text-[4.2vw] font-black tracking-[-0.04em] text-[#1f497d]">HYPER LENS</div>
  </div>
  <div className="absolute left-[3.1vw] top-[31vh] w-[48.5vw] text-[1.9vw] font-bold leading-[2.18]">
    <p>• Problem Statement ID – [ENTER PS ID]</p>
    <p>• Problem Statement Title – AI-assisted package compliance</p>
    <p>• Theme – Smart Automation</p>
    <p>• PS Category – Software</p>
    <p>• Team ID – [ENTER TEAM ID]</p>
    <p>• Team Name – [ENTER REGISTERED NAME]</p>
  </div>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[1.3vw] top-0 w-[18.5vw] h-[15.5vh] object-contain" />
</div>}