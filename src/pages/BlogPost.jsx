import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { Callout } from "../components/Callout.jsx";
import { Button } from "../components/Button.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Footer } from "../components/Footer.jsx";
import { POSTS, PHOTOS } from "../data/content.js";

/* Blog Post — title/date/category/author over the featured image with dark
   overlay, rich text body with an open-edge inline image and a single gold
   callout, deep-forest CTA to start a project. */

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <PageHero image={PHOTOS.hero} title="Post Not Found" lede="That journal entry has been composted." />
        <section className="section" style={{ textAlign: "center" }}>
          <Button variant="secondary" to="/blog">
            Back To The Journal
          </Button>
        </section>
        <Footer />
      </div>
    );
  }

  const midpoint = Math.ceil(post.body.length / 2);

  return (
    <div>
      <PageHero
        image={post.image}
        eyebrow={`${post.category} — ${post.date}`}
        title={post.title}
        lede={`By ${post.author}`}
      />

      <article className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {post.body.slice(0, midpoint).map((para, i) => (
            <p key={i} className="body-justified" style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}>
              {para}
            </p>
          ))}

          <div
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              aspectRatio: "16 / 9",
              margin: "var(--space-lg) 0",
            }}
          />

          {post.callout && (
            <div style={{ margin: "var(--space-lg) 0" }}>
              <Callout label="Field Note">{post.callout}</Callout>
            </div>
          )}

          {post.body.slice(midpoint).map((para, i) => (
            <p key={i} className="body-justified" style={{ font: "var(--text-body-lg)", marginBottom: "var(--space-md)" }}>
              {para}
            </p>
          ))}

          <p style={{ marginTop: "var(--space-lg)" }}>
            <Link to="/blog" className="btn btn--sm btn--ghost">
              ‹ Back To The Journal
            </Link>
          </p>
        </div>
      </article>

      <CTABanner solid title="Ready To Start Your Own?">
        <p className="lede" style={{ margin: "0 auto var(--space-lg)", color: "var(--color-on-forest-soft)" }}>
          Every garden in this journal began with a walk on the land. Yours can too.
        </p>
        <Button variant="primary" size="lg" to="/contact">
          Get A Quote
        </Button>
      </CTABanner>

      <Footer />
    </div>
  );
}
