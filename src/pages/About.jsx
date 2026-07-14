import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { Card } from "../components/Card.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, TEAM, VALUES } from "../data/content.js";

/* About — warm editorial hero, two-column philosophy statement (text left,
   portrait right), three-member team section, values list. */

export default function About() {
  return (
    <div>
      <PageHero
        image={PHOTOS.aerial}
        eyebrow="About Gardens of Eatin'"
        title="Grounded In The Land We Plant"
        lede="An ecological landscaping company from Asheville, North Carolina — founded on the idea that beauty and harvest belong in the same garden."
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Simple, Clean Design That"
              italic="Feeds People"
            />
            <p className="body-justified" style={{ maxWidth: "540px", marginBottom: "var(--space-md)" }}>
              Founded by Anna Timmerman, Gardens of Eatin' designs and installs
              edible landscapes, food forests, and full permaculture property
              designs for residential and commercial clients across Western
              North Carolina.
            </p>
            <p className="body-justified" style={{ maxWidth: "540px" }}>
              We work at the intersection of luxury lifestyle and values-led
              living. Our clients want an outdoor space that photographs
              beautifully — and we believe that same space should carry fruit
              trees, edible nuts and berries, and a kitchen garden that earns
              its ground. We read the water, sun, and soil first, and we plant
              for decades, not seasons.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${PHOTOS.coleus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "4 / 5",
            }}
          />
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="The People" title="A Small Crew With Deep Roots" />
          <div className="grid-3">
            {TEAM.map((member) => (
              <Card
                key={member.name}
                image={member.image}
                eyebrow={member.title}
                title={member.name}
                description={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="What We Hold To" />
          <div className="grid-2" style={{ gap: "var(--space-xl)" }}>
            {VALUES.map((value, i) => (
              <div key={value.name}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display-md" style={{ marginBottom: "var(--space-2xs)" }}>
                  {value.name}
                </h3>
                <p className="lede">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
