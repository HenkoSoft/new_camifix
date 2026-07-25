import { NextResponse } from "next/server";

const DOLAR_BLUE_ENDPOINT = "https://dolarapi.com/v1/dolares/blue";

interface DolarApiResponse {
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

interface DolarResponse {
  buy: number;
  sell: number;
  updated: string;
}

function isDolarApiResponse(data: unknown): data is DolarApiResponse {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const dolar = data as Record<string, unknown>;

  return (
    typeof dolar.compra === "number" &&
    typeof dolar.venta === "number" &&
    typeof dolar.fechaActualizacion === "string"
  );
}

export async function GET() {
  try {
    const response = await fetch(DOLAR_BLUE_ENDPOINT, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "No pudimos obtener la cotizacion del dolar blue." },
        { status: response.status },
      );
    }

    const data: unknown = await response.json();

    if (!isDolarApiResponse(data)) {
      return NextResponse.json(
        { error: "La respuesta del servicio de cotizacion no es valida." },
        { status: 502 },
      );
    }

    const dolar: DolarResponse = {
      buy: data.compra,
      sell: data.venta,
      updated: data.fechaActualizacion,
    };

    return NextResponse.json(dolar);
  } catch {
    return NextResponse.json(
      { error: "Ocurrio un error al consultar la cotizacion del dolar." },
      { status: 500 },
    );
  }
}
