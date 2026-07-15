import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { InformationSection } from "../components/InformationSection.jsx";
import { TestimonialSection } from "../components/TestimonialSection.jsx";
import { JournalSection } from "../components/JournalSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS } from "../data/content.js";

/* Home — hero with two CTAs, "Beauty You Can Eat" three-card feature,
   "Service Packages" alternating pillar blocks, photo CTA, footer. */

const CORE_SERVICES = [
  {
    image: PHOTOS.harvest,
    eyebrow: "Core Service",
    title: "Edible Gardens",
    description:
      "Kitchen gardens planned around what your household actually eats — carrots, kale, tomatoes, and herbs within reach of the back door.",
  },
  {
    image: PHOTOS.orchard,
    eyebrow: "Core Service",
    title: "Food Forests",
    description:
      "Fruit trees layered with edible nuts and berries into a multi-layered system that combines annual and perennial plants.",
  },
  {
    image: PHOTOS.coneflowers,
    eyebrow: "Core Service",
    title: "Native Pollinator Gardens",
    description:
      "Layered native plantings that draw pollinators and beneficial insects into your landscape year-round.",
  },
];

const PILLARS = [
  {
    image: PHOTOS.carrots,
    eyebrow: "Enjoy The Harvest",
    title: "A Landscape That Feeds You",
    body: "With a consultation, we can help you create a multi-layered food forest that combines annual and perennial plants — beauty in every season, and a basket to carry in from it.",
  },
  {
    image: PHOTOS.orchard,
    eyebrow: "Build Resilience In Western NC",
    title: "Plant For The Decades",
    body: "We can help you plant fruit trees along with edible nuts and berries on your land — an orchard that outlives trends and keeps producing for your grandchildren.",
    flip: true,
  },
  {
    image: PHOTOS.aerial,
    eyebrow: "Rooted In Beauty, Built For Business",
    title: "Grounds That Work As Hard As They Look Good",
    body: "We design full permaculture properties for estates, wedding venues, and breweries — landscapes that photograph beautifully and earn their keep.",
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
            <Button variant="primary" size="lg" to="/contact">
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
            lede="Three ways we turn ornamental ground into productive, living landscape."
          />
          <div className="grid-3">
            {CORE_SERVICES.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sunken">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Service Packages"
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
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <InformationSection />

      <TestimonialSection />

      <JournalSection />

      <CTABanner image={PHOTOS.aerial}>
        <Button variant="primary" size="lg" to="/contact">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
