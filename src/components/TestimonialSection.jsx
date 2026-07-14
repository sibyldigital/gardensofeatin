import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * TestimonialSection — 3-up review cards. Stars are plain "★" characters
 * (a typographic mark, not an icon asset) in gold, per the brand's
 * "no icons" rule.
 */
const REVIEWS = [
  {
    quote:
      "Anna's team turned a half-acre of lawn into something we walk every single morning. It's the best investment we've made in the house.",
    name: "Caroline H.",
    detail: "Homeowner, Biltmore Forest",
    stars: 5,
  },
  {
    quote:
      "They designed our venue's back garden to bloom on a wedding-season calendar. Couples ask about the flowers as much as the view.",
    name: "The Orchard House",
    detail: "Wedding Venue, Fairview",
    stars: 5,
  },
  {
    quote:
      "Professional, on schedule, and the food forest they installed two years ago is already producing more than we can eat.",
    name: "Tom R.",
    detail: "Estate Property, Weaverville",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {"★".repeat(count)}
      <span className="stars__empty">{"★".repeat(5 - count)}</span>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="What Clients Say" title="Trusted Across Western NC" />
        <div className="grid-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="review">
              <Stars count={r.stars} />
              <p className="review__quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="review__name">{r.name}</div>
              <div className="review__detail">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
