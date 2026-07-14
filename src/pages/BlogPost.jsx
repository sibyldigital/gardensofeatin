import React from "react";
import { useParams, Link } from "react-router-dom";
import { NavHeader } from "../components/NavHeader.jsx";
import { Callout } from "../components/Callout.jsx";
import { Button } from "../components/Button.jsx";
import { CTABanner } from "../components/CTABanner.jsx";
import { Footer } from "../components/Footer.jsx";
import { POSTS } from "../data/content.js";

/* Blog Post — editorial single-article layout (design system's BlogPage):
   forest nav bar, full-bleed featured image banner, then title and meta on
   the cream ground below (no overlaid headline), justified body copy, a
   single gold Callout aside, and a deep-forest CTA to start a project. */

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <div style={{ background: "var(--color-forest-deep)" }}>
          <NavHeader onDark />
        </div>
        <section className="section" style={{ textAlign: "center" }}>
          <div className="container">
            <h1 className="display-lg" style={{ marginBottom: "var(--space-md)" }}>
              Post Not Found
            </h1>
            <Button variant="secondary" to="/blog">
              Back To The Journal
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const midpoint = Math.ceil(post.body.length / 2);

  return (
    <div style={{ background: "var(--surface-page)" }}>
      <div style={{ background: "var(--color-forest-deep)" }}>
        <NavHeader onDark />
      </div>

      <div className="article-banner" style={{ backgroundImage: `url(${post.image})` }} />

      <article className="article fade-in">
        <p className="eyebrow">{`${post.category} — ${post.date}`}</p>
        <h1 className="article__title">{post.title}</h1>
        <p style={{ font: "var(--text-nav)", color: "var(--text-muted)", margin: "0 0 var(--space-lg)" }}>
          By {post.author}
        </p>

        {post.body.slice(0, midpoint).map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {post.callout && (
          <div style={{ margin: "var(--space-lg) 0" }}>
            <Callout label="In The Field">{post.callout}</Callout>
          </div>
        )}

        {post.body.slice(midpoint).map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <p style={{ marginTop: "var(--space-md)" }}>
          <Link to="/blog" className="btn btn--sm btn--ghost">
            ‹ Back To The Journal
          </Link>
        </p>
      </article>

      <CTABanner solid eyebrow="Ready When You Are" title="Ready To Start Your Own?">
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
