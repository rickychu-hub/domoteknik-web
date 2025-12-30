import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AuthorityPillarProps {
    icon: LucideIcon
    title: string
    desc: string
    colorClass: string // changed from 'color' to match FeatureCard naming for consistency, expects "text-..."
}

export function AuthorityPillar({ icon: Icon, title, desc, colorClass }: AuthorityPillarProps) {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-6">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-2 bg-primary/10 border border-primary/20", colorClass)}>
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{desc}</p>
        </div>
    )
}
