"use client"

import { Card } from "@/components/ui/card"
import { PiggyBank, ShieldCheck, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSimulatorStore } from "@/lib/store"
import { useMemo } from "react"

export function ResultDisplay() {
    const { selectedServices, consumption, buildingType } = useSimulatorStore()

    // --- LOGIC ---
    const validCount = selectedServices.length

    const savingsData = useMemo(() => {
        let baseSavingsPercent = 0
        if (selectedServices.includes('solar')) baseSavingsPercent += 0.50
        if (selectedServices.includes('battery')) baseSavingsPercent += 0.25
        if (selectedServices.includes('aerotermia')) baseSavingsPercent += 0.15
        if (selectedServices.includes('charger')) baseSavingsPercent += 0.05
        if (selectedServices.includes('domotica') && validCount > 1) baseSavingsPercent *= 1.1
        // Industrial bonus
        if (buildingType === "industrial" && selectedServices.includes('solar')) baseSavingsPercent += 0.05

        const savingsPercent = Math.min(0.98, baseSavingsPercent)
        const finalBill = Math.max(0, consumption * (1 - savingsPercent))
        const annualSavings = (consumption - finalBill) * 12
        const independence = Math.round(savingsPercent * 100)

        return { annualSavings, independence }
    }, [selectedServices, consumption, buildingType, validCount])

    if (validCount === 0) {
        return (
            <Card className="h-full flex flex-col items-center justify-center p-8 text-center bg-muted/20 border-border/50 border-dashed">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 opacity-50">
                    <Leaf className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-muted-foreground">Esperando Datos</h3>
                <p className="text-sm text-muted-foreground/70 max-w-[200px]">
                    Selecciona componentes para calcular tu impacto
                </p>
            </Card>
        )
    }

    return (
        <Card className={cn(
            "relative overflow-hidden h-full shadow-lg transition-all duration-500",
            // Light Mode
            "bg-card",
            // Dark Mode: CORREGIDO a sintaxis estándar Tailwind v3
            "dark:bg-gradient-to-b dark:from-[#1e3a31] dark:to-transparent dark:border-primary/20"
        )}>

            <div className="relative z-10 p-8 flex flex-col h-full justify-between gap-8">

                {/* Header Data */}
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Ahorro Anual Estimado</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
                                {Math.round(savingsData.annualSavings).toLocaleString()}€
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-muted-foreground">
                            <span>Red Eléctrica</span>
                            <span className="text-primary">{savingsData.independence}% Independencia</span>
                        </div>
                        <div className="h-3 w-full bg-muted/50 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-1000 ease-out"
                                style={{ width: `${savingsData.independence}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-4 rounded-xl flex flex-col gap-2">
                        <PiggyBank className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Retorno Inversión</p>
                            <p className="font-bold text-foreground text-sm">~4-6 Años</p>
                        </div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 p-4 rounded-xl flex flex-col gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground">Garantía</p>
                            <p className="font-bold text-foreground text-sm">25 Años</p>
                        </div>
                    </div>
                </div>

                {/* Call To Action Area */}
                <div className="pt-6 border-t border-border/50">
                    <div className="text-center">
                        <p className="text-sm font-medium text-foreground mb-1">
                            Tu casa empieza a trabajar para ti
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Cashflow positivo desde el día 1 con financiación
                        </p>
                    </div>
                </div>

            </div>
        </Card>
    )
}