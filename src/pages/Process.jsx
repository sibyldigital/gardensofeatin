import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { Button } from "../components/Button.jsx";
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

      {STEPS.map((step, i) => (
        <section key={step.name} className={i % 2 === 1 ? "section section--sunken" : "section"}>
          <div className="container grid-2" style={{ alignItems: "center" }}>
            <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
              <p className="eyebrow">{`Step ${step.number}`}</p>
              <h2 className="display-lg" style={{ marginBottom: "var(--space-sm)" }}>
                {step.name}
              </h2>
              <p className="lede">{step.description}</p>
            </div>
            <div
              style={{
                order: i % 2 === 1 ? 1 : 2,
                backgroundImage: `url(${STEP_IMAGES[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "4 / 3",
              }}
            />
          </div>
        </section>
      ))}

      <ServiceRadius />

      <CTABanner image={PHOTOS.hero}>
        <Button variant="primary" size="lg" to="/contact">
          Start Your Design Consultation
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
