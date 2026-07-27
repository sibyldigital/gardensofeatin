import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * MasonryGallery — zero-bleed masonry of images (CSS columns, no gutters).
 * Columns pack by intrinsic image height. Used on the service pages to show
 * project photography and design drawings.
 */
export function MasonryGallery({ images, eyebrow, title, sunken = false }) {
  if (!images || images.length === 0) return null;
  return (
    <section className={sunken ? "section section--sunken" : "section"}>
      <div className="container">
        {(eyebrow || title) && <SectionHeading eyebrow={eyebrow} title={title} />}
        <div className="masonry">
          {images.map((src, i) => (
            <img key={i} className="masonry__item" src={src} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
