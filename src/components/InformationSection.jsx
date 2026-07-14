import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { Callout } from "./Callout.jsx";

/**
 * InformationSection — editorial fact strip. Three short "reference book"
 * facts using the Callout gold-rule treatment rather than icon tiles.
 */
const FACTS = [
  {
    label: "Why Permaculture",
    copy: "A layered food forest needs less water, less fertilizer, and less of your weekend than a lawn — and it feeds you back.",
  },
  {
    label: "Native First",
    copy: "Every design starts with native pollinator species suited to Western NC's soil and slope, not a generic plant list.",
  },
  {
    label: "Built To Last",
    copy: "Perennial plantings mature over 3–7 years into a self-sustaining system — we design for the tenth year, not the first.",
  },
];

export function InformationSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Why It Works" title="Grounded In Ecology, Designed For Living" />
        <div className="grid-3">
          {FACTS.map((f) => (
            <Callout key={f.label} label={f.label}>
              {f.copy}
            </Callout>
          ))}
        </div>
      </div>
    </section>
  );
}
