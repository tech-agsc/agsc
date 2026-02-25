const WHATSAPP_PHONE = "573202386336";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola AG Soluciones Contables, deseo agendar una asesoria.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;
