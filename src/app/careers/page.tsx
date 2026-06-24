"use client";

import React from "react";

export default function Careers() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container">
        <div className="page-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}>
          <div>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Join Our Team</span>
            <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px", marginBottom: "20px" }}>
              Careers at Cellivate
            </h1>
            <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
              We're building animal-free cell culture solutions for the future of biotech. If you're passionate about science, sustainability, and solving hard problems, we'd love to hear from you.
            </p>

            <div style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #fff 100%)", border: "1px solid rgba(0,0,0,0.08)", padding: "24px 28px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{ background: "var(--accent-red)", borderRadius: "12px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p style={{ color: "var(--brand-light)", fontSize: "0.85rem", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 600 }}>Send your resume to</p>
                <a href="mailto:admin@cellivatetech.com" style={{ color: "var(--brand-primary)", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>admin@cellivatetech.com</a>
              </div>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <iframe
              width="640px"
              height="480px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=_ga8-FgCCk2_6VVmIf-JBK2ZpxYSDJlLkaUx2VmawQ1UNjNEOFRaMURIV0pRTUFWRVQ2RUZMOUUzNi4u&embed=true"
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
