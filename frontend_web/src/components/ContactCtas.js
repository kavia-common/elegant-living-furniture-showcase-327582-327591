import React from "react";
import { CONTACT, buildTelLink, buildWhatsAppLink } from "../config/contact";

// PUBLIC_INTERFACE
export function ContactCtas({ size = "default", variant = "row", message }) {
  /**
   * Renders prominent WhatsApp and Phone CTAs.
   * - size: "default" | "small"
   * - variant: "row" | "stack"
   */
  const isSmall = size === "small";
  const wrapStyle =
    variant === "stack"
      ? { display: "grid", gap: 10, alignItems: "start" }
      : { display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" };

  return (
    <div style={wrapStyle} aria-label="Contact actions">
      <a
        className={`btn btnPrimary ${isSmall ? "btnSmall" : ""}`}
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span aria-hidden="true">WhatsApp</span>
        <span style={{ fontWeight: 900 }}>Chat</span>
      </a>

      <a
        className={`btn btnSecondary ${isSmall ? "btnSmall" : ""}`}
        href={buildTelLink()}
        aria-label={`Call ${CONTACT.phoneDisplay}`}
      >
        <span aria-hidden="true">Call</span>
        <span style={{ fontWeight: 900 }}>{CONTACT.phoneDisplay}</span>
      </a>
    </div>
  );
}

// PUBLIC_INTERFACE
export function FloatingContactCtas() {
  /** Floating contact buttons, always visible on the bottom-right of the site. */
  return (
    <div className="floatingCtaWrap" aria-label="Floating contact actions">
      <a
        className="btn btnPrimary floatingBtn"
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        title="WhatsApp"
      >
        WA <span>WhatsApp</span>
      </a>
      <a
        className="btn btnSecondary floatingBtn"
        href={buildTelLink()}
        aria-label={`Call ${CONTACT.phoneDisplay}`}
        title="Call"
      >
        ☎ <span>Call</span>
      </a>
    </div>
  );
}
