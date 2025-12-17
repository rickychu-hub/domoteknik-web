"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sun, BatteryCharging, Wind, PlugZap, ArrowRight, CheckCircle2,
    Home, BarChart3, BrainCircuit, Building, Factory,
    Leaf, PiggyBank, CircuitBoard, Wallet, ShieldCheck, RotateCw
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- TYPES & CONFIG ---
type SystemComponent = "solar" | "battery" | "aerotermia" | "charger" | "domotica";
type BuildingType = "house" | "flat" | "industrial";

interface SelectionState {
    solar: boolean;
    battery: boolean;
    aerotermia: boolean;
    charger: boolean;
    domotica: boolean;
}

const COMPONENT_CONFIG = {
    solar: { label: "Solar", icon: Sun, color: "#eab308", text: "text-yellow-500", border: "border-yellow-500", bg: "bg-yellow-500/10" },
    battery: { label: "Batería", icon: BatteryCharging, color: "#10b981", text: "text-emerald-500", border: "border-emerald-500", bg: "bg-emerald-500/10" },
    aerotermia: { label: "Aerotermia", icon: Wind, color: "#3b82f6", text: "text-blue-500", border: "border-blue-500", bg: "bg-blue-500/10" },
    charger: { label: "Cargador", icon: PlugZap, color: "#a855f7", text: "text-purple-500", border: "border-purple-500", bg: "bg-purple-500/10" },
    domotica: { label: "Domótica", icon: BrainCircuit, color: "#84cc16", text: "text-lime-500", border: "border-lime-500", bg: "bg-lime-500/10" },
};

// --- HELPER COMPONENT ---
const SelectionCard = ({
    id, icon: Icon, label, selected, onClick
}: {
    id: SystemComponent; icon: any; label: string; selected: boolean; onClick: () => void;
}) => (
    <div
        onClick={onClick}
        className={cn(
            "relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center gap-4 text-center group",
            selected
                ? "bg-lime-500/10 border-lime-500 shadow-[0_0_30px_rgba(132,204,22,0.15)] scale-105 z-10"
                : "bg-slate-900 border-slate-800 hover:border-slate-600 hover:bg-slate-800"
        )}
    >
        <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
            selected ? "bg-lime-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
        )}>
            <Icon className="w-8 h-8" />
        </div>
        <div className={cn("font-bold text-lg", selected ? "text-white" : "text-slate-400")}>
            {label}
        </div>
        {selected && (
            <div className="absolute top-3 right-3 text-lime-500">
                <CheckCircle2 className="w-6 h-6 fill-lime-500/20" />
            </div>
        )}
    </div>
);

