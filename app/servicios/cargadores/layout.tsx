import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cargadores de Vehículo Eléctrico Inteligentes",
    description: "Carga tu coche a 0€/km usando el excedente solar. Instalación de cargadores rápidos con gestión desde app.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
