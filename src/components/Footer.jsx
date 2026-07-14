import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer — deep-forest footer with wordmark, link columns, and legal line.
 * Matches the brand guide's footer: Homepage/About/Process/Portfolio/
 * Services/Packages plus Disclaimer/Privacy Policy/Contact Us and phone.
 */
export function Footer({ phone = "(828) 555-0134" }) {
  const cols = [
    [
      { label: "Homepage", to: "/" },
      { label: "About", to: "/about" },
      { label: "Process", to: "/process" },
    ],
    [
      { label: "Portfolio", to: "/portfolio" },
      { label: "Services", to: "/services" },
      { label: "Packages", to: "/packages" },
    ],
    [
      { label: "Blog", to: "/blog" },
      { label: "Privacy Policy", to: "/" },
      { label: "Contact Us", to: "/contact" },
    ],
  ];
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__wordmark">Gardens of Eatin'</div>
          <div className="footer__tagline">An Ecological Company — Asheville, NC</div>
        </div>
        {cols.map((col, i) => (
          <div key={i} className="footer__col">
            {col.map((link) => (
              <Link key={link.label} className="footer__link" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <span>{phone}</span>
        <span>© {new Date().getFullYear()} Gardens of Eatin'</span>
      </div>
    </footer>
  );
}
