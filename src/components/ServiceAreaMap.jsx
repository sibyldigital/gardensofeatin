import React from "react";

/**
 * ServiceAreaMap — self-contained, brand-styled map of the Western North
 * Carolina service area. Drawn inline (no third-party embed) so it renders
 * everywhere; swap for a live map embed if one is preferred.
 */
const TOWNS = [
  { name: "Asheville", x: 500, y: 300, home: true },
  { name: "Weaverville", x: 490, y: 205 },
  { name: "Marshall", x: 400, y: 150 },
  { name: "Burnsville", x: 640, y: 115 },
  { name: "Black Mountain", x: 660, y: 290 },
  { name: "Waynesville", x: 240, y: 340 },
  { name: "Hendersonville", x: 570, y: 445 },
];

export function ServiceAreaMap() {
  return (
    <svg
      viewBox="0 0 900 540"
      role="img"
      aria-label="Map of the Gardens of Eatin' service area in Western North Carolina, centered on Asheville"
      style={{ width: "100%", height: "auto", display: "block", background: "var(--color-cream-dim)" }}
    >
      {/* ridge lines — quiet topography */}
      <g fill="none" stroke="var(--color-cream-line)" strokeWidth="2">
        <path d="M-20,110 C120,60 260,130 400,90 C540,50 700,110 920,70" />
        <path d="M-20,200 C140,150 300,220 460,180 C620,140 760,210 920,170" />
        <path d="M-20,320 C120,280 280,350 440,310 C600,270 760,340 920,300" />
        <path d="M-20,430 C140,390 300,460 460,420 C620,380 780,450 920,410" />
        <path d="M-20,520 C160,480 340,540 520,500 C680,470 800,520 920,490" />
      </g>

      {/* French Broad River */}
      <path
        d="M310,540 C360,460 430,420 470,350 C510,280 480,210 520,140 C550,90 600,60 640,10"
        fill="none"
        stroke="var(--color-forest-mid)"
        strokeOpacity="0.35"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* service radius — about an hour of Asheville */}
      <ellipse
        cx="500"
        cy="300"
        rx="330"
        ry="235"
        fill="var(--color-forest-mid)"
        fillOpacity="0.06"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
      />

      {TOWNS.map((town) => (
        <g key={town.name}>
          <circle
            cx={town.x}
            cy={town.y}
            r={town.home ? 11 : 6}
            fill={town.home ? "var(--color-maroon)" : "var(--color-forest-deep)"}
          />
          {town.home && (
            <circle cx={town.x} cy={town.y} r="20" fill="none" stroke="var(--color-maroon)" strokeWidth="1.5" strokeOpacity="0.5" />
          )}
          <text
            x={town.x}
            y={town.y - (town.home ? 32 : 16)}
            textAnchor="middle"
            style={{
              font: "600 15px var(--font-body)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fill: "var(--color-ink-soft)",
            }}
          >
            {town.name}
          </text>
        </g>
      ))}

      <text
        x="500"
        y="352"
        textAnchor="middle"
        style={{ font: "italic 400 17px var(--font-display)", fill: "var(--color-maroon)" }}
      >
        Home base
      </text>
    </svg>
  );
}
