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
      intro="Our landscapes are designed for maximum self-sufficiency over time, but every garden benefits from skilled seasonal care. Our custom maintenance plans keep your landscape in optimal health through every season, reducing the learning curve and ensuring your investment keeps producing."
      included={INCLUDED}
      portfolioCategories={["Residential", "Venue"]}
      portfolioTitle="Maintained Properties"
    />
  );
}
