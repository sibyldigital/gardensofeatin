import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero.jsx";
import { Input } from "../components/Input.jsx";
import { Card } from "../components/Card.jsx";
import { Footer } from "../components/Footer.jsx";
import { PHOTOS, POSTS } from "../data/content.js";

/* Blog — journal hero, search bar and category filter, post grid with
   full-bleed featured images, title, date, category, excerpt. */

const CATEGORIES = ["All", ...new Set(POSTS.map((p) => p.category))];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const shown = POSTS.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <PageHero
        image={PHOTOS.coneflowers}
        eyebrow="The Journal"
        title="Notes From The Field"
        lede="Planting calendars, soil lessons, and what we are learning across the gardens of Western North Carolina."
      />

      <section className="section">
        <div className="container">
          <div
            className="grid-2"
            style={{ alignItems: "end", marginBottom: "var(--space-xl)", gap: "var(--space-lg)" }}
          >
            <Input
              label="Search The Journal"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Input
              label="Category"
              options={CATEGORIES}
              placeholder="All"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="grid-3">
            {shown.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card
                  image={post.image}
                  eyebrow={`${post.category} — ${post.date}`}
                  title={post.title}
                  description={post.excerpt}
                  aspect="4 / 3"
                />
              </Link>
            ))}
            {shown.length === 0 && (
              <p className="lede">No posts match that search — try another word or category.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
