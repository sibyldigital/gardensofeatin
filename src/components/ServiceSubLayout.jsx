import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./PageHero.jsx";
import { SectionHeading } from "./SectionHeading.jsx";
import { Card } from "./Card.jsx";
import { Button } from "./Button.jsx";
import { Footer } from "./Footer.jsx";
import { PROJECTS } from "../data/content.js";

/**
 * ServiceSubLayout — shared scaffold for the four service discipline pages:
 * hero, intro, "What's Included" list, related portfolio links, an optional
 * questionnaire callout, and the bottom packages CTA. Extra sections (e.g.
 * the design-stages block) are passed as children and render after the intro.
 */
export function ServiceSubLayout({
  heroImage,
  eyebrow = "Service",
  title,
  subhead,
  intro,
  children,
  included,
  includedTitle = "What's Included",
  portfolioCategories = [],
  portfolioTitle = "Related Work",
  questionnaireCallout = false,
}) {
  const projects = PROJECTS.filter((p) => portfolioCategories.includes(p.category)).slice(0, 3);

  return (
    <div>
      <PageHero image={heroImage} eyebrow={eyebrow} title={title} lede={subhead} />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {Array.isArray(intro) ? (
            intro.map((para, i) => (
              <p
                key={i}
                className="body-justified"
                style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}
              >
                {para}
              </p>
            ))
          ) : (
            <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
              {intro}
            </p>
          )}
        </div>
      </section>

      {children}

      {/* What's included */}
      {included && included.length > 0 && (
        <section className="section section--sunken">
          <div className="container" style={{ maxWidth: "820px" }}>
            <SectionHeading eyebrow="Included" title={includedTitle} />
            <ul className="bullets" style={{ gap: "var(--space-sm)" }}>
              {included.map((item) => (
                <li key={item} style={{ font: "var(--text-body-lg)" }}>
                  <span className="bullets__dash">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related portfolio links */}
      {projects.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Portfolio" title={portfolioTitle} />
            <div className="grid-3">
              {projects.map((project) => (
                <Link key={project.slug} to={`/portfolio/${project.slug}`}>
                  <Card
                    image={project.image}
                    eyebrow={project.category}
                    title={project.name}
                    description={project.descriptor}
                    aspect="4 / 3"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional questionnaire callout (design page) */}
      {questionnaireCallout && (
        <section className="section section--sunken" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "720px" }}>
            <p className="eyebrow" style={{ textAlign: "center" }}>Before Your Consultation</p>
            <h2 className="display-md" style={{ marginBottom: "var(--space-sm)" }}>
              Fill Out Our Design Questionnaire
            </h2>
            <p className="lede" style={{ margin: "0 auto var(--space-lg)" }}>
              The more detail you share, the more we can accomplish together on site.
            </p>
            <Button variant="secondary" size="lg" to="/questionnaire">
              Start The Questionnaire
            </Button>
          </div>
        </section>
      )}

      {/* Bottom CTA → packages */}
      <section className="section section--deep" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow" style={{ textAlign: "center" }}>Ready To Start?</p>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-lg)" }}>
            Find The Right Package
          </h2>
          <Button variant="primary" size="lg" to="/design-packages">
            View Packages
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
