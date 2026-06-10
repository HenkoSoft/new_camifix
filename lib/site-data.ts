import {
  Apple,
  BatteryCharging,
  Camera,
  CheckCircle2,
  Clock3,
  Cpu,
  Laptop,
  MapPin,
  PlugZap,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";

export const business = {
  name: "CAMIFIX",
  address: "Bartolomé Mitre 131",
  city: "Marcos Paz",
  province: "Buenos Aires",
  country: "Argentina",
  whatsappDisplay: "+54 11 6047-9367",
  whatsappMessage:
    "Hola CAMIFIX, quiero solicitar un presupuesto para reparar mi equipo.",
  hours: ["Lunes a Sábado", "09:30 a 13:00", "16:30 a 20:00"],
  mapUrl: "https://maps.google.com/?q=Bartolom%C3%A9%20Mitre%20131%20Marcos%20Paz%20Buenos%20Aires%20Argentina",
};

export const heroStats = [
  { value: "+1000", label: "equipos reparados" },
  { value: "Garantía", label: "incluida" },
  { value: "Diagnóstico", label: "profesional" },
];

export const services = [
  {
    title: "Cambio de pantalla",
    description: "Reemplazo preciso de módulos y displays con control de táctil, brillo y sellado.",
    icon: Smartphone,
  },
  {
    title: "Cambio de batería",
    description: "Autonomía renovada, medición de consumo y revisión del estado general del equipo.",
    icon: BatteryCharging,
  },
  {
    title: "Pin de carga",
    description: "Limpieza, reparación o reemplazo del conector para una carga estable y segura.",
    icon: PlugZap,
  },
  {
    title: "Cámaras",
    description: "Diagnóstico de enfoque, sensores, lentes y reemplazo de piezas cuando corresponde.",
    icon: Camera,
  },
  {
    title: "Diagnóstico técnico",
    description: "Revisión profesional para detectar fallas de hardware, software o humedad.",
    icon: Cpu,
  },
  {
    title: "Recuperación de software",
    description: "Actualizaciones, restauraciones y solución de errores de sistema en iOS y Android.",
    icon: Wrench,
  },
  {
    title: "Reparación de notebooks",
    description: "Servicio técnico para notebooks, carga, batería, rendimiento y diagnóstico.",
    icon: Laptop,
  },
  {
    title: "Apple y Android",
    description: "Atención especializada para iPhone, Samsung, Motorola, Xiaomi y más marcas.",
    icon: Apple,
  },
];

export const brands = ["Apple", "Samsung", "Motorola", "Xiaomi", "Realme", "TCL"];

export const processSteps = [
  {
    title: "Traé tu equipo",
    description: "Lo recibimos en el local y escuchamos qué problema estás notando.",
  },
  {
    title: "Diagnóstico",
    description: "Revisamos componentes clave para entender la falla real.",
  },
  {
    title: "Presupuesto",
    description: "Te explicamos opciones, tiempos y garantía antes de avanzar.",
  },
  {
    title: "Reparación y entrega",
    description: "Reparamos, probamos y entregamos el equipo listo para usar.",
  },
];

export const benefits = [
  { title: "Atención personalizada", icon: CheckCircle2 },
  { title: "Reparaciones rápidas", icon: Clock3 },
  { title: "Garantía escrita", icon: ShieldCheck },
  { title: "Técnicos especializados", icon: Wrench },
  { title: "Repuestos de calidad", icon: Cpu },
];

export const testimonials = [
  {
    name: "Sofía M.",
    detail: "iPhone 11 - pantalla",
    quote:
      "Me explicaron todo antes de reparar y el celular quedó impecable. La atención fue súper clara.",
  },
  {
    name: "Martín R.",
    detail: "Samsung A52 - pin de carga",
    quote:
      "Lo llevé porque no cargaba bien. Lo diagnosticaron rápido y al día siguiente ya estaba listo.",
  },
  {
    name: "Valentina G.",
    detail: "Motorola - batería",
    quote:
      "Muy profesionales. Me dieron garantía por escrito y el equipo volvió a durar como antes.",
  },
];

export const contactItems = [
  { label: "Dirección", value: "Bartolomé Mitre 131, Marcos Paz", icon: MapPin },
  { label: "WhatsApp", value: business.whatsappDisplay, icon: Smartphone },
  { label: "Horarios", value: "Lun a Sáb 09:30-13:00 / 16:30-20:00", icon: Clock3 },
];
