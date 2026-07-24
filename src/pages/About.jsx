import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, TEAM, VALUES } from "../data/content.js";

/* About — warm editorial hero, two-column philosophy statement (text left,
   portrait right), team section (monogram tiles per the updated design —
   no invented headshots), values list. */

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TILE_BG = ["var(--color-forest-mid)", "var(--color-gold)", "var(--color-forest-mid)"];

export default function About() {
  return (
    <div>
      <PageHero
        image={PHOTOS.aerial}
        eyebrow="About Gardens of Eatin'"
        title="Grounded In The Land We Plant"
        lede="An ecological landscaping company from Asheville, North Carolina — founded on the idea that beauty and harvest belong in the same garden."
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Simple, Clean Design That"
              italic="Feeds People"
            />
            <p className="body-justified" style={{ maxWidth: "540px", marginBottom: "var(--space-md)" }}>
              Founded by Anna Timmerman, Gardens of Eatin' designs and installs
              edible landscapes, food forests, and full permaculture property
              designs for residential and commercial clients across Western
              North Carolina.
            </p>
            <p className="body-justified" style={{ maxWidth: "540px" }}>
              We work at the intersection of luxury lifestyle and values-led
              living. Our clients want an outdoor space that photographs
              beautifully — and we believe that same space should carry fruit
              trees, edible nuts and berries, and a kitchen garden that earns
              its ground. We read the water, sun, and soil first, and we plant
              for decades, not seasons.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${PHOTOS.coleus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
            }}
          />
        </div>
      </section>

      <StatsBar />

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="The People" title="A Small Crew With Deep Roots" />
          <div className="grid-3">
            {TEAM.map((member, i) => {
              const bg = TILE_BG[i % TILE_BG.length];
              const onGold = bg === "var(--color-gold)";
              return (
                <div key={member.name}>
                  <div
                    className="monogram"
                    style={{
                      aspectRatio: "4 / 3",
                      background: bg,
                      color: onGold ? "var(--color-forest-deep)" : "var(--color-on-forest)",
                    }}
                  >
                    {initials(member.name)}
                  </div>
                  <div style={{ paddingTop: "var(--space-sm)" }}>
                    <p className="eyebrow" style={{ marginBottom: "6px" }}>{member.title}</p>
                    <h3 className="display-md" style={{ fontSize: "20px", color: "var(--color-on-forest)", marginBottom: "var(--space-2xs)" }}>
                      {member.name}
                    </h3>
                    {(Array.isArray(member.bio) ? member.bio : [member.bio]).map((para, j) => (
                      <p
                        key={j}
                        style={{
                          font: "var(--text-body-sm)",
                          color: "var(--color-on-forest-soft)",
                          marginBottom: "var(--space-2xs)",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="What We Hold To" />
          <div className="grid-2" style={{ gap: "var(--space-xl)" }}>
            {VALUES.map((value, i) => (
              <div key={value.name}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display-md" style={{ marginBottom: "var(--space-2xs)" }}>
                  {value.name}
                </h3>
                <p className="lede">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner solid eyebrow="Ready When You Are" title="Let's Grow Something That Lasts">
        <Button variant="primary" size="lg" to="/contact-us">
          Get Started
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
