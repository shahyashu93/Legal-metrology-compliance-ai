import React from "react";
const base=import.meta.env.BASE_URL;

export default function Slide2(){return <div className="w-screen h-screen overflow-hidden relative bg-[#fbfdff] text-[#111] font-sans">
  <div className="absolute inset-x-0 top-0 h-[15vh] bg-[#f8fbff] border-b-[0.35vh] border-[#d6e4f2]" />
  <div className="absolute left-[3vw] top-[2.5vh] w-[9vw] h-[9vh] rounded-full border-[0.18vw] border-[#0070c0] bg-white flex items-center justify-center font-bold text-[1.5vw] text-[#1f497d] text-center leading-tight">[TEAM NAME]</div>
  <h1 className="absolute left-[15vw] right-[20vw] top-[4.1vh] text-center font-serif font-bold text-[3vw] leading-none text-[#111]">IDEA TITLE</h1>
  <img src={`${base}sih-2026-logo.png`} crossOrigin="anonymous" alt="Smart India Hackathon 2026 logo" className="absolute right-[2vw] top-[0.4vh] w-[17vw] h-[12vh] object-contain" />
  <div className="absolute inset-x-0 bottom-0 h-[7.4vh] bg-[#0070c0]" />
  <div className="absolute left-[38vw] bottom-[2.15vh] text-white text-[1.5vw] font-medium">@SIH Idea submission- Template</div>
  <div className="absolute right-[2vw] bottom-[2.1vh] text-white/85 text-[1.5vw]">02 / 06</div>

  <div className="absolute left-[4vw] top-[18vh] w-[29vw] h-[66vh]">
    <div className="inline-block bg-[#000080] text-white px-[1vw] py-[.55vh] text-[1.5vw] font-bold">PROPOSED SOLUTION</div>
    <h2 className="mt-[1.5vh] text-[3.4vw] font-black tracking-tight text-[#1f497d]">HYPER LENS</h2>
    <div className="mt-[1.5vh] space-y-[1.3vh] text-[1.75vw] leading-snug">
      <p><b>AI reads.</b> Rules decide.</p>
      <p><b>Users verify</b> uncertain fields.</p>
      <p><b>Evidence remains</b> visible in every finding.</p>
    </div>
    <img src={`${base}hyper-lens-home.jpg`} crossOrigin="anonymous" alt="HYPER LENS working prototype" className="absolute left-0 bottom-0 w-[29vw] h-[25vh] object-cover object-top border-[0.2vw] border-[#9bb6cf]" />
  </div>

  <div className="absolute left-[37vw] top-[18vh] right-[4vw] h-[66vh]">
    <div className="text-[1.5vw] text-[#4c5b69] font-bold tracking-[.13em]">END-TO-END WORKFLOW</div>
    <div className="absolute left-0 top-[7vh] w-[17vw] h-[16vh] bg-[#f79646] p-[1.1vw]"><b className="text-[1.8vw]">01</b><p className="text-[1.5vw] font-bold">Capture / upload package</p></div>
    <div className="absolute left-[18vw] top-[12vh] text-[3vw] text-[#0070c0]">→</div>
    <div className="absolute left-[23vw] top-[7vh] w-[17vw] h-[16vh] bg-[#4bacc6] p-[1.1vw]"><b className="text-[1.8vw]">02</b><p className="text-[1.5vw] font-bold">Gemini extracts declarations</p></div>
    <div className="absolute left-[41vw] top-[12vh] text-[3vw] text-[#0070c0]">→</div>
    <div className="absolute right-0 top-[7vh] w-[17vw] h-[16vh] bg-[#9bbb59] p-[1.1vw]"><b className="text-[1.8vw]">03</b><p className="text-[1.5vw] font-bold">Human confirms uncertainty</p></div>

    <div className="absolute right-[7vw] top-[23.5vh] text-[3vw] text-[#0070c0]">↓</div>
    <div className="absolute right-0 top-[31vh] w-[17vw] h-[16vh] bg-[#8064a2] text-white p-[1.1vw]"><b className="text-[1.8vw]">04</b><p className="text-[1.5vw] font-bold">Rule engine evaluates fields</p></div>
    <div className="absolute left-[41vw] top-[36vh] text-[3vw] text-[#0070c0]">←</div>
    <div className="absolute left-[23vw] top-[31vh] w-[17vw] h-[16vh] bg-[#c0504d] text-white p-[1.1vw]"><b className="text-[1.8vw]">05</b><p className="text-[1.5vw] font-bold">Violations linked to reasons</p></div>
    <div className="absolute left-[18vw] top-[36vh] text-[3vw] text-[#0070c0]">←</div>
    <div className="absolute left-0 top-[31vh] w-[17vw] h-[16vh] bg-[#1f497d] text-white p-[1.1vw]"><b className="text-[1.8vw]">06</b><p className="text-[1.5vw] font-bold">Score + inspection report</p></div>
    <div className="absolute left-0 right-0 bottom-0 h-[11vh] border-[0.2vw] border-[#1f497d] bg-[#eef5fb] flex items-center justify-around text-[1.55vw] font-bold">
      <span>Traceable</span><span className="text-[#0070c0]">•</span><span>Repeatable</span><span className="text-[#0070c0]">•</span><span>Correction-aware</span><span className="text-[#0070c0]">•</span><span>Report-ready</span>
    </div>
  </div>
</div>}