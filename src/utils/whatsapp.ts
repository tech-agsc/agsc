const WHATSAPP_PHONE = "573202386336";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola AG Soluciones Contables, deseo agendar una asesoria.";

export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}&type=phone_number&app_absent=0`;
