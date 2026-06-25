"use client";

import React, { useState, useEffect, useRef } from "react";
import StaggerReveal from "@/components/StaggerReveal";
import Reveal from "@/components/Reveal";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const team = [
    {
      name: "Dr. Viknish Krishnan-Kutty",
      role: "Founder & CEO",
      image: "/team/viknish.png",
      bio: "Founder and CEO leading the commercialisation of animal-free cell culture platforms and scaling global partnerships across the biotechnology and cellular agriculture sectors.",
      linkedin: "https://www.linkedin.com/in/viknishkkutty"
    },
    {
      name: "Dr. Srinivas Ramasamy",
      role: "CTO",
      image: "/team/Srinivas Ramasamy_CTO.jpeg",
      bio: "Technical lead driving the development of electromagnetic bioreactor coils, quality control validation frameworks, and downstream NTA profiling.",
      linkedin: "https://www.linkedin.com/in/srinivas639"
    },
    {
      name: "Arjita Nanda",
      role: "Regulatory Affairs",
      image: "/team/Arjita Nanda_Regulatory Affairs.JPG",
      bio: "Managing clinical QMS alignments, pilot evaluation contracts, and commercial scaling partnerships across pharmaceutical and skincare sectors.",
      linkedin: "https://www.linkedin.com/in/arjitananda",
      objectPosition: "center 20%"
    },
    {
      name: "Aravinthan Kumaran",
      role: "Project Engineer",
      image: "/team/Aravinthan Kumaran_Project Engineer.jpeg",
      bio: "Focusing on bioreactor design, system integration, mechanical development, and pilot scale process optimization.",
      linkedin: "https://www.linkedin.com/in/aravinthankumaran"
    },
    {
      name: "Emily Duran",
      role: "Admin & Operations",
      image: "/team/Emily Duran_Admin & Operations.jpeg",
      bio: "Overseeing day-to-day administrative workflows, financial operations, vendor relations, and logistical management.",
      linkedin: "https://www.linkedin.com/in/emily-duran-a03b2251"
    },
    {
      name: "Jess Min Htet",
      role: "Business Development Intern",
      image: "/team/Jess Min Htet_Business Development Intern.jpg",
      bio: "Supporting international market research, lead generation, and client outreach campaigns in clinical and cosmetic fields.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    },
    {
      name: "Thanthullu Sridharan Janavi",
      role: "Graduate Biomedical Research Intern",
      image: "/team/Thanthulu Sridharan Janavi_Graduate Biomedical Research Intern.png",
      bio: "Conducting laboratory assay profiling, cell characterization studies, and performance validations of formulation runs.",
      linkedin: "https://www.linkedin.com/in/janavi-t-s-895a372b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    },
    {
      name: "Vincent Duru",
      role: "Business Development",
      image: "/team/Vincent Duru_ Business Development.jpg",
      bio: "Leading client relations, market development strategy, commercial pipeline growth, and scaling industrial distributions.",
      linkedin: "https://www.linkedin.com/company/cellivate-technologies/"
    }
  ];

  const [activeTab, setActiveTab] = useState<"awards" | "media">("awards");
  const [visionFlipped, setVisionFlipped] = useState(false);
  const [missionFlipped, setMissionFlipped] = useState(false);

  const awards = [
    {
      title: "ASPIRE Incubation Prize",
      desc: "Awarded by ASPIRE Incubation Labs, recognizing breakthrough deep-tech innovations with high commercial potential.",
      logo: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611369630-B7UM5KLYHCBVP3DF7LG5/ASPIRE.png"
    },
    {
      title: "Mitsubishi Chemical Group Partnership",
      desc: "Recognized by the Mitsubishi Chemical Group for pioneering sustainable biological inputs and cell culture advancements.",
      logo: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611369620-Y0GGPXB1DT0YMU6TO3G3/mc_group_logo.jpeg"
    },
    {
      title: "TECH PLANTER Award Winner",
      desc: "TECH PLANTER Award Winner, accelerating cell culture technologies and international biotechnology research networks.",
      logo: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611369614-RE2V2LQHF3GU38K81MRT/leave_a_nest_logo.png"
    },
    {
      title: "Asia Agri-Food Innovation Summit",
      desc: "Selected as a key innovator at the Asia-Pacific Agri-Food Innovation Summit for sustainable protein disruption.",
      logo: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611369626-PP673L293KNF45PWHKGC/AFIC-no-background-1024x264.png"
    },
    {
      title: "Supported by Enterprise Singapore",
      desc: "Backed by Enterprise Singapore through non-dilutive R&D grants and commercial development support.",
      logo: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611369634-NLL01R1ETFPGTH1M3DD7/Enterprise+Singapore.png"
    }
  ];

  const recognitions = [
    {
      title: "Cellivate Technologies Raises Eyebrows as It Secures Hefty Funding in Final Round at Big Spark",
      link: "https://www.channelnewsasia.com/brandstudio/cellivate-technologies-raises-eyebrows-it-secures-hefty-funding-final-round-big-spark-4214561",
      date: "June 2026",
      excerpt: "Published by Channel News Asia",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Channel_NewsAsia_logo.svg/1200px-Channel_NewsAsia_logo.svg.png"
    },
    {
      title: "Cellular Engineering Skin to make Leather: A New Sustainability Goal?",
      link: "https://technode.global/2023/05/18/cellular-engineering-skin-to-make-leather-a-new-sustainability-goal/",
      date: "May 18, 2023",
      excerpt: "Published by TechNode Global",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685613204029-XKL5JJVJ0WTA6G7CI2LF/2023_Technode.jpg"
    },
    {
      title: "ProjectEx Announces $1M USD Seed Funding Goal for Its Cultivated Exotic Leather",
      link: "https://www.greenqueen.com.hk/projectex-seed-funding-goal-cultivated-exotic-leather/",
      date: "May 8, 2023",
      excerpt: "Published by Green Queen Media",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398458-QIB7EV3UV8HHWITC90NQ/green-queen-crocodile-birkin-green-queen.jpg"
    },
    {
      title: "Daily Cuts | Lab-grown leather - is this the future for the fashion industry?",
      link: "https://open.spotify.com/episode/6h9X54DWy2x0NoUUxSRgMo?si=xJ_t_ypXQ3SPrpMA_RRBTQ",
      date: "April 27, 2023",
      excerpt: "Published by CNA",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398462-CSSDB4TJ6OPRLITB0PJV/daily_cuts.png"
    },
    {
      title: "Mind Your Business: From Cells to Style - How lab-grown exotic leather is revolutionising the designer bag industry",
      link: "https://open.spotify.com/episode/5cqwRtYo2CGHNrYiQ9mUkx",
      date: "April 11, 2023",
      excerpt: "Published by MoneyFm 89.3",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398454-BRH0PU3YY2TP30D85E56/MoneyFM-Cellivate.jpeg"
    },
    {
      title: "Vogue Singapore Innovation Prize winning duo behind ProjectEx",
      link: "https://vogue.sg/projectex-vogue-singapore-innovation-prize/",
      date: "March 10, 2023",
      excerpt: "Published by Vogue Singapore",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398444-VBNNAD7HQWV5C3FC8P9T/Cellivate-Vogue-SG.png"
    },
    {
      title: "Sustainable Meat Solutions: Investing, Innovating, and Solving Food Challenges in 2023",
      link: "https://www.youtube.com/watch?v=0WEvaEq_ckk",
      date: "March 4, 2023",
      excerpt: "Published by Clear Meat",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398449-ALY4P03TUH5XQQXO86CI/Clear+Meat.jpg"
    },
    {
      title: "Cellular engineering could be the future of leather production",
      link: "https://www.scmp.com",
      date: "March 4, 2023",
      excerpt: "Published by South China Morning Post",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398429-7WXI9C4Z3HVBYOK0HQ0O/SCMP.JPG"
    },
    {
      title: "The Big Read in short: Doing good and making money while at it",
      link: "https://www.todayonline.com/big-read/big-read-short-doing-good-and-making-money-while-it-2037451",
      date: "November 5, 2022",
      excerpt: "Published by TODAY",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398370-QOOM4LTIZ8UOF9Y0466Z/20221102_ili_cellivate_technologies-6.jpg"
    },
    {
      title: "Alt Protein Podcast: Compounding Cultivation",
      link: "https://podcasts.apple.com/us/podcast/compounding-cultivation-cellivate-technologies/id1434996393?i=1000556131840",
      date: "April 4, 2022",
      excerpt: "Published by Alt Protein Podcast",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398440-NUO4FG75BDCPOF1NN7D7/VeganStartupPodcast.JPG"
    },
    {
      title: "ASPIRE with Prof. Neo",
      link: "https://cellivate.co",
      date: "December 28, 2021",
      excerpt: "Published by ASPIRE Incubation Labs",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398413-X74N5UOFZXZ50PZDI69V/Screenshot+2023-01-04+at+12.18.58+PM.png"
    },
    {
      title: "Sustainable Singapore: How cell culture technology is enabling the clean meat revolution",
      link: "https://www.moneyfm893.sg/guest/viknish-krishnan-kutty-cellivate-technologies/",
      date: "June 30, 2021",
      excerpt: "Published by MoneyFM 89.3",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398389-4PIL9YC1X0AGPHRWOY5A/3006_MDT_815-960x540.jpg"
    },
    {
      title: "Asia-Pacific Agri-Food Innovation Summit",
      link: "https://cellivate.co",
      date: "November 20, 2020",
      excerpt: "Asia-Pacific Agri-Food Innovation Summit Speaker",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398399-TJUNCB0E2UYHXU006RG4/2020_Asia-Pacific+Agri-Food+Innovation+Summit.png"
    },
    {
      title: "Cellivate Technologies: One of Asia’s Top 100 Protein Disruptors",
      link: "https://cellivate.co",
      date: "August 1, 2020",
      excerpt: "Named one of Asia's Top 100 Protein Disruptors",
      image: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611398377-YC9GQ11YO8UCU4U2BCBO/2020_Asia%27s+Top+100+Protein+Disruptors.jpg"
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

        {/* Scroll Indicator */}
        <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", pointerEvents: "none" }}>
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
            Scroll to know more
          </span>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounceArrow 2s infinite" }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section ref={sectionRef} className="vision-mission-section" style={{ padding: "80px 0", background: "var(--bg-main)" }}>
        <div className="section-container">
          <div className="vision-mission-grid">

            {/* Vision Card */}
            <div 
              className={`flashcard-container ${visionFlipped ? "is-flipped" : ""} ${isVisible ? "animate-popup" : "vm-card-hidden"}`}
              onClick={() => setVisionFlipped(!visionFlipped)}
            >
              <div className="flashcard-inner">
                {/* Front Face */}
                <div className="flashcard-front card-vision-front">
                  <div className="flashcard-front-content">
                    <div className="vm-logo-row">
                      {logoSvg}
                      <span className="vm-logo-text">
                        Cellivate
                        <span className="vm-logo-sub">Technologies</span>
                      </span>
                    </div>
                    
                    <div className="flashcard-title-row">
                      <span className="vm-label" style={{ margin: 0 }}>What We See</span>
                      <h3 className="flashcard-front-title">Our Vision</h3>
                    </div>

                    <div className="flashcard-icon-container">
                      <svg className="flashcard-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    <span className="flashcard-badge">
                      Click to Reveal ➔
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div className="flashcard-back card-vision-back">
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
                    <span className="flashcard-flip-back">
                      Click to Flip Back ↺
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div 
              className={`flashcard-container ${missionFlipped ? "is-flipped" : ""} ${isVisible ? "animate-popup" : "vm-card-hidden"}`}
              style={{ animationDelay: "0.15s" }}
              onClick={() => setMissionFlipped(!missionFlipped)}
            >
              <div className="flashcard-inner">
                {/* Front Face */}
                <div className="flashcard-front card-mission-front">
                  <div className="flashcard-front-content">
                    <div className="vm-logo-row">
                      {logoSvg}
                      <span className="vm-logo-text">
                        Cellivate
                        <span className="vm-logo-sub">Technologies</span>
                      </span>
                    </div>

                    <div className="flashcard-title-row">
                      <span className="vm-label" style={{ margin: 0 }}>What We Do</span>
                      <h3 className="flashcard-front-title">Our Mission</h3>
                    </div>

                    <div className="flashcard-icon-container">
                      <svg className="flashcard-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4" />
                        <path d="M12 18v4" />
                        <path d="M2 12h4" />
                        <path d="M18 12h4" />
                      </svg>
                    </div>

                    <span className="flashcard-badge">
                      Click to Reveal ➔
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div className="flashcard-back card-mission-back">
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
                    <span className="flashcard-flip-back">
                      Click to Flip Back ↺
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Team Group Photo ──
      <section className="about-section">
        <div className="section-container">
          <Reveal className="about-team-photo-wrap">
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
          </Reveal>
        </div>
      </section>
      ── */}

      {/* ── Core Team ── */}
      <section className="about-section" style={{ background: "#fcfcfa" }}>
        <div className="section-container">
          <Reveal className="about-section-header">
            <span className="about-eyebrow">Core Team</span>
            <h2 className="about-section-title">Meet Our Team</h2>
          </Reveal>
          <StaggerReveal className="about-team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="about-person-card">
                <div className="about-avatar">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      objectPosition: (member as any).objectPosition || "center"
                    }} 
                  />
                </div>
                <h3 className="about-person-name">{member.name}</h3>
                <span className="about-person-role">{member.role}</span>

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
          </StaggerReveal>
        </div>
      </section>

      {/* ── Traction & Recognition ── */}
      <section className="about-section about-dark-section" style={{ background: "#121214", color: "#ffffff", padding: "100px 0" }}>
        <div className="section-container">
          <Reveal className="about-section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="about-eyebrow" style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Traction & Recognition</span>
            <h2 className="about-section-title" style={{ color: "#ffffff", fontSize: "2.6rem", fontWeight: 800, marginTop: "10px" }}>Awards & Media Coverage</h2>
          </Reveal>

          {/* Tab Selection */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "50px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveTab("awards")}
              style={{
                background: activeTab === "awards" ? "var(--accent-red)" : "rgba(255,255,255,0.05)",
                color: "#ffffff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === "awards" ? "0 8px 20px rgba(217, 35, 52, 0.25)" : "none"
              }}
            >
              🏆 Awards & Support
            </button>
            <button
              onClick={() => setActiveTab("media")}
              style={{
                background: activeTab === "media" ? "var(--accent-red)" : "rgba(255,255,255,0.05)",
                color: "#ffffff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === "media" ? "0 8px 20px rgba(217, 35, 52, 0.25)" : "none"
              }}
            >
              📰 Media & Articles
            </button>
          </div>

          {activeTab === "awards" ? (
            /* Awards Grid */
            <StaggerReveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="lift-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "30px",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    backdropFilter: "blur(12px)"
                  }}
                >
                  <div
                    style={{
                      height: "60px",
                      background: "#ffffff",
                      borderRadius: "12px",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      src={award.logo}
                      alt={award.title}
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                      {award.title}
                    </h3>
                    <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          ) : (
            /* Media Grid */
            <StaggerReveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {recognitions.map((rec, idx) => (
                <div
                  key={idx}
                  className="lift-card"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(12px)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                >
                  <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                    <img
                      src={rec.image}
                      alt={rec.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "var(--accent-red)",
                        color: "#ffffff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "20px"
                      }}
                    >
                      {rec.date}
                    </div>
                  </div>
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                    <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {rec.excerpt}
                    </span>
                    <a
                      href={rec.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        textDecoration: "none",
                        lineHeight: "1.4",
                        margin: 0,
                        transition: "color 0.2s"
                      }}
                    >
                      {rec.title}
                    </a>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          )}
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="about-section" style={{ background: "#ffffff" }}>
        <div className="section-container">
          <Reveal className="about-section-header">
            <h2 className="about-section-title" style={{ color: "#5131A5" }}>Partners and Evangelists</h2>
          </Reveal>
          <StaggerReveal className="about-partners-grid">
            {[
              { name: "CapitalCode", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382582-ZL2F6ZZXQVZR5EPQSM4J/CapitalCode.png" },
              { name: "500 Startups", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382590-W8V2G7J95EFKEHTZMJUC/500+Startups.png" },
              { name: "Animoca Brands", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382594-HG2425SC7BVZ1WUN5PMJ/animoca+brands.png" },
              { name: "Brinc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382600-VDQ4BGWPGG65F2QWTTBT/brinc.png" },
              { name: "Aspire", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382604-1F1Q2BB2CF8INEEWFSEQ/ASPIRE.png" },
              { name: "A*STAR", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382615-5OEJ3Y37YRS2C9MYVSNZ/AStar+Singapore.jpg" },
              { name: "NUS GRIP", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382618-53B2M1RSL2IDPFLIIZN2/Picture+NUSGRIP.jpg" },
              { name: "Enterprise Singapore", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382627-MREIBYGECHUOX1N0GITG/Enterprise+Singapore.png" },
              { name: "Elev8.vc", url: "https://images.squarespace-cdn.com/content/v1/6478636860dbee4d10604c78/1685611382635-UJ2SUYQOGPXQ1LY4ABHX/elev8.vc.png" },
              { name: "Antler", url: "/partner-logos/antler.png" },
              { name: "NUS Enterprise", url: "/partner-logos/nus-enterprise.jpeg" },
              { name: "Venture Catalysts", url: "/partner-logos/venture-catalysts.png" },
              { name: "WeFounderCircle", url: "/partner-logos/wefoundercircle.png" },
              { name: "IPV", url: "/partner-logos/ipv.png" },
              { name: "Hatcher+", url: "/partner-logos/hatcher-plus.png" },
              { name: "MedTech Actuator", url: "/partner-logos/medtech-actuator.png" },
              { name: "Mazumdar Shaw Medical Foundation", url: "/partner-logos/mazumdar-shaw.jpeg" }
            ].map((partner, idx) => (
              <div key={idx} className="partner-logo-card">
                <img src={partner.url} alt={partner.name} />
              </div>
            ))}
          </StaggerReveal>

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
