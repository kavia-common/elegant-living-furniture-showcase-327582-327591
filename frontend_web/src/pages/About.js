import React from "react";
import { ContactCtas } from "../components/ContactCtas";

// PUBLIC_INTERFACE
export default function About() {
  /** About page with brand story and craftsmanship emphasis. */
  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">About Elegant Living</h1>
        <p className="pageIntro">
          We’re a premium furniture studio focused on elegant wooden pieces that
          feel timeless in modern interiors. Our approach blends clean design,
          refined finishes, and practical comfort — built for discerning homes.
        </p>
      </header>

      <section className="section" aria-label="Our approach">
        <div className="grid grid2">
          <article className="card">
            <h2 className="cardTitle">Design that feels expensive — quietly</h2>
            <p className="cardText">
              Ocean-inspired blues for calm, amber accents for warmth: we like
              furniture that complements a modern lifestyle. Whether you prefer
              minimal Scandinavian lines or bold statement grains, we guide you
              toward a cohesive look.
            </p>
            <div className="cardMeta">
              <span className="pill">
                <b>Modern</b> • Minimal • Luxe
              </span>
            </div>
          </article>

          <article className="card">
            <h2 className="cardTitle">Craftsmanship & finishing standards</h2>
            <p className="cardText">
              Our pieces emphasize sturdy joinery, balanced proportions, and
              premium finishing. If you share your space constraints, we can
              propose sizes and layouts that feel custom-built.
            </p>
            <div className="cardMeta">
              <span className="pill">
                <b>Quality</b> • Joinery • Finish
              </span>
            </div>
          </article>
        </div>

        <div className="contactPanel">
          <div className="contactPanelRow">
            <p>
              Message us for materials, finish options, and current lead time.
            </p>
            <ContactCtas />
          </div>
        </div>
      </section>
    </div>
  );
}
