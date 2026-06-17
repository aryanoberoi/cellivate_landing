"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger-line ${open ? "line-open-1" : ""}`} />
        <span className={`hamburger-line ${open ? "line-open-2" : ""}`} />
        <span className={`hamburger-line ${open ? "line-open-3" : ""}`} />
      </button>

      {open && (
        <div className="mobile-drawer" onClick={() => setOpen(false)}>
          <nav className="mobile-nav-links" onClick={(e) => e.stopPropagation()}>
            <Link href="/tech" className="mobile-nav-link" onClick={() => setOpen(false)}>Technology</Link>
            <Link href="/pilot" className="mobile-nav-link" onClick={() => setOpen(false)}>Pilot Program</Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/resources" className="mobile-nav-link" onClick={() => setOpen(false)}>Resources</Link>
            <Link href="/careers" className="mobile-nav-link" onClick={() => setOpen(false)}>Careers</Link>
          </nav>
        </div>
      )}
    </>
  );
}
