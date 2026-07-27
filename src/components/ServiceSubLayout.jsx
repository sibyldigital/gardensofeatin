import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./PageHero.jsx";
import { SectionHeading } from "./SectionHeading.jsx";
import { Card } from "./Card.jsx";
import { Callout } from "./Callout.jsx";
import { StatsBand } from "./StatsBand.jsx";
import { MasonryGallery } from "./MasonryGallery.jsx";
import { Button } from "./Button.jsx";
import { Footer } from "./Footer.jsx";
import { PROJECTS, PHOTOS } from "../data/content.js";

/* Default gallery photography — swap-friendly placeholders standing in for
   real project photos and design drawings. */
const DEFAULT_GALLERY = [
  PHOTOS.aerial,
  PHOTOS.carrots,
  PHOTOS.orchard,
  PHOTOS.coneflowers,
  PHOTOS.cabbage,
  PHOTOS.harvest,
  PHOTOS.coleus,
  PHOTOS.hero,
];

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
  introEyebrow,
  introTitle,
  children,
  included,
  includedTitle = "What's Included",
  portfolioCategories = [],
  portfolioTitle = "Related Work",
  questionnaireCallout = false,
  stats,
  highlights,
  highlightsEyebrow = "The Details",
  highlightsTitle = "Choices & Options",
  textSection,
  gallery = DEFAULT_GALLERY,
  galleryEyebrow = "Gallery",
  galleryTitle = "From The Field",
  showPackagesCta = true,
}) {
  const projects = PROJECTS.filter((p) => portfolioCategories.includes(p.category)).slice(0, 3);

  return (
    <div>
      <PageHero image={heroImage} eyebrow={eyebrow} title={title} lede={subhead} />

      {/* Page-specific stats band */}
      {stats && stats.length > 0 && <StatsBand stats={stats} />}

      {/* Intro — optional subhead/head above the body copy */}
      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {introTitle && <SectionHeading eyebrow={introEyebrow} title={introTitle} />}
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

      {/* What's included — dark section */}
      {included && included.length > 0 && (
        <section className="section section--deep">
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

      {/* Highlights — specific choices / options for this discipline */}
      {highlights && highlights.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow={highlightsEyebrow} title={highlightsTitle} />
            <div className={highlights.length >= 3 ? "grid-3" : "grid-2"}>
              {highlights.map((h) => (
                <Callout key={h.label} label={h.label}>
                  {h.text}
                </Callout>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Free-standing text-content section, between the approach and the portfolio */}
      {textSection && (textSection.title || textSection.body) && (
        <section className="section section--sunken">
          <div className="container" style={{ maxWidth: "820px" }}>
            {textSection.title && (
              <SectionHeading eyebrow={textSection.eyebrow} title={textSection.title} />
            )}
            {(Array.isArray(textSection.body) ? textSection.body : [textSection.body]).map((para, i) => (
              <p
                key={i}
                className="body-justified"
                style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Masonry gallery — project photography and design drawings */}
      {gallery && gallery.length > 0 && (
        <MasonryGallery eyebrow={galleryEyebrow} title={galleryTitle} images={gallery} />
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
      {showPackagesCta && (
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
      )}

      <Footer />
    </div>
  );
}
