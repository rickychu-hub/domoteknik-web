"use client"

import { useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Sun, BatteryCharging, Wind, PlugZap, BrainCircuit, Home
} from "lucide-react"
import { useSimulatorStore } from "@/lib/store"

// --- CONFIG ---
const COMPONENT_CONFIG = {
    solar: { label: "Solar", icon: Sun, color: "#eab308", text: "text-yellow-500", border: "border-yellow-500", bg: "bg-yellow-500/10" },
    battery: { label: "Batería", icon: BatteryCharging, color: "#10b981", text: "text-emerald-500", border: "border-emerald-500", bg: "bg-emerald-500/10" },
    aerotermia: { label: "Aerotermia", icon: Wind, color: "#3b82f6", text: "text-blue-500", border: "border-blue-500", bg: "bg-blue-500/10" },
    charger: { label: "Cargador", icon: PlugZap, color: "#a855f7", text: "text-purple-500", border: "border-purple-500", bg: "bg-purple-500/10" },
    domotica: { label: "Domótica", icon: BrainCircuit, color: "#84cc16", text: "text-lime-500", border: "border-lime-500", bg: "bg-lime-500/10" },
};

export function SystemVisualizer() {
    const { selectedServices } = useSimulatorStore()
    const hasDomotica = selectedServices.includes("domotica")

    // Identify active orbital items based on Store
    const activeStats = useMemo(() => {
        const list = [];
        if (selectedServices.includes("solar")) list.push({ id: 'solar', ...COMPONENT_CONFIG.solar });
        if (selectedServices.includes("battery")) list.push({ id: 'battery', ...COMPONENT_CONFIG.battery });
        if (selectedServices.includes("aerotermia")) list.push({ id: 'aerotermia', ...COMPONENT_CONFIG.aerotermia });
        if (selectedServices.includes("charger")) list.push({ id: 'charger', ...COMPONENT_CONFIG.charger });

        // Domotica becomes the CORE, so it's never a satellite.
        // if (selectedServices.includes("domotica")) list.push({ id: 'domotica', ...COMPONENT_CONFIG.domotica });

        return list;
    }, [selectedServices]);

    const count = activeStats.length;
    const radius = 115; // Reduced radius for tighter orbit
    const center = { x: 250, y: 250 }; // SVG Canvas 500x500

    return (
        <div className="relative w-full aspect-square max-w-[500px] bg-[#0b1d16]/40 backdrop-blur-sm rounded-full border border-white/5 flex items-center justify-center overflow-visible shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Center Glow - Always Green but varying intensity */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl transition-all duration-1000 bg-[#84cc16]",
                hasDomotica ? "opacity-20" : "opacity-10"
            )} />

            {/* SVG LAYER */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 500 500">
                <defs>
                    {/* Dynamic Gradients Definitions */}
                    {activeStats.map(item => (
                        <linearGradient key={`grad-${item.id}`} id={`grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={item.color} />
                            <stop offset="100%" stopColor="#84cc16" stopOpacity="0.5" />
                        </linearGradient>
                    ))}
                </defs>

                {activeStats.map((item, index) => {
                    const angleDeg = -90 + (index * (360 / count));
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const x = center.x + radius * Math.cos(angleRad);
                    const y = center.y + radius * Math.sin(angleRad);
                    const gradId = `flow-grad-${item.id}`;

                    return (
                        <g key={`con-${item.id}`}>
                            <defs>
                                <linearGradient id={gradId} x1={x} y1={y} x2={center.x} y2={center.y} gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor={item.color} stopOpacity="0">
                                        <animate attributeName="offset" values="-1; 1" dur="2.5s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="0.5" stopColor={item.color} stopOpacity="1">
                                        <animate attributeName="offset" values="-0.5; 1.5" dur="2.5s" repeatCount="indefinite" />
                                    </stop>
                                    <stop offset="1" stopColor={item.color} stopOpacity="0">
                                        <animate attributeName="offset" values="0; 2" dur="2.5s" repeatCount="indefinite" />
                                    </stop>
                                </linearGradient>
                            </defs>
                            {/* Static faint line - Very thin */}
                            <line x1={center.x} y1={center.y} x2={x} y2={y} stroke={item.color} strokeWidth="0.5" strokeOpacity="0.1" />
                            {/* Animated flow line - Thin and elegant */}
                            <line
                                x1={x} y1={y} x2={center.x} y2={center.y}
                                stroke={`url(#${gradId})`}
                                strokeWidth="1.5" strokeLinecap="round"
                            />
                        </g>
                    );
                })}
            </svg>

            {/* DOM NODES */}
            <div className="relative z-10 w-full h-full pointer-events-none">

                {/* CENTER HUB */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                        initial={{ scale: 0.8 }} animate={{ scale: hasDomotica ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={cn(
                            "w-24 h-24 rounded-full border flex flex-col items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md bg-[#0b1d16]",
                            hasDomotica
                                ? "border-white/10 shadow-[0_0_60px_rgba(132,204,22,0.2)]"
                                : "border-[#84cc16] shadow-[0_0_30px_rgba(132,204,22,0.15)]"
                        )}
                    >
                        <div className={cn("absolute inset-0 opacity-30 bg-gradient-to-br from-lime-500/20 to-transparent")} />

                        {hasDomotica ? (
                            <>
                                <BrainCircuit className="w-10 h-10 text-[#84cc16] mb-1 relative z-10" />
                                <span className="text-[10px] text-[#84cc16] font-black uppercase tracking-widest relative z-10">Loxone<br />Core</span>
                            </>
                        ) : (
                            <>
                                <Home className="w-10 h-10 text-[#84cc16] mb-1 relative z-10" />
                                <span className="text-[10px] text-[#84cc16] font-black uppercase tracking-widest relative z-10">Vivienda</span>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* SATELLITES (ZERO-POINT ANCHOR SYSTEM) */}
                <AnimatePresence>
                    {activeStats.map((item, index) => {
                        const angleDeg = -90 + (index * (360 / count));
                        const angleRad = (angleDeg * Math.PI) / 180;
                        const radiusPercent = 33; // Adjusted for new radius
                        const left = 50 + (radiusPercent * Math.cos(angleRad));
                        const top = 50 + (radiusPercent * Math.sin(angleRad));

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                // ZERO-POINT ANCHOR
                                className="absolute z-30"
                                style={{
                                    top: `${top}%`,
                                    left: `${left}%`,
                                    width: 0,
                                    height: 0,
                                }}
                            >
                                {/* THE ICON */}
                                <div
                                    className={cn(
                                        "absolute w-14 h-14 bg-[#0b1d16] border border-white/5 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden",
                                        item.text.replace('text-', 'shadow-').replace('500', '500/10')
                                    )}
                                    style={{
                                        top: 0,
                                        left: 0,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div className={cn("absolute inset-0 opacity-10", item.bg)} />
                                    <item.icon className={cn("w-7 h-7 relative z-10 opacity-90", item.text)} />
                                </div>

                                {/* THE LABEL */}
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "absolute px-2 py-0.5 rounded-full border bg-[#0b1d16]/90 backdrop-blur-md shadow-lg",
                                        "text-[9px] font-bold uppercase tracking-wider whitespace-nowrap",
                                        item.text, "border-white/5"
                                    )}
                                    style={{
                                        top: '34px',
                                        left: 0,
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    {item.label}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    )
} 
