import React from "react";
import { Button } from "./Button.jsx";
import { PHOTOS } from "../data/content.js";

/**
 * CommercialPitchSection — two-column pitch for venues/breweries/estates on
 * the deep-forest ground (this brand's "serious business" surface, matching
 * the resilience split on the homepage).
 */
export function CommercialPitchSection() {
  return (
    <section className="split">
      <div className="split__panel" style={{ background: "var(--color-forest-deep)", color: "var(--color-on-forest)" }}>
        <p className="eyebrow">For Venues &amp; Breweries</p>
        <h2 className="display-lg" style={{ color: "var(--color-on-forest)", maxWidth: "460px", marginBottom: "var(--space-md)" }}>
          Grounds That Work As Hard As Your Business Does
        </h2>
        <p style={{ font: "var(--text-body-lg)", color: "var(--color-on-forest-soft)", maxWidth: "460px", marginBottom: "var(--space-lg)" }}>
          For wedding venues and breweries, the landscape isn't decoration — it's the backdrop
          guests remember and the ingredients your kitchen can use. We design commercial grounds
          for photography, foot traffic, and harvest, all at once.
        </p>
        <div>
          <Button variant="secondary-on-dark" size="lg" to="/contact-us">
            Talk To Us
          </Button>
        </div>
      </div>
      <div className="split__image" style={{ backgroundImage: `url(${PHOTOS.cabbage})` }} />
    </section>
  );
}
