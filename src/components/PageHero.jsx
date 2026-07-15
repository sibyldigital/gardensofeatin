import React from "react";
import { NavHeader } from "./NavHeader.jsx";

/**
 * PageHero — full-bleed photography hero with the dark forest-green scrim
 * (--overlay-hero) and the transparent NavHeader laid over it. Headline is
 * a large centered serif in white; subhead in the smaller humanist sans.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  lede,
  actions,
  minHeight,
  children,
}) {
  // Height defaults to the full viewport via the .hero CSS rule; a caller may
  // still pass minHeight to override it.
  const style = { backgroundImage: `url(${image})` };
  if (minHeight) style.minHeight = minHeight;
  return (
    <div className="hero" style={style}>
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
