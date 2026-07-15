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
      subhead="Where every garden begins."
      intro="We walk your property with you — noting sun, slope, water, and soil — and listen to how you want to live on the land. The visit ends with clear goals and an honest read of what your site can do."
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
          text: "Fill out the design questionnaire first — the more you share, the more we can accomplish together on site.",
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
      questionnaireCallout
    />
  );
}
