import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { BeforeAfterSection } from "../components/BeforeAfterSection.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, PROJECTS, PROJECT_CATEGORIES } from "../data/content.js";

/* Portfolio — filterable project gallery organized by category:
   Residential, Venue, Brewery/Commercial. */

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div>
      <PageHero
        image={PHOTOS.hero}
        eyebrow="Portfolio"
        title="The Work, Growing"
        lede="A body of edible landscapes across Western North Carolina — homes, venues, and breweries whose grounds now earn their keep."
      />

      <StatsBar />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Selected Projects" title="Browse By Setting" />
          <div
            role="tablist"
            aria-label="Filter projects by category"
            style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={filter === cat ? "btn btn--sm btn--secondary" : "btn btn--sm btn--ghost"}
                style={filter === cat ? { background: "var(--color-forest-deep)", color: "var(--color-on-forest)" } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((project) => (
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

      <BeforeAfterSection />

      <CTABanner solid eyebrow="Ready When You Are" title="Tell Us About Your Land">
        <Button variant="primary" size="lg" to="/questionnaire">
          Get Started
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
