import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domótica Loxone: Hogar Inteligente Privado y Cableado",
    description: "Olvídate de interruptores. Tu casa en autopiloto con tecnología Loxone. Gestión energética, privacidad 100% local y fiabilidad industrial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
