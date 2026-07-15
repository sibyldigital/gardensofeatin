import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * Timeline — horizontal numbered process strip: an eyebrow + heading over a
 * row of numbered steps sitting on a hairline (01 / 02 / 03 / 04), each with
 * a name and a short description. When a step has an `href`, the whole step
 * becomes an anchor link (used on the Process page to jump to each section).
 */
export function Timeline({ eyebrow, title, steps, sunken = false, action }) {
  return (
    <section className={sunken ? "section section--sunken" : "section"}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="timeline">
          {steps.map((s) => {
            const inner = (
              <>
                <span className="timeline__num">{s.number}</span>
                <span className="timeline__name">{s.name}</span>
                <span className="timeline__copy">{s.description}</span>
              </>
            );
            return s.href ? (
              <a key={s.number} href={s.href} className="timeline__step timeline__step--link">
                {inner}
              </a>
            ) : (
              <div key={s.number} className="timeline__step">
                {inner}
              </div>
            );
          })}
        </div>
        {action && <div style={{ marginTop: "var(--space-xl)" }}>{action}</div>}
      </div>
    </section>
  );
}
