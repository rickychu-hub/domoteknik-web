import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto Ingeniería | Domoteknik",
    description: "Habla directamente con nuestro equipo técnico. Estudios de eficiencia energética, domótica y renovables. Sin comerciales.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
