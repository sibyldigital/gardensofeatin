import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { TestimonialSection } from "../components/TestimonialSection.jsx";
import { JournalSection } from "../components/JournalSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, STEPS } from "../data/content.js";

/* Home — hero with two CTAs, "Beauty You Can Eat" three-card feature,
   "Service Packages" alternating pillar blocks, photo CTA, footer. */

const START_CARDS = [
  {
    to: "/design-packages",
    image: PHOTOS.carrots,
    eyebrow: "What You Buy",
    title: "Packages",
    description:
      "Tiered offerings for every scale of land — from a first kitchen garden to a full estate or commercial build.",
  },
  {
    to: "/ecological-landscaping-services",
    image: PHOTOS.harvest,
    eyebrow: "What We Do",
    title: "Services",
    description:
      "The disciplines we practice and the systems we build — design, installation, maintenance, and commercial work.",
  },
  {
    to: "/process",
    image: PHOTOS.aerial,
    eyebrow: "How It Works",
    title: "Process",
    description:
      "How every engagement unfolds, from the first walk on your land to the first harvest.",
  },
];

const PILLARS = [
  {
    image: PHOTOS.carrots,
    eyebrow: "Enjoy The Harvest",
    title: "A Garden That Feeds You",
    body: "With consultation, we can help you create a productive kitchen garden that combines herbs and vegetables to add color to your plate— beauty in every season, and a basket to carry in from it.",
    button: { label: "See Kitchen Gardens", to: "/design-packages#kitchen-garden" },
  },
  {
    image: PHOTOS.orchard,
    eyebrow: "Build Resilience In Western NC",
    title: "Plant For The Decades",
    body: "We can create a food forest on your landscape, planting fruit trees along with edible nuts and berries on your land — an orchard that outlives trends and keeps producing for your grandchildren.",
    button: { label: "See Food Forests", to: "/design-packages#food-forest" },
    flip: true,
  },
  {
    image: PHOTOS.aerial,
    eyebrow: "Rooted In Beauty, Built For Business",
    title: "Grounds That Work As Hard As They Look Good",
    body: "We design full permaculture properties for estates, wedding venues, and breweries — landscapes that photograph beautifully and earn their keep.",
    button: { label: "See Estate Planning", to: "/design-packages#estate-plan" },
  },
];

export default function Home() {
  return (
    <div>
      <PageHero
        image={PHOTOS.hero}
        eyebrow="Permaculture & Landscape Design in Asheville, NC"
        title="Beauty You Can Eat"
        lede="Gardening and edible landscape design packages for homeowners, estates, and venues across Western North Carolina."
        actions={
          <>
            <Button variant="primary" size="lg" to="/contact-us">
              Get A Quote
            </Button>
            <Button variant="secondary-on-dark" size="lg" to="/portfolio">
              View Portfolio
            </Button>
          </>
        }
      />

      <StatsBar />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="An Ecological Company"
            title="Beauty You Can Eat"
            lede="Get started with us."
          />
          <div className="grid-3">
            {START_CARDS.map((s) => (
              <Link key={s.title} to={s.to} style={{ display: "block" }}>
                <Card image={s.image} eyebrow={s.eyebrow} title={s.title} description={s.description} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sunken">
        <div
          className="container"
          style={{
            paddingTop: "var(--space-2xl)",
            paddingBottom: "calc(var(--space-2xl) - var(--space-lg))",
          }}
        >
          <SectionHeading
            eyebrow="What We Offer"
            title="Permaculture Packages"
            lede="From a first kitchen garden to a full estate master plan, each package is built on the same pillars."
          />
        </div>
        {PILLARS.map((p) => (
          <div key={p.title} className={p.flip ? "split split--flip" : "split"}>
            {p.flip ? (
              <>
                <div className="split__panel" style={{ background: "var(--color-forest-deep)", color: "var(--color-on-forest)" }}>
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="display-md" style={{ color: "var(--color-on-forest)", marginBottom: "var(--space-sm)" }}>
                    {p.title}
                  </h3>
                  <p style={{ font: "var(--text-body-lg)", color: "var(--color-on-forest-soft)", maxWidth: "440px" }}>
                    {p.body}
                  </p>
                  {p.button && (
                    <div style={{ marginTop: "var(--space-md)" }}>
                      <Button variant="secondary-on-dark" size="sm" to={p.button.to}>
                        {p.button.label}
                      </Button>
                    </div>
                  )}
                </div>
                <div className="split__image" style={{ backgroundImage: `url(${p.image})` }} />
              </>
            ) : (
              <>
                <div className="split__image" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="split__panel" style={{ background: "var(--color-forest-deep)", color: "var(--color-on-forest)" }}>
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="display-md" style={{ color: "var(--color-on-forest)", marginBottom: "var(--space-sm)" }}>
                    {p.title}
                  </h3>
                  <p style={{ font: "var(--text-body-lg)", color: "var(--color-on-forest-soft)", maxWidth: "440px" }}>
                    {p.body}
                  </p>
                  {p.button && (
                    <div style={{ marginTop: "var(--space-md)" }}>
                      <Button variant="secondary-on-dark" size="sm" to={p.button.to}>
                        {p.button.label}
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <Timeline
        eyebrow="The Journey"
        title="Four Steps, Start To Harvest"
        steps={STEPS.map((s) => ({ number: s.number, name: s.name, description: s.short }))}
      />

      <TestimonialSection />

      <JournalSection />

      <CTABanner image={PHOTOS.aerial}>
        <Button variant="primary" size="lg" to="/contact-us">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
