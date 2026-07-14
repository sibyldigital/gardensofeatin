import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { Button } from "./Button.jsx";
import { PHOTOS } from "../data/content.js";

/**
 * InstagramSection — 3×3 image grid + follow button. Reuses the brand's own
 * source photography as stand-ins (no live feed was available to source) —
 * swap in a real feed embed/API when connected.
 */
const IMAGES = [
  PHOTOS.harvest,
  PHOTOS.coneflowers,
  PHOTOS.coleus,
  PHOTOS.cabbage,
  PHOTOS.carrots,
  PHOTOS.orchard,
  PHOTOS.aerial,
  PHOTOS.hero,
  PHOTOS.harvest,
];

export function InstagramSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading eyebrow="Follow Along" title="@gardensofeatin" />
          <Button variant="secondary" href="https://instagram.com">
            Follow
          </Button>
        </div>
        <div className="ig-grid">
          {IMAGES.map((img, i) => (
            <div key={i} className="ig-grid__cell" style={{ backgroundImage: `url(${img})` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
