import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * ServiceRadius — the process/service-area schematic from the updated design
 * system's TimelineSection: concentric rings around Asheville (an abstract
 * schematic, not literal cartography) paired with a legend of the service
 * radii. Cream ground, matching the design system's schematic treatment.
 */
const RINGS = [
  { r: 210, label: "45+ mi", copy: "Estate & farm consults" },
  { r: 150, label: "25 mi", copy: "Full install service" },
  { r: 90, label: "10 mi", copy: "Asheville core" },
];

export function ServiceRadius() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Where We Work" title="Rooted In Asheville, Reaching Across WNC" />
        <div className="radius">
          <div className="radius__diagram" aria-hidden="true">
            {RINGS.map((ring) => (
              <div
                key={ring.label}
                className="radius__ring"
                style={{
                  left: `calc(50% - ${ring.r}px)`,
                  top: `calc(50% - ${ring.r}px)`,
                  width: `${ring.r * 2}px`,
                  height: `${ring.r * 2}px`,
                }}
              />
            ))}
            <div className="radius__center" />
            <span className="radius__label">Asheville, NC</span>
          </div>
          <div className="radius__legend">
            {RINGS.map((ring) => (
              <div key={ring.label} className="radius__row">
                <span className="radius__mi">{ring.label}</span>
                <span className="radius__copy">{ring.copy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
