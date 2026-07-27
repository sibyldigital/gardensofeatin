import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { PHOTOS } from "../data/content.js";

/* Design (/services/design). The custom permaculture plan developed from the
   consultation — split out from the former combined Design & Consultation
   page. The four design phases use the existing Downing project images
   (swap-friendly placeholders standing in for the named media-library
   assets). */

const DESIGN_STAGES = [
  {
    n: "01",
    name: "Rough Draft",
    copy: "Block design first. We orient the big elements to the land, so there's a real foundation to build on instead of guesswork.",
    // media: Downing-Design-Draft-1.1-FullSite
    image: PHOTOS.aerial,
  },
  {
    n: "02",
    name: "Design 2",
    copy: "This is where pathways, hardscaping, water retention, and canopy trees come into focus. We meet after every draft to fine-tune the vision, and it gets more precise each round.",
    // media: Downing-Design-Draft-2.3-EdgingReference
    image: PHOTOS.cabbage,
  },
  {
    n: "03",
    name: "Final Draft",
    copy: "Perennials, a full planting plan, earthmoving if the site calls for it. This is where the plant palette locks in and the dream starts looking like a drawing you could hand someone and say, build this.",
    // media: Downing-Design-Final-1.3-Install
    image: PHOTOS.carrots,
  },
  {
    n: "04",
    name: "Vision Realized",
    copy: "Your finalized plans get organized and prepped for contractors or our own install crew, so nothing gets lost in translation between the page and the ground.",
    // media: gardenofeatinphotos
    image: PHOTOS.orchard,
  },
];

const INCLUDED = [
  "Rough draft block design",
  "Refined design with pathways, hardscaping, and water retention",
  "Final planting plan with full plant palette",
  "Earthmoving plans if applicable",
  "Installation-ready documentation",
];

export default function ServiceDesign() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.aerial}
      title="Design"
      subhead="A custom plan, drawn to build."
      introEyebrow="The Plan"
      introTitle="From First Walk To Living Document"
      intro="Following our time on site, your designer builds a set of objectives, an estimate, and a timeline for your first design draft. That draft becomes a living document, not a fixed one. It evolves as your goals shift, the way any good plan should. We design with the full dream in view while staying flexible enough to phase the work around your budget. Every meeting after that is where the plan gets sharper, until it feels like it actually belongs to your land."
      textSection={{
        eyebrow: "Yours To Keep",
        title: "A Plan You Own",
        body:
          "The design is a document, and it belongs to you. You can hand it to our install crew, build it yourself over a few weekends, or phase it across seasons as budget allows — the drawings hold up either way. Every plant, path, and grade decision is recorded, so nothing lives only in one person's head and the vision stays intact no matter who does the digging.",
      }}
      included={INCLUDED}
      includedTitle="What's Included"
      stats={[
        { value: "4", label: "Design Phases" },
        { value: "1:1", label: "Collaborative Process" },
        { value: "Custom", label: "Plant Palette" },
        { value: "WNC", label: "Site-Matched Design" },
      ]}
      highlights={[
        {
          label: "Full-Service Or DIY",
          text: "Take the finished plan to our install crew, or use it to build the gardens yourself — the design works either way.",
        },
        {
          label: "Site-Led Palette",
          text: "Every plant is chosen for your soil, slope, sun, and microclimate — never a generic list dropped onto the page.",
        },
        {
          label: "Phased To Your Budget",
          text: "Designs are drawn to install all at once or in seasonal phases, so the plan fits the pace you want to move at.",
        },
      ]}
      portfolioCategories={["Residential"]}
      portfolioTitle="Residential Design Work"
    >
      {/* Four design phases — full-bleed pillars alternating dark / light */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The Design Process" title="From Rough Draft To Vision Realized" />
        </div>
        {DESIGN_STAGES.map((stage, i) => {
          const dark = i % 2 === 0; // dark, light, dark, light
          const flip = i % 2 === 1; // alternate the image side
          const image = (
            <div className="split__image" style={{ backgroundImage: `url(${stage.image})` }} />
          );
          const panel = (
            <div
              className="split__panel"
              style={{
                background: dark ? "var(--color-forest-deep)" : "var(--color-cream-dim)",
                color: dark ? "var(--color-on-forest)" : "var(--text-body)",
              }}
            >
              <p className="eyebrow" style={dark ? undefined : { color: "var(--color-gold)" }}>
                {`Stage ${stage.n}`}
              </p>
              <h3
                className="display-md"
                style={{
                  color: dark ? "var(--color-on-forest)" : "var(--text-heading)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {stage.name}
              </h3>
              <p
                style={{
                  font: "var(--text-body-lg)",
                  color: dark ? "var(--color-on-forest-soft)" : "var(--text-muted)",
                  maxWidth: "440px",
                }}
              >
                {stage.copy}
              </p>
            </div>
          );
          return (
            <div key={stage.n} className={flip ? "split split--flip" : "split"}>
              {flip ? (
                <>
                  {panel}
                  {image}
                </>
              ) : (
                <>
                  {image}
                  {panel}
                </>
              )}
            </div>
          );
        })}
      </section>
    </ServiceSubLayout>
  );
}
