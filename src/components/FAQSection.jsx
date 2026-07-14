import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * FAQSection — clean collapsible accordion. Plain "+"/"–" text glyphs for
 * expand state (typographic, not an icon asset).
 */
const FAQS = [
  {
    q: "Do you work with properties outside Asheville?",
    a: "Yes — we serve estates, homes, and venues across Western North Carolina, with a wider radius for design-only consultations.",
  },
  {
    q: "How long does a full installation take?",
    a: "Most residential installs run 1–3 weeks depending on scope; larger estate or commercial projects are scheduled in phases over a season.",
  },
  {
    q: "Do I need to maintain the garden myself afterward?",
    a: "No — we offer seasonal maintenance packages, but the systems we design are built to need less upkeep than a traditional lawn from year one.",
  },
  {
    q: "Can you work with an existing landscape rather than starting over?",
    a: "Almost always. Most of our projects layer edible and native plantings into an existing landscape rather than replacing it entirely.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "760px" }}>
        <SectionHeading eyebrow="Questions" title="Frequently Asked" />
        <div>
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="faq">
                <button
                  className="faq__toggle"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="faq__q">{item.q}</span>
                  <span className="faq__mark">{open ? "–" : "+"}</span>
                </button>
                {open && <p className="faq__a">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
