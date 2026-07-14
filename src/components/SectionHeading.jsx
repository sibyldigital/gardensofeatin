import React from "react";

/**
 * SectionHeading — left-aligned editorial heading with optional gold
 * eyebrow and an optional italic gold flourish, per the design system's
 * homepage composition.
 */
export function SectionHeading({ eyebrow, title, italic, lede }) {
  return (
    <div style={{ marginBottom: "var(--space-lg)" }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-lg">
        {title}
        {italic && (
          <>
            {" "}
            <em className="display-italic">{italic}</em>
          </>
        )}
      </h2>
      {lede && (
        <p className="lede" style={{ marginTop: "var(--space-sm)" }}>
          {lede}
        </p>
      )}
    </div>
  );
}
