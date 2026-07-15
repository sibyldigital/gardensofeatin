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
    copy: "Block designing to orient elements to the landscape. Macro level design to have a base to move forward on.",
    // media: Downing-Design-Draft-1.1-FullSite
    image: PHOTOS.aerial,
  },
  {
    n: "02",
    name: "Design 2",
    copy: "This second design manages organic elements like pathways, hardscaping, water retention and canopy trees.",
    // media: Downing-Design-Draft-2.3-EdgingReference
    image: PHOTOS.cabbage,
  },
  {
    n: "03",
    name: "Final Draft",
    copy: "This final draft will position perennials and a planting plan for all the elements as well as earthmoving plans if necessary. A full plant palette and design will be complete and ready to help make your dreams a reality.",
    // media: Downing-Design-Final-1.3-Install
    image: PHOTOS.carrots,
  },
  {
    n: "04",
    name: "Vision Realized",
    copy: "At this stage, your finalized plans are organized and prepared for contractors or installation teams, ensuring clarity, efficiency, and alignment as the project moves from design into construction.",
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
      intro="From that first consultation, your designer develops a custom permaculture plan through a series of drafts — orienting the big elements first, then layering in pathways, water, and plantings — until you have an installation-ready design matched to Western North Carolina."
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
      {/* Four design phases */}
      <section className="section section--sunken">
        <div className="container">
          <SectionHeading eyebrow="The Design Process" title="From Rough Draft To Vision Realized" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
            {DESIGN_STAGES.map((stage, i) => (
              <div key={stage.n} className="grid-2" style={{ alignItems: "center" }}>
                <div
                  style={{
                    order: i % 2 === 1 ? 2 : 1,
                    backgroundImage: `url(${stage.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    aspectRatio: "4 / 3",
                  }}
                />
                <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                  <p className="eyebrow">{`Stage ${stage.n}`}</p>
                  <h3 className="display-md" style={{ marginBottom: "var(--space-sm)" }}>
                    {stage.name}
                  </h3>
                  <p className="lede">{stage.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceSubLayout>
  );
}
