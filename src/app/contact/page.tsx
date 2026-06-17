"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || "xjkbwzre";
    
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
        setFormData({ name: "", email: "", company: "", message: "" });
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
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "80px", height: "80px", background: "rgba(16, 185, 129, 0.08)", color: "#10b981", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", marginBottom: "24px" }}>
                  ✓
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ color: "var(--brand-light)", fontSize: "1.05rem", lineHeight: "1.5" }}>
                  Thank you for reaching out. A Cellivate specialist will respond to your query within 24 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ marginTop: "30px", padding: "12px 24px", background: "var(--accent-red)", color: "#ffffff", border: "none", borderRadius: "30px", fontWeight: 600, cursor: "pointer" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {status === "error" && (
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "16px", borderRadius: "12px", color: "#991b1b", fontSize: "0.95rem", lineHeight: "1.5" }}>
                    ⚠️ Something went wrong sending your message. Please try again or email us directly at <strong>admin@cellivatetech.com</strong>.
                  </div>
                )}
                <div>
                  <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Company / Institution</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                    placeholder="University or Lab Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem", resize: "none" }}
                    placeholder="Tell us about your cell culture specifications..."
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
                      Sending...
                    </>
                  ) : (
                    "Send Message"
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