// --- VISUALIZER 6.0 (Zero-Point Anchor System) ---
const SystemVisualizer = ({ selection }: { selection: SelectionState }) => {
    const hasDomotica = selection.domotica;

    // Identify active orbital items
    const activeStats = useMemo(() => {
        const list = [];
        if (selection.solar) list.push({ id: 'solar', ...COMPONENT_CONFIG.solar });
        if (selection.battery) list.push({ id: 'battery', ...COMPONENT_CONFIG.battery });
        if (selection.aerotermia) list.push({ id: 'aerotermia', ...COMPONENT_CONFIG.aerotermia });
        if (selection.charger) list.push({ id: 'charger', ...COMPONENT_CONFIG.charger });
        return list;
    }, [selection]);

    const count = activeStats.length;
    const radius = 190;
    const center = { x: 250, y: 250 }; // SVG Canvas 500x500

    return (
        <div className="relative w-full h-[500px] bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#334155_1px,_transparent_1px)] bg-[size:30px_30px] opacity-10" />

            {/* Center Glow */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20 transition-all duration-1000",
                hasDomotica ? "bg-lime-500" : "bg-blue-500"
            )} />

            {/* SVG LAYER */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 500 500">
                <defs>
                    {/* Gradients */}
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
                            <line x1={center.x} y1={center.y} x2={x} y2={y} stroke={item.color} strokeWidth="1" strokeOpacity="0.1" />
                            <line
                                x1={x} y1={y} x2={center.x} y2={center.y}
                                stroke={`url(#${gradId})`}
                                strokeWidth="2" strokeLinecap="round"
                            />
                        </g>
                    );
                })}
            </svg>

            {/* DOM NODES */}
            <div className="relative z-10 w-full h-full">

                {/* CENTER HUB */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                        initial={{ scale: 0.8 }} animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={cn(
                            "w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center shadow-2xl bg-slate-950",
                            hasDomotica
                                ? "border-lime-500 shadow-[0_0_50px_rgba(132,204,22,0.25)]"
                                : "border-slate-700 shadow-[0_0_30px_rgba(148,163,184,0.1)]"
                        )}
                    >
                        {hasDomotica ? (
                            <>
                                <BrainCircuit className="w-12 h-12 text-lime-500 mb-2" />
                                <span className="text-[10px] text-lime-400 font-bold uppercase tracking-widest">Loxone Core</span>
                            </>
                        ) : (
                            <>
                                <Home className="w-12 h-12 text-slate-300 mb-2" />
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Vivienda</span>
                            </>
                        )}
                    </motion.div>
                </div>

                {/* SATELLITES (ZERO-POINT ANCHOR) */}
                <AnimatePresence>
                    {activeStats.map((item, index) => {
                        const angleDeg = -90 + (index * (360 / count));
                        const angleRad = (angleDeg * Math.PI) / 180;
                        const radiusPercent = 38; // 190px / 500px * 100 = 38%
                        const left = 50 + (radiusPercent * Math.cos(angleRad));
                        const top = 50 + (radiusPercent * Math.sin(angleRad));

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                // 1. ZERO-POINT ANCHOR (Width/Height 0)
                                className="absolute z-30"
                                style={{
                                    top: `${top}%`,
                                    left: `${left}%`,
                                    width: 0,
                                    height: 0,
                                    // NO transform on the anchor itself to avoid confusion
                                }}
                            >
                                {/* 2. THE ICON (Centered on Zero Point) */}
                                <div
                                    className={cn(
                                        "absolute w-20 h-20 bg-slate-900 border-2 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden",
                                        item.border,
                                        item.text.replace('text-', 'shadow-').replace('500', '500/20')
                                    )}
                                    style={{
                                        top: 0,
                                        left: 0,
                                        transform: 'translate(-50%, -50%)' // Perfect centering
                                    }}
                                >
                                    <div className={cn("absolute inset-0 opacity-20", item.bg)} />
                                    <item.icon className={cn("w-9 h-9 relative z-10", item.text)} />
                                </div>

                                {/* 3. THE LABEL (Floating independent below) */}
                                <span
                                    className={cn(
                                        "absolute px-3 py-1 rounded-full border bg-slate-950 backdrop-blur-md shadow-lg",
                                        "text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                                        item.text, item.border
                                    )}
                                    style={{
                                        top: '50px', // Below the icon (20px/2 + padding)
                                        left: 0,
                                        transform: 'translateX(-50%)' // Center horizontally relative to zero point
                                    }}
                                >
                                    {item.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
};


// --- MAIN PAGE ---

export default function SimulatorPage() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);

    // STATE
    const [selection, setSelection] = useState<SelectionState>({
        solar: false, battery: false, aerotermia: false, charger: false, domotica: false
    });
    const [buildingType, setBuildingType] = useState<BuildingType>("house");
    const [monthlyBill, setMonthlyBill] = useState(150);

    useEffect(() => {
        const mode = searchParams.get("mode");
        if (mode === "calefaccion") setSelection(s => ({ ...s, aerotermia: true }));
        if (mode === "solar") setSelection(s => ({ ...s, solar: true }));
        if (mode === "cargador") setSelection(s => ({ ...s, charger: true }));
        if (mode === "domotica") setSelection(s => ({ ...s, domotica: true }));
        if (mode === "combo") setSelection({ solar: true, battery: true, aerotermia: true, charger: true, domotica: true });
    }, [searchParams]);

    const toggle = (key: keyof SelectionState) => setSelection(prev => ({ ...prev, [key]: !prev[key] }));

    const handleBuildingChange = (type: BuildingType) => {
        setBuildingType(type);
        if (type === "industrial" && monthlyBill < 500) setMonthlyBill(800);
        else if (type !== "industrial" && monthlyBill > 600) setMonthlyBill(150);
    };

    // --- LOGIC ---
    const activeCount = Object.values(selection).filter(Boolean).length;
    let baseSavingsPercent = 0;
    if (selection.solar) baseSavingsPercent += 0.50;
    if (selection.battery) baseSavingsPercent += 0.25;
    if (selection.aerotermia) baseSavingsPercent += 0.15;
    if (selection.charger) baseSavingsPercent += 0.05;
    if (selection.domotica && activeCount > 1) baseSavingsPercent *= 1.1;
    if (buildingType === "industrial" && selection.solar) baseSavingsPercent += 0.05;

    const savingsPercent = Math.min(0.98, baseSavingsPercent);
    const finalBill = Math.max(0, monthlyBill * (1 - savingsPercent));
    const annualSavings = (monthlyBill - finalBill) * 12;
    const projectedSavings25Y = annualSavings * 25;
    const independence = Math.round(savingsPercent * 100);

    // Lifestyle Translations
    const lifestyleInsights = [];
    if (selection.charger) lifestyleInsights.push({ icon: PlugZap, text: "15.000 km/año Gratis", color: "text-purple-400" });
    if (selection.aerotermia) lifestyleInsights.push({ icon: Wind, text: "Climatización sin Gas", color: "text-blue-400" });
    if (selection.battery) lifestyleInsights.push({ icon: BatteryCharging, text: "Energía nocturna 0€", color: "text-emerald-400" });
    if (selection.solar && lifestyleInsights.length < 2) lifestyleInsights.push({ icon: Leaf, text: "Tonelas de CO2 evitadas", color: "text-green-400" });
    if (lifestyleInsights.length < 2) lifestyleInsights.push({ icon: PiggyBank, text: "Revalorización Vivienda", color: "text-yellow-400" });

    // Premium Hardware
    const hardwareList = [];
    if (activeCount > 0) hardwareList.push("Smart Meter & Protecciones DC/AC Grado Industrial");
    if (selection.solar) {
        hardwareList.push("12x Paneles AIKO N-Type 610Wp (Full Black)");
        hardwareList.push("Inversor Híbrido 6kW (Gestión de Sombras)");
    }
    if (selection.battery) hardwareList.push("Batería LFP Alto Voltaje 10kWh (6000 Ciclos)");
    if (selection.aerotermia) hardwareList.push("Aerotermia Daikin/Vaillant Monobloc (Gas R290)");
    if (selection.charger) hardwareList.push("Cargador Inteligente (Balanceo Dinámico)");
    if (selection.domotica) hardwareList.push("Loxone Miniserver Gen2 (Gestión Energética)");

    // Financing
    const estimatedQuota = Math.round(monthlyBill * 0.60);
    const monthlyGain = monthlyBill - estimatedQuota;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            <header className="py-8 px-4 border-b border-slate-900 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                        <div className="text-2xl font-bold tracking-tight text-white">DOMOTEKNIK</div>
                        <span className="text-xs font-bold text-lime-500 tracking-widest uppercase bg-lime-500/10 px-2 py-0.5 rounded">Configurador</span>
                    </div>
                    <div className="text-sm text-slate-500">
                        Paso <span className="text-lime-500 font-bold">{step}</span> / 3
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-4">

                {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Diseña tu Ecosistema</h1>
                            <p className="text-xl text-slate-400">Selecciona los componentes para ver el impacto combinado.</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                            <SelectionCard id="solar" label="Solar" icon={Sun} selected={selection.solar} onClick={() => toggle("solar")} />
                            <SelectionCard id="battery" label="Batería" icon={BatteryCharging} selected={selection.battery} onClick={() => toggle("battery")} />
                            <SelectionCard id="aerotermia" label="Aerotermia" icon={Wind} selected={selection.aerotermia} onClick={() => toggle("aerotermia")} />
                            <SelectionCard id="charger" label="Cargador" icon={PlugZap} selected={selection.charger} onClick={() => toggle("charger")} />
                            <SelectionCard id="domotica" label="Domótica" icon={BrainCircuit} selected={selection.domotica} onClick={() => toggle("domotica")} />
                        </div>
                        <div className="flex justify-center pt-8">
                            <button onClick={() => setStep(2)} disabled={activeCount === 0} className={cn("px-12 py-5 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-xl", activeCount > 0 ? "bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 shadow-lime-500/20" : "bg-slate-800 text-slate-500 cursor-not-allowed")}>
                                Siguiente Paso <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl mx-auto space-y-8">
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-10">
                            <div className="space-y-4">
                                <label className="font-bold text-slate-200 block text-center md:text-left">Tipo de Propiedad</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {[{ id: "house", label: "Casa", icon: Home }, { id: "flat", label: "Piso", icon: Building }, { id: "industrial", label: "Nave", icon: Factory }].map((opt) => (
                                        <button key={opt.id} onClick={() => handleBuildingChange(opt.id as BuildingType)} className={cn("p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all", buildingType === opt.id ? "border-lime-500 bg-lime-500/10 text-lime-400 font-bold" : "border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-600")}>
                                            <opt.icon className="w-6 h-6" />
                                            <span className="text-sm">{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="font-bold text-slate-200">Gasto Mensual</label>
                                    <span className="text-3xl font-bold text-lime-500">{monthlyBill} €</span>
                                </div>
                                <div className="relative w-full">
                                    <div className="flex justify-between text-xs text-slate-500 mb-2 font-mono"><span>{buildingType === "industrial" ? "200" : "50"}€</span><span>{buildingType === "industrial" ? "3000" : "600"}€+</span></div>
                                    <input type="range" min={buildingType === "industrial" ? "200" : "50"} max={buildingType === "industrial" ? "3000" : "600"} step="10" value={monthlyBill} onChange={(e) => setMonthlyBill(Number(e.target.value))} className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                                <button onClick={() => setStep(1)} className="py-4 text-slate-400 hover:text-white font-bold transition-colors">Atrás</button>
                                <button onClick={() => setStep(3)} className="bg-lime-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/20">Calcular Ahora</button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center justify-between px-2">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <Leaf className="w-6 h-6 text-lime-400" /> Tu Ecosistema Eficiente
                                </h3>
                                <button onClick={() => setStep(1)} className="text-sm font-bold text-slate-400 hover:text-white underline">Editar</button>
                            </div>
                            <SystemVisualizer selection={selection} />
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                                    <CircuitBoard className="w-4 h-4 text-lime-500" /> Tu Instalación Incluye
                                </h4>
                                <ul className="grid grid-cols-1 text-sm text-slate-400 gap-2">
                                    {hardwareList.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-lime-500/50 flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                    {hardwareList.length === 0 && <li>Selecciona componentes para ver el hardware.</li>}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-6 flex flex-col">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2"><BarChart3 className="w-6 h-6 text-lime-500" /> Resultados</h3>

                            <div className="flex-grow bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-lime-500/5 to-transparent pointer-events-none" />

                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Ahorro Anual Estimado</div>
                                    <div className="text-5xl lg:text-6xl font-black text-white tracking-tight flex items-baseline gap-2">
                                        {Math.round(annualSavings).toLocaleString()}€
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                                        <div className="bg-lime-500 h-full" style={{ width: `${independence}%` }} />
                                    </div>
                                    <div className="text-right text-xs font-bold text-lime-500 mt-1">{independence}% Independencia</div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {lifestyleInsights.slice(0, 2).map((insight, idx) => (
                                        <div key={idx} className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 flex flex-col gap-2">
                                            <insight.icon className={cn("w-5 h-5", insight.color)} />
                                            <span className="text-xs font-bold text-slate-300 leading-tight">{insight.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-900 border border-lime-500/30 rounded-2xl p-5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 bg-lime-500/10 rounded-bl-xl border-l border-b border-lime-500/20">
                                        <ShieldCheck className="w-4 h-4 text-lime-500" />
                                    </div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Financiación Inteligente</p>
                                    <h4 className="text-sm font-bold text-white mb-4">Sustitución de Costes</h4>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Antes (Gasto):</span>
                                            <span className="text-slate-400 line-through decoration-red-500 decoration-2">{monthlyBill}€/mes</span>
                                        </div>
                                        <div className="flex justify-between text-sm items-center">
                                            <span className="text-slate-300">Ahora (Inversión):</span>
                                            <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">{estimatedQuota}€/mes</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-800 text-center">
                                        <div className="text-lime-500 text-sm font-bold uppercase tracking-wide">
                                            Ganas +{monthlyGain}€/mes
                                        </div>
                                        <div className="text-[10px] text-slate-500">Cashflow positivo desde el Día 1</div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4">
                                    <button className="w-full py-5 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-slate-200 transition-all shadow-xl hover:scale-[1.02] relative z-10">
                                        Solicitar Estudio Técnico
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
