"use client";

import React, { useState } from "react";

export default function Pilot() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    application: "Stem Cells",
    volume: "< 1 Liter",
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_PILOT_ID || "mbdbdyyj";

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          application: "Stem Cells",
          volume: "< 1 Liter",
          notes: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

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
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "80px", height: "80px", background: "rgba(16, 185, 129, 0.08)", color: "#10b981", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", marginBottom: "24px" }}>
                  ✓
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "12px" }}>Application Received!</h3>
                <p style={{ color: "var(--brand-light)", fontSize: "1.05rem", lineHeight: "1.5" }}>
                  Thank you for applying. A member of our technical team will review your application specifications and coordinate your sample distribution package.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ marginTop: "30px", padding: "12px 24px", background: "var(--accent-red)", color: "#ffffff", border: "none", borderRadius: "30px", fontWeight: 600, cursor: "pointer" }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {status === "error" && (
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "16px", borderRadius: "12px", color: "#991b1b", fontSize: "0.95rem", lineHeight: "1.5" }}>
                    ⚠️ Something went wrong submitting your application. Please try again or email us directly at <strong>admin@cellivatetech.com</strong>.
                  </div>
                )}
                <div>
                  <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Contact Person</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="Dr. Sarah Jenkins"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Professional Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="s.jenkins@biolabs.org"
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Institution / Organization</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="BioResearch Institute Inc."
                  />
                </div>

                <div>
                  <label htmlFor="application" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Primary Cell Culture Focus</label>
                  <select
                    id="application"
                    value={formData.application}
                    onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem", background: "#ffffff" }}
                  >
                    <option>Stem Cells (MSC/iPSC)</option>
                    <option>Biopharma Vector Lines (CHO/HEK)</option>
                    <option>Skincare Actives Research</option>
                    <option>Cultivated Meat</option>
                    <option>Immunotherapy (T-Cells/NK-Cells)</option>
                    <option>Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="volume" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Est. Monthly Serum Usage</label>
                  <select
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem", background: "#ffffff" }}
                  >
                    <option>&lt; 1 Liter</option>
                    <option>1 - 10 Liters</option>
                    <option>10 - 50 Liters</option>
                    <option>50+ Liters</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Lineage or Protocol Details (Optional)</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem", resize: "none" }}
                    placeholder="Please specify donor cell lines or particular stimulation targets..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    background: "var(--accent-red)",
                    color: "#ffffff",
                    border: "none",
                    padding: "14px",
                    borderRadius: "12px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <div className="spinner" style={{ width: "20px", height: "20px", border: "2px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                      Submitting Request...
                    </>
                  ) : (
                    "Apply to Join Pilot Network"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
