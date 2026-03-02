import React from "react";
import { ContactCtas } from "../components/ContactCtas";
import { buildWhatsAppLink } from "../config/contact";

const PRODUCTS = [
  {
    title: "Fancy Wooden Chairs",
    description:
      "Dining chairs, accent chairs, and lounge silhouettes with premium wood grains and comfortable proportions.",
    details: ["Multiple finishes", "Custom upholstery options", "Bulk sets available"],
    ctaMessage:
      "Hello! Please share your latest chair designs, pricing range, and available finishes.",
  },
  {
    title: "Designer Wooden Tables",
    description:
      "Statement dining tables, modern coffee tables, and compact console pieces — designed for refined spaces.",
    details: ["Solid tops", "Stable joinery", "Custom dimensions"],
    ctaMessage:
      "Hello! I’m interested in designer wooden tables. Please share sizes, finishes, and price range.",
  },
  {
    title: "Modern Bookshelves",
    description:
      "Minimal, strong shelves for living rooms and offices — designed to look clean even when fully loaded.",
    details: ["Modular options", "Durable brackets", "Balanced depth"],
    ctaMessage:
      "Hello! Please share your modern bookshelf options, sizes, and price range.",
  },
  {
    title: "Hidden Wall-Mounted Bookshelves",
    description:
      "Space-saving, wall-mounted shelving that feels integrated into the room — sleek and practical.",
    details: ["Wall-safe mounting", "Clean cable/edge routing", "Custom layouts"],
    ctaMessage:
      "Hello! I’m looking for hidden wall-mounted bookshelves. Please share design options and installation details.",
  },
  {
    title: "Decorative Plastic Shelves",
    description:
      "Lightweight decorative shelves for modern styling — great for accents, plants, and compact storage.",
    details: ["Modern colors", "Easy installation", "Budget-friendly"],
    ctaMessage:
      "Hello! Please share your decorative plastic shelf styles, colors, and price range.",
  },
];

// PUBLIC_INTERFACE
export default function Products() {
  /** Products page with clear categories and contact CTAs. */
  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Products</h1>
        <p className="pageIntro">
          Browse our core categories below. For the fastest response, send a
          WhatsApp message with your preferred style, size, and finish — we’ll
          reply with options and pricing.
        </p>
      </header>

      <section className="section" aria-label="Product list">
        <div className="grid grid3">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="card">
              <h2 className="cardTitle">{p.title}</h2>
              <p className="cardText">{p.description}</p>

              <div style={{ display: "grid", gap: 8, marginBottom: 14 }}>
                {p.details.map((d) => (
                  <div key={d} className="pill">
                    <b>•</b> {d}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a
                  className="btn btnPrimary"
                  href={buildWhatsAppLink(p.ctaMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp for options
                </a>
                <a className="btn btnSecondary" href="/contact">
                  Request a quote
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="contactPanel">
          <div className="contactPanelRow">
            <p>
              Looking for a premium, cohesive look? Share your room photo and
              measurements. We’ll recommend matching pieces.
            </p>
            <ContactCtas />
          </div>
        </div>
      </section>
    </div>
  );
}
