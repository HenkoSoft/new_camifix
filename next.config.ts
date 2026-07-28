import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/inicio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/servicio-tecnico",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/servicio-tecnico-celulares",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/reparacion-celulares",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/reparacion-iphone",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/reparacion-samsung",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/reparacion-notebooks",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/cambio-de-pantalla",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/cambio-de-bateria",
        destination: "/#servicios",
        permanent: true,
      },
      {
        source: "/pin-de-carga",
        destination: "/#servicios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
