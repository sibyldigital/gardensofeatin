import React from "react";

/**
 * StatsBar — horizontal credibility band on the deep-forest ground. Plain
 * numerals in gold, no icon tiles (brand guide: "no icons or distractions").
 */
const STATS = [
  { value: "6+", label: "Years In Business" },
  { value: "50+", label: "Installations Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "WNC", label: "Western North Carolina Wide" },
];

export function StatsBar() {
  return (
    <section className="statsbar">
      <div className="container statsbar__grid">
        {STATS.map((s, i) => (
          <div key={s.label} className="statsbar__item" data-first={i === 0 || undefined}>
            <div className="statsbar__value">{s.value}</div>
            <div className="statsbar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
