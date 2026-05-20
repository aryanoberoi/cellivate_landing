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

  const logoSvg = (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="35" x2="70" y2="30" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round"/>
      <line x1="30" y1="35" x2="50" y2="70" stroke="#a7f3d0" strokeWidth="4" strokeLinecap="round"/>
      <line x1="70" y1="30" x2="50" y2="70" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="30" cy="35" r="14" fill="#3b2e9a"/>
      <circle cx="30" cy="35" r="7" fill="#818cf8"/>
      <circle cx="70" cy="30" r="10" fill="#4f46e5"/>
      <circle cx="70" cy="30" r="5" fill="#a5b4fc"/>
      <circle cx="50" cy="70" r="12" fill="#10b981"/>
      <circle cx="50" cy="70" r="6" fill="#34d399"/>
    </svg>
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
            <h2 className="about-section-title">Meet Our Leadership</h2>
          </div>
          <div className="about-team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="about-person-card">
                <div className="about-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="about-person-name">{member.name}</h3>
                <span className="about-person-role">{member.role}</span>
                <p className="about-person-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisory Board ── */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-section-header">
            <span className="about-eyebrow">Advisory Board</span>
            <h2 className="about-section-title">Supported by Industry Leaders</h2>
          </div>
          <div className="about-advisors-grid">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="about-person-card about-advisor-card">
                <div className="about-avatar about-avatar-sm">
                  <img src={advisor.image} alt={advisor.name} />
                </div>
                <h3 className="about-person-name">{advisor.name}</h3>
                <span className="about-person-role">{advisor.role}</span>
                <p className="about-person-bio">{advisor.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section className="about-section about-dark-section">
        <div className="section-container">
          <div className="about-section-header">
            <span className="about-eyebrow">Milestones</span>
            <h2 className="about-section-title" style={{ color: "#ffffff" }}>Execution Snapshot & Traction</h2>
          </div>
          <div className="about-milestones-grid">
            {achievements.map((ach, idx) => (
              <div key={idx} className="about-milestone-card">
                <span className="about-milestone-status">{ach.status}</span>
                <h3 className="about-milestone-title">{ach.title}</h3>
                <p className="about-milestone-desc">{ach.desc}</p>
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
              { name: "SHE1K", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382608-F5H1IIMLP7TH4RAFBUQF/C-Shark+Tank+-+SHE1K.png" },
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
