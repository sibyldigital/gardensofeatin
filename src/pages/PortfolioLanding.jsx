import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { StatsBar } from "../components/StatsBar.jsx";
import { TeamSection } from "../components/TeamSection.jsx";
import { InstagramSection } from "../components/InstagramSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, PROJECTS, REVIEWS } from "../data/content.js";

/* Portfolio Landing Page — full-screen hero, short philosophy statement,
   featured gallery organized by scale, Google review pulls, brief team
   credentials, Instagram feed grid, single "Start a Conversation" CTA. */

const SCALE_ORDER = [
  { scale: "City Lots & Homesteads", categories: ["Residential"] },
  { scale: "Venues & Inns", categories: ["Venue"] },
  { scale: "Breweries & Commercial", categories: ["Brewery/Commercial"] },
];

export default function PortfolioLanding() {
  return (
    <div>
      <PageHero
        image={PHOTOS.hero}
        eyebrow="Gardens of Eatin' — Asheville, NC"
        title="Landscapes That Earn Their Keep"
        lede="Edible gardens, food forests, and full permaculture properties across Western North Carolina."
        minHeight="100vh"
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Beauty You Can"
              italic="Eat"
            />
            <p className="body-justified" style={{ maxWidth: "540px" }}>
              We believe a landscape should photograph beautifully and carry a
              harvest. Every project here began with a walk on the land —
              reading its water, sun, and soil — and ended with fruit trees,
              berries, and native blooms doing the work that ornament alone
              used to do.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${PHOTOS.aerial})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 3",
            }}
          />
        </div>
      </section>

      <section className="section section--sunken">
        <div className="container">
          <SectionHeading eyebrow="Featured Work" title="Projects By Scale" />
          {SCALE_ORDER.map(({ scale, categories }) => {
            const group = PROJECTS.filter((p) => categories.includes(p.category)).slice(0, 3);
            return (
              <div key={scale} style={{ marginBottom: "var(--space-xl)" }}>
                <h3 className="display-md" style={{ marginBottom: "var(--space-md)" }}>
                  {scale}
                </h3>
                <div className="grid-3">
                  {group.map((project) => (
                    <Card
                      key={project.name}
                      image={project.image}
                      eyebrow={project.category}
                      title={project.name}
                      description={project.descriptor}
                      aspect="4 / 3"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Social Proof" title="What Clients Say" />
          <div className="grid-3">
            {REVIEWS.map((review) => (
              <blockquote key={review.author} style={{ margin: 0 }}>
                <p
                  style={{
                    font: "var(--text-display-italic-lg)",
                    fontSize: "1.35rem",
                    color: "var(--text-heading)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  “{review.quote}”
                </p>
                <footer>
                  <p className="eyebrow" style={{ marginBottom: "2px" }}>{review.author}</p>
                  <p style={{ font: "var(--text-caption)", color: "var(--text-muted)" }}>{review.context}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      <TeamSection eyebrow="The Team" title="Who Does The Work" />

      <div className="section--sunken">
        <InstagramSection />
      </div>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <Button variant="primary" size="lg" to="/contact">
            Start A Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
