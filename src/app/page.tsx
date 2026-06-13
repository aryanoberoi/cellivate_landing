"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [hoveredDot, setHoveredDot] = useState<{
    day: string;
    value: string;
    type: string;
    cx: number;
    cy: number;
  } | null>(null);


  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-info">
            <div className="hero-badge" style={{ background: "rgba(217, 35, 52, 0.08)", border: "1px solid rgba(217, 35, 52, 0.15)" }}>
              <div className="badge-icon-wrapper" style={{ background: "var(--accent-red)" }}>
                <svg className="badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c0 2-.48 3.5-3.1 9.2A7 7 0 0 1 11 20z"></path>
                  <path d="M9 22a1 1 0 0 1 0-2c3 0 6-3 6-6a1 1 0 0 1 2 0c0 4-4 8-8 8z"></path>
                </svg>
              </div>
              <span className="badge-text" style={{ color: "var(--accent-red)" }}>Next-generation cell culture, built better.</span>
            </div>

            <h1 className="hero-title">
              Animal-free cell growth solutions for the future of biotech
            </h1>

            <p className="hero-subtitle">
              Booster is Cellivate's EV-based alternative to FBS, designed to improve cell growth, consistency, and sustainability across advanced cell culture applications.
            </p>

            <div className="hero-actions">
              <Link href="/pilot" className="btn-filled" style={{ background: "linear-gradient(135deg, #3b2e9a 0%, #D92334 100%)" }}>
                <span>Join Pilot Program</span>
                <div className="arrow-circle">
                  <svg className="arrow-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
              <Link href="/tech" className="btn-outlined" style={{ borderColor: "#d9dbf1", color: "var(--brand-dark)" }}>
                <span>Explore Booster</span>
                <svg className="arrow-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            <div className="hero-features-footer">
              <div className="feature-item">
                <div className="check-icon-wrapper" style={{ background: "rgba(217, 35, 52, 0.1)", color: "var(--accent-red)" }}>
                  <svg className="check-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="feature-label">Validated across multiple cell lineages</span>
              </div>
              <span className="feature-bullet" style={{ color: "var(--accent-red)" }}>•</span>
              <div className="feature-item">
                <span className="feature-label">Xeno-free</span>
              </div>
              <span className="feature-bullet" style={{ color: "var(--accent-red)" }}>•</span>
              <div className="feature-item">
                <span className="feature-label">Built for scalable workflows</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-area">
            <div className="video-perspective-wrapper">
              <div className="video-container-glass">
                <img
                  className="cellivate-loop-video"
                  src="/boomerang_still.jpg"
                  alt="Cellivate Booster cell culture concept"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="video-overlay-shield"></div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="float-card card-alternative" id="card-alternative">
              <div className="card-icon-circle color-green" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c0 2-.48 3.5-3.1 9.2A7 7 0 0 1 11 20z"></path>
                  <path d="M9 22a1 1 0 0 1 0-2c3 0 6-3 6-6a1 1 0 0 1 2 0c0 4-4 8-8 8z"></path>
                </svg>
              </div>
              <div className="card-content">
                <div className="card-desc-only">Animal-free alternative to FBS</div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Problem Statement Section (Slide 4) */}
      <section className="problem-section" style={{ background: "#0a0a0c", color: "#ffffff", padding: "100px 0", position: "relative" }}>
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
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: "50px", textAlign: "left" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>The Problem</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#ffffff", marginTop: "10px" }}>
              Fetal Bovine Serum (FBS) needs to be replaced
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            {/* Left Column: Image */}
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
              <img 
                src="/extracted_images/fbs_cow_ethical.png" 
                alt="Ethical Bovine Serum Dilemma" 
                style={{ width: "100%", display: "block", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(10,10,12,0.95), transparent)", padding: "20px 24px" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Ethical & Biological Imperative</span>
              </div>
            </div>

            {/* Right Column: Glassmorphic Bullet Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px", borderRadius: "16px", backdropFilter: "blur(12px)" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--accent-red)" }}>🔴</span> Ethically Compromised
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  Blood is drained from live bovine foetuses, cut from the uteruses of slaughtered pregnant cows — without anaesthesia.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px", borderRadius: "16px", backdropFilter: "blur(12px)" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--accent-red)" }}>🔴</span> Extreme Lot Variability & Performance Risks
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  Compositions fluctuate dramatically between batches, ruining experiment reproducibility and leading to failed experiments, biopharma runs, or products.
                </p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px", borderRadius: "16px", backdropFilter: "blur(12px)" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ color: "var(--accent-red)" }}>🔴</span> Supply-Constrained & Costly
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>
                  Global supply constraints keep costs prohibitively high and growing, with no relief in sight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Problem Section (Slide 3) */}
      <section className="why-problem-section" style={{ padding: "100px 0", background: "var(--bg-main)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Industry Hurdles</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Critical Bottlenecks in FBS Utilization
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", alignItems: "center" }}>
            {/* Left Column: Cow Fetus Diagram */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "20px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)" }}>
                <img 
                  src="/WhatsApp Image 2026-05-22 at 12.40.57 PM.jpeg" 
                  alt="FBS Sourcing Reality" 
                  style={{ width: "100%", display: "block", objectFit: "cover" }} 
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: 700, color: "var(--brand-primary)", margin: "0 0 4px 0", fontSize: "1.1rem" }}>FBS Sourcing Reality</h4>
                <p style={{ color: "var(--brand-light)", fontSize: "0.85rem", margin: 0 }}>Diagram illustrating the collection process from animal fetuses during harvesting.</p>
              </div>
            </div>

            {/* Right Column: Stacked Bottlenecks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", display: "flex", gap: "20px", alignItems: "start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "10px", display: "flex", alignItems: "center", fontSize: "1.2rem", fontWeight: 700, justifyContent: "center" }}>
                  01
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "8px", marginTop: "4px" }}>Cross-Contamination Risk</h3>
                  <p style={{ color: "var(--brand-light)", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>
                    Animal-derived serums bring inherent biological risks, including viruses, mycoplasma, and prions, complicating clinical regulatory pathways.
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", display: "flex", gap: "20px", alignItems: "start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "10px", display: "flex", alignItems: "center", fontSize: "1.2rem", fontWeight: 700, justifyContent: "center" }}>
                  02
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "8px", marginTop: "4px" }}>Batch-to-Batch Variability</h3>
                  <p style={{ color: "var(--brand-light)", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>
                    Serum compositions fluctuate dramatically between lots, ruining reproducibility in academic and industrial labs.
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", display: "flex", gap: "20px", alignItems: "start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "10px", display: "flex", alignItems: "center", fontSize: "1.2rem", fontWeight: 700, justifyContent: "center" }}>
                  03
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "8px", marginTop: "4px" }}>Major Driver of COGS</h3>
                  <p style={{ color: "var(--brand-light)", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>
                    Accounting for up to 90% of operating expenditures in cell cultivation, the cost volatility of serum restricts biomanufacturing scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Meet Booster) */}
      <section className="solution-section" style={{ background: "#101012", color: "#ffffff", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="solution-layout" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div className="solution-content">
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Tomorrow's Standard</span>
              <h2 style={{ fontSize: "3rem", fontWeight: 800, color: "#ffffff", margin: "10px 0 24px 0" }}>
                Meet BOOSTER
              </h2>
              <p style={{ fontSize: "1.2rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "20px" }}>
                Our cell-derived, animal-free serum replacer bridges the gap between ethical compliance and high-performance cellular yields. 
              </p>
              <ul style={{ listStyleType: "none", padding: 0, margin: "30px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "24px", height: "24px", background: "rgba(217, 35, 52, 0.2)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent-red)", fontWeight: "bold" }}>✓</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>100% Xeno-free and animal component-free</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "24px", height: "24px", background: "rgba(217, 35, 52, 0.2)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent-red)", fontWeight: "bold" }}>✓</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Consistent, predictable cellular signaling cues</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "24px", height: "24px", background: "rgba(217, 35, 52, 0.2)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent-red)", fontWeight: "bold" }}>✓</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Measurable increase in cell growth kinetics</span>
                </li>
              </ul>
              <Link href="/tech" className="btn-primary" style={{ padding: "14px 28px", background: "var(--accent-red)", color: "#ffffff", borderRadius: "30px", fontWeight: 600, textDecoration: "none", display: "inline-flex", transition: "all 0.3s" }}>
                How It Works
              </Link>
            </div>
            
            <div className="solution-media" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img 
                  src="/hf_20260523_061624_901e0d94-0352-4796-b721-b3c590f3f4db.png"
                  alt="BOOSTER Vial visual"
                  style={{ width: "100%", display: "block" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="product-section" style={{ padding: "100px 0", background: "var(--bg-main)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Our Offerings</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Product Formulation
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "600px", width: "100%", background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "50px 40px", boxShadow: "0 15px 40px rgba(0,0,0,0.02)", textAlign: "center" }}>
              <div style={{ width: "70px", height: "70px", background: "rgba(59, 46, 154, 0.06)", color: "var(--accent-purple)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", marginBottom: "24px" }}>
                🧪
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--brand-primary)", margin: "0 0 16px 0" }}>BOOSTER</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.8", fontSize: "1.15rem", margin: "0 0 30px 0" }}>
                EVs based on custom cells. Recommended for primary cell based workflows and biomanufacturing.
              </p>
              <Link href="/pilot" className="btn-filled" style={{ display: "inline-flex", background: "linear-gradient(135deg, #3b2e9a 0%, #D92334 100%)", padding: "14px 32px" }}>
                <span>Apply for a Sample Kit</span>
                <div className="arrow-circle">
                  <svg className="arrow-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Performance Section */}
      <section id="validation" className="proven-results-section" style={{ position: "relative", padding: "100px 0", background: "#ffffff" }}>
        <div className="section-container">
          {/* Left-aligned Header */}
          <div className="section-header-left">
            <div className="section-badge-group">
              <span className="section-badge-text">Validated Performance</span>
              <div className="section-badge-line"></div>
            </div>
            <h2 className="section-title">
              Proven results.<br />
              Across <span className="highlight-text">multiple cell types</span>.
            </h2>
            <p className="section-subtitle">
              Extensive in-house testing shows Booster consistently enhances cell growth and viability compared to FBS.
            </p>
          </div>

          {/* Main 2-Column Layout */}
          <div className="validation-grid">
            {/* Left: Chart Card */}
            <div className="chart-column">
              <div className="chart-card-container">
                {/* Chart Header */}
                <div className="chart-card-header">
                  <div className="chart-header-info">
                    <h4 className="chart-card-title">Cell Growth Comparison</h4>
                    <p className="chart-card-subtitle">Up to <span className="text-green">60% improvement</span> compared to FBS</p>
                  </div>
                  <div className="chart-header-badge">
                    <span>Up to 60% Improvement</span>
                  </div>
                </div>

                {/* Interactive SVG Chart */}
                <div className="chart-wrapper" style={{ position: "relative" }}>
                  <svg className="interactive-chart" viewBox="0 0 600 400" width="100%" height="100%">
                    <defs>
                      <filter id="purple-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.25"/>
                      </filter>
                      <linearGradient id="purple-gradient-bg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.18"/>
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    <g className="chart-grid-lines">
                      <line x1="60" y1="350" x2="560" y2="350" stroke="rgba(43, 20, 100, 0.08)" strokeWidth="1.5"/>
                      <line x1="60" y1="305.7" x2="560" y2="305.7" stroke="rgba(43, 20, 100, 0.04)" strokeDasharray="4,4"/>
                      <line x1="60" y1="261.4" x2="560" y2="261.4" stroke="rgba(43, 20, 100, 0.04)" strokeDasharray="4,4"/>
                      <line x1="60" y1="217.1" x2="560" y2="217.1" stroke="rgba(43, 20, 100, 0.04)" strokeDasharray="4,4"/>
                      <line x1="60" y1="172.9" x2="560" y2="172.9" stroke="rgba(43, 20, 100, 0.08)" strokeWidth="1.2"/>
                      <line x1="60" y1="128.6" x2="560" y2="128.6" stroke="rgba(43, 20, 100, 0.04)" strokeDasharray="4,4"/>
                      <line x1="60" y1="84.3" x2="560" y2="84.3" stroke="rgba(43, 20, 100, 0.04)" strokeDasharray="4,4"/>
                      <line x1="60" y1="40" x2="560" y2="40" stroke="rgba(43, 20, 100, 0.04)" stroke-dasharray="4,4"/>
                    </g>

                    {/* Y Axis Labels */}
                    <g className="chart-y-axis-labels" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="var(--brand-light)" textAnchor="end">
                      <text x="50" y="354">0</text>
                      <text x="50" y="309.7">25</text>
                      <text x="50" y="265.4">50</text>
                      <text x="50" y="221.1">75</text>
                      <text x="50" y="176.9">100</text>
                      <text x="50" y="132.6">125</text>
                      <text x="50" y="88.3">150</text>
                      <text x="50" y="44">175</text>
                    </g>

                    {/* Y Axis Title */}
                    <text className="chart-y-title" x="-195" y="18" transform="rotate(-90)" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="var(--brand-light)" letterSpacing="0.05em" textAnchor="middle">
                      RELATIVE CELL GROWTH (%)
                    </text>

                    {/* X Axis Labels */}
                    <g className="chart-x-axis-labels" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" fill="var(--brand-light)" textAnchor="middle">
                      <text x="60" y="372">0</text>
                      <text x="160" y="372">1</text>
                      <text x="260" y="372">2</text>
                      <text x="360" y="372">3</text>
                      <text x="460" y="372">4</text>
                      <text x="560" y="372">5</text>
                    </g>

                    {/* X Axis Title */}
                    <text className="chart-x-title" x="310" y="394" fontFamily="var(--font-sans)" fontSize="11" fontWeight="700" fill="var(--brand-light)" letterSpacing="0.05em" textAnchor="middle">
                      TIME (DAYS)
                    </text>

                    {/* Gradient Fill Under Booster Line */}
                    <path d="M 60 350 L 160 305.7 L 260 250.8 L 360 176.4 L 460 102 L 560 75.4 L 560 350 Z" fill="url(#purple-gradient-bg)" />

                    {/* FBS Path Line */}
                    <path d="M 60 350 L 160 314.6 L 260 305.7 L 360 265 L 460 226 L 560 172.9" stroke="rgba(148, 163, 184, 0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                    {/* Booster Path Line */}
                    <path d="M 60 350 L 160 305.7 L 260 250.8 L 360 176.4 L 460 102 L 560 75.4" stroke="var(--accent-purple)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#purple-glow)"/>

                    {/* FBS Data Points */}
                    <g className="fbs-dots">
                      {[
                        { cx: 60, cy: 350, day: "0", value: "0%", type: "With FBS" },
                        { cx: 160, cy: 314.6, day: "1", value: "20%", type: "With FBS" },
                        { cx: 260, cy: 305.7, day: "2", value: "25%", type: "With FBS" },
                        { cx: 360, cy: 265, day: "3", value: "48%", type: "With FBS" },
                        { cx: 460, cy: 226, day: "4", value: "70%", type: "With FBS" },
                        { cx: 560, cy: 172.9, day: "5", value: "100%", type: "With FBS" }
                      ].map((pt, i) => (
                        <circle
                          key={`fbs-${i}`}
                          cx={pt.cx}
                          cy={pt.cy}
                          r="5.5"
                          fill="#ffffff"
                          stroke="#94a3b8"
                          strokeWidth="2.5"
                          className="chart-dot"
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setHoveredDot(pt)}
                          onMouseLeave={() => setHoveredDot(null)}
                        />
                      ))}
                    </g>

                    {/* Booster Data Points */}
                    <g className="booster-dots">
                      {[
                        { cx: 60, cy: 350, day: "0", value: "0%", type: "With Booster" },
                        { cx: 160, cy: 305.7, day: "1", value: "25%", type: "With Booster" },
                        { cx: 260, cy: 250.8, day: "2", value: "56%", type: "With Booster" },
                        { cx: 360, cy: 176.4, day: "3", value: "98%", type: "With Booster" },
                        { cx: 460, cy: 102, day: "4", value: "140%", type: "With Booster" },
                        { cx: 560, cy: 75.4, day: "5", value: "155%", type: "With Booster" }
                      ].map((pt, i) => (
                        <circle
                          key={`booster-${i}`}
                          cx={pt.cx}
                          cy={pt.cy}
                          r="6"
                          fill="#ffffff"
                          stroke="var(--accent-purple)"
                          strokeWidth="3"
                          className="chart-dot booster-dot"
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setHoveredDot(pt)}
                          onMouseLeave={() => setHoveredDot(null)}
                        />
                      ))}
                    </g>
                  </svg>

                  {/* Glassmorphic React Tooltip */}
                  {hoveredDot && (
                    <div
                      style={{
                        position: "absolute",
                        left: `${(hoveredDot.cx / 600) * 100}%`,
                        top: `${(hoveredDot.cy / 400) * 100}%`,
                        transform: "translate(-50%, -100%) translateY(-10px)",
                        background: "rgba(31, 23, 76, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        color: "#fff",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        pointerEvents: "none",
                        zIndex: 100,
                        boxShadow: "0 8px 24px rgba(31, 23, 76, 0.15)",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        transition: "opacity 0.15s ease",
                      }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "#a1a1aa", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Day {hoveredDot.day}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: hoveredDot.type.includes("Booster") ? "var(--accent-purple)" : "#94a3b8" }}></span>
                        <span style={{ fontWeight: 700, color: hoveredDot.type.includes("Booster") ? "#c084fc" : "#e2e8f0" }}>{hoveredDot.value} Growth</span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#71717a", marginTop: "2px" }}>{hoveredDot.type}</div>
                    </div>
                  )}
                </div>

                {/* Chart Legend */}
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color-dot bg-purple"></span>
                    <span className="legend-text">With Booster</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color-dot bg-grey"></span>
                    <span className="legend-text">With FBS</span>
                  </div>
                </div>

                {/* Chart Sub-Callout Card */}
                <div className="chart-sub-callout">
                  <div className="sub-callout-left">
                    <div className="sub-callout-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="sub-callout-text-group">
                      <span className="sub-callout-bold">Robust performance. Reliable outcomes.</span>
                      <span className="sub-callout-subtext">See the details behind Booster.</span>
                    </div>
                  </div>
                  <Link href="/contact" className="sub-callout-link-btn" style={{ textDecoration: "none" }}>
                    <span>Request Technical Data</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Cell Types List */}
            <div className="cell-types-column">
              <div className="cell-list-container">
                <h4 className="cell-list-title">Tested Across Diverse Cell Types</h4>
                <div className="cell-list-items">
                  {/* Cell Item 1 */}
                  <div className="cell-list-item hover-glow-purple">
                    <div className="cell-item-icon-circle text-purple">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                        <circle cx="8" cy="9" r="1.5"></circle>
                        <circle cx="16" cy="9" r="1.5"></circle>
                        <circle cx="9" cy="15" r="1.5"></circle>
                        <circle cx="15" cy="15" r="1.5"></circle>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>HEK Cells</h5>
                    </div>
                  </div>

                  {/* Cell Item 2 */}
                  <div className="cell-list-item hover-glow-green">
                    <div className="cell-item-icon-circle text-green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                        <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"></path>
                        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>Mesenchymal Stem Cells (MSCs)</h5>
                    </div>
                  </div>

                  {/* Cell Item 3 */}
                  <div className="cell-list-item hover-glow-purple">
                    <div className="cell-item-icon-circle text-purple">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17 L21 7"></path>
                        <path d="M5 20 L23 10"></path>
                        <path d="M1 14 L19 4"></path>
                        <path d="M8 8 L7 10"></path>
                        <path d="M12 6 L11 8"></path>
                        <path d="M16 4 L15 6"></path>
                        <path d="M10 11 L9 13"></path>
                        <path d="M14 9 L13 11"></path>
                        <path d="M18 7 L17 9"></path>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>C2C12 Cells</h5>
                    </div>
                  </div>

                  {/* Cell Item 4 */}
                  <div className="cell-list-item hover-glow-green">
                    <div className="cell-item-icon-circle text-green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12 C 7 9, 17 9, 22 12 C 17 15, 7 15, 2 12 Z"></path>
                        <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
                        <path d="M2 12 L0 10"></path>
                        <path d="M2 12 L0 14"></path>
                        <path d="M22 12 L24 10"></path>
                        <path d="M22 12 L24 14"></path>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>Fibroblasts</h5>
                    </div>
                  </div>

                  {/* Cell Item 5 */}
                  <div className="cell-list-item hover-glow-purple">
                    <div className="cell-item-icon-circle text-purple">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 12c-2.5-3-6-4.5-10-4.5-4.5 0-8.5 2-11 5 2.5 3 6.5 5 11 5 4 0 7.5-1.5 10-5.5z"></path>
                        <path d="M2 12.5l-2-2m2 1l-2 2"></path>
                        <path d="M22 11.5l2-2.5v5l-2-2.5z"></path>
                        <circle cx="17" cy="10.5" r="1" fill="currentColor"></circle>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>Fish Cells</h5>
                    </div>
                  </div>

                  {/* Cell Item 6 */}
                  <div className="cell-list-item hover-glow-green">
                    <div className="cell-item-icon-circle text-green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <ellipse cx="12" cy="13" rx="9" ry="6"></ellipse>
                        <ellipse cx="12" cy="11" rx="9" ry="6"></ellipse>
                        <circle cx="9" cy="10" r="1.5"></circle>
                        <circle cx="14" cy="12" r="1.5"></circle>
                        <circle cx="11" cy="13" r="1"></circle>
                      </svg>
                    </div>
                    <div className="cell-item-content">
                      <h5 className="cell-item-title" style={{ color: "var(--brand-primary)", fontWeight: 700, margin: 0 }}>Cultivated Meat Cells</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Bottom Footer Bar */}
          <div className="validation-footer-bar">
            <div className="val-footer-left">
              <div className="val-check-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="val-footer-text">
                <strong>Rigorous testing. Reproducible results.</strong>
                <span className="divider-pipe">|</span>
                Boosting confidence in every culture.
              </span>
            </div>
            <Link href="/pilot" className="explore-val-link" style={{ textDecoration: "none" }}>
              <span>Explore Our Validation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
