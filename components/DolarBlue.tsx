"use client";

import { useEffect, useState } from "react";

interface DolarBlueData {
  buy: number;
  sell: number;
  updated: string;
}

interface DolarBlueError {
  error: string;
}

const REFRESH_INTERVAL_MS = 60_000;

const currencyFormatter = new Intl.NumberFormat("es-AR");

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function isDolarBlueData(data: unknown): data is DolarBlueData {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const dolar = data as Record<string, unknown>;

  return (
    typeof dolar.buy === "number" &&
    typeof dolar.sell === "number" &&
    typeof dolar.updated === "string"
  );
}

function isDolarBlueError(data: unknown): data is DolarBlueError {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const errorData = data as Record<string, unknown>;

  return typeof errorData.error === "string";
}

function formatUpdatedDate(updated: string) {
  const date = new Date(updated);

  if (Number.isNaN(date.getTime())) {
    return "fecha no disponible";
  }

  return dateFormatter.format(date);
}

export function DolarBlue() {
  const [dolar, setDolar] = useState<DolarBlueData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    async function fetchDolar() {
      try {
        setError(null);

        const response = await fetch("/api/dolar", {
          signal: controller.signal,
        });
        const data: unknown = await response.json();

        if (!response.ok) {
          throw new Error(
            isDolarBlueError(data)
              ? data.error
              : "No pudimos actualizar la cotización.",
          );
        }

        if (!isDolarBlueData(data)) {
          throw new Error("La cotización recibida no es válida.");
        }

        if (isMounted) {
          setDolar(data);
        }
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }

        if (isMounted) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "No pudimos cargar la cotización.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void fetchDolar();

    const intervalId = window.setInterval(() => {
      void fetchDolar();
    }, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      controller.abort();
      window.clearInterval(intervalId);
    };
  }, []);

  if (isLoading) {
    return (
      <section className="border-y border-white/10 bg-transparent px-4 py-2 text-sm text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">Cargando...</div>
      </section>
    );
  }

  if (error !== null) {
    return (
      <section className="border-y border-white/10 bg-transparent px-4 py-2 text-sm text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-zinc-300">
          No pudimos cargar la cotización del dólar blue. Intentalo nuevamente en
          unos minutos.
        </div>
      </section>
    );
  }

  if (dolar === null) {
    return null;
  }

  const updatedText = `Actualizado: ${formatUpdatedDate(dolar.updated)}`;

  return (
    <section
      className="border-y border-white/10 bg-transparent px-4 py-2 text-sm text-white sm:px-6 lg:px-8"
      title={updatedText}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1">
        <div className="font-semibold text-cyan-400">DólarHoy / Blue</div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span>
            <strong>Compra:</strong>{" "}
            <span className="text-cyan-400">
              ${currencyFormatter.format(dolar.buy)}
            </span>
          </span>
          <span>
            <strong>Venta:</strong>{" "}
            <span className="text-cyan-400">
              ${currencyFormatter.format(dolar.sell)}
            </span>
          </span>
        </div>
        <p className="text-xs text-zinc-400 sm:ml-auto">{updatedText}</p>
      </div>
    </section>
  );
}
