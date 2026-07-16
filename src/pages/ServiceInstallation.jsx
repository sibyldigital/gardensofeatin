import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { PHOTOS } from "../data/content.js";

/* Installation (/services/installation). */

const INCLUDED = [
  "Food forest design and installation",
  "Edible garden installation",
  "Native pollinator garden installation",
  "Fruit tree and orchard planting",
  "Vegetable and raised bed installation",
  "Planting and tree installation",
  "Hardscapes: pathways, retaining walls, patios, gathering spaces",
  "Ecological landscape installation",
];

export default function ServiceInstallation() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.carrots}
      title="Installation"
      subhead="Bringing the design to life."
      introEyebrow="The Build"
      introTitle="Craftsmanship In The Ground"
      textSection={{
        eyebrow: "Our Crew",
        title: "People Who Grow What They Build",
        body:
          "An install is only as good as the hands that do it. Our crew members aren't day labor moving material from a truck — they're gardeners who understand why the swale sits where it does and why that tree wants that much room. That understanding shows up in the small decisions no plan can fully specify: how a bed is shaped, how a root ball is set, how the mulch is finished. It's the difference you taste a season later.",
      }}
      intro={[
        "Our dedicated installation team brings permaculture designs to life with expert craftsmanship, locally sourced materials, and careful attention to detail. Every installation is built to thrive long-term.",
        "Our crew members are not just laborers. They are passionate about growth, beauty, and sustainability, and they bring that love to your projects, a difference you can taste.",
      ]}
      included={INCLUDED}
      stats={[
        { value: "2,000+", label: "Trees Planted" },
        { value: "1–3 wk", label: "Typical Install" },
        { value: "100%", label: "Local Materials" },
        { value: "WNC", label: "Crews On The Ground" },
      ]}
      highlights={[
        {
          label: "Locally Sourced",
          text: "Stone, soil, mulch, and plants sourced from within Western North Carolina wherever possible.",
        },
        {
          label: "Earthworks First",
          text: "We shape water and grade before planting, so the landscape holds moisture and drains where it should from day one.",
        },
        {
          label: "Built To Last",
          text: "Hardscapes and plantings are installed to mature and thrive for decades, not just to look good on install day.",
        },
      ]}
      portfolioCategories={["Residential", "Venue"]}
      portfolioTitle="Installation Work"
    />
  );
}
