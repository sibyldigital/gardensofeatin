import React from "react";
import { ServiceSubLayout } from "../components/ServiceSubLayout.jsx";
import { PHOTOS } from "../data/content.js";

/* Maintenance (/services/maintenance). */

const INCLUDED = [
  "Custom seasonal maintenance plans",
  "Mulching: soil health, moisture retention, weed suppression",
  "Gardening services: plant care, cultivation, seasonal planting",
  "Seasonal cleanup and preparation",
  "Fertilization and remineralization",
  "Pruning, deadheading, and division",
  "Harvest support and garden walk-throughs",
];

export default function ServiceMaintenance() {
  return (
    <ServiceSubLayout
      heroImage={PHOTOS.harvest}
      title="Maintenance"
      subhead="Tending what you've grown."
      introEyebrow="The Care"
      introTitle="Skilled Hands Through Every Season"
      intro="Our landscapes are designed for maximum self-sufficiency over time, but every garden benefits from skilled seasonal care. Our custom maintenance plans keep your landscape in optimal health through every season, reducing the learning curve and ensuring your investment keeps producing."
      textSection={{
        eyebrow: "The Payoff",
        title: "An Investment That Keeps Producing",
        body:
          "A garden is a living asset, and like any asset it rewards attention. A few skilled visits a year keep the soil fed, the plantings shaped, and small problems small — protecting the money and effort already in the ground. Left alone, even a well-designed landscape drifts; tended well, it deepens in beauty and yield every season and repays the care many times over.",
      }}
      included={INCLUDED}
      stats={[
        { value: "4", label: "Seasons Covered" },
        { value: "100%", label: "No Synthetic Inputs" },
        { value: "Custom", label: "Care Cadence" },
        { value: "Priority", label: "Scheduling" },
      ]}
      highlights={[
        {
          label: "Custom Cadence",
          text: "Monthly, seasonal, or on-call — we build the visit schedule around how hands-on you want to be.",
        },
        {
          label: "No Synthetic Inputs",
          text: "Soil is fed with compost, mulch, and remineralization; pests are managed ecologically, never with synthetic sprays.",
        },
        {
          label: "Learn As We Go",
          text: "Every visit can double as a garden walk-through, so you learn to steward and harvest the landscape yourself.",
        },
      ]}
      portfolioCategories={["Residential", "Venue"]}
      portfolioTitle="Maintained Properties"
    />
  );
}
