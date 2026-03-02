import React from "react";
import { Link } from "react-router-dom";
import { ContactCtas } from "../components/ContactCtas";
import { buildWhatsAppLink } from "../config/contact";

const FEATURED = [
  {
    title: "Luxury Wooden Chairs",
    text: "Ergonomic silhouettes with hand-finished wood grains — perfect for dining and statement corners.",
    meta: { tag: "Best Sellers", accent: "Chair Series" },
  },
  {
    title: "Designer Wooden Tables",
    text: "From minimalist to bold: premium tops, stable joinery, and refined detailing for modern interiors.",
    meta: { tag: "Signature", accent: "Table Studio" },
  },
  {
    title: "Modern Bookshelves",
    text: "Clean lines and strong load-bearing frames — ideal for living rooms, offices, and library walls.",
    meta: { tag: "Modern", accent: "Shelf System" },
  },
];

const PROMISES = [
  {
    title: "Premium Materials",
    text: "We focus on high-grade wood finishes and long-lasting hardware — made to look elegant for years.",
    icon: "✓",
  },
  {
    title: "Bespoke Options",
    text: "Choose size, finish, edge detail, and storage configuration. We tailor pieces for your space.",
    icon: "✦",
  },
  {
    title: "White-Glove Guidance",
    text: "Share your room photo and measurements; we’ll suggest styles that match your interior and budget.",
    icon: "☰",
  },
];

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page with hero and product highlights. */
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroCard">
              <div className="kicker">
                <span className="kickerDot" aria-hidden="true" />
                Crafted luxury furniture for modern homes
              </div>
              <h1 className="h1">
                Elegant wooden pieces that elevate your space — without the
                showroom pressure.
              </h1>
              <p className="lead">
                We design and supply premium chairs, designer tables, modern
                bookshelves, hidden wall-mounted bookshelves, and decorative
                shelves. Connect with us on WhatsApp or phone for pricing,
                customization, and availability.
              </p>

              <div className="heroCtas">
                <ContactCtas />
                <Link className="btn btnGhost" to="/products">
                  Explore products →
                </Link>
              </div>

              <div className="badges" aria-label="Highlights">
                <div className="badge">
                  <span className="badgeIcon" aria-hidden="true">
                    ✦
                  </span>
                  Minimalist, modern aesthetic
                </div>
                <div className="badge">
                  <span className="badgeIcon" aria-hidden="true">
                    ⌁
                  </span>
                  Premium finishes
                </div>
                <div className="badge">
                  <span className="badgeIcon" aria-hidden="true">
                    ▦
                  </span>
                  Custom sizes available
                </div>
              </div>
            </div>

            <aside className="heroAside" aria-label="How we help">
              <div className="asideTitle">Quick concierge</div>
              <ul className="asideList">
                {PROMISES.map((p) => (
                  <li key={p.title} className="asideItem">
                    <div className="iconPill" aria-hidden="true">
                      {p.icon}
                    </div>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <a
                  className="btn btnPrimary"
                  href={buildWhatsAppLink(
                    "Hello! I’d like a quick furniture recommendation. My space is modern and I’m looking for chairs/tables/bookshelves. Please advise."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp concierge
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Featured categories">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <h2 className="h2">Featured categories</h2>
              <p className="sectionSub">
                High-impact pieces for middle and upper-middle-class homes.
                Clean lines, luxury finishes, and practical comfort.
              </p>
            </div>
          </div>

          <div className="grid grid3">
            {FEATURED.map((item) => (
              <article key={item.title} className="card">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
                <div className="cardMeta">
                  <span className="pill">
                    <b>{item.meta.tag}</b> • {item.meta.accent}
                  </span>
                  <Link to="/contact" className="miniLink">
                    Get pricing →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="contactPanel" style={{ marginTop: 18 }}>
            <div className="contactPanelRow">
              <p>
                Want the latest catalog and price range? Send us your room
                measurements and preferred finish.
              </p>
              <ContactCtas />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
