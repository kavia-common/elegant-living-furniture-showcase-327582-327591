import React from "react";
import { Link } from "react-router-dom";
import { ContactCtas } from "../components/ContactCtas";

// PUBLIC_INTERFACE
export default function NotFound() {
  /** Fallback page for unknown routes. */
  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Page not found</h1>
        <p className="pageIntro">
          The page you’re looking for doesn’t exist. Use the navigation, or contact
          us directly and we’ll guide you.
        </p>
      </header>

      <section className="section">
        <div className="card">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <Link className="btn btnPrimary" to="/">
              Back to Home
            </Link>
            <Link className="btn btnGhost" to="/products">
              Browse Products →
            </Link>
          </div>

          <div style={{ marginTop: 14 }}>
            <ContactCtas />
          </div>
        </div>
      </section>
    </div>
  );
}
