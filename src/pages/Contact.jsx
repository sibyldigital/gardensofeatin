import React, { useState } from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Input } from "../components/Input.jsx";
import { Button } from "../components/Button.jsx";
import { Footer } from "../components/Footer.jsx";
import { ServiceAreaMap } from "../components/ServiceAreaMap.jsx";
import { PHOTOS } from "../data/content.js";

/* Contact — intake form (name, email, phone, project type, location,
   message) with contact details alongside, and a service-area map of
   Western North Carolina. */

const PROJECT_TYPES = [
  "Edible Garden",
  "Food Forest",
  "Native Pollinator Garden",
  "Ecological Landscape Design",
  "Hardscapes",
  "Maintenance",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div>
      <PageHero
        image={PHOTOS.coleus}
        eyebrow="Contact"
        title="Start A Conversation"
        lede="Tell us about your land, and we will walk it with you."
      />

      <section className="section">
        <div className="container grid-2" style={{ gap: "var(--space-xl)", alignItems: "start" }}>
          <div>
            <SectionHeading eyebrow="Get A Quote" title="Tell Us About Your Project" />
            {sent ? (
              <p className="lede" style={{ color: "var(--text-heading)" }}>
                Thank you — we will be in touch within two business days.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
              >
                <Input label="Full Name" placeholder="Jane Smith" value={form.name} onChange={set("name")} required />
                <Input label="Email" type="email" placeholder="jane@example.com" value={form.email} onChange={set("email")} required />
                <Input label="Phone" type="tel" placeholder="(828) 555-0000" value={form.phone} onChange={set("phone")} />
                <Input
                  label="Project Type"
                  options={PROJECT_TYPES}
                  placeholder="Choose a project type"
                  value={form.projectType}
                  onChange={set("projectType")}
                  required
                />
                <Input label="Location" placeholder="Asheville, NC" value={form.location} onChange={set("location")} />
                <Input
                  label="Message"
                  textarea
                  placeholder="Tell us about your property…"
                  value={form.message}
                  onChange={set("message")}
                />
                <div>
                  <Button variant="primary" size="lg" type="submit">
                    Submit Request
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
            <div>
              <p className="eyebrow">Phone</p>
              <p className="lede" style={{ color: "var(--text-heading)" }}>(828) 555-0134</p>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <p className="lede" style={{ color: "var(--text-heading)" }}>hello@gardensofeatin.com</p>
            </div>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="lede" style={{ color: "var(--text-heading)" }}>
                12 Riverside Drive
                <br />
                Asheville, NC 28801
              </p>
            </div>
            <hr className="hairline" />
            <p className="body-justified" style={{ color: "var(--text-muted)" }}>
              We serve homes, estates, wedding venues, and breweries within
              about an hour of Asheville — from Hendersonville north to
              Burnsville, and Black Mountain west to Waynesville.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight section--sunken">
        <div className="container">
          <SectionHeading eyebrow="Service Area" title="Western North Carolina" />
          <ServiceAreaMap />
        </div>
      </section>

      <Footer />
    </div>
  );
}
