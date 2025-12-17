import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ingeniería y Servicios Integrales | Domoteknik",
    description: "Especialistas en la integración de energía solar, climatización (aerotermia), movilidad eléctrica y domótica Loxone. Un solo equipo, responsabilidad total.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
