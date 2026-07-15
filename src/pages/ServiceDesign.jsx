import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { PHOTOS } from "../data/content.js";

/* Design & Consultation (/services/design). Intro uses the existing
   consultation description; the four design phases and their Downing project
   images follow. Image paths are swap-friendly placeholders standing in for
   the Downing media-library assets named in the design brief. */

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
  "On-site property consultation",
  "Site analysis: soil, water, sun, microclimate",
  "Collaborative design questionnaire",
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
      title="Design & Consultation"
      subhead="Where every garden begins."
      intro={[
        "We walk your property with you — noting sun, slope, water, and soil — and listen to how you want to live on the land. The visit ends with clear goals and an honest read of what your site can do.",
        "From that first consultation, your designer develops a custom permaculture plan through a series of drafts — orienting the big elements first, then layering in pathways, water, and plantings — until you have an installation-ready design matched to Western North Carolina.",
      ]}
      included={INCLUDED}
      includedTitle="What's Included"
      portfolioCategories={["Residential"]}
      portfolioTitle="Residential Design Work"
      questionnaireCallout
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
