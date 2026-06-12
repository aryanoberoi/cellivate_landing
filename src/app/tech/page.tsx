"use client";

import React, { useState, useRef } from "react";

export default function Tech() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const steps = [
    {
      title: "Get Cells",
      shortDesc: "From numerous sources like cell banks, off-the-shelf vials, etc.",
      desc: "We source high-quality cells from established cell banks, off-the-shelf vials, or other qualified repositories.",
      detail: "Sourcing healthy, standardized off-the-shelf source cells from cell banks ensures a robust and compliant biological starting material for Booster production.",
      image: "/extracted_images/cell_banking_vials.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 3h15" />
          <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
          <path d="M6 14h12" />
        </svg>
      )
    },
    {
      title: "Magnetic Stimulation",
      shortDesc: "Proprietary electromagnetic stimulation to prime EV release.",
      desc: "Stimulating cells within our customized electromagnetic field technology chamber to naturally boost signaling factor secretion.",
      detail: "Our proprietary electromagnetic field technology stimulates cells to naturally trigger specific physiological response. This activation drives modulated mitochondrial responses, resulting in selective sorting and loading of vital growth factors and signaling molecules into extracellular vesicles key for extracellular communication",
      image: "/extracted_images/magnetic_stimulation_chamber.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10a7 7 0 0 1 14 0v4a3 3 0 0 1-6 0v-4a1 1 0 0 0-2 0v4a3 3 0 0 1-6 0Z" />
          <path d="M5 14H3v2h2Z" />
          <path d="M19 14h2v2h-2Z" />
        </svg>
      )
    },
    {
      title: "Characterize and Formulate",
      shortDesc: "Filter, analyze, and stabilize the final formulation.",
      desc: "Filter and characterize particle-rich output using orthogonal analytics, including NTA.",
      detail: "By integrating proprietary stabilizing additives, we guarantee excellent formulation stability, batch-to-batch consistency, and absolute reproducibility—fully optimizing the final product for primary cell workflows and commercial biomanufacturing.",
      image: "/extracted_images/booster_formulation.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8M3 22h18M14 22A7 7 0 0 0 7 15v-4M9 14h2M12 9l-2-2M15 12l-5-5L14 3l5 5z" />
        </svg>
      )
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)" }}>
      {/* Intro Hero banner */}
      <section className="tech-hero">
        <div className="tech-hero-bg" />
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.85rem" }}>The Platform</span>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, marginTop: "10px" }}>Powering Booster Production</h1>
          <p style={{ fontSize: "1.15rem", color: "#cbd5e1", maxWidth: "700px", margin: "16px auto 0 auto", lineHeight: "1.6" }}>
            Serum Extracted from bovine foetuses in slaughterhouses to a platform for naturally programmable extracellular signaling
          </p>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
            Scroll to know more
          </span>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounceArrow 2s infinite" }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* Visual 3-Step Pipeline */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Process Workflow</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Streamlined 3-Step Booster Production
            </h2>
          </div>

          {/* Horizontal Pipeline Cards */}
          <div className="tech-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", position: "relative", marginBottom: "40px" }}>
            {/* Connector Line */}
            <div className="tech-connector-line" style={{
              position: "absolute",
              top: "52px",
              left: "calc(16.66% + 12px)",
              right: "calc(16.66% + 12px)",
              height: "3px",
              background: "linear-gradient(90deg, var(--accent-red), #3b2e9a, var(--accent-red))",
              zIndex: 0,
              borderRadius: "2px"
            }} />

            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  borderRadius: "20px",
                  border: `2px solid ${activeStep === idx ? "var(--accent-red)" : "rgba(0,0,0,0.06)"}`,
                  background: activeStep === idx ? "#ffffff" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: activeStep === idx ? "0 12px 32px rgba(217, 35, 52, 0.08)" : "0 4px 16px rgba(0,0,0,0.02)",
                  position: "relative",
                  zIndex: 1,
                  transform: activeStep === idx ? "translateY(-4px)" : "none"
                }}
              >
                {/* Step number badge */}
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: activeStep === idx ? "var(--accent-red)" : "#e2e8f0",
                  color: activeStep === idx ? "#ffffff" : "var(--brand-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  margin: "0 auto 16px auto",
                  transition: "all 0.3s"
                }}>
                  {idx + 1}
                </div>

                {/* Icon */}
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: activeStep === idx ? "rgba(217, 35, 52, 0.08)" : "var(--bg-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  color: activeStep === idx ? "var(--accent-red)" : "var(--brand-primary)",
                  transition: "all 0.3s"
                }}>
                  {step.icon}
                </div>

                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: activeStep === idx ? "var(--accent-red)" : "var(--brand-primary)",
                  marginBottom: "8px",
                  transition: "color 0.3s",
                  lineHeight: "1.3"
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "var(--brand-light)",
                  fontSize: "0.85rem",
                  lineHeight: "1.4",
                  margin: 0
                }}>
                  {step.shortDesc}
                </p>
              </button>
            ))}
          </div>

          {/* Detail Drawer */}
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            padding: "40px",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
            transition: "all 0.3s"
          }}>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(12px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .fade-in-up {
                animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
            `}} />
            <div 
              key={activeStep}
              className="fade-in-up tech-detail-grid" 
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Step {activeStep + 1} Detail</span>
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--brand-primary)", margin: "8px 0 12px 0" }}>
                    {steps[activeStep].title}
                  </h3>
                  <p style={{ color: "var(--brand-light)", fontSize: "1.02rem", lineHeight: "1.5", margin: 0 }}>
                    {steps[activeStep].desc}
                  </p>
                </div>
                <div style={{ background: "var(--bg-secondary)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid var(--accent-red)" }}>
                  <span style={{ fontWeight: 700, color: "var(--brand-primary)", display: "block", marginBottom: "6px", fontSize: "0.9rem" }}>PRODUCT FORMULATION:</span>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.55", margin: 0 }}>
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>
              
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
                <img 
                  src={(steps[activeStep] as any).image} 
                  alt={steps[activeStep].title} 
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracellular Vesicles (EVs) */}
      <section style={{ background: "#121214", color: "#ffffff", padding: "100px 0" }}>
        <div className="section-container">
          <div className="tech-ev-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Our secret Sauce</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#ffffff", margin: "10px 0 24px 0" }}>
                Extracellular Vesicles (EVs)
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "30px" }}>
                Cells communicate and regulate biological responses through different mechanisms. EVs are an example. Membrane-bound particles released by cells carry proteins, RNA, lipids, and other signaling cargo.
              </p>
              
              <div className="tech-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>Nano-to-Micron</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>EVs exhibit a heterogenous size distribution from the nanoscale to the sub-micron scale</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>2013</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>Nobel Prize for their discoveries of the molecular machinery that regulates vesicle traffic – the cell's vital transport system (James E. Rothman, Randy W. Schekman, and Thomas C. Südhof)</p>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", aspectRatio: "16/9", display: "flex", justifyContent: "center" }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/EVs%20Communicate-Cellivate%20Technologies.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(18, 18, 20, 0.4), transparent)", pointerEvents: "none" }} />
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                style={{ position: "absolute", bottom: "20px", right: "20px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 5, backdropFilter: "blur(4px)", transition: "all 0.2s ease" }}
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Rationale & Mechanistic Basis */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div className="tech-mechanism-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Mechanism of Action</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 20px 0" }}>
                Scientific Rationale & Mechanistic Basis
              </h2>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "20px" }}>
                Electromagnetic field technology induces <strong>mitohormesis</strong> (mitochondrial survival adaptations). This promotes mitochondriogenesis and reduces apoptosis.
              </p>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "24px" }}>
                Magnetic modulation activates a <strong>TRPC1</strong>-mediated calcium–mitochondrial signalling axis, enhancing cellular respiration and upregulating PGC-1α expression. This metabolic reprogramming supports the production of an enriched secretome containing key proteins and bioactive molecules.
              </p>
              
              <div style={{ borderLeft: "4px solid var(--accent-red)", paddingLeft: "20px", fontStyle: "italic", color: "var(--brand-light)" }}>
                "Electromagnetic field technology stimulation triggers extracellular vesicle release, creating an ideal cell-derived substrate for muscle, cartilage, and neural repair assays."
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-primary)", marginTop: "8px", fontStyle: "normal" }}>
                  — Published in Biomaterials, Adv. Biosystems, and Stem Cell Research
                </span>
              </div>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "20px" }}>Tested Across Diverse Cell Types</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px" }}>
                  <span style={{ fontWeight: 700, color: "var(--brand-primary)" }}>HEK Cells</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px" }}>
                  <span style={{ fontWeight: 700, color: "var(--brand-primary)" }}>Mesenchymal Stem Cells (MSCs)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Data */}
      <section style={{ padding: "100px 0", background: "var(--bg-main)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>In-House Data</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Booster vs FBS — Cell Growth Results
            </h2>
            <p style={{ color: "var(--brand-light)", fontSize: "1.05rem", maxWidth: "600px", margin: "16px auto 0 auto", lineHeight: "1.6" }}>
              Head-to-head performance across HEK293T cells shows nearly 2× higher cell density with Booster compared to FBS at equivalent concentrations.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px", alignItems: "center" }}>
            {/* SVG Bar Chart */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "4px" }}>HEK293T</h3>
              <p style={{ color: "var(--brand-light)", fontSize: "0.85rem", marginBottom: "32px" }}>Cell density (×10⁶ cells/mL) after 72 hours</p>

              <div style={{ position: "relative", height: "240px", display: "flex", alignItems: "flex-end", gap: "48px", paddingLeft: "48px", paddingBottom: "40px" }}>
                {/* Y-axis labels */}
                {[0, 1, 2, 3, 4, 5].map(v => (
                  <div key={v} style={{ position: "absolute", left: 0, bottom: `${(v / 5) * 200}px`, width: "40px", textAlign: "right", fontSize: "0.75rem", color: "var(--brand-light)", fontWeight: 600, lineHeight: 1 }}>
                    {v}
                  </div>
                ))}
                {/* Y-axis grid lines */}
                {[1, 2, 3, 4, 5].map(v => (
                  <div key={v} style={{ position: "absolute", left: "48px", right: 0, bottom: `${(v / 5) * 200}px`, height: "1px", background: v === 5 ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)", borderTop: "1px dashed rgba(0,0,0,0.06)" }} />
                ))}

                {/* FBS Bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#94a3b8" }}>2.2</span>
                  <div style={{ position: "relative", width: "80px" }}>
                    {/* Error bar */}
                    <div style={{ position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                      <div style={{ width: "16px", height: "1px", background: "#94a3b8" }} />
                      <div style={{ width: "1px", height: "18px", background: "#94a3b8" }} />
                      <div style={{ width: "16px", height: "1px", background: "#94a3b8" }} />
                    </div>
                    <div style={{ height: `${(2.2 / 5) * 200}px`, background: "linear-gradient(180deg, #94a3b8 0%, #64748b 100%)", borderRadius: "8px 8px 0 0", width: "100%", transition: "all 0.4s" }} />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b" }}>FBS</span>
                </div>

                {/* Booster Bar */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#3b2e9a" }}>4.0</span>
                  <div style={{ position: "relative", width: "80px" }}>
                    {/* Error bar */}
                    <div style={{ position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                      <div style={{ width: "16px", height: "1px", background: "#3b2e9a" }} />
                      <div style={{ width: "1px", height: "18px", background: "#3b2e9a" }} />
                      <div style={{ width: "16px", height: "1px", background: "#3b2e9a" }} />
                    </div>
                    <div style={{ height: `${(4.0 / 5) * 200}px`, background: "linear-gradient(180deg, #5b46c4 0%, #3b2e9a 100%)", borderRadius: "8px 8px 0 0", width: "100%", transition: "all 0.4s", boxShadow: "0 8px 24px rgba(59,46,154,0.25)" }} />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#3b2e9a" }}>Booster</span>
                </div>
              </div>

              {/* X-axis baseline */}
              <div style={{ marginLeft: "48px", height: "2px", background: "rgba(0,0,0,0.1)", borderRadius: "1px", marginBottom: "16px" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "48px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "linear-gradient(180deg, #5b46c4 0%, #3b2e9a 100%)" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--brand-light)", fontWeight: 600 }}>Booster</span>
                <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#94a3b8", marginLeft: "12px" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--brand-light)", fontWeight: 600 }}>FBS</span>
              </div>
            </div>

            {/* Callout stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "30px", borderRadius: "20px", boxShadow: "0 8px 24px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#3b2e9a", lineHeight: 1 }}>~1.8×</div>
                <div style={{ fontWeight: 700, color: "var(--brand-primary)", marginTop: "8px", fontSize: "1rem" }}>Higher cell density</div>
                <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", marginTop: "6px", lineHeight: "1.5" }}>
                  Booster-treated HEK293T cells reach nearly double the density of FBS-treated cultures under identical conditions.
                </p>
              </div>
              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "30px", borderRadius: "20px", boxShadow: "0 8px 24px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--accent-red)", lineHeight: 1 }}>0%</div>
                <div style={{ fontWeight: 700, color: "var(--brand-primary)", marginTop: "8px", fontSize: "1rem" }}>Animal components</div>
                <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", marginTop: "6px", lineHeight: "1.5" }}>
                  Fully xeno-free formulation with no fetal bovine serum, no animal-derived additives, and no batch variability.
                </p>
              </div>
              <div style={{ background: "rgba(59,46,154,0.04)", border: "1px solid rgba(59,46,154,0.1)", padding: "20px 24px", borderRadius: "16px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>🔬</span>
                <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", lineHeight: "1.55", margin: 0 }}>
                  Data generated in-house under standardised culture conditions. Results are representative of ≥3 independent experiments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Table */}
      <section style={{ padding: "100px 0", background: "#fdfdfb" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>The Standard Matrix</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Competitive Technical Landscape
            </h2>
          </div>

          <div className="tech-table-wrap" style={{ overflowX: "auto", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 15px 40px rgba(0,0,0,0.02)", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#ffffff", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "#121214", color: "#ffffff" }}>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Parameter</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>FBS (Fetal Bovine Serum)</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Recombinant Proteins</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Hydrolysates</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>HPL (Platelet Lysate)</th>
                  <th style={{ padding: "20px", fontWeight: 600, background: "#3b2e9a" }}>Cellivate BOOSTER</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Performance</td>
                  <td style={{ padding: "20px" }}>High (Broad)</td>
                  <td style={{ padding: "20px" }}>Moderate–High (Narrow)</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High (Specific)</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "#3b2e9a", background: "rgba(59, 46, 154, 0.02)" }}>High (Targeted & Broad)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Scalability</td>
                  <td style={{ padding: "20px" }}>Limited (Slaughterhouse)</td>
                  <td style={{ padding: "20px" }}>Limited (Cost-driven)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Limited</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "#3b2e9a", background: "rgba(59, 46, 154, 0.02)" }}>High (Cell-based loop)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Complexity</td>
                  <td style={{ padding: "20px" }}>High (Undefined)</td>
                  <td style={{ padding: "20px" }}>Low</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "#3b2e9a", background: "rgba(59, 46, 154, 0.02)" }}>High (Functional Signaling)</td>
                </tr>
                <tr>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Cost Trajectory</td>
                  <td style={{ padding: "20px" }}>Increasing (Supply constraints)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Low–Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "#3b2e9a", background: "rgba(59, 46, 154, 0.02)" }}>Decreasing with scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
