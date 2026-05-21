"use client";

import React, { useState } from "react";

export default function Tech() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Get Cells",
      shortDesc: "from numerous sources like cell banks, off the shelf, etc",
      desc: "We source high-quality donor cells from established cell banks, off-the-shelf vials, or other qualified repositories.",
      detail: "Sourcing healthy, standardized donor cells from cell banks or off-the-shelf configurations ensures a robust and compliant biological starting material for Booster production.",
      image: "/extracted_images/cell_banking_vials.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    },
    {
      title: "Magnetic Stimulation",
      shortDesc: "Proprietary electromagnetic stimulation to prime EV release",
      desc: "Priming cells within our customized electromagnetic field technology chamber to boost signaling factor secretion.",
      detail: "Our proprietary electromagnetic field technology primes cells to trigger specific physiological responses. This cellular activation drives controlled mitochondrial responses, stimulating cells to package growth factors and signaling cues into extracellular vesicles.",
      image: "/extracted_images/magnetic_stimulation_chamber.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      )
    },
    {
      title: "Clarify, Characterize, and Formulate",
      shortDesc: "Filter, analyze, and stabilize the final formulation",
      desc: "Filter the conditioned media and characterize particle-rich output using orthogonal analytics, including NTA.",
      detail: "We introduce proprietary stabilizer additives to guarantee output stability, batch-to-batch consistency, and complete reproducibility. This ensures that the final formulation is highly optimized for primary cell-based workflows and downstream biomanufacturing.",
      image: "/extracted_images/booster_formulation.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)" }}>
      {/* Intro Hero banner */}
      <section style={{ background: "#0a0a0c", color: "#ffffff", padding: "80px 0", textAlign: "center", position: "relative" }}>
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>The Platform</span>
          <h1 style={{ fontSize: "clamp(1.8rem, 6vw, 3.2rem)", fontWeight: 800, marginTop: "10px" }}>The technology that powers our Booster production</h1>
          <p style={{ fontSize: "1.2rem", color: "#cbd5e1", maxWidth: "700px", margin: "20px auto 0 auto", lineHeight: "1.6" }}>
            From raw animal extraction to programmable extracellular signaling platforms.
          </p>
        </div>
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundImage: "url('/cells_microscope.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            opacity: 0.1,
            pointerEvents: "none"
          }} 
        />
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
                  <span style={{ fontWeight: 700, color: "var(--brand-primary)", display: "block", marginBottom: "6px", fontSize: "0.9rem" }}>BIOLOGICAL ENGINE:</span>
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
                Cells communicate and regulate biological responses via extracellular vesicles (EVs). Membrane-bound particles released by cells carry proteins, RNA, lipids, and other signaling cargo.
              </p>
              
              <div className="tech-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>Nano-to-Micron</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>EVs span a broad nano-to-micron size range</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>2013</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>Nobel Prize for discoveries of the machinery regulating vesicle traffic</p>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", aspectRatio: "16/9", display: "flex", justifyContent: "center" }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src="/boomerang_loop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(18, 18, 20, 0.4), transparent)", pointerEvents: "none" }} />
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
                Our electromagnetic field technology induces <strong>mitohormesis</strong> (mitochondrial survival adaptations). This promotes mitochondriogenesis and reduces apoptosis.
              </p>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "24px" }}>
                Specifically, magnetic modulation activates a calcium-mitochondrial axis via the <strong>TRPC1</strong> (Transient Receptor Potential Canonical 1) channel. This stimulates cellular respiration and co-activates PGC-1α transcription, generating high secretome output containing vital proteins and bio-active molecules.
              </p>
              
              <div style={{ borderLeft: "4px solid var(--accent-red)", paddingLeft: "20px", fontStyle: "italic", color: "var(--brand-light)" }}>
                "Electromagnetic field technology stimulation triggers extracellular vesicle release, creating an ideal cell-derived substrate for muscle, cartilage, and neural repair assays."
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-primary)", marginTop: "8px", fontStyle: "normal" }}>
                  — Published in Biomaterials, Adv. Biosystems, and Stem Cell Research
                </span>
              </div>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "20px" }}>Validated Growth Lineages</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Myogenesis (Muscle)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>2x EV Output</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Stem Cells (hMSC)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>Comparable to FBS</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Fibroblasts (HFB)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>Enhanced Proliferation</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Cancer Assays (HCT)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>14x EV Output</span>
                </div>
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
                  <th style={{ padding: "20px", fontWeight: 600, background: "var(--accent-red)" }}>Cellivate BOOSTER</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Performance</td>
                  <td style={{ padding: "20px" }}>High (Broad)</td>
                  <td style={{ padding: "20px" }}>Moderate–High (Narrow)</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High (Specific)</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Targeted & Broad)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Scalability</td>
                  <td style={{ padding: "20px" }}>Limited (Slaughterhouse)</td>
                  <td style={{ padding: "20px" }}>Limited (Cost-driven)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Limited</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Cell-based loop)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Complexity</td>
                  <td style={{ padding: "20px" }}>High (Undefined)</td>
                  <td style={{ padding: "20px" }}>Low</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Functional Signaling)</td>
                </tr>
                <tr>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Cost Trajectory</td>
                  <td style={{ padding: "20px" }}>Increasing (Supply constraints)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Low–Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>Decreasing with scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
