import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Button } from "../components/Button.jsx";
import { PricingSection } from "../components/PricingSection.jsx";
import { TestimonialSection } from "../components/TestimonialSection.jsx";
import { FAQSection } from "../components/FAQSection.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, PACKAGES } from "../data/content.js";

/* Service Packages — hero introducing the tiers, three package columns with
   detailed inclusion lists, custom-quote CTA. */

export default function ServicePackages() {
  return (
    <div>
      <PageHero
        image={PHOTOS.carrots}
        eyebrow="Service Packages"
        title="Three Ways To Begin"
        lede="Tiered offerings for every scale of land and appetite — each one built on the same consultation, design, installation, and care."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The Tiers" title="Pick The Scale, We Bring The System" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-lg)",
              alignItems: "start",
            }}
          >
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.name}
                style={{
                  background: i === 1 ? "var(--color-forest-deep)" : "var(--color-cream-dim)",
                  color: i === 1 ? "var(--color-on-forest)" : "var(--text-body)",
                  padding: "var(--space-lg)",
                }}
              >
                <p className="eyebrow">{`Package ${String(i + 1).padStart(2, "0")}`}</p>
                <h3
                  className="display-md"
                  style={{
                    color: i === 1 ? "var(--color-on-forest)" : "var(--text-heading)",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    font: "var(--text-body-md)",
                    color: i === 1 ? "var(--color-on-forest-soft)" : "var(--text-muted)",
                    marginBottom: "var(--space-md)",
                  }}
                >
                  {pkg.description}
                </p>
                <hr
                  className="hairline"
                  style={{
                    borderTopColor: i === 1 ? "var(--border-on-deep)" : "var(--border-hairline)",
                    marginBottom: "var(--space-md)",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-xs)",
                    font: "var(--text-body-sm)",
                    color: i === 1 ? "var(--color-on-forest-soft)" : "var(--text-body)",
                  }}
                >
                  {pkg.includes.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                  {pkg.extraBullets &&
                    pkg.extraBullets.map((b) => (
                      <li key={b.text}>
                        —{" "}
                        <Link
                          to={b.to}
                          style={{
                            color: i === 1 ? "var(--color-gold-bright)" : "var(--accent-cta)",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          {b.text}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section--sunken">
        <PricingSection />
      </div>

      <TestimonialSection />

      <FAQSection />

      <section className="section section--sunken" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2 className="display-lg" style={{ marginBottom: "var(--space-sm)" }}>
            Every Property Deserves Its Own Plan
          </h2>
          <p className="lede" style={{ margin: "0 auto var(--space-lg)" }}>
            The packages are starting points. Tell us about your land and we
            will shape a custom quote around it.
          </p>
          <Button variant="primary" size="lg" to="/contact-us">
            Get A Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
