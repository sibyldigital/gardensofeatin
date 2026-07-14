import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, SERVICES } from "../data/content.js";

/* Services — hero reinforcing "Beauty You Can Eat," grid of the seven core
   services with evocative descriptions, warm editorial CTA. */

export default function Services() {
  return (
    <div>
      <PageHero
        image={PHOTOS.harvest}
        eyebrow="Our Services"
        title="Everything A Landscape Can Give"
        lede="Beauty you can eat — seven ways we design, build, and care for landscapes that feed the people who live in them."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="From First Bed To Full Forest"
          />
          <div className="grid-3">
            {SERVICES.map((s) => (
              <Card
                key={s.name}
                image={s.image}
                eyebrow="Service"
                title={s.name}
                description={s.description}
                aspect="4 / 3"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sunken" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow">Ready When You Are</p>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-sm)" }}>
            Start Your Landscape Transformation
          </h2>
          <p className="lede" style={{ margin: "0 auto var(--space-lg)" }}>
            Tell us about your land and how you want to live on it. We will walk
            it with you and map what it can become.
          </p>
          <Button variant="primary" size="lg" to="/contact">
            Get A Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
