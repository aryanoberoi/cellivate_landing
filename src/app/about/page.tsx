import React from "react";

export default function About() {
  const team = [
    {
      name: "Dr. Srinivas Ramasamy",
      role: "CTO",
      image: "/team/Srinivas Ramasamy_CTO.jpeg",
      bio: "Technical lead driving the development of electromagnetic bioreactor coils, quality control validation frameworks, and downstream NTA profiling.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Arjita Nanda",
      role: "Regulatory Affairs",
      image: "/team/Arjita Nanda_Regulatory Affairs.JPG",
      bio: "Managing clinical QMS alignments, pilot evaluation contracts, and commercial scaling partnerships across pharmaceutical and skincare sectors.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Aravinthan Kumaran",
      role: "Project Engineer",
      image: "/team/Aravinthan Kumaran_Project Engineer.jpeg",
      bio: "Focusing on bioreactor design, system integration, mechanical development, and pilot scale process optimization.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Emily Duran",
      role: "Admin & Operations",
      image: "/team/Emily Duran_Admin & Operations.jpeg",
      bio: "Overseeing day-to-day administrative workflows, financial operations, vendor relations, and logistical management.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Jess Min Htet",
      role: "Business Development Intern",
      image: "/team/Jess Min Htet_Business Development Intern.jpg",
      bio: "Supporting international market research, lead generation, and client outreach campaigns in clinical and cosmetic fields.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Thanthulu Sridharan Janavi",
      role: "Graduate Biomedical Research Intern",
      image: "/team/Thanthulu Sridharan Janavi_Graduate Biomedical Research Intern.png",
      bio: "Conducting laboratory assay profiling, cell characterization studies, and performance validations of formulation runs.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Vincent Duru",
      role: "Business Development",
      image: "/team/Vincent Duru_ Business Development.jpg",
      bio: "Leading client relations, market development strategy, commercial pipeline growth, and scaling industrial distributions.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
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

  const logoSvg = (
    <img 
      src="/favicon.ico" 
      alt="Cellivate Technologies Logo" 
      style={{ width: "32px", height: "32px", objectFit: "contain" }}
    />
  );

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)" }}>

      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="section-container about-hero-content">
          <span className="about-eyebrow">The Company</span>
          <h1 className="about-hero-title">About Cellivate</h1>
          <p className="about-hero-sub">
            Revolutionising Cell-Based Solutions for a Sustainable Future.
          </p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="vision-mission-section">
        <div className="vision-mission-grid">

          <div className="vm-card vm-card-vision">
            <div className="vm-content">
              <div className="vm-logo-row">
                {logoSvg}
                <span className="vm-logo-text">
                  Cellivate
                  <span className="vm-logo-sub">Technologies</span>
                </span>
              </div>
              <p className="vm-label">Vision:</p>
              <p className="vm-statement">
                To lead the global transition to sustainable practices with cell-based technologies, eliminating the need for animal use and creating a healthier future for humanity and the planet
              </p>
            </div>
          </div>

          <div className="vm-card vm-card-mission">
            <div className="vm-content">
              <div className="vm-logo-row">
                {logoSvg}
                <span className="vm-logo-text">
                  Cellivate
                  <span className="vm-logo-sub">Technologies</span>
                </span>
              </div>
              <p className="vm-label">Mission:</p>
              <p className="vm-statement">
                Implementing deep-tech products and technologies that enable the use of cells to replace animal derived products
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Team Group Photo ── */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-team-photo-wrap">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/53ecd113-b160-44d3-87fc-559829b2d895/IMG_5079.jpg"
              alt="Cellivate Team Group Photo"
              className="about-team-img"
            />
            <div className="about-team-caption">
              <h3 className="about-team-caption-title">The Team Behind the Innovation</h3>
              <p className="about-team-caption-sub">
                Driven by a shared mission to revolutionize cell-based solutions for biopharma, cell therapy, skincare, and sustainable research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Team ── */}
      <section className="about-section" style={{ background: "#fcfcfa" }}>
        <div className="section-container">
          <div className="about-section-header">
            <span className="about-eyebrow">Core Team</span>
            <h2 className="about-section-title">Meet Our Team</h2>
          </div>
          <div className="about-team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="about-person-card">
                <div className="about-avatar">
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 className="about-person-name">{member.name}</h3>
                <span className="about-person-role">{member.role}</span>
                <p className="about-person-bio">{member.bio}</p>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traction & Recognition ── */}
      <section className="about-section about-dark-section" style={{ background: "#121214", color: "#ffffff", padding: "100px 0" }}>
        <div className="section-container">
          <div className="about-section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="about-eyebrow" style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Traction & Recognition</span>
            <h2 className="about-section-title" style={{ color: "#ffffff", fontSize: "2.6rem", fontWeight: 800, marginTop: "10px" }}>Key Milestones & Achievements</h2>
          </div>
          <div className="about-milestones-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {achievements.map((ach, idx) => (
              <div key={idx} className="about-milestone-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "40px 30px", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "16px", backdropFilter: "blur(12px)", transition: "all 0.3s ease" }}>
                <span className="about-milestone-status" style={{ color: "var(--accent-red)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{ach.status}</span>
                <h3 className="about-milestone-title" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{ach.title}</h3>
                <p className="about-milestone-desc" style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", margin: 0 }}>{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="about-section" style={{ background: "#ffffff" }}>
        <div className="section-container">
          <div className="about-section-header">
            <h2 className="about-section-title" style={{ color: "#5131A5" }}>Partners and Evangelists</h2>
          </div>
          <div className="about-partners-grid">
            {[
              { name: "CapitalCode", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382582-ZL2F6ZZXQVZR5EPQSM4J/CapitalCode.png" },
              { name: "500 Startups", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382590-W8V2G7J95EFKEHTZMJUC/500+Startups.png" },
              { name: "Animoca Brands", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382594-HG2425SC7BVZ1WUN5PMJ/animoca+brands.png" },
              { name: "Brinc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382600-VDQ4BGWPGG65F2QWTTBT/brinc.png" },
              { name: "Aspire", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382604-1F1Q2BB2CF8INEEWFSEQ/ASPIRE.png" },
              { name: "A*STAR", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382615-5OEJ3Y37YRS2C9MYVSNZ/AStar+Singapore.jpg" },
              { name: "NUS GRIP", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382618-53B2M1RSL2IDPFLIIZN2/Picture+NUSGRIP.jpg" },
              { name: "Enterprise Singapore", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382627-MREIBYGECHUOX1N0GITG/Enterprise+Singapore.png" },
              { name: "Elev8.vc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382635-UJ2SUYQOGPXQ1LY4ABHX/elev8.vc.png" }
            ].map((partner, idx) => (
              <div key={idx} className="partner-logo-card">
                <img src={partner.url} alt={partner.name} />
              </div>
            ))}
          </div>

          <div className="about-cta-block">
            <h3 className="about-cta-heading">Let's talk about the future!</h3>
            <a href="mailto:admin@cellivatetech.com" className="about-cta-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
