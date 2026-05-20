"use client";

import Link from "next/link";

export default function Home() {
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
                <video className="cellivate-loop-video" autoPlay loop muted playsInline aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                  <source src="/boomerang_loop.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay-shield"></div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="float-card card-growth" id="card-growth">
              <div className="card-icon-circle color-purple" style={{ background: "rgba(59, 46, 154, 0.1)", color: "#3b2e9a" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                  <path d="M3 10l6-6 6 6 6-6"></path>
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-prefix">Up to</div>
                <div className="card-stat" style={{ color: "#3b2e9a" }}>60%</div>
                <div className="card-desc">enhanced cell growth</div>
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
            opacity: 0.15,
            pointerEvents: "none"
          }} 
        />
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>The Problem</span>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#ffffff", marginTop: "10px" }}>
              Today's Standard is Fundamentally Flawed
            </h2>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "40px", borderRadius: "24px", backdropFilter: "blur(12px)" }}>
            <p style={{ fontSize: "1.6rem", fontWeight: 500, lineHeight: "1.6", color: "#e2e8f0" }}>
              "Fetal Bovine Serum (FBS) is the gold standard for growing cells — used in research, regenerative medicine, cultivated meat, and biologics. But it comes from blood drawn from cow fetuses during slaughter, making it <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>unethical</span>, <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>highly variable</span>, and <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>supply-constrained</span>. Worse, it costs more than $1000 per liter and has performance unpredictability that leads to failed experiments or products."
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", color: "#94a3b8", fontSize: "1.1rem" }}>
              The industry has tried alternatives for decades, but most are underperforming or not scalable. The market is desperate for a solution.
            </div>
          </div>
        </div>
      </section>

      {/* Why Problem Section (Slide 3) */}
      <section className="why-problem-section" style={{ padding: "100px 0", background: "var(--bg-main)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Industry Hurdles</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Critical Bottlenecks in FBS Utilization
            </h2>
          </div>

          <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "50px", height: "50px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "12px", display: "flex", alignItems: "center", fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px", justifyContent: "center" }}>
                01
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "12px" }}>Cross-Contamination Risk</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6" }}>
                Animal-derived serums bring inherent biological risks, including viruses, mycoplasma, and prions, complicating clinical regulatory pathways.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "50px", height: "50px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "12px", display: "flex", alignItems: "center", fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px", justifyContent: "center" }}>
                02
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "12px" }}>Batch-to-Batch Variability</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6" }}>
                Due to its raw collection nature, serum compositions fluctuate dramatically between lots, ruining reproducibility in academic and industrial labs.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ width: "50px", height: "50px", background: "rgba(217, 35, 52, 0.08)", color: "var(--accent-red)", borderRadius: "12px", display: "flex", alignItems: "center", fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px", justifyContent: "center" }}>
                03
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "12px" }}>Major Driver of COGS</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6" }}>
                Accounting for up to 90% of operating expenditures in cell cultivation, the cost volatility of serum restricts biomanufacturing scale.
              </p>
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
                  <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Up to 60% increase in cell growth kinetics</span>
                </li>
              </ul>
              <Link href="/tech" className="btn-primary" style={{ padding: "14px 28px", background: "var(--accent-red)", color: "#ffffff", borderRadius: "30px", fontWeight: 600, textDecoration: "none", display: "inline-flex", transition: "all 0.3s" }}>
                How It Works
              </Link>
            </div>
            
            <div className="solution-media" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "420px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/b71c154e-2a3f-46b2-afad-b6e02805631e/CVT_Booster-Image.png?format=2500w"
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
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Tailored Formulations for Scientific Success
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
            {/* Product 1: Booster */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 40px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>High Performance</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 16px 0" }}>BOOSTER Premium</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "30px", flex: 1 }}>
                Our flagship serum replacer fully enriched with specialized extracellular vesicles (EVs). Recommended for primary stem cells, gene therapy vectors, and complex biomanufacturing scales.
              </p>
            </div>

            {/* Product 2: Booster Basic */}
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 15px 40px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Standard Cultivation</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 16px 0" }}>BOOSTER Basic</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "30px", flex: 1 }}>
                A refined subset of our signature formulation. Designed for standard cell line maintenance, research-grade passages, and cost-effective daily culture tasks.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
