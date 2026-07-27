import React from "react";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset.js";

/**
 * Footer — deep-forest footer with wordmark, link columns, and legal line.
 * Matches the brand guide's footer: Homepage/About/Process/Portfolio/
 * Services/Packages plus Privacy Policy/Contact Us and phone, with a subtle
 * Questionnaire link and a Developer Reference link to the internal
 * site-structure page.
 */
export function Footer({ phone = "(828) 555-0134" }) {
  const cols = [
    [
      { label: "Homepage", to: "/" },
      { label: "About", to: "/about-us" },
      { label: "Process", to: "/process" },
    ],
    [
      { label: "Portfolio", to: "/portfolio" },
      { label: "Services", to: "/ecological-landscaping-services" },
      { label: "Packages", to: "/design-packages" },
      { label: "Landing Page", to: "/landing" },
    ],
    [
      { label: "Blog", to: "/blog" },
      { label: "Questionnaire", to: "/questionnaire" },
      { label: "Contact Us", to: "/contact-us" },
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
        <span style={{ display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
          <Link className="footer__link" to="/policies">
            Policies
          </Link>
          <a className="footer__link" href={asset("site-reference/")}>
            Developer Reference
          </a>
          <span>© {new Date().getFullYear()} Gardens of Eatin'</span>
        </span>
      </div>
    </footer>
  );
}
