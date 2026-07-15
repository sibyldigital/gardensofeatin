import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, SERVICES, DISCIPLINES, ALACARTE } from "../data/content.js";

/* Services hub (/ecological-landscaping-services) — educational overview of
   the disciplines GOE practices. Hero + philosophy intro + four discipline
   cards linking to sub-pages + a packages callout + the seven-service
   educational grid + the a la carte list. No pricing on this page. */

export default function Services() {
  return (
    <div>
      <PageHero
        image={PHOTOS.harvest}
        eyebrow="Our Services"
        title="Everything A Landscape Can Give"
        lede="Beauty you can eat — seven ways we design, build, and care for landscapes that feed the people who live in them."
      />

      {/* Philosophy / what ecological landscaping means at GOE */}
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <SectionHeading eyebrow="What We Practice" title="Ecological Landscaping" />
          <p className="body-justified" style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}>
            Ecological landscaping means working with the land, not against it. We read the water,
            sun, and soil of a site first, then design with native plants, edible systems, and
            regenerative soil practices that let the whole landscape carry itself over time.
          </p>
          <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
            The result is a landscape that feeds the family and the ecosystem at the same time —
            beautiful in every season, alive with pollinators, and productive for decades. Below
            are the four disciplines we practice, the systems we build, and the ongoing services
            available whenever your land needs them.
          </p>
        </div>
      </section>

      {/* Four discipline cards → sub-pages */}
      <section className="section section--sunken">
        <div className="container">
          <SectionHeading eyebrow="Our Disciplines" title="Four Ways We Work With Your Land" />
          <div className="grid-4">
            {DISCIPLINES.map((d) => (
              <Link key={d.name} to={d.to} style={{ display: "block" }}>
                <Card image={d.image} eyebrow="Service" title={d.name} description={d.description} aspect="4 / 3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page packages callout */}
      <section className="section section--deep" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Ready To Start?</p>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-lg)" }}>
            See Our Packages
          </h2>
          <Button variant="primary" size="lg" to="/design-packages">
            View Packages
          </Button>
        </div>
      </section>

      {/* Educational capability grid — the seven systems we build */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Build"
            title="From First Bed To Full Forest"
          />
          <div className="grid-3">
            {SERVICES.map((s) => (
              <Card
                key={s.name}
                image={s.image}
                eyebrow="System"
                title={s.name}
                description={s.description}
                aspect="4 / 3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* A la carte and ongoing services */}
      <section className="section section--sunken">
        <div className="container" style={{ maxWidth: "820px" }}>
          <SectionHeading
            eyebrow="A La Carte & Ongoing"
            title="Individual Services"
            lede="Individual offerings available to existing clients, or to anyone with a specific need outside of a full package."
          />
          <ul className="bullets" style={{ gap: "var(--space-sm)" }}>
            {ALACARTE.map((item) => (
              <li key={item} style={{ font: "var(--text-body-lg)" }}>
                <span className="bullets__dash">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
