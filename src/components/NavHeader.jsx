import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * NavHeader — transparent-over-hero header with wordmark, primary nav,
 * phone, and a maroon "Get A Quote" CTA. `onDark` renders cream text for
 * placement over photography; otherwise sits on the cream page background.
 */
const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Packages", to: "/packages" },
  { label: "Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

export function NavHeader({ onDark = false, phone = "(828) 555-0134" }) {
  return (
    <header className={onDark ? "nav nav--on-dark" : "nav"}>
      <Link to="/" className="nav__wordmark">
        <img className="nav__mark" src="/assets/logo/apple-tree-mark.png" alt="" />
        Gardens of Eatin'
      </Link>
      <nav className="nav__links" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} className="nav__link" end={item.to === "/"}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="nav__right">
        <span className="nav__phone">{phone}</span>
        <Link className="nav__cta" to="/contact">
          Get A Quote
        </Link>
      </div>
    </header>
  );
}
