import React from "react";

/**
 * Card — open-edge photography card used for services/portfolio grids.
 * No border, no shadow, no rounded corners — image bleeds to the card edge,
 * caption sits below on the cream ground. This is the brand's signature
 * "open edge card that brings texture" motif from the brand guide.
 */
export function Card({ image, eyebrow, title, description, aspect = "4 / 5", children }) {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ aspectRatio: aspect, backgroundImage: `url(${image})` }}
      />
      <div className="card__body">
        {eyebrow && <div className="card__eyebrow">{eyebrow}</div>}
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
        {children}
      </div>
    </div>
  );
}
