import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | CAMIFIX",
  },
  description: siteConfig.description,
  applicationName: "CAMIFIX",
  keywords: [
    "servicio técnico celulares online",
    "reparación celulares online",
    "cambio de pantalla celular",
    "cambio de batería celular",
    "reparación iPhone",
    "reparación Samsung",
    "técnico celulares por WhatsApp",
    "reparación notebooks online",
    "service notebooks",
  ],
  authors: [{ name: "CAMIFIX" }],
  creator: "CAMIFIX",
  publisher: "CAMIFIX",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: "CAMIFIX",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og`,
        width: 1200,
        height: 630,
        alt: "CAMIFIX servicio técnico online de celulares y notebooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
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
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
