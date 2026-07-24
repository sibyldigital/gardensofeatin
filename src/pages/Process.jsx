import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { Button } from "../components/Button.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { InformationSection } from "../components/InformationSection.jsx";
import { TestimonialSection } from "../components/TestimonialSection.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { ServiceRadius } from "../components/ServiceRadius.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, STEPS } from "../data/content.js";

/* Process — four numbered How It Works steps from consultation to
   maintenance, closed by a full-width photo CTA banner. */

const STEP_IMAGES = [PHOTOS.aerial, PHOTOS.coleus, PHOTOS.cabbage, PHOTOS.harvest];

export default function Process() {
  return (
    <div>
      <PageHero
        image={PHOTOS.aerial}
        eyebrow="Our Process"
        title="From First Walk To First Harvest"
        lede="Four steps carry every project — a consultation on your land, a custom design, a careful installation, and the ecological care that keeps it producing."
      />

      <Timeline
        eyebrow="The Journey"
        title="Four Steps, Start To Harvest"
        steps={STEPS.map((s) => ({
          number: s.number,
          name: s.name,
          description: s.short,
          href: `#step-${s.number}`,
        }))}
      />

      {/* All-dark step pillars; the image side alternates, matching the
          homepage packages section. */}
      {STEPS.map((step, i) => {
        const flip = i % 2 === 1; // alternate the image side
        const image = (
          <div className="split__image" style={{ backgroundImage: `url(${STEP_IMAGES[i]})` }} />
        );
        const panel = (
          <div className="split__panel" style={{ background: "var(--color-forest-deep)" }}>
            <p className="eyebrow">{`Step ${step.number}`}</p>
            <h2 className="display-lg" style={{ color: "var(--color-on-forest)", marginBottom: "var(--space-sm)" }}>
              {step.name}
            </h2>
            <p className="lede" style={{ color: "var(--color-on-forest-soft)" }}>
              {step.description}
            </p>
            {i === 0 && (
              <p style={{ marginTop: "var(--space-md)" }}>
                <Link to="/questionnaire" className="link-underline">
                  Fill out our design questionnaire before your consultation ›
                </Link>
              </p>
            )}
          </div>
        );
        return (
          <div
            key={step.name}
            id={`step-${step.number}`}
            className={`step-anchor ${flip ? "split split--flip" : "split"}`}
            style={{ scrollMarginTop: "80px" }}
          >
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

      <InformationSection />

      <TestimonialSection />

      <ServiceRadius />

      <CTABanner
        image={PHOTOS.hero}
        eyebrow="Ready When You Are"
        title="Let's Begin With A Walk On Your Land"
      >
        <p
          className="lede"
          style={{ margin: "0 auto var(--space-lg)", color: "var(--color-on-forest-soft)" }}
        >
          Every project starts on site — listening to your goals and reading the water, sun, and
          soil. Tell us about your land and we'll take the first step together.
        </p>
        <Button variant="primary" size="lg" to="/contact-us">
          Start Your Design Consultation
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
