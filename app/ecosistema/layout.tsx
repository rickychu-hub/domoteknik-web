import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecosistema Integral: Solar, Aerotermia y VE Unificados",
    description: "Olvídate de tener 3 apps diferentes. Integramos Fotovoltaica, Climatización y Movilidad en un solo sistema controlado por Loxone.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
