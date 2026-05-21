import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "./MobileNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cellivate Technologies | Fetal Bovine Serum Alternatives",
  description: "Revolutionising cell-based solutions for a sustainable future with BOOSTER platform technology and EV-based biological inputs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body style={{ background: "var(--bg-main)", color: "var(--brand-dark)" }}>
        {/* Navigation Header */}
        <header className="header-nav" style={{ background: "rgba(250, 248, 245, 0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.05)", position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, height: "80px", display: "flex", alignItems: "center" }}>
          <div className="nav-container" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" className="logo-group" id="brand-logo" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <div className="logo-icon" style={{ display: "flex", alignItems: "center" }}>
                <img 
                  src="/favicon.ico" 
                  alt="Cellivate Technologies Logo" 
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              </div>
              <div className="brand-text" style={{ display: "flex", flexDirection: "column", lineHeight: "1.0" }}>
                <span className="brand-name" style={{ fontSize: "1.45rem", fontWeight: 800, color: "#3b2e9a", letterSpacing: "-0.5px" }}>Cellivate</span>
                <span className="brand-sub" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: "1px", marginTop: "1px" }}>Technologies</span>
              </div>
            </Link>
            
            <nav className="nav-menu desktop-nav" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Link href="/tech" className="nav-link" style={{ fontWeight: 500, color: "var(--brand-dark)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Technology</Link>
              <Link href="/pilot" className="nav-link" style={{ fontWeight: 500, color: "var(--brand-dark)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Pilot Program</Link>
              <Link href="/about" className="nav-link" style={{ fontWeight: 500, color: "var(--brand-dark)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>About</Link>
              <Link href="/contact" className="nav-link" style={{ fontWeight: 500, color: "var(--brand-dark)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Contact</Link>
              <Link href="/resources" className="nav-link" style={{ fontWeight: 500, color: "var(--brand-dark)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Resources</Link>
            </nav>

            <MobileNav />
          </div>
        </header>

        {/* Global Glow Background Spheres */}
        <div className="glow-bg-container">
          <div className="glow-sphere glow-purple"></div>
          <div className="glow-sphere glow-green"></div>
          <div className="glow-sphere glow-blue"></div>
        </div>

        {/* Main Content App router viewport */}
        <div style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>
          {children}
        </div>

        {/* Global Footer */}
        {/* Global Footer */}
        <footer className="footer-section" style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.08)", padding: "80px 0 60px 0", color: "var(--brand-dark)", zIndex: 10, position: "relative" }}>
          <div className="section-container" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
            <div className="footer-main-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1.5fr", gap: "60px", alignItems: "start" }}>
              
              {/* Column 1: Brand & Logo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <Link href="/" className="logo-group" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                  <div className="logo-icon" style={{ display: "flex", alignItems: "center" }}>
                    <img 
                      src="/favicon.ico" 
                      alt="Cellivate Technologies Logo" 
                      style={{ width: "40px", height: "40px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="brand-text" style={{ display: "flex", flexDirection: "column", lineHeight: "1.0" }}>
                    <span className="brand-name" style={{ fontSize: "1.45rem", fontWeight: 800, color: "#3b2e9a", letterSpacing: "-0.5px" }}>Cellivate</span>
                    <span className="brand-sub" style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10b981", textTransform: "uppercase", letterSpacing: "1px", marginTop: "1px" }}>Technologies</span>
                  </div>
                </Link>
                <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0, maxWidth: "320px" }}>
                  Revolutionising Cell-Based Solutions for a Sustainable Future. Providing high-performance, animal-free biological inputs.
                </p>
                <div style={{ display: "flex", gap: "16px", color: "var(--brand-dark)" }}>
                  <a href="https://www.linkedin.com/company/cellivate-technologies/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "inherit", transition: "color 0.2s" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-primary)" }}>Quick Links</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Link href="/" style={{ color: "var(--brand-light)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Home</Link>
                  <Link href="/tech" style={{ color: "var(--brand-light)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Technology</Link>
                  <Link href="/pilot" style={{ color: "var(--brand-light)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Pilot Program</Link>
                  <Link href="/about" style={{ color: "var(--brand-light)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>About us</Link>
                  <Link href="/contact" style={{ color: "var(--brand-light)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}>Contact Us</Link>
                </div>
              </div>

              {/* Column 3: Get in Touch */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--brand-primary)" }}>Get in Touch</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "12px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Email</span>
                    <a href="mailto:admin@cellivatetech.com" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", textDecoration: "none", transition: "color 0.2s" }}>admin@cellivatetech.com</a>
                  </div>
                  
                  <div>
                    <span style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>Our Offices</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "2px" }}>Singapore (HQ)</span>
                        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-primary)", margin: 0, lineHeight: "1.3" }}>
                          160 Robinson Rd, #14-04,<br />Singapore 068914
                        </p>
                      </div>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#3b2e9a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "2px" }}>Australia Subsidiary</span>
                        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-primary)", margin: 0, lineHeight: "1.3" }}>
                          2302 118 Kavanagh St.<br />Southbank VIC 3006
                        </p>
                      </div>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "2px" }}>India</span>
                        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-primary)", margin: 0, lineHeight: "1.3", fontStyle: "italic" }}>
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: "60px", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>© 2026 Cellivate Technologies. All rights reserved.</span>
              <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600 }}>Better Growth. Better Outcomes. A Better Future.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
