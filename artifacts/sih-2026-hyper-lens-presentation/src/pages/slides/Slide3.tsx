import React from "react";
const base=import.meta.env.BASE_URL;

export default function Slide3(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
  <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
  <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center">[TEAM NAME]</div>
  <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none">TECHNICAL APPROACH</h1>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
  <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
  <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
  <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">03 / 06</div>

  <div className="absolute left-[3vw] top-[17vh] right-[3vw] h-[69vh]">
    <div className="absolute left-0 top-0 w-[13vw] h-[50vh] bg-[#eef5fb] border-[.2vw] border-[#9ab6cf] p-[1.1vw]">
      <h3 className="text-[1.5vw] text-[#0070c0] font-black">INPUT</h3>
      <div className="mt-[5vh] text-[2.2vw] font-black">PACKAGE IMAGE</div>
      <div className="mt-[3vh] text-[1.5vw]">Camera</div><div className="mt-[1vh] text-[1.5vw]">Upload</div><div className="mt-[1vh] text-[1.5vw]">Multi-side view</div>
    </div>
    <div className="absolute left-[14vw] top-[18vh] text-[2.8vw] text-[#0070c0]">→</div>

    <div className="absolute left-[18vw] top-0 w-[19vw] h-[50vh] border-[.2vw] border-[#0070c0] bg-white p-[1.1vw]">
      <h3 className="text-[1.5vw] text-[#0070c0] font-black">PERCEPTION</h3>
      <div className="mt-[2vh] bg-[#dcebf7] p-[.75vw] text-[1.55vw] font-bold">Gemini Vision OCR</div>
      <div className="mt-[1.2vh] bg-[#dcebf7] p-[.75vw] text-[1.55vw] font-bold">Field segmentation</div>
      <div className="mt-[1.2vh] bg-[#dcebf7] p-[.75vw] text-[1.55vw] font-bold">Confidence map</div>
      <div className="mt-[1.2vh] bg-[#dcebf7] p-[.75vw] text-[1.55vw] font-bold">Normalization</div>
    </div>
    <div className="absolute left-[38vw] top-[18vh] text-[2.8vw] text-[#0070c0]">→</div>

    <div className="absolute left-[42vw] top-0 w-[20vw] h-[50vh] border-[.2vw] border-[#77933c] bg-white p-[1.1vw]">
      <h3 className="text-[1.5vw] text-[#4f6d22] font-black">DECISION</h3>
      <div className="mt-[2vh] bg-[#eaf1df] p-[.75vw] text-[1.55vw] font-bold">Editable declarations</div>
      <div className="mt-[1.2vh] bg-[#eaf1df] p-[.75vw] text-[1.55vw] font-bold">Rule-pack resolver</div>
      <div className="mt-[1.2vh] bg-[#eaf1df] p-[.75vw] text-[1.55vw] font-bold">Deterministic checks</div>
      <div className="mt-[1.2vh] bg-[#eaf1df] p-[.75vw] text-[1.55vw] font-bold">Weighted scoring</div>
    </div>
    <div className="absolute left-[63vw] top-[18vh] text-[2.8vw] text-[#0070c0]">→</div>

    <div className="absolute right-0 top-0 w-[26vw] h-[50vh] bg-[#1f497d] text-white p-[1.1vw]">
      <h3 className="text-[1.5vw] text-[#b9d7f0] font-black">EVIDENCE + OUTPUT</h3>
      <div className="mt-[2vh] grid grid-cols-2 gap-[1vw]">
        <div className="border border-white/55 p-[.75vw] text-[1.5vw] font-bold">Field status</div>
        <div className="border border-white/55 p-[.75vw] text-[1.5vw] font-bold">Rule mapping</div>
        <div className="border border-white/55 p-[.75vw] text-[1.5vw] font-bold">Reason</div>
        <div className="border border-white/55 p-[.75vw] text-[1.5vw] font-bold">Action</div>
      </div>
      <div className="mt-[2vh] bg-white text-[#1f497d] p-[1vw] text-[1.65vw] font-black text-center">INSPECTION REPORT</div>
    </div>

    <div className="absolute left-[18vw] top-[52.5vh] w-[44vw] h-[7vh] bg-[#eef2f5] border border-[#aab8c4] flex items-center justify-center text-[1.5vw] font-bold">React + TypeScript → OpenAPI → Express API → Gemini proxy</div>
    <div className="absolute left-[64vw] top-[52.5vh] right-0 h-[7vh] bg-[#eef2f5] border border-[#aab8c4] flex items-center justify-center text-[1.5vw] font-bold">Versioned rules + audit-ready JSON</div>
    <div className="absolute left-[18vw] bottom-0 right-0 h-[7vh] flex items-center justify-between px-[1.2vw] bg-[#dce6f2] text-[1.5vw] font-bold">
      <span>LOW CONFIDENCE</span><span className="text-[2.4vw] text-[#c0504d]">↑</span><span>HUMAN CORRECTION LOOP</span><span className="text-[2.4vw] text-[#c0504d]">↺</span><span>RE-CHECK WITHOUT RE-OCR</span>
    </div>
  </div>
</div>}