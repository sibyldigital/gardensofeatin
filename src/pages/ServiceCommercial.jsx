import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { PHOTOS } from "../data/content.js";

/* Commercial (/services/commercial). */

const PILLARS = [
  {
    label: "For Venues & Event Spaces",
    copy: "Your gardens are part of your brand. A GOE installation matures and deepens in beauty every year. Every wedding photo becomes a portfolio piece for your venue.",
  },
  {
    label: "For Breweries & Taprooms",
    copy: "Lush outdoor spaces drive customer photos and social sharing. Native pollinator gardens, hop yards, and edible herb installations are consistent with the local handcrafted identity Asheville's brewery scene is known for.",
  },
  {
    label: "For Estates & Properties",
    copy: "A complete permaculture master plan for large acreage. Multi-zone design, phased installation, and year-round ecological maintenance.",
  },
];

const INCLUDED = [
  "Commercial site assessment and property analysis",
  "Custom design for outdoor spaces, beer gardens, ceremony grounds, and event backdrops",
  "Native pollinator plantings, edible installations, and food forest edge plantings",
  "Hardscapes, paths, and gathering spaces integrated with existing architecture",
  "Photography-ready seasonal design that deepens in beauty every year",
  "Ongoing maintenance partnership",
  "Portfolio feature and co-marketing opportunities for showcase installations",
];

export default function ServiceCommercial() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.cabbage}
      title="Commercial Installations"
      subhead="A backdrop that never stops growing."
      intro="Gardens of Eatin' designs and installs ecological landscapes for venues, breweries, restaurants, and commercial properties across Western North Carolina. A professionally designed edible or native garden is not just landscaping. It is a backdrop, a story, and a feature that shows up in every vendor photo, every guest experience, and every season. Rooted in beauty. Built for business."
      included={INCLUDED}
      portfolioCategories={["Venue", "Brewery/Commercial"]}
      portfolioTitle="Commercial & Venue Work"
    >
      {/* Three commercial messaging pillars */}
      <section className="section section--sunken">
        <div className="container">
          <SectionHeading eyebrow="Who We Build For" title="Grounds That Work As Hard As Your Business" />
          <div className="grid-3">
            {PILLARS.map((p) => (
              <div key={p.label}>
                <h3 className="display-md" style={{ fontSize: "20px", marginBottom: "var(--space-2xs)" }}>
                  {p.label}
                </h3>
                <p className="lede">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceSubLayout>
  );
}
