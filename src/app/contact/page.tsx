"use client";

import React from "react";

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container">
        <div className="page-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "start" }}>
          <div>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Get In Touch</span>
            <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px", marginBottom: "20px" }}>
              Contact Our Experts
            </h1>
            <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
              Have questions about BOOSTER specifications, regulatory alignment, or batch options? Speak to our team of researchers and business development specialists.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "20px", borderRadius: "12px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <img src="https://flagcdn.com/w40/sg.png" alt="Singapore flag" style={{ width: "28px", height: "21px", marginTop: "2px", borderRadius: "3px", objectFit: "cover", border: "1px solid rgba(0,0,0,0.12)" }} />
                <div>
                  <h4 style={{ fontWeight: 700, color: "var(--brand-primary)", margin: "0 0 4px 0" }}>Singapore Office</h4>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", margin: 0, lineHeight: "1.4" }}>
                    160 Robinson Rd, #14-04,<br />Singapore 068914
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "20px", borderRadius: "12px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <img src="https://flagcdn.com/w40/au.png" alt="Australia flag" style={{ width: "28px", height: "21px", marginTop: "2px", borderRadius: "3px", objectFit: "cover", border: "1px solid rgba(0,0,0,0.12)" }} />
                <div>
                  <h4 style={{ fontWeight: 700, color: "var(--brand-primary)", margin: "0 0 4px 0" }}>Australia Office</h4>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", margin: 0, lineHeight: "1.4" }}>
                    2302 118 Kavanagh St.<br />Southbank VIC 3006
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "20px", borderRadius: "12px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <img src="https://flagcdn.com/w40/in.png" alt="India flag" style={{ width: "28px", height: "21px", marginTop: "2px", borderRadius: "3px", objectFit: "cover", border: "1px solid rgba(0,0,0,0.12)" }} />
                <div>
                  <h4 style={{ fontWeight: 700, color: "var(--brand-primary)", margin: "0 0 4px 0" }}>India Office</h4>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", margin: 0, fontStyle: "italic" }}>
                    Coming Soon
                  </p>
                </div>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "20px", borderRadius: "12px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "1.5rem", marginTop: "2px" }}>✉️</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: "var(--brand-primary)", margin: "0 0 4px 0" }}>Email Address</h4>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", margin: 0 }}>
                    <a href="mailto:admin@cellivatetech.com" style={{ color: "inherit", textDecoration: "none" }}>admin@cellivatetech.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <iframe
              width="640px"
              height="480px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=_ga8-FgCCk2_6VVmIf-JBK2ZpxYSDJlLkaUx2VmawQ1UNUNIMUs5UEVTR1dIUUw4NFg4TTg0WDRCQS4u&embed=true"
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
