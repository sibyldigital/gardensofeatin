import React from "react";
import { Link } from "react-router-dom";

/**
 * Button — primary CTA (maroon), secondary (forest outline),
 * secondary-on-dark (cream outline), ghost (text-only underline).
 * Maroon is the one "stop and act" color in the system — greens are
 * never used for CTAs. Renders a router Link when `to` is given.
 */
export function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  onClick,
  disabled = false,
  children,
}) {
  const className = `btn btn--${size} btn--${variant}`;
  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
