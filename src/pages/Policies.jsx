import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS } from "../data/content.js";

/* Policies & Terms (/policies) — the plain-language terms behind every
   project: design deposit, installation payment schedule, cancellations,
   and the service area. Linked from the footer. */

const POLICIES = [
  {
    title: "Design Agreement & Deposit",
    body: "A deposit of half the design estimate is due when you sign your Design Agreement. The remaining balance is due upon completion of your final design.",
  },
  {
    title: "Installation & Payment Schedule",
    body: "Once your design is approved, installation is booked with a deposit that reserves your place on the schedule and secures materials. The remaining balance is due on completion of the work. For larger, phased projects we bill by phase — each phase begins with its own deposit and is paid in full as it wraps, so you always know what's owed and when.",
  },
  {
    title: "Cancellations & Rescheduling",
    body: "Weather, seasons, and living materials mean dates occasionally move — we'll always give you as much notice as we can, and we ask the same in return. Consultations and installations can be rescheduled at no charge with reasonable notice. Deposits hold your place on the calendar and reserve materials, so they are non-refundable once ordering or work has begun, though they carry over when we reschedule together.",
  },
  {
    title: "Service Area & Travel",
    body: "We serve homes, estates, wedding venues, and breweries within about an hour of Asheville, from Hendersonville north to Burnsville, and Black Mountain west to Waynesville.",
  },
];

export default function Policies() {
  return (
    <div>
      <PageHero
        image={PHOTOS.aerial}
        eyebrow="Working Together"
        title="What To Expect"
        lede="The clear terms behind every project, so nothing gets in the way of the work."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {POLICIES.map((policy, i) => (
            <div
              key={policy.title}
              style={{
                paddingTop: i === 0 ? 0 : "var(--space-lg)",
                marginTop: i === 0 ? 0 : "var(--space-lg)",
                borderTop: i === 0 ? "none" : "var(--border-width-hairline) solid var(--border-hairline)",
              }}
            >
              <p className="eyebrow" style={{ marginBottom: "var(--space-2xs)" }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="display-md" style={{ marginBottom: "var(--space-sm)" }}>
                {policy.title}
              </h2>
              <p className="body-justified" style={{ font: "var(--text-body-lg)" }}>
                {policy.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner solid eyebrow="Questions?" title="Let's Talk Through Your Project">
        <Button variant="primary" size="lg" to="/contact-us">
          Get Started
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
