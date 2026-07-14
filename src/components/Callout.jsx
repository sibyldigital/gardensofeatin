import React from "react";

/**
 * Callout — the "structured geometric element" the brand guide calls for
 * sparingly: a small reference-book-style box for informational tidbits,
 * framed with a thin gold rule rather than a full border or drop shadow.
 */
export function Callout({ label = "Brand Note", children }) {
  return (
    <div className="callout">
      <div className="callout__label">{label}</div>
      <div className="callout__body">{children}</div>
    </div>
  );
}
