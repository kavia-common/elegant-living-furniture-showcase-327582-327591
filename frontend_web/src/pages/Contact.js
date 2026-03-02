import React, { useMemo, useState } from "react";
import { ContactCtas } from "../components/ContactCtas";
import { CONTACT, buildWhatsAppLink } from "../config/contact";

function sanitizeLine(value) {
  return String(value || "").trim();
}

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact page with WhatsApp/Phone CTAs and a prefilled WhatsApp inquiry form. */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "Fancy Wooden Chairs",
    city: "",
    details: "",
  });

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hello! I’d like to inquire about premium furniture.",
      "",
      `Name: ${sanitizeLine(form.name) || "-"}`,
      `Phone: ${sanitizeLine(form.phone) || "-"}`,
      `City/Area: ${sanitizeLine(form.city) || "-"}`,
      `Interested in: ${sanitizeLine(form.product) || "-"}`,
      "",
      "Notes:",
      sanitizeLine(form.details) || "-",
    ];
    return lines.join("\n");
  }, [form]);

  const whatsappHref = buildWhatsAppLink(whatsappMessage);

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Contact</h1>
        <p className="pageIntro">
          The quickest way to get pricing and availability is WhatsApp. Prefer a
          call? Tap the phone number and we’ll help you choose the right piece.
        </p>
      </header>

      <section className="section" aria-label="Contact options">
        <div className="grid grid2">
          <article className="card">
            <h2 className="cardTitle">Instant contact</h2>
            <p className="cardText">
              Reach us directly via WhatsApp or phone. We typically reply faster
              on WhatsApp with catalog images and pricing ranges.
            </p>
            <ContactCtas variant="stack" />
            <div style={{ marginTop: 12 }} className="pill">
              <b>Hours:</b> 10:00–19:00 (local) • <b>Response:</b> WhatsApp-first
            </div>
          </article>

          <article className="card">
            <h2 className="cardTitle">Request a quote</h2>
            <p className="cardText">
              Fill this form and send it via WhatsApp with one tap. Include
              measurements and finish preference for the best estimate.
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="fieldRow">
                <div>
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="input"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="input"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="Your phone (optional)"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="fieldRow">
                <div>
                  <label className="label" htmlFor="product">
                    Interested in
                  </label>
                  <select
                    id="product"
                    className="input"
                    value={form.product}
                    onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                  >
                    <option>Fancy Wooden Chairs</option>
                    <option>Designer Wooden Tables</option>
                    <option>Modern Bookshelves</option>
                    <option>Hidden Wall-Mounted Bookshelves</option>
                    <option>Decorative Plastic Shelves</option>
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="city">
                    City / Area
                  </label>
                  <input
                    id="city"
                    className="input"
                    value={form.city}
                    onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                    placeholder="e.g., Downtown"
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="details">
                  Details (size, finish, quantity, timeline)
                </label>
                <textarea
                  id="details"
                  className="textarea"
                  value={form.details}
                  onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))}
                  placeholder="Example: Dining table 6-seater, walnut finish, 160cm length..."
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a
                  className="btn btnPrimary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send via WhatsApp
                </a>
                <a className="btn btnSecondary" href={`tel:${CONTACT.phoneE164}`}>
                  Call instead
                </a>
              </div>

              <div className="pill" style={{ marginTop: 6 }}>
                <b>Tip:</b> Add a room photo in WhatsApp for faster recommendations.
              </div>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}
