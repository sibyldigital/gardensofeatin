import React from "react";
import { useParams, Link } from "react-router-dom";
import { NavHeader } from "../components/NavHeader.jsx";
import { ServiceDetailSection } from "../components/ServiceDetailSection.jsx";
import { BeforeAfterSection } from "../components/BeforeAfterSection.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PROJECT_BY_SLUG, PHOTOS } from "../data/content.js";

/* CaseStudy — individual portfolio project page. Full-bleed project hero
   (CaseStudyHero pattern), a photo + detail breakdown, a before/after
   split, and a closing CTA. */

export default function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECT_BY_SLUG[slug];

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

      <ServiceDetailSection
        eyebrow="What We Did"
        title="Inside The Project"
        image={project.image}
        description={project.summary}
        bullets={project.bullets}
      />

      <BeforeAfterSection />

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
        <Button variant="primary" size="lg" to="/contact">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
