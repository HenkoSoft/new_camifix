import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://camifix.com.ar";
const title = "CAMIFIX | Servicio técnico de celulares y notebooks en Marcos Paz";
const description =
  "Servicio técnico especializado en reparación de celulares y notebooks en Marcos Paz. Cambio de pantalla, batería, pin de carga, diagnóstico y reparaciones Apple y Android.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | CAMIFIX",
  },
  description,
  applicationName: "CAMIFIX",
  keywords: [
    "servicio técnico celulares marcos paz",
    "reparación celulares marcos paz",
    "cambio de pantalla marcos paz",
    "cambio de batería marcos paz",
    "reparación iPhone Marcos Paz",
    "reparación Samsung Marcos Paz",
    "técnico celulares Buenos Aires",
    "reparación notebooks Marcos Paz",
    "service notebooks Marcos Paz",
  ],
  authors: [{ name: "CAMIFIX" }],
  creator: "CAMIFIX",
  publisher: "CAMIFIX",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "CAMIFIX",
    title,
    description,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "CAMIFIX servicio técnico de celulares y notebooks en Marcos Paz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
