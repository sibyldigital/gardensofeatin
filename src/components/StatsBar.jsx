import React from "react";
import { StatsBand } from "./StatsBand.jsx";

/**
 * StatsBar — company-wide credibility band (years, installs, licensing,
 * service area). Thin wrapper over StatsBand with the default GOE numbers.
 */
const STATS = [
  { value: "6+", label: "Years In Business" },
  { value: "50+", label: "Installations Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "WNC", label: "Western North Carolina Wide" },
];

export function StatsBar() {
  return <StatsBand stats={STATS} />;
}
