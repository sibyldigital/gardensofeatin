import React from "react";

/**
 * StatsBand — deep-forest credibility band of large gold stat values with
 * labels beneath. Takes any set of { value, label } stats so it can be reused
 * with company-wide numbers (StatsBar) or page-specific ones.
 */
export function StatsBand({ stats }) {
  return (
    <section className="statsbar">
      <div className="container statsbar__grid">
        {stats.map((s, i) => (
          <div key={s.label} className="statsbar__item" data-first={i === 0 || undefined}>
            <div className="statsbar__value">{s.value}</div>
            <div className="statsbar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
