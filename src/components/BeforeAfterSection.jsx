import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { PHOTOS } from "../data/content.js";

/**
 * BeforeAfterSection — side-by-side split with typographic "Before"/"After"
 * labels (no arrow glyph). Uses two source photos to stand in for a true
 * before/after pair — swap in a client's real pair when available.
 */
export function BeforeAfterSection({
  before = PHOTOS.carrots,
  after = PHOTOS.aerial,
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="The Transformation" title="See The Land Before You Plant On It" />
        <div className="beforeafter">
          <div className="beforeafter__pane">
            <div
              className="beforeafter__img beforeafter__img--before"
              style={{ backgroundImage: `url(${before})` }}
            />
            <span className="beforeafter__label">Before</span>
          </div>
          <div className="beforeafter__pane">
            <div className="beforeafter__img" style={{ backgroundImage: `url(${after})` }} />
            <span className="beforeafter__label">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}
