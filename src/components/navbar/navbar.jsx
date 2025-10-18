// src/components/navbar/navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

/**
 * Navbar
 * - responsive: shows full menu on wide screens and a hamburger menu on small screens
 * - accessible: aria attributes, keyboard (Escape closes), focus styles
 * - props: optional brand (string) and links (array of { label, href, primary })
 *
 * Usage: <Navbar />
 * or: <Navbar brand="Elektronn-Ray" links={[{label:'Home', href:'#'}, ...]} />
 */
const Navbar = ({
  brand = "Elektronn-Ray",
  links = [
    { label: "Home", href: "#" },
    { label: "Explore", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#", primary: true }
  ],
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on Escape, outside click, or when resizing to large screens
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        <div className="nav-brand" aria-label={`${brand} home`}>
          {brand}
        </div>

        <nav className="nav-main" role="navigation" aria-label="Main navigation">
          {/* Hamburger toggle (visible on small screens) */}
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          {/* Menu */}
          <ul
            id="primary-navigation"
            ref={menuRef}
            className={`nav-menu ${open ? "nav-menu--open" : ""}`}
            role="menubar"
          >
            {links.map((link, idx) => (
              <li key={idx} role="none">
                <a
                  role="menuitem"
                  href={link.href ?? "#"}
                  className={`nav-link ${link.primary ? "nav-link--primary" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
