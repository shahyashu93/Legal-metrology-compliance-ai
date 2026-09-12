import React, { useState, useEffect, useRef } from "react";
import img_1 from "./assets/images/image_2.png";
import img_2 from "./assets/images/image_3.svg";
import img_3 from "./assets/images/image_4.svg";
import img_4 from "./assets/images/image_5.svg";
import img_5 from "./assets/images/image_6.svg";
import img_6 from "./assets/images/image_7.svg";
import img_7 from "./assets/images/image_8.svg";
import img_8 from "./assets/images/image_9.svg";
import img_9 from "./assets/images/image_10.svg";
import img_10 from "./assets/images/image_11.svg";
import img_11 from "./assets/images/image_12.svg";
import img_12 from "./assets/images/image_13.svg";
import img_13 from "./assets/images/image_14.svg";
import img_14 from "./assets/images/image_15.svg";
const Slide2: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 1280, h / 720);
      setLayout({
        s,
        x: (w - 1280 * s) / 2,
        y: (h - 720 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-2" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-2" style={{
      position: "absolute",
      width: "1280px",
      height: "720px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#ffffff",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "0px",
        top: "667.17px",
        width: "1280px",
        height: "52.83px",
        boxSizing: "border-box",
        backgroundColor: "#0070C0",
        boxShadow: "0px 2.41px 0px rgba(128, 128, 128, 0.35)"
      }} /><div key={1} style={{
        position: "absolute",
        left: "19.21px",
        top: "0px",
        width: "1152px",
        height: "120px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><br /><span style={{
            fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"IDEA TITLE  "}</span><br /><span style={{
            fontSize: "calc(36pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "700",
            color: "#000000"
          }}>{"           "}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "14.42px",
        top: "146.69px",
        width: "1271.74px",
        height: "142.18px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif",
            color: "#eeece1",
            backgroundColor: "#000080"
          }}>{"PROPOSED SOLUTION                                                                                             "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif"
          }}>{"PackCheck Ai scans a packaged product using a phone camera,"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif"
          }}>{"Extracts label information and checks it against Legal metrology "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif"
          }}>{"Rules, "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif",
            color: "#c0504d"
          }}>{"highlights violations"}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif"
          }}>{", and generates "}</span><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "Arial, 'Helvetica Neue', sans-serif",
            color: "#77933c"
          }}>{"an inspection report. "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "488px",
        top: "667.33px",
        width: "336.38px",
        height: "38.33px",
        boxSizing: "border-box",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
            color: "#ffffff"
          }}>{"@SIH Idea submission- Template"}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "34.62px",
        top: "26.48px",
        width: "131.43px",
        height: "84.76px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"Your Team Name"}</span></p></div><img key={5} src={img_1} alt="Picture 10" style={{
        position: "absolute",
        left: "1026.78px",
        top: "0.16px",
        width: "236.2px",
        height: "111.53px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={6} style={{
        position: "absolute",
        left: "739.41px",
        top: "34.93px",
        width: "349.62px",
        height: "106.63px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(24pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "700",
            color: "#4f6228"
          }}>{"PackCheck AI"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#808080"
          }}>{"Legal Metrology Compliance AI"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "671.99px",
        top: "269.71px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#000000",
        borderRadius: "50%"
      }} /><div key={8} style={{
        position: "absolute",
        left: "143.78px",
        top: "265.15px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#4bacc6",
        borderRadius: "50%"
      }} /><div key={9} style={{
        position: "absolute",
        left: "9.88px",
        top: "270.32px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#f79646",
        borderRadius: "50%"
      }} /><div key={10} style={{
        position: "absolute",
        left: "274.59px",
        top: "265.95px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#9bbb59",
        borderRadius: "50%"
      }} /><div key={11} style={{
        position: "absolute",
        left: "407.39px",
        top: "265.15px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#8064a2",
        borderRadius: "50%"
      }} /><div key={12} style={{
        position: "absolute",
        left: "539.19px",
        top: "268.69px",
        width: "85.05px",
        height: "85.42px",
        boxSizing: "border-box",
        backgroundColor: "#c0504d",
        borderRadius: "50%"
      }} /><img key={13} src={img_2} alt="Smart Phone with solid fill" style={{
        position: "absolute",
        left: "16.05px",
        top: "280.9px",
        width: "72.7px",
        height: "59.14px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={14} src={img_3} alt="Magnifying glass with solid fill" style={{
        position: "absolute",
        left: "153.55px",
        top: "275.74px",
        width: "69.72px",
        height: "59.14px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={15} src={img_4} alt="Checklist with solid fill" style={{
        position: "absolute",
        left: "288.54px",
        top: "285.27px",
        width: "63.62px",
        height: "55.52px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={16} src={img_5} alt="Scales of justice with solid fill" style={{
        position: "absolute",
        left: "426.82px",
        top: "279.05px",
        width: "46.17px",
        height: "60.99px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={17} src={img_6} alt="Warning with solid fill" style={{
        position: "absolute",
        left: "553.11px",
        top: "271.11px",
        width: "57.21px",
        height: "67.96px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={18} src={img_7} alt="Document with solid fill" style={{
        position: "absolute",
        left: "682.6px",
        top: "277.45px",
        width: "72.52px",
        height: "69.94px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><svg key={19} style={{
        position: "absolute",
        left: "228.83px",
        top: "311.23px",
        width: "45.76px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="45.76" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><svg key={20} style={{
        position: "absolute",
        left: "359.64px",
        top: "310.47px",
        width: "45.76px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="45.76" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><svg key={21} style={{
        position: "absolute",
        left: "494.13px",
        top: "313.03px",
        width: "45.76px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="45.76" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><svg key={22} style={{
        position: "absolute",
        left: "627.38px",
        top: "313.81px",
        width: "45.76px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="45.76" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><svg key={23} style={{
        position: "absolute",
        left: "98.02px",
        top: "313.03px",
        width: "45.76px",
        height: "1px",
        overflow: "visible"
      }}><line x1="0" y1="0" x2="45.76" y2="0" stroke="#000000" strokeWidth="1.33" /></svg><div key={24} style={{
        position: "absolute",
        left: "-7.23px",
        top: "361.23px",
        width: "916.65px",
        height: "113.09px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontWeight: "700"
          }}>{"1.Scan Package   2.Read Label     3.Extract Info   4.Check compliance  5.Detect Violations   6.Score & Report"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"Capture image         OCR + Computer    Gets key details      Verify with Legal               Highlights exact area    Generate Compliance"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"Using phone             vision extracts        like MRP, NET          Metrology Rules &           of issue and explains    score and inspection"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))"
          }}>{"camera                      text                          QTY, etc.                   requirements                   applicable rules              report"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "6.5px",
        top: "465.59px",
        width: "351.38px",
        height: "38.78px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#ffffff",
            backgroundColor: "#000080"
          }}>{"INNOVATION AND UNIQUENESS"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "14.57px",
        top: "510.83px",
        width: "176.92px",
        height: "142.45px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        border: "1.33px solid #bfbfbf",
        borderRadius: "23.74px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"VISUAL EVIDENCE"}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "204.98px",
        top: "508.99px",
        width: "176.92px",
        height: "142.45px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        border: "1.33px solid #d9d9d9",
        borderRadius: "23.74px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"RULE-LINKED"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"FINDINGS"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "583.56px",
        top: "508.06px",
        width: "176.92px",
        height: "142.45px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        border: "1.33px solid #d9d9d9",
        borderRadius: "23.74px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"INSPECTION"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"REPORT"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "394.27px",
        top: "508.06px",
        width: "176.92px",
        height: "142.45px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        border: "1.33px solid #d9d9d9",
        borderRadius: "23.74px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"COMPLIANCE"}</span></p><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"SCORE"}</span></p></div><img key={30} src={img_8} alt="Eye with solid fill" style={{
        position: "absolute",
        left: "66.02px",
        top: "505.98px",
        width: "57.81px",
        height: "75.6px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={31} src={img_7} alt="Document with solid fill" style={{
        position: "absolute",
        left: "261.72px",
        top: "517.49px",
        width: "63.44px",
        height: "60.94px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={32} src={img_9} alt="Bar chart with solid fill" style={{
        position: "absolute",
        left: "437.21px",
        top: "508.99px",
        width: "81.05px",
        height: "75.6px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={33} src={img_10} alt="List with solid fill" style={{
        position: "absolute",
        left: "638.54px",
        top: "514.54px",
        width: "61.13px",
        height: "70.05px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><div key={34} style={{
        position: "absolute",
        left: "856.95px",
        top: "162.75px",
        width: "380.9px",
        height: "38.78px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#ffffff",
            backgroundColor: "#000080"
          }}>{"HOW IT ADDRESSES THE PROBLEM"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "833.14px",
        top: "201.52px",
        width: "436.06px",
        height: "401.61px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        border: "1.33px solid #d9d9d9",
        borderRadius: "66.94px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4.8px 9.6px 4.8px 9.6px",
        wordWrap: "break-word"
      }}><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"        "}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"Saves Time"}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"- Automates Manual       "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"          checking "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"        "}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"Accurate and Consistent-"}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"Reduces              "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"         human errors"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"         "}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"Evidence Based"}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"- Shows exact   "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"         violations with rule reference"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))"
          }}>{"\xA0"}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontWeight: "700",
            color: "#000000"
          }}>{"         Easy reporting"}</span><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"- Generates digital "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"         inspection reports for records                "}</span></p><p style={{
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            color: "#000000"
          }}>{"         and action"}</span></p></div><img key={36} src={img_11} alt="Clock with solid fill" style={{
        position: "absolute",
        left: "856.95px",
        top: "222.08px",
        width: "48.21px",
        height: "55.24px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={37} src={img_12} alt="Eye with solid fill" style={{
        position: "absolute",
        left: "851.65px",
        top: "303.55px",
        width: "47.09px",
        height: "55.22px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={38} src={img_13} alt="Paperclip with solid fill" style={{
        position: "absolute",
        left: "848.58px",
        top: "393.19px",
        width: "60.84px",
        height: "56.55px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /><img key={39} src={img_14} alt="Document with solid fill" style={{
        position: "absolute",
        left: "856.95px",
        top: "491.6px",
        width: "48px",
        height: "56.55px",
        boxSizing: "border-box",
        objectFit: "fill"
      }} /></div></div>;
};
export default Slide2;
