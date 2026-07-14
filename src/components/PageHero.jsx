import React from "react";
import { NavHeader } from "./NavHeader.jsx";

/**
 * PageHero — full-bleed photography hero with the dark forest-green scrim
 * (--overlay-hero) and the transparent NavHeader laid over it. Headline is
 * a large centered serif in white; subhead in the smaller humanist sans.
 */
export function PageHero({
  image = "/assets/photography/landscape-hero-wide.png",
  eyebrow,
  title,
  lede,
  actions,
  minHeight = "440px",
  children,
}) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})`, minHeight }}>
      <NavHeader onDark />
      <div className="hero__content fade-in">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display-xl">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
        {children}
      </div>
    </div>
  );
}
