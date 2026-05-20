import React from "react";

export default function About() {
  const team = [
    {
      name: "Dr. Viknish Krishnan-Kutty",
      role: "CEO & Founder",
      image: "/team/viknish.png",
      bio: "Biomedical engineer with extensive experience in cell-conditioned inputs and extracellular vesicle platforms. Dedicated to scaling serum-free biomanufacturing."
    },
    {
      name: "Dr. Srinivas Ramasamy",
      role: "CTO",
      image: "/team/srinivas.png",
      bio: "Technical lead driving the development of electromagnetic bioreactor coils, quality control validation frameworks, and downstream NTA profiling."
    },
    {
      name: "Arjita Nanda",
      role: "Regulatory Affairs & BD",
      image: "/team/arjita.png",
      bio: "Managing clinical QMS alignments, pilot evaluation contracts, and commercial scaling partnerships across pharmaceutical and skincare sectors."
    }
  ];

  const advisors = [
    {
      name: "Prof. Phan TT, MD",
      role: "Scientific Adviser",
      image: "/team/phan.jpg",
      details: "Biotech Entrepreneur and clinical pioneer in cell therapy translation."
    },
    {
      name: "Prof. T. Venkatesan",
      role: "Co-Founder & Technical Advisor",
      image: "/team/venkatesan.png",
      details: "Renowned physicist and pioneer in micro-stimulation physics."
    },
    {
      name: "John Wu",
      role: "Commercial Adviser",
      image: "/team/john_wu.jpg",
      details: "Ex-Alibaba commercial lead and advisor at FengHe Fund Management."
    }
  ];

  const achievements = [
    {
      title: "Stability",
      status: "Achieved",
      desc: "Product stability on par with Fetal Bovine Serum."
    },
    {
      title: "Pilot Network",
      status: "Active & Expanding",
      desc: "Secured high validation traction across research institutes and industry partners."
    },
    {
      title: "Non-Dilutive R&D Grants",
      status: "Completed",
      desc: "Successfully funded primary R&D pipeline through competitive government grants."
    },
    {
      title: "Commercial Orders",
      status: "3 Large Orders Secured",
      desc: "Received orders exceeding >US$1M and onboarded a key regional distributor."
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)" }}>
      {/* Hero Banner */}
      <section style={{ background: "#0a0a0c", color: "#ffffff", padding: "80px 0", textAlign: "center", position: "relative" }}>
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>The Company</span>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, marginTop: "10px" }}>About Cellivate</h1>
          <p style={{ fontSize: "1.2rem", color: "#cbd5e1", maxWidth: "700px", margin: "20px auto 0 auto", lineHeight: "1.6" }}>
            Revolutionising Cell-Based Solutions for a Sustainable Future.
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

      {/* Vision & Mission */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div className="about-vision-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Vision Statement</span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px", marginBottom: "20px" }}>
                Instructing Cells, Redefining Biology
              </h2>
              <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                For decades, the bioscience sector has relied on raw, highly variable, and unethically sourced animal products to nurture cells. Cellivate Technologies believes the future lies in active cellular instruction.
              </p>
              <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6" }}>
                By engineering controlled, magnetically stimulated environments, we create customized extracellular signaling systems that replace serum while yielding superior consistency, stability, and scale.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Platform Expansion</span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 16px 0" }}>Beyond FBS Replacement</h3>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "16px" }}>
                Our proprietary extracellular vesicle (EV) platform is designed to scale across multiple high-value industries:
              </p>
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "var(--accent-red)", fontWeight: "bold" }}>➔</span>
                  <strong>Skincare Actives:</strong> EV-based regenerative signaling to enhance collagen.
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "var(--accent-red)", fontWeight: "bold" }}>➔</span>
                  <strong>Therapeutics:</strong> Target biological modulation using biological vesicles.
                </li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "var(--accent-red)", fontWeight: "bold" }}>➔</span>
                  <strong>Biomanufacturing:</strong> Optimized cell growth systems across cell lines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Group Picture Banner */}
      <section style={{ padding: "0 0 100px 0" }}>
        <div className="section-container">
          <div className="about-team-photo" style={{ position: "relative", width: "100%", height: "500px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.05)" }}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/53ecd113-b160-44d3-87fc-559829b2d895/IMG_5079.jpg" 
              alt="Cellivate Team Group Photo" 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)", padding: "40px", color: "#ffffff" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "8px" }}>The Team Behind the Innovation</h3>
              <p style={{ color: "#e2e8f0", fontSize: "1.05rem", maxWidth: "600px", margin: 0 }}>
                Driven by a shared mission to revolutionize cell-based solutions for biopharma, cell therapy, skincare, and sustainable research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team (Slide 18) */}
      <section style={{ padding: "100px 0", background: "#fcfcfa" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Core Team</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Meet Our Leadership
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="team-card"
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid rgba(0,0,0,0.06)", 
                  padding: "40px", 
                  borderRadius: "20px",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.01)",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  overflow: "hidden", 
                  border: "3px solid #ffffff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  marginBottom: "24px",
                  background: "#f1f5f9"
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "6px" }}>{member.name}</h3>
                <span style={{ color: "var(--accent-red)", fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "16px" }}>{member.role}</span>
                <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.6" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stalwart Advisors (Slide 17) */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Advisory Board</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Supported by Industry Leaders
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {advisors.map((advisor, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid rgba(0,0,0,0.06)", 
                  padding: "30px", 
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.01)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  borderRadius: "50%", 
                  overflow: "hidden", 
                  border: "3px solid #ffffff",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  marginBottom: "20px",
                  background: "#f1f5f9"
                }}>
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "6px" }}>{advisor.name}</h3>
                <span style={{ color: "var(--accent-red)", fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "12px" }}>{advisor.role}</span>
                <p style={{ color: "var(--brand-light)", fontSize: "0.9rem", lineHeight: "1.5" }}>{advisor.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Achievements (Slides 15-16) */}
      <section style={{ padding: "100px 0", background: "#101012", color: "#ffffff" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Milestones</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "#ffffff", marginTop: "10px" }}>
              Execution Snapshot & Traction
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "30px" }}>
            {achievements.map((ach, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "30px", 
                  borderRadius: "16px" 
                }}
              >
                <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>{ach.status}</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", margin: "10px 0 8px 0" }}>{ach.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.5" }}>{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and Evangelists */}
      <section style={{ padding: "100px 0", background: "#ffffff" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, color: "#5131A5", margin: 0 }}>
              Partners and Evangelists
            </h2>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
            gap: "30px", 
            alignItems: "center", 
            justifyContent: "center"
          }}>
            {[
              { name: "CapitalCode", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382582-ZL2F6ZZXQVZR5EPQSM4J/CapitalCode.png" },
              { name: "500 Startups", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382590-W8V2G7J95EFKEHTZMJUC/500+Startups.png" },
              { name: "Animoca Brands", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382594-HG2425SC7BVZ1WUN5PMJ/animoca+brands.png" },
              { name: "Brinc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382600-VDQ4BGWPGG65F2QWTTBT/brinc.png" },
              { name: "Aspire", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382604-1F1Q2BB2CF8INEEWFSEQ/ASPIRE.png" },
              { name: "SHE1K", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382608-F5H1IIMLP7TH4RAFBUQF/C-Shark+Tank+-+SHE1K.png" },
              { name: "A*STAR", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382615-5OEJ3Y37YRS2C9MYVSNZ/AStar+Singapore.jpg" },
              { name: "NUS GRIP", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382618-53B2M1RSL2IDPFLIIZN2/Picture+NUSGRIP.jpg" },
              { name: "Enterprise Singapore", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382627-MREIBYGECHUOX1N0GITG/Enterprise+Singapore.png" },
              { name: "Elev8.vc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382635-UJ2SUYQOGPXQ1LY4ABHX/elev8.vc.png" }
            ].map((partner, idx) => (
              <div 
                key={idx} 
                className="partner-logo-card"
                style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  padding: "16px",
                  background: "#fcfcfa",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.03)",
                  height: "100px",
                }}
              >
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  style={{ 
                    maxHeight: "60px", 
                    maxWidth: "100%", 
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "80px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "60px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "24px" }}>
              Let’s talk about the future!
            </h3>
            <a 
              href="mailto:admin@cellivatetech.com" 
              className="btn-primary" 
              style={{ 
                display: "inline-flex", 
                padding: "16px 36px", 
                background: "#5131A5", 
                color: "#ffffff", 
                borderRadius: "30px", 
                fontWeight: 600, 
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 10px 25px rgba(81, 49, 165, 0.15)",
                transition: "all 0.3s ease"
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
