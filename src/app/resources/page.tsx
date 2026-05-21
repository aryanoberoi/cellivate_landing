"use client";

import React, { useState, useEffect } from "react";

export default function Resources() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 corresponds to spread 0 (pages 1-2)
  const totalSpreads = 4; // 8 pages, so 4 spreads

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    company: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "error">("idle");

  // Check if already unlocked previously
  useEffect(() => {
    if (typeof window !== "undefined") {
      const unlocked = localStorage.getItem("cellivate_ebook_unlocked");
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    }
  }, []);

  const handleNext = () => {
    if (currentPage < totalSpreads - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_EBOOK_ID || "mbdbdyyj"; // Fallback Formspree ID

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          source: "Ebook Unlock Form"
        })
      });

      if (response.ok) {
        localStorage.setItem("cellivate_ebook_unlocked", "true");
        setIsUnlocked(true);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error unlocking ebook:", error);
      setFormStatus("error");
    }
  };

  // Define URLs for the 8 pages of book.pdf
  const bookPages = [
    "/book_pages/page_1.png",
    "/book_pages/page_2.png",
    "/book_pages/page_3.png",
    "/book_pages/page_4.png",
    "/book_pages/page_5.png",
    "/book_pages/page_6.png",
    "/book_pages/page_7.png",
    "/book_pages/page_8.png",
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container" style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>
          Ebook & Decks
        </span>
        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
          Cellivate Technical Deck
        </h1>
        <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0 auto", lineHeight: "1.6" }}>
          Explore our complete corporate technical literature detailing mechanism of action studies and comparative product matrices.
        </p>
      </div>

      {!isUnlocked ? (
        /* Unlock Form Container */
        <div className="section-container" style={{ maxWidth: "550px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
              textAlign: "left"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔒</div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>
                Unlock Technical Literature
              </h2>
              <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Enter your details to instantly view our 8-page technical publication in our interactive viewer and download the PDF.
              </p>
            </div>

            <form onSubmit={handleUnlockSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {formStatus === "error" && (
                <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "12px", borderRadius: "8px", color: "#991b1b", fontSize: "0.9rem" }}>
                  ⚠️ Something went wrong. Please try again or contact us directly at admin@cellivatetech.com.
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
                  placeholder="Dr. Sarah Jenkins"
                />
              </div>

              <div>
                <label htmlFor="designation" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Designation / Title</label>
                <input
                  type="text"
                  id="designation"
                  required
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Research Scientist, Lab Director, etc."
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
                  placeholder="sarah.jenkins@biotech.com"
                />
              </div>

              <div>
                <label htmlFor="company" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Company / Institution</label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Institute of Molecular Biology"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                style={{
                  background: "var(--accent-red)",
                  color: "#ffffff",
                  border: "none",
                  padding: "16px",
                  borderRadius: "30px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 25px rgba(217, 35, 52, 0.2)"
                }}
              >
                {formStatus === "submitting" ? (
                  <>
                    <div style={{ width: "20px", height: "20px", border: "2px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                    Unlocking Literature...
                  </>
                ) : (
                  "Access Literature"
                )}
              </button>
            </form>

            <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "20px", textAlign: "center", lineHeight: "1.4" }}>
              By submitting, you agree to receive technical validation updates from Cellivate Technologies. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      ) : (
        /* 3D Book Flipper Widget */
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden" }}>
          <div className="book-container">
            <div className="book-shadow"></div>
            <div className="spine"></div>
            <div className="book">
              {/* Left Page (current Left Page) */}
              <div className="book-page left-page">
                <div className="page-content" style={{ padding: 0, background: "#ffffff", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img
                      src={bookPages[currentPage * 2]}
                      alt={`Page ${currentPage * 2 + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "contain", background: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Page (current Right Page) */}
              <div className="book-page right-page">
                <div className="page-content" style={{ padding: 0, background: "#ffffff", overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img
                      src={bookPages[currentPage * 2 + 1]}
                      alt={`Page ${currentPage * 2 + 2}`}
                      style={{ width: "100%", height: "100%", objectFit: "contain", background: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="resources-nav-row" style={{ display: "flex", gap: "20px", marginTop: "40px", alignItems: "center", zIndex: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="btn-prev-spread"
            >
              ← Previous Spread
            </button>

            <span style={{ fontWeight: 600, color: "var(--brand-primary)", fontSize: "0.95rem" }}>
              Spread {currentPage + 1} of {totalSpreads} (Pages {currentPage * 2 + 1}-{currentPage * 2 + 2})
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalSpreads - 1}
              className="btn-next-spread"
            >
              Next Spread →
            </button>
          </div>

          {/* Download Button */}
          <div style={{ marginTop: "50px", textAlign: "center", zIndex: 10 }}>
            <a
              href="/book.pdf"
              download
              className="btn-download-deck"
            >
              <span>📥</span>
              <span>Download Technical Deck (PDF)</span>
            </a>
          </div>
        </div>
      )}

      {/* Global CSS spinner rule keyframe in case style jsx doesn't evaluate */}
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
