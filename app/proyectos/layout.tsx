import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proyectos Reales: Ahorro Energético Comprobado | Domoteknik",
    description: "Descubre casos de éxito reales. Facturas de luz a 0€, amortizaciones en tiempo récord y hogares 100% autosuficientes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
