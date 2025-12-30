"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
// Ensure lucide-react is imported correctly
import { LucideIcon, CheckCircle2 } from "lucide-react"

interface ServiceSelectorProps {
    id: string
    icon: LucideIcon
    title: string
    description?: string
    selected: boolean
    onClick: () => void
}

export function ServiceSelector({
    id,
    icon: Icon,
    title,
    description,
    selected,
    onClick,
}: ServiceSelectorProps) {
    return (
        <Card
            onClick={onClick}
            className={cn(
                "relative cursor-pointer transition-all duration-300 group overflow-hidden border",
                // Base state (inactive)
                "bg-card hover:border-primary/50",

                // Selected State Logic
                selected
                    ? [
                        // Dark Mode: Border Primary + Glow
                        "dark:border-primary dark:shadow-[0_0_15px_-3px_rgba(132,204,22,0.3)]",
                        // Light Mode: Solid Green Border + Green-50 bg
                        "border-primary bg-green-50 dark:bg-transparent"
                    ]
                    : "border-border"
            )}
        >
            <div className="p-6 flex flex-col items-center text-center gap-4">
                <div
                    className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                        selected
                            ? "bg-primary text-primary-foreground scale-110"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    )}
                >
                    <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                    <h3 className={cn("font-bold text-lg", selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                        {title}
                    </h3>
                    {description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {selected && (
                <div className="absolute top-3 right-3 text-primary animate-in zoom-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                </div>
            )}
        </Card>
    )
}
