import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { PictureGrid } from "../components/PictureGrid.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS } from "../data/content.js";

/* Landing — a straight sales landing page: a strong hero CTA, a picture-grid
   highlight of the work, two paths into the Commercial and Residential
   service pages, and a closing conversion CTA. Linked from the footer. */

const GALLERY = [
  PHOTOS.hero,
  PHOTOS.harvest,
  PHOTOS.coneflowers,
  PHOTOS.carrots,
  PHOTOS.aerial,
  PHOTOS.coleus,
];

const PATHS = [
  {
    to: "/services/residential",
    image: PHOTOS.coleus,
    eyebrow: "Residential",
    title: "For Your Home",
    description:
      "Edible gardens, food forests, and native pollinator borders designed and installed for the way you live.",
  },
  {
    to: "/services/commercial",
    image: PHOTOS.cabbage,
    eyebrow: "Commercial",
    title: "For Your Business",
    description:
      "Venues, breweries, and restaurants — a living backdrop that shows up in every vendor photo and deepens each year.",
  },
];

export default function Landing() {
  return (
    <div>
      <PageHero
        image={PHOTOS.hero}
        eyebrow="Edible Landscaping in Western NC"
        title="Beauty You Can Eat, Built To Order"
        lede="Design, installation, and ecological care for homes and businesses across Western North Carolina. Tell us about your land and we'll turn it into something that feeds you."
        actions={
          <>
            <Button variant="primary" size="lg" to="/contact-us">
              Get A Quote
            </Button>
            <Button variant="secondary-on-dark" size="lg" to="/portfolio">
              View Portfolio
            </Button>
          </>
        }
      />

      <PictureGrid eyebrow="The Work" title="Landscapes That Earn Their Keep" images={GALLERY} />

      <section className="section section--sunken">
        <div className="container">
          <SectionHeading eyebrow="Choose Your Path" title="Where Should We Start?" />
          <div className="grid-2">
            {PATHS.map((p) => (
              <Link key={p.to} to={p.to} style={{ display: "block" }}>
                <Card image={p.image} eyebrow={p.eyebrow} title={p.title} description={p.description} aspect="16 / 10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        image={PHOTOS.aerial}
        eyebrow="Ready When You Are"
        title="Start Your Landscape Transformation"
      >
        <p
          className="lede"
          style={{ margin: "0 auto var(--space-lg)", color: "var(--color-on-forest-soft)" }}
        >
          One conversation is all it takes to begin. We'll walk your land, listen to your goals, and
          map what it can become.
        </p>
        <Button variant="primary" size="lg" to="/contact-us">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
