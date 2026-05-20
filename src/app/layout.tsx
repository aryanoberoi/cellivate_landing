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
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Connecting lines */}
                  <line x1="30" y1="35" x2="70" y2="30" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="35" x2="50" y2="70" stroke="#a7f3d0" strokeWidth="4" strokeLinecap="round" />
                  <line x1="70" y1="30" x2="50" y2="70" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Top-Left Circle (Purple) */}
                  <circle cx="30" cy="35" r="14" fill="#3b2e9a" />
                  <circle cx="30" cy="35" r="7" fill="#818cf8" />
                  
                  {/* Top-Right Circle (Blue) */}
                  <circle cx="70" cy="30" r="10" fill="#4f46e5" />
                  <circle cx="70" cy="30" r="5" fill="#a5b4fc" />
                  
                  {/* Bottom-Center Circle (Green) */}
                  <circle cx="50" cy="70" r="12" fill="#10b981" />
                  <circle cx="50" cy="70" r="6" fill="#34d399" />
                </svg>
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
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="30" y1="35" x2="70" y2="30" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round" />
                      <line x1="30" y1="35" x2="50" y2="70" stroke="#a7f3d0" strokeWidth="4" strokeLinecap="round" />
                      <line x1="70" y1="30" x2="50" y2="70" stroke="#c7d2fe" strokeWidth="4" strokeLinecap="round" />
                      
                      <circle cx="30" cy="35" r="14" fill="#3b2e9a" />
                      <circle cx="30" cy="35" r="7" fill="#818cf8" />
                      
                      <circle cx="70" cy="30" r="10" fill="#4f46e5" />
                      <circle cx="70" cy="30" r="5" fill="#a5b4fc" />
                      
                      <circle cx="50" cy="70" r="12" fill="#10b981" />
                      <circle cx="50" cy="70" r="6" fill="#34d399" />
                    </svg>
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
                  <a href="https://www.linkedin.com/company/cellivate-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "inherit", transition: "color 0.2s" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/CellivateTechnologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "inherit", transition: "color 0.2s" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/CellivateTech" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: "inherit", transition: "color 0.2s" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UChqGWOgXIiBl_H6RWpBqCfQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: "inherit", transition: "color 0.2s" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                    <a href="mailto:contact@cellivatetech.com" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", textDecoration: "none", transition: "color 0.2s" }}>contact@cellivatetech.com</a>
                  </div>
                  
                  <div>
                    <span style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Phone</span>
                    <a href="tel:+6587826213" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", textDecoration: "none" }}>+65 8782 6213</a>
                  </div>
                  
                  <div>
                    <span style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>Corporate Address</span>
                    <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--brand-primary)", margin: 0, lineHeight: "1.4", whiteSpace: "pre-line" }}>
                      160 Robinson Road #14-04{"\n"}Singapore 068914
                    </p>
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
