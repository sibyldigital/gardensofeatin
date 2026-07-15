import React from "react";
import { SectionHeading } from "./SectionHeading.jsx";
import { Button } from "./Button.jsx";

/**
 * PricingSection — tier cards for Design / Installation / Maintenance. No
 * published prices in source material, so tiers show scope and "Custom
 * Quote" rather than invented dollar figures. The middle tier is featured
 * on the deep-forest ground.
 */
const TIERS = [
  {
    name: "Design",
    tagline: "For the property that needs a plan",
    features: [
      "Full-property site walk",
      "Planting & hardscape design",
      "Plant list with sourcing notes",
      "2 rounds of revisions",
    ],
    featured: false,
  },
  {
    name: "Installation",
    tagline: "Design plus full build-out",
    features: [
      "Everything in Design",
      "Bed prep & hardscape build",
      "Plant sourcing & installation",
      "Irrigation setup",
    ],
    featured: true,
  },
  {
    name: "Maintenance",
    tagline: "Ongoing care as it matures",
    features: [
      "Seasonal maintenance visits",
      "Pruning & succession planting",
      "Pest & soil monitoring",
      "Priority scheduling",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Packages" title="Choose Your Level Of Involvement" />
        <div className="grid-3" style={{ alignItems: "stretch" }}>
          {TIERS.map((t) => (
            <div key={t.name} className={t.featured ? "tier tier--featured" : "tier"}>
              <div className="tier__name">{t.name}</div>
              <div className="tier__tagline">{t.tagline}</div>
              <ul className="tier__features">
                {t.features.map((f) => (
                  <li key={f}>
                    <span className="tier__dash">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="tier__cta">
                <Button variant={t.featured ? "secondary-on-dark" : "secondary"} to="/contact-us">
                  Custom Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
