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
      introEyebrow="For Your Home"
      introTitle="Landscapes That Feed The House"
      textSection={{
        eyebrow: "How We Think",
        title: "Beauty And Harvest, Together",
        body:
          "We don't treat 'productive' and 'beautiful' as a trade-off. A well-designed edible landscape reads, from the patio, as a garden — structured, layered, and in bloom — while quietly doing the work of an orchard, a berry patch, and a pollinator sanctuary. The goal is a yard you're proud to host in that also sends people home with something to eat.",
      }}
      intro={[
        "For homeowners and estates across Western North Carolina, we design and install landscapes that are as beautiful as they are productive — edible gardens by the back door, food forests on the slope, and native pollinator borders that bloom from spring to frost.",
        "Every residential project starts by reading your land and listening to how you want to live on it, then layering in the plants, paths, and systems that let the whole property feed your family and the ecosystem at once.",
      ]}
      included={INCLUDED}
      stats={[
        { value: "50+", label: "Homes & Estates" },
        { value: "6+", label: "Years In Business" },
        { value: "100%", label: "Ecological" },
        { value: "WNC", label: "Service Area" },
      ]}
      highlights={[
        {
          label: "Edible Or Ornamental",
          text: "Dial the balance between kitchen-garden productivity and pure ornamental beauty — most homes land somewhere in between.",
        },
        {
          label: "Whole-Yard Or Corner",
          text: "Start with a single bed by the back door or master-plan the entire property; the system scales to your appetite.",
        },
        {
          label: "Low-Maintenance By Design",
          text: "Layered plantings and deep mulch mean your landscape asks for less water and weeding than a conventional lawn.",
        },
      ]}
      portfolioCategories={["Residential"]}
      portfolioTitle="Residential Work"
    />
  );
}
