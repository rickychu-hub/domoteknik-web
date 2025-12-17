import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aerotermia: Calefacción Silenciosa y Eficiente",
    description: "Sustituye tu caldera de gas. Climatización invisible que multiplica tu ahorro x4. Confort térmico absoluto.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
