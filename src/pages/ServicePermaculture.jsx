import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { PHOTOS } from "../data/content.js";

/* Permaculture Consultation (/permaculture-consultation). A dedicated,
   top-level service page carried over from the legacy site — the whole-system
   design conversation for food forests, water harvesting, and regenerative
   land use. Built on the shared ServiceSubLayout scaffold. */

const INCLUDED = [
  "Whole-site permaculture assessment",
  "Water: catchment, swales, and runoff mapping",
  "Sun, wind, and microclimate zoning",
  "Soil health and regeneration strategy",
  "Food forest and perennial system planning",
  "A phased plan you can build over several seasons",
];

export default function ServicePermaculture() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.orchard}
      eyebrow="Service"
      title="Permaculture Consultation"
      subhead="Design that works with your land, not against it."
      intro={[
        "Permaculture reads your property as a whole living system — the way water moves across it, where the sun falls, how the soil holds together, and what already wants to grow. Before we draw a single bed, we spend a session mapping those patterns so every later decision works with them.",
        "The consultation ends with a phased, whole-system direction: what to establish first, how to harvest and slow your water, and how a food forest or perennial planting can carry more of the load each season with fewer outside inputs.",
      ]}
      included={INCLUDED}
      includedTitle="What's Included"
      stats={[
        { value: "Whole-Site", label: "Assessment" },
        { value: "Zones", label: "0–5 Mapped" },
        { value: "Multi-Year", label: "Phased Plan" },
        { value: "WNC", label: "Service Area" },
      ]}
      highlights={[
        {
          label: "Water First",
          text: "We map how rain moves across your site and plan to slow, spread, and sink it — swales and catchment before planting.",
        },
        {
          label: "Layered Systems",
          text: "Canopy, understory, and ground layers planned together so the planting feeds itself and closes its own loops.",
        },
        {
          label: "Built In Phases",
          text: "You leave with a sequence, not a single install — what to establish first and what can follow over coming seasons.",
        },
      ]}
      highlightsEyebrow="The Approach"
      highlightsTitle="How We Work"
      portfolioCategories={["Residential", "Venue"]}
      portfolioTitle="Permaculture Work"
      questionnaireCallout
    />
  );
}
