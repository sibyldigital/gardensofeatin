import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { PHOTOS } from "../data/content.js";

/* Consultation (/services/consultation). The on-site walk and site analysis
   that begins every project — split out from the former combined
   Design & Consultation page. */

const INCLUDED = [
  "On-site property consultation",
  "Site analysis: soil, water, sun, microclimate",
  "Collaborative design questionnaire",
  "Goal-setting and priorities session",
  "An honest read of what your site can do",
];

export default function ServiceConsultation() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.harvest}
      title="Consultation"
      subhead="Where vision meets possibility."
      introEyebrow="The Consultation"
      introTitle="A Thoughtful Conversation On Your Land"
      intro="A thoughtful landscape starts with a thoughtful conversation. We spend real time on your property, walking the sun, the slope, the water, the soil, and listening for what you actually want to live in. By the end, we've got a clear direction for a landscape that's not just beautiful, but aligned with the way you live and the way your land wants to grow."
      textSection={{
        eyebrow: "Why It Matters",
        title: "The Site Tells Us What To Plant",
        body:
          "Most design mistakes are really listening mistakes — a plan drawn before anyone read the water, the wind, or the way the afternoon sun bakes one corner. The consultation is where we slow down and let the property speak first: where it drains, where it holds frost, what already grows well and what struggles. Everything we recommend afterward is built on what we learned standing on your ground, not on a template.",
      }}
      included={INCLUDED}
      stats={[
        { value: "On-Site", label: "Consultations" },
        { value: "4", label: "Site Factors Read" },
        { value: "1:1", label: "Collaborative" },
        { value: "WNC", label: "Service Area" },
      ]}
      highlights={[
        {
          label: "Come Prepared",
          text: "Fill out the design questionnaire before we meet. The more we know going in, the less time we spend getting acquainted and the more time we spend actually co-creating on your land.",
        },
        {
          label: "Goals First",
          text: "We start with how you want to live on the land, not a template — the plan follows your priorities.",
        },
        {
          label: "An Honest Read",
          text: "You leave with a clear, honest picture of what your site can do before any design work begins.",
        },
      ]}
      portfolioCategories={["Residential"]}
      portfolioTitle="Residential Work"
      galleryEyebrow="The Plans"
      galleryTitle="Design Blueprints"
      questionnaireCallout
      showPackagesCta={false}
    />
  );
}
