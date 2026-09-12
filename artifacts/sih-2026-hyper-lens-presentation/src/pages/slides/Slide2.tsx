import React from "react";
const base=import.meta.env.BASE_URL;
export default function Slide2(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
      <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
      <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center leading-tight">[TEAM<br/>NAME]</div>
      <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none tracking-tight text-[#111]">IDEA TITLE</h1>
      <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
      <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
      <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
      <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">02 / 06</div>
  <div className="absolute left-[4vw] top-[17vh] right-[4vw] h-[13vh] grid grid-cols-[1.3fr_.7fr] gap-[2vw]">
    <div><div className="inline-block bg-[#000080] text-white px-[1vw] py-[.55vh] text-[1.5vw] font-bold">PROPOSED SOLUTION</div><h2 className="mt-[1.2vh] text-[2.45vw] font-black tracking-tight">HYPER LENS</h2><p className="text-[1.55vw] leading-snug">Phone-camera package inspection that extracts declarations, asks for low-confidence corrections, checks deterministic Legal Metrology rules, and produces an explainable report.</p></div>
    <img src={`${base}hyper-lens-home.jpg`} crossOrigin="anonymous" alt="HYPER LENS working prototype" className="w-full h-[13vh] object-cover object-top border-[0.18vw] border-[#9bb6cf]" />
  </div>
  <div className="absolute left-[4vw] top-[33vh] right-[4vw]">
    <div className="text-[1.5vw] text-[#4c5b69] font-bold tracking-[.13em] mb-[1.2vh]">WORKFLOW</div>
    <div className="grid grid-cols-6 gap-[.7vw] items-stretch">
      <div className="bg-[#f79646] p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">01</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Capture package</p></div>
      <div className="bg-[#4bacc6] p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">02</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Read visible text</p></div>
      <div className="bg-[#9bbb59] p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">03</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Review extraction</p></div>
      <div className="bg-[#8064a2] text-white p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">04</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Apply rule engine</p></div>
      <div className="bg-[#c0504d] text-white p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">05</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Explain violations</p></div>
      <div className="bg-[#222] text-white p-[1vw] min-h-[13vh]"><b className="text-[1.75vw]">06</b><p className="mt-[.7vh] text-[1.5vw] font-bold">Score and report</p></div>
    </div>
  </div>
  <div className="absolute left-[4vw] top-[53vh] right-[4vw] grid grid-cols-[1fr_1fr] gap-[2vw]">
    <div><div className="inline-block bg-[#000080] text-white px-[1vw] py-[.5vh] text-[1.5vw] font-bold">INNOVATION AND UNIQUENESS</div><div className="mt-[1.2vh] grid grid-cols-2 gap-[.8vw] text-[1.5vw]"><div className="border border-[#b8c9d9] p-[1vw]"><b>Human-in-the-loop OCR</b><p>Uncertain fields are verified before scoring.</p></div><div className="border border-[#b8c9d9] p-[1vw]"><b>Deterministic decisions</b><p>AI reads text; code applies the rules.</p></div></div></div>
    <div><div className="inline-block bg-[#000080] text-white px-[1vw] py-[.5vh] text-[1.5vw] font-bold">HOW IT ADDRESSES THE PROBLEM</div><p className="mt-[1.2vh] text-[1.6vw] leading-snug">Converts an image into structured evidence, shows the exact declaration at issue, links the finding to the check performed, and keeps the final decision traceable.</p></div>
  </div>
</div>}