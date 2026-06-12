"use client";

import React, { useState, useEffect } from "react";

export default function Resources() {
  const [unlockedBooks, setUnlockedBooks] = useState<Set<string>>(new Set());
  const [selectedBookIndex, setSelectedBookIndex] = useState<number | null>(null);
  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    company: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "error">("idle");

  const books = [
    {
      id: "fbs-problem",
      title: "Strategic Brief: The FBS Problem",
      url: "/The FBS Problem_Strategic Brief_Cellivate_May2026 (1).pdf",
      desc: "Strategic analysis of ethical, regulatory, and cost bottlenecks of Fetal Bovine Serum usage in cell culture workflows."
    },
    {
      id: "regen-med",
      title: "Cell Culture Media for Regenerative Medicine",
      url: "/Cell culture media for regenerative medicine (1).pdf",
      desc: "Review of key considerations in selecting cell culture media for cell-based therapies and regenerative medicine applications."
    },
    {
      id: "msc-secretome",
      title: "MSC Secretome for Skin",
      url: "/MSC Secretome Skin (1).pdf",
      desc: "Investigating the regenerative and anti-aging properties of Mesenchymal Stem Cell secretome formulations on human skin tissue."
    },
    {
      id: "pemf-exposure",
      title: "PEMF Exposure & Muscle Secretome",
      url: "/Brief exposure to directionally-specific pemf mobilizes the muscle secretome and is antagonized by streptomycin a potential regenerative (1).pdf",
      desc: "Study of electromagnetically stimulated cell systems and downstream secretome profiling under streptomycinal antagonism."
    }
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cellivate_unlocked_books");
      if (stored) {
        try {
          setUnlockedBooks(new Set(JSON.parse(stored)));
        } catch {}
      }
    }
  }, []);

  const handleCardClick = (idx: number) => {
    const book = books[idx];
    if (unlockedBooks.has(book.id)) {
      setSelectedBookIndex(idx);
      setShowSignup(false);
    } else {
      setSelectedBookIndex(idx);
      setShowSignup(true);
      setFormStatus("idle");
      setFormData({ name: "", designation: "", email: "", company: "" });
    }
  };

  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBookIndex === null) return;
    setFormStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_EBOOK_ID || "mbdbdyyj";
    const book = books[selectedBookIndex];

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...formData, resource: book.title, source: "Resource Unlock Form" })
      });

      if (response.ok) {
        const updated = new Set(unlockedBooks).add(book.id);
        setUnlockedBooks(updated);
        localStorage.setItem("cellivate_unlocked_books", JSON.stringify([...updated]));
        setShowSignup(false);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const currentBook = selectedBookIndex !== null ? books[selectedBookIndex] : null;

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container" style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>
          Ebooks & Technical Literature
        </span>
        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
          Technical Resources & Strategic Briefs
        </h1>
        <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0 auto", lineHeight: "1.6" }}>
          Access our complete technical publications detailing mechanism of action studies, strategic briefs, and secretome formulations.
        </p>
      </div>

      {/* Resource Cards Grid */}
      <div className="section-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          {books.map((book, idx) => {
            const isUnlocked = unlockedBooks.has(book.id);
            const isSelected = selectedBookIndex === idx;
            return (
              <button
                key={book.id}
                onClick={() => handleCardClick(idx)}
                style={{
                  textAlign: "left",
                  background: "#ffffff",
                  border: `2px solid ${isSelected ? "var(--accent-red)" : "rgba(0,0,0,0.06)"}`,
                  borderRadius: "20px",
                  padding: "28px",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 12px 32px rgba(217,35,52,0.08)" : "0 4px 16px rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  transform: isSelected ? "translateY(-3px)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "2rem" }}>📄</span>
                  <span style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: isUnlocked ? "rgba(16,185,129,0.1)" : "rgba(217,35,52,0.08)",
                    color: isUnlocked ? "#10b981" : "var(--accent-red)"
                  }}>
                    {isUnlocked ? "✓ Unlocked" : "🔒 Sign up to access"}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-primary)", margin: 0, lineHeight: "1.4" }}>
                  {book.title}
                </h3>
                <p style={{ color: "var(--brand-light)", fontSize: "0.88rem", margin: 0, lineHeight: "1.5" }}>
                  {book.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Signup Modal / Inline Form */}
        {showSignup && currentBook && (
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
            marginBottom: "40px"
          }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🔒</div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>
                Access "{currentBook.title}"
              </h2>
              <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Enter your details to instantly unlock this publication.
              </p>
            </div>

            <form onSubmit={handleUnlockSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "480px", margin: "0 auto" }}>
              {formStatus === "error" && (
                <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "12px", borderRadius: "8px", color: "#991b1b", fontSize: "0.9rem" }}>
                  ⚠️ Something went wrong. Please try again or contact us at admin@cellivatetech.com.
                </div>
              )}

              <div>
                <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Full Name</label>
                <input type="text" id="name" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Dr. Sarah Jenkins" />
              </div>

              <div>
                <label htmlFor="designation" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Designation / Title</label>
                <input type="text" id="designation" required value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Research Scientist, Lab Director, etc." />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Professional Email</label>
                <input type="email" id="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="sarah.jenkins@biotech.com" />
              </div>

              <div>
                <label htmlFor="company" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Company / Institution</label>
                <input type="text" id="company" required value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Institute of Molecular Biology" />
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button type="submit" disabled={formStatus === "submitting"}
                  style={{
                    flex: 1,
                    background: "var(--accent-red)", color: "#ffffff", border: "none",
                    padding: "16px", borderRadius: "30px", fontSize: "1rem", fontWeight: 600,
                    cursor: "pointer", transition: "all 0.3s", display: "flex", justifyContent: "center",
                    alignItems: "center", gap: "10px", boxShadow: "0 10px 25px rgba(217,35,52,0.2)"
                  }}>
                  {formStatus === "submitting" ? (
                    <>
                      <div style={{ width: "18px", height: "18px", border: "2px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                      Unlocking...
                    </>
                  ) : "Unlock & Read"}
                </button>
                <button type="button" onClick={() => { setShowSignup(false); setSelectedBookIndex(null); }}
                  style={{
                    background: "rgba(0,0,0,0.04)", color: "var(--brand-light)", border: "none",
                    padding: "16px 20px", borderRadius: "30px", fontSize: "1rem", fontWeight: 600,
                    cursor: "pointer"
                  }}>
                  Cancel
                </button>
              </div>

              <p style={{ color: "#94a3b8", fontSize: "0.8rem", textAlign: "center", lineHeight: "1.4" }}>
                By submitting, you agree to receive technical validation updates from Cellivate Technologies. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        )}

        {/* PDF Viewer (shown after unlock) */}
        {!showSignup && currentBook && unlockedBooks.has(currentBook.id) && (
          <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "24px", padding: "30px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>
                {currentBook.title}
              </h3>
              <p style={{ color: "var(--brand-light)", fontSize: "1rem", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                {currentBook.desc}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href={currentBook.url} download
                  style={{ background: "var(--accent-red)", color: "#ffffff", padding: "12px 24px", borderRadius: "30px", fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span>📥</span><span>Download PDF</span>
                </a>
                <a href={currentBook.url} target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(59,46,154,0.08)", color: "#3b2e9a", padding: "12px 24px", borderRadius: "30px", fontSize: "0.95rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span>🔗</span><span>Open in New Tab</span>
                </a>
              </div>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
              <iframe src={`${currentBook.url}#toolbar=0`} title={currentBook.title}
                style={{ width: "100%", height: "650px", border: "none", background: "#f8f8f8" }} />
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}
