import React from "react";
import { PHOTOS } from "../data/content.js";

/**
 * ServiceDetailSection — large photo + heading/description/bullet list. For
 * spotlighting an individual service. Image side flips with `flip`.
 */
export function ServiceDetailSection({
  eyebrow = "Service",
  title = "Food Forest Design",
  image = PHOTOS.orchard,
  description = "A multi-layered planting of fruit and nut trees, berry shrubs, and perennial groundcover, designed to produce for decades with a fraction of a lawn's upkeep.",
  bullets = [
    "Site analysis for sun, slope, and soil",
    "Canopy, understory, and groundcover layering",
    "Native and heirloom variety selection",
    "3–5 year establishment planning",
  ],
  flip = false,
}) {
  return (
    <section className="section">
      <div className="container grid-2" style={{ alignItems: "center" }}>
        <div
          style={{
            order: flip ? 2 : 1,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            aspectRatio: "4 / 5",
          }}
        />
        <div style={{ order: flip ? 1 : 2 }}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-md)" }}>
            {title}
          </h2>
          <p className="body-justified" style={{ marginBottom: "var(--space-md)" }}>
            {description}
          </p>
          <ul className="bullets">
            {bullets.map((item) => (
              <li key={item}>
                <span className="bullets__dash">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
