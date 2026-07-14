import React from "react";

/**
 * CTABanner — full-width photo section with a dark scrim and a single
 * centered call-to-action, used to close most pages. When `solid` is set,
 * renders on the deep forest green instead of photography.
 */
export function CTABanner({ image, eyebrow, title, children, solid = false }) {
  if (solid) {
    return (
      <section className="section section--deep" style={{ textAlign: "center" }}>
        <div className="container">
          {eyebrow && <p className="eyebrow" style={{ textAlign: "center" }}>{eyebrow}</p>}
          {title && (
            <h2 className="display-lg" style={{ marginBottom: "var(--space-lg)" }}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    );
  }
  return (
    <section className="cta-banner" style={{ backgroundImage: `url(${image})` }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="display-lg">{title}</h2>}
      {children}
    </section>
  );
}
