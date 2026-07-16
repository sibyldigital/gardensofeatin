import React from "react";
import { useParams, Link } from "react-router-dom";
import { NavHeader } from "../components/NavHeader.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Callout } from "../components/Callout.jsx";
import { ServiceDetailSection } from "../components/ServiceDetailSection.jsx";
import { BeforeAfterSection } from "../components/BeforeAfterSection.jsx";
import { PictureGrid } from "../components/PictureGrid.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PROJECT_BY_SLUG, PHOTOS } from "../data/content.js";

/* CaseStudy — individual portfolio project page. Full-bleed hero, a
   timeline/budget/location meta strip, the detail breakdown, Standout
   Features, design drawings, a picture-grid gallery, a before/after split,
   project notes, and a closing CTA. The per-project content fields mirror
   the WordPress ACF group described in the rebuild spec. */

export default function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECT_BY_SLUG[slug];

  // Gallery leads with the project's cover image, filled out with source
  // photography as swap-friendly placeholders until real project photos land.
  const gallery = project
    ? [
        project.image,
        PHOTOS.harvest,
        PHOTOS.coneflowers,
        PHOTOS.carrots,
        PHOTOS.coleus,
        PHOTOS.orchard,
      ]
    : [];

  if (!project) {
    return (
      <div>
        <div style={{ background: "var(--color-forest-deep)" }}>
          <NavHeader onDark />
        </div>
        <section className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <h1 className="display-lg" style={{ marginBottom: "var(--space-md)" }}>
              Project Not Found
            </h1>
            <Button variant="secondary" to="/portfolio">
              Back To Portfolio
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${project.image})` }}>
        <NavHeader onDark />
        <div
          className="fade-in"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 var(--content-pad) var(--space-2xl)",
            color: "var(--color-on-forest)",
          }}
        >
          <p className="eyebrow">{`${project.category} — ${project.location}`}</p>
          <h1 className="display-xl" style={{ color: "var(--color-cream-100)", maxWidth: "760px", margin: "0 0 20px" }}>
            {project.name}
          </h1>
          <p className="lede" style={{ color: "var(--color-on-forest-soft)", maxWidth: "560px" }}>
            {project.summary}
          </p>
        </div>
      </div>

      <section className="section section--sunken">
        <div className="container">
          <div className="projmeta">
            <div className="projmeta__item">
              <p className="eyebrow">Timeline</p>
              <p className="projmeta__val">{project.timeline}</p>
            </div>
            <div className="projmeta__item">
              <p className="eyebrow">Budget</p>
              <p className="projmeta__val">{project.budget}</p>
            </div>
            <div className="projmeta__item">
              <p className="eyebrow">Location</p>
              <p className="projmeta__val">{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailSection
        eyebrow="What We Did"
        title="Inside The Project"
        image={project.image}
        description={project.summary}
        bullets={project.bullets}
      />

      {project.standoutFeatures?.length > 0 && (
        <section className="section section--sunken">
          <div className="container">
            <SectionHeading eyebrow="The Details" title="Standout Features" />
            <div className="grid grid-3">
              {project.standoutFeatures.map((f) => (
                <Callout key={f.head} label={f.head}>
                  {f.body}
                </Callout>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The Plan" title="Design Drawings" />
          <div className="grid grid-2">
            {[project.designDrawing1, project.designDrawing2].map((src, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "4 / 3",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <PictureGrid sunken eyebrow="Project Gallery" title="From The Ground" images={gallery} />

      <BeforeAfterSection before={project.before} after={project.after} />

      <section className="section section--sunken">
        <div className="container" style={{ maxWidth: "820px" }}>
          <SectionHeading eyebrow="Field Notes" title="Notes" />
          <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
            {project.notes}
          </p>
        </div>
      </section>

      <div style={{ padding: "0 var(--content-pad) var(--space-xl)" }}>
        <div className="container">
          <Link to="/portfolio" className="btn btn--sm btn--ghost">
            ‹ Back To Portfolio
          </Link>
        </div>
      </div>

      <CTABanner
        image={PHOTOS.hero}
        eyebrow="Ready When You Are"
        title="Let's Design Your Land's Next Chapter"
      >
        <Button variant="primary" size="lg" to="/contact-us">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
