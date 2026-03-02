// PUBLIC_INTERFACE
export const CONTACT = {
  /**
   * Primary phone number used throughout the site.
   * Update as needed for the business.
   */
  phoneDisplay: "+1 (555) 123‑4567",
  phoneE164: "+15551234567",

  /**
   * WhatsApp number in international format, digits only.
   * Must match the phone line that receives WhatsApp messages.
   */
  whatsappNumberDigits: "15551234567",

  /**
   * Default message prefilled in WhatsApp chat.
   */
  whatsappDefaultMessage:
    "Hello! I’d like to inquire about premium furniture (chairs/tables/bookshelves). Please share pricing and available designs.",
};

// PUBLIC_INTERFACE
export function buildWhatsAppLink(message = CONTACT.whatsappDefaultMessage) {
  /** Builds a WhatsApp deep link with an encoded text message. */
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumberDigits}?text=${encoded}`;
}

// PUBLIC_INTERFACE
export function buildTelLink() {
  /** Builds a tel: link from the configured E.164 number. */
  return `tel:${CONTACT.phoneE164}`;
}
