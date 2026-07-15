import React from "react";
import { Link, NavLink } from "react-router-dom";
import { asset } from "../lib/asset.js";

/**
 * NavHeader — transparent-over-hero header with wordmark, primary nav (with a
 * Services dropdown to the four discipline sub-pages), phone, and a maroon
 * "Get A Quote" CTA. `onDark` renders cream text for placement over
 * photography; otherwise sits on the cream page background.
 *
 * Display labels and routes differ intentionally: "How It Works" → /process,
 * "About" → /about-us, "Services" → /ecological-landscaping-services.
 */
const SERVICE_CHILDREN = [
  { label: "Consultation", to: "/services/consultation" },
  { label: "Design", to: "/services/design" },
  { label: "Residential", to: "/services/residential" },
  { label: "Installation", to: "/services/installation" },
  { label: "Maintenance", to: "/services/maintenance" },
  { label: "Commercial", to: "/services/commercial" },
];

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Process", to: "/process" },
  { label: "Services", to: "/ecological-landscaping-services", children: SERVICE_CHILDREN },
  { label: "Packages", to: "/design-packages" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact-us" },
];

export function NavHeader({ onDark = false, phone = "(828) 555-0134" }) {
  return (
    <header className={onDark ? "nav nav--on-dark" : "nav"}>
      <Link to="/" className="nav__wordmark">
        <img className="nav__mark" src={asset("assets/logo/apple-tree-mark.png")} alt="" />
        Gardens of Eatin'
      </Link>
      <nav className="nav__links" aria-label="Primary">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <div key={item.to} className="nav__item nav__item--dropdown">
              <NavLink to={item.to} className="nav__link">
                {item.label}
                <span className="nav__caret" aria-hidden="true">›</span>
              </NavLink>
              <div className="nav__dropdown" role="menu">
                {item.children.map((child) => (
                  <NavLink key={child.to} to={child.to} className="nav__dropdown-link" role="menuitem">
                    {child.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} className="nav__link" end={item.to === "/"}>
              {item.label}
            </NavLink>
          )
        )}
      </nav>
      <div className="nav__right">
        <span className="nav__phone">{phone}</span>
        <Link className="nav__cta" to="/contact-us">
          Get A Quote
        </Link>
      </div>
    </header>
  );
}
