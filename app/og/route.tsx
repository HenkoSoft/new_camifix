import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090B",
          color: "#FAFAFA",
          padding: "76px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 0.9, fontWeight: 900 }}>
            <span style={{ color: "#F6D232" }}>CAMI</span>
            <span style={{ color: "#FFFFFF" }}>FIX</span>
          </div>
          <div style={{ color: "#FFFFFF", fontSize: 30, fontWeight: 800 }}>
            Service de Smartphones & Notebooks
          </div>
        </div>
        <div>
          <div style={{ color: "#2563EB", fontSize: 28, marginBottom: 18 }}>
            Servicio tecnico online
          </div>
          <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 800, maxWidth: 900 }}>
            Tu celular vuelve a funcionar.
          </div>
          <div style={{ marginTop: 28, color: "#D4D4D8", fontSize: 30, maxWidth: 900 }}>
            iPhone, Samsung, Motorola, Xiaomi y mas. Reparaciones rapidas con garantia.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#A1A1AA", fontSize: 25 }}>
          <span>Atencion online</span>
          <span>+54 11 6047-9367</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
