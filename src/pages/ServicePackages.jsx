import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Button } from "../components/Button.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { TestimonialSection } from "../components/TestimonialSection.jsx";
import { FAQSection } from "../components/FAQSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, PACKAGES, STEPS } from "../data/content.js";

/* Service Packages — hero introducing the tiers, three package columns with
   detailed inclusion lists, an in-depth per-package pillar section (anchored,
   alternating dark/light, each linking to a representative project), a
   process timeline, FAQ, testimonials, and a custom-quote CTA. */

/* Per-package deep-dive pillars. Anchor ids are the deep-link targets used by
   the homepage pillar buttons (/design-packages#kitchen-garden, etc.). Each
   pillar points to the project that best represents that package. */
const PACKAGE_PILLARS = [
  {
    id: "kitchen-garden",
    eyebrow: "Package 01",
    title: "The Kitchen Garden",
    image: PHOTOS.carrots,
    body:
      "The fastest way to eat from your own yard. We set raised beds a few steps from the back door, match the planting to what your household actually cooks, and hand you a first-season plan — so the harvest starts the same year the beds go in.",
    project: { name: "Black Mountain Homestead", slug: "black-mountain-homestead" },
  },
  {
    id: "food-forest",
    eyebrow: "Package 02",
    title: "The Food Forest",
    image: PHOTOS.orchard,
    body:
      "An orchard with its wild logic restored. Fruit and nut trees over berries, herbs, and ground covers, sited only after we read the water and shape the land — a layered system that carries more of its own weight every season.",
    project: { name: "Hominy Creek Food Forest", slug: "hominy-creek-food-forest" },
  },
  {
    id: "estate-plan",
    eyebrow: "Package 03",
    title: "The Estate Plan",
    image: PHOTOS.aerial,
    body:
      "The whole property, master-planned. Multi-zone design across acreage — kitchen gardens by the house, a food forest on the slope, pollinator meadows on the old pasture — installed in phases and tended year-round.",
    project: { name: "Sandy Mush Estate", slug: "sandy-mush-estate" },
  },
];

export default function ServicePackages() {
  return (
    <div>
      <PageHero
        image={PHOTOS.carrots}
        eyebrow="Service Packages"
        title="Three Ways To Begin"
        lede="Tiered offerings for every scale of land and appetite — each one built on the same consultation, design, installation, and care."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Packages" title="Pick The Scale, We Bring The System" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-lg)",
              alignItems: "start",
            }}
          >
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.name}
                style={{
                  background: i === 1 ? "var(--color-forest-deep)" : "var(--color-cream-dim)",
                  color: i === 1 ? "var(--color-on-forest)" : "var(--text-body)",
                  padding: "var(--space-lg)",
                }}
              >
                <p className="eyebrow">{`Package ${String(i + 1).padStart(2, "0")}`}</p>
                <h3
                  className="display-md"
                  style={{
                    color: i === 1 ? "var(--color-on-forest)" : "var(--text-heading)",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    font: "var(--text-body-md)",
                    color: i === 1 ? "var(--color-on-forest-soft)" : "var(--text-muted)",
                    marginBottom: "var(--space-md)",
                  }}
                >
                  {pkg.description}
                </p>
                <hr
                  className="hairline"
                  style={{
                    borderTopColor: i === 1 ? "var(--border-on-deep)" : "var(--border-hairline)",
                    marginBottom: "var(--space-md)",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-xs)",
                    font: "var(--text-body-sm)",
                    color: i === 1 ? "var(--color-on-forest-soft)" : "var(--text-body)",
                  }}
                >
                  {pkg.includes.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                {pkg.ctaButton && (
                  <div style={{ marginTop: "var(--space-md)" }}>
                    <Button
                      variant={i === 1 ? "secondary-on-dark" : "secondary"}
                      size="sm"
                      to={pkg.ctaButton.to}
                    >
                      {pkg.ctaButton.label}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline
        sunken
        eyebrow="Process"
        title="How We Grow With You"
        steps={STEPS.map((s) => ({ number: s.number, name: s.name, description: s.short }))}
        action={
          <Button variant="secondary" to="/process">
            Learn More About Our Process
          </Button>
        }
      />

      {/* In-depth per-package pillars — anchored, alternating dark / light */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="In Depth" title="A Closer Look At Each Package" />
        </div>
        {PACKAGE_PILLARS.map((pkg, i) => {
          const dark = i % 2 === 0; // dark, light, dark
          const flip = i % 2 === 1; // alternate the image side
          const image = (
            <div className="split__image" style={{ backgroundImage: `url(${pkg.image})` }} />
          );
          const panel = (
            <div
              id={pkg.id}
              className="split__panel"
              style={{
                background: dark ? "var(--color-forest-deep)" : "var(--color-cream-dim)",
                color: dark ? "var(--color-on-forest)" : "var(--text-body)",
                scrollMarginTop: "80px",
              }}
            >
              <p className="eyebrow" style={dark ? undefined : { color: "var(--color-gold)" }}>
                {pkg.eyebrow}
              </p>
              <h3
                className="display-md"
                style={{
                  color: dark ? "var(--color-on-forest)" : "var(--text-heading)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                {pkg.title}
              </h3>
              <p
                style={{
                  font: "var(--text-body-lg)",
                  color: dark ? "var(--color-on-forest-soft)" : "var(--text-muted)",
                  maxWidth: "440px",
                  marginBottom: "var(--space-md)",
                }}
              >
                {pkg.body}
              </p>
              <Button
                variant={dark ? "secondary-on-dark" : "secondary"}
                size="sm"
                to={`/portfolio/${pkg.project.slug}`}
              >
                {`See ${pkg.project.name} ›`}
              </Button>
            </div>
          );
          return (
            <div key={pkg.id} className={flip ? "split split--flip" : "split"}>
              {flip ? (
                <>
                  {panel}
                  {image}
                </>
              ) : (
                <>
                  {image}
                  {panel}
                </>
              )}
            </div>
          );
        })}
      </section>

      <FAQSection />

      <TestimonialSection />

      <section className="section section--sunken" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-sm)" }}>
            Every Property Deserves Its Own Plan
          </h2>
          <p className="lede" style={{ margin: "0 auto var(--space-lg)" }}>
            The packages are starting points. Tell us about your land and we
            will shape a custom quote around it.
          </p>
          <Button variant="primary" size="lg" to="/contact-us">
            Get A Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
