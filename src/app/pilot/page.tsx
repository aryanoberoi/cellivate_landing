"use client";

import React from "react";

export default function Pilot() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container">
        <div className="page-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}>
          <div>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Pilot Program</span>
            <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px", marginBottom: "20px" }}>
              Join the Cellivate Pilot Network
            </h1>
            <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
              We collaborate with advanced biotechnology teams, cultivated meat producers, and skincare labs to benchmark BOOSTER directly against traditional fetal bovine serum.
            </p>

            <div style={{ background: "rgba(217, 35, 52, 0.04)", border: "1px solid rgba(217, 35, 52, 0.1)", padding: "30px", borderRadius: "16px" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "12px" }}>Why Participate?</h3>
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>✓ Benchmark cell-based performance side-by-side with FBS.</li>
                <li>✓ Up to 40% discount for early pilot customers who subsequently purchase from us.</li>
                <li>✓ Shift to a 100% animal-free, ethical supply pipeline.</li>
              </ul>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <iframe
              width="640px"
              height="480px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=_ga8-FgCCk2_6VVmIf-JBK2ZpxYSDJlLkaUx2VmawQ1UOFNNNlEyTVQ1NEdNNVozQkJWMDJUVVFRVC4u&embed=true"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh", width: "100%" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
}
