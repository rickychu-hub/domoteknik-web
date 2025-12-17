import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Simulador de Ahorro Energético",
    description: "Calcula cuánto puedes ahorrar en luz y calefacción en menos de 1 minuto.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
