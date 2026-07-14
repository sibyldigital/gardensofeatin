import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card.jsx";
import { POSTS } from "../data/content.js";

/**
 * JournalSection — "From The Journal" post grid for the homepage, pulling
 * the three most recent posts. Open-edge Cards with a dated byline and a
 * "View All Posts" link, matching the design system's BlogSection.
 */
export function JournalSection() {
  const posts = POSTS.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow">From The Journal</p>
            <h2 className="display-lg">Notes From The Field</h2>
          </div>
          <Link to="/blog" className="link-underline">
            View All Posts
          </Link>
        </div>
        <div className="grid-3">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card
                image={post.image}
                eyebrow={post.category}
                title={post.title}
                description={post.excerpt}
                aspect="16 / 10"
              />
              <div className="post-date">{post.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
