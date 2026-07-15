import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { PHOTOS } from "../data/content.js";

/* Residential (/services/residential). */

const INCLUDED = [
  "On-site consultation and full site analysis",
  "Custom edible and ornamental garden design",
  "Raised beds and kitchen gardens",
  "Food forests and fruit tree plantings",
  "Native pollinator and habitat gardens",
  "Hardscapes: paths, patios, and gathering spaces",
  "Installation by our dedicated crew",
  "Seasonal maintenance plans",
];

export default function ServiceResidential() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.coleus}
      title="Residential"
      subhead="Edible landscapes for the way you live."
      intro={[
        "For homeowners and estates across Western North Carolina, we design and install landscapes that are as beautiful as they are productive — edible gardens by the back door, food forests on the slope, and native pollinator borders that bloom from spring to frost.",
        "Every residential project starts by reading your land and listening to how you want to live on it, then layering in the plants, paths, and systems that let the whole property feed your family and the ecosystem at once.",
      ]}
      included={INCLUDED}
      portfolioCategories={["Residential"]}
      portfolioTitle="Residential Work"
    />
  );
}
