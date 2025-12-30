import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    // Hacemos el color opcional para evitar crash si falta
    color?: string;
}

export function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
    // GUARDIA DE SEGURIDAD:
    // Si 'color' no viene definido, usamos un valor seguro por defecto (text-primary)
    const safeColor = color || "text-primary";

    // Lógica segura para extraer el color de fondo (bg) a partir del color de texto
    // Si safeColor es "text-green-500", esto generará "bg-green-500"
    const bgColorClass = safeColor.includes("text-")
        ? safeColor.replace("text-", "bg-")
        : "bg-primary";

    return (
        <Card className="relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[#84cc16]/10 dark:hover:border-[#84cc16]/30">
            {/* Hover Gradient Background (Blindado) */}
            <div
                className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    bgColorClass // Ahora usamos la variable calculada segura
                )}
            />

            <div className="p-6 flex flex-col h-full relative z-10">
                <div
                    className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                        "bg-secondary text-foreground group-hover:bg-white group-hover:shadow-md", // Base style
                        // En dark mode o hover, usamos el color específico
                        `dark:bg-white/5 dark:group-hover:text-[${safeColor}]`
                    )}
                >
                    <Icon className={cn("w-6 h-6", safeColor)} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                    {description}
                </p>
            </div>
        </Card>
    );
}
