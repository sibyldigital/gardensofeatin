import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, TEAM, VALUES } from "../data/content.js";

/* About — editorial hero, an intro text block + a "living landscape"
   callout, the team pillars, the "how we work" values, a second text block
   + a closing pull-quote, and a CTA. */

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function About() {
  return (
    <div>
      <PageHero
        image={PHOTOS.aerial}
        eyebrow="About Gardens of Eatin'"
        title="Grounded In The Land We Plant"
        lede="An ecological landscaping company from Asheville, North Carolina — founded on the idea that beauty and harvest belong in the same garden."
      />

      {/* Intro — eyebrow + header, then the combined body copy */}
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <SectionHeading
            eyebrow="A Living Landscape Is A Lifestyle"
            title="Designed Around How You Live"
          />
          <p
            className="body-justified"
            style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}
          >
            Every property is different, so every plan starts from scratch,
            tailored to your land and what you actually want to live in. Gardens
            of Eatin' designs native landscapes, edible gardens, food forests,
            and full permaculture property designs across Western North Carolina.
          </p>
          <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
            Fruit trees, edible nuts and berries, kitchen gardens within reach of
            the back door: the plants themselves are part of how you live on the
            property.
          </p>
        </div>
      </section>

      <StatsBar />

      <section>
        <div
          className="container"
          style={{
            paddingTop: "var(--space-2xl)",
            paddingBottom: "calc(var(--space-2xl) - var(--space-lg))",
          }}
        >
          <SectionHeading eyebrow="The People" title="A Small Crew With Deep Roots" />
        </div>
        {/* All-dark pillars; the monogram side alternates, matching the
            homepage packages section. */}
        {TEAM.map((member, i) => {
          const flip = i % 2 === 1; // alternate the monogram side
          const tileGold = i % 2 === 0; // gold, forest, gold
          const monogram = (
            <div
              className="split__image"
              style={{
                background: tileGold ? "var(--color-gold)" : "var(--color-forest-mid)",
                color: tileGold ? "var(--color-forest-deep)" : "var(--color-on-forest)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "var(--text-display-xl)",
                fontSize: "clamp(56px, 9vw, 104px)",
              }}
            >
              {initials(member.name)}
            </div>
          );
          const panel = (
            <div className="split__panel" style={{ background: "var(--color-forest-deep)" }}>
              <p className="eyebrow">{member.title}</p>
              <h3
                className="display-md"
                style={{ color: "var(--color-on-forest)", margin: "var(--space-2xs) 0 var(--space-sm)" }}
              >
                {member.name}
              </h3>
              {(Array.isArray(member.bio) ? member.bio : [member.bio]).map((para, j) => (
                <p
                  key={j}
                  style={{
                    font: "var(--text-body-md)",
                    color: "var(--color-on-forest-soft)",
                    maxWidth: "460px",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          );
          return (
            <div key={member.name} className={flip ? "split split--flip" : "split"}>
              {flip ? (
                <>
                  {panel}
                  {monogram}
                </>
              ) : (
                <>
                  {monogram}
                  {panel}
                </>
              )}
            </div>
          );
        })}
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

      {/* Intro — paragraph 2 */}
      <section className="section section--sunken">
        <div className="container" style={{ maxWidth: "820px" }}>
          <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
            We read the water, sun, and soil first, because the land tells you
            what it wants to be before you ever pick up a shovel. That's how we
            build landscapes that support biodiversity, strengthen soil health,
            and hold together as resilient ecosystems. Done right, a garden
            enriches everyone who spends time in it.
          </p>
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <p
            style={{
              font: "var(--text-display-italic-lg)",
              color: "var(--text-heading)",
              margin: "0 auto",
            }}
          >
            We plant for the long haul, for a legacy of nutrition and connection.
          </p>
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
