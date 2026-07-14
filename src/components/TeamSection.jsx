import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * TeamSection — team member cards. Per the updated design system, no real
 * headshots were supplied, so portraits render as flat forest/gold monogram
 * tiles rather than invented (or blurred placeholder) stock photography.
 * Swap in real headshots when available.
 */
const TEAM = [
  { initials: "AT", name: "Anna Timmerman", role: "Founder & Lead Designer" },
  { initials: "MR", name: "Miles Reeder", role: "Permaculture Design Lead" },
  { initials: "JC", name: "Jo Castellano", role: "Head of Installation" },
  { initials: "SP", name: "Sam Pruitt", role: "Client & Project Manager" },
];

const TILE_BG = [
  "var(--color-forest-deep)",
  "var(--color-forest-mid)",
  "var(--color-gold)",
  "var(--color-forest-deep)",
];

export function TeamSection({ eyebrow = "Who We Are", title = "The People Behind The Land" }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="grid-4">
          {TEAM.map((t, i) => {
            const bg = TILE_BG[i % TILE_BG.length];
            const onGold = bg === "var(--color-gold)";
            return (
              <div key={t.name}>
                <div
                  className="monogram"
                  style={{ background: bg, color: onGold ? "var(--color-forest-deep)" : "var(--color-on-forest)" }}
                >
                  {t.initials}
                </div>
                <div style={{ paddingTop: "var(--space-sm)" }}>
                  <div className="team__name">{t.name}</div>
                  <div className="team__role">{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
