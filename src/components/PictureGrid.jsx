import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * PictureGrid — open-edge photo grid. Full-bleed tiles that bleed to their
 * edges (the brand's signature motif), with an optional section heading.
 * Used on feature/case-study pages and the sales landing page.
 */
export function PictureGrid({ images, eyebrow, title, aspect = "4 / 3", sunken = false }) {
  return (
    <section className={sunken ? "section section--sunken" : "section"}>
      <div className="container">
        {(eyebrow || title) && <SectionHeading eyebrow={eyebrow} title={title} />}
        <div className="picture-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className="picture-grid__cell"
              style={{ backgroundImage: `url(${src})`, aspectRatio: aspect }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
