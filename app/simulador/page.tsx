"use client"

import { useState } from "react"
import { useSimulatorStore, ServiceType } from "@/lib/store"
import { ServiceSelector } from "@/components/simulator/service-selector"
import { SystemVisualizer } from "@/components/simulator/system-visualizer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Sun, BatteryCharging, Wind, PlugZap, BrainCircuit,
    ArrowRight, ArrowLeft, Home, Building2, Factory, CheckCircle2,
    Zap, ShieldCheck
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const SERVICES: { id: ServiceType; label: string; icon: any; desc: string }[] = [
    { id: "solar", label: "Solar", icon: Sun, desc: "Generación Fotovoltaica" },
    { id: "battery", label: "Baterías", icon: BatteryCharging, desc: "Almacenamiento Inteligente" },
    { id: "aerotermia", label: "Aerotermia", icon: Wind, desc: "Clima Invisible" },
    { id: "charger", label: "Cargador", icon: PlugZap, desc: "Movilidad Eléctrica" },
    { id: "domotica", label: "Domótica", icon: BrainCircuit, desc: "Control Total" },
]

export default function SimulatorPage() {
    const {
        selectedServices, toggleService,
        consumption, setConsumption,
        buildingType, setBuildingType
    } = useSimulatorStore()

    const [step, setStep] = useState(1)

    const nextStep = () => setStep(s => Math.min(3, s + 1))
    const prevStep = () => setStep(s => Math.max(1, s - 1))

    // --- REFERENCE CALCULATION LOGIC ---
    const activeCount = selectedServices.length;
    let baseSavingsPercent = 0;
    // Map store selection to reference logic
    if (selectedServices.includes("solar")) baseSavingsPercent += 0.50;
    if (selectedServices.includes("battery")) baseSavingsPercent += 0.25;
    if (selectedServices.includes("aerotermia")) baseSavingsPercent += 0.15;
    if (selectedServices.includes("charger")) baseSavingsPercent += 0.05;
    if (selectedServices.includes("domotica") && activeCount > 1) baseSavingsPercent *= 1.1;
    if (buildingType === "industrial" && selectedServices.includes("solar")) baseSavingsPercent += 0.05;

    const savingsPercent = Math.min(0.98, baseSavingsPercent);
    const finalBill = Math.max(0, consumption * (1 - savingsPercent));
    const annualSavings = (consumption - finalBill) * 12;
    const independence = Math.round(savingsPercent * 100);

    // --- HARDWARE LIST LOGIC ---
    const getHardwareList = () => {
        const list = [];
        if (selectedServices.includes("solar")) {
            list.push("12x Paneles Solares Tier-1 550Wp (Total 6.6kWp)");
            list.push("Inversor Híbrido HUAWEI SUN2000 (Gestión Inteligente)");
        }
        if (selectedServices.includes("battery")) list.push("Batería LFP Alto Voltaje LUNA2000 10kWh (100% Descarga)");
        if (selectedServices.includes("aerotermia")) list.push("Aerotermia Daikin Altherma 3 (Clima + ACS)");
        if (selectedServices.includes("charger")) list.push("Cargador V.E. Trydan (Balanceo con Fotovoltaica)");
        if (selectedServices.includes("domotica")) list.push("Loxone Miniserver Gen2 (Gestión Energética Automatizada)");

        // GLOBAL (Always)
        list.push("Instalación Certificada, Legalización y Puesta en Marcha");
        return list;
    };
    const hardwareList = getHardwareList();

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">

            {/* TACTICAL GRID BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px] dark:hidden" />
                <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* HEADER WIZARD INDICATION */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 flex justify-between items-center bg-transparent">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={step > 1 ? prevStep : undefined} disabled={step === 1}>
                    {step > 1 ? <><ArrowLeft className="mr-2 w-4 h-4" /> Atrás</> : <span className="opacity-0">Atrás</span>}
                </Button>

                <div className="flex items-center gap-2">
                    {[1, 2, 3].map(s => (
                        <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s <= step ? 'w-8 bg-primary' : 'w-2 bg-[#1a4d3a]'}`} />
                    ))}
                </div>
            </div>

            <main className="flex-grow z-10 w-full max-w-7xl mx-auto px-4 pb-12 flex flex-col justify-center items-center">
                <AnimatePresence mode="wait">

                    {/* STEP 1: DESIGN ECOSYSTEM */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12 max-w-6xl mx-auto w-full text-center"
                        >
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight">Diseña tu Ecosistema</h1>
                                <p className="text-xl text-muted-foreground">Selecciona los elementos de tu instalación</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {SERVICES.map((service) => (
                                    <ServiceSelector
                                        key={service.id}
                                        id={service.id}
                                        icon={service.icon}
                                        title={service.label}
                                        description={service.desc}
                                        selected={selectedServices.includes(service.id)}
                                        onClick={() => toggleService(service.id)}
                                    />
                                ))}
                            </div>

                            <motion.div
                                className="fixed bottom-8 right-8 z-50 md:static md:mt-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: selectedServices.length > 0 ? 1 : 0.5 }}
                            >
                                <Button
                                    size="lg"
                                    className="rounded-full px-12 h-16 text-xl shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:scale-105 transition-transform"
                                    onClick={nextStep}
                                    disabled={selectedServices.length === 0}
                                >
                                    Siguiente paso <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* STEP 2: DATA INPUT */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="w-full max-w-2xl"
                        >
                            <Card className="p-10 md:p-14 border-[#1a4d3a] bg-[#162e20]/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                                <div className="relative z-10 space-y-12">
                                    {/* Prop Type */}
                                    <div className="space-y-6 text-center">
                                        <h3 className="text-2xl font-bold text-foreground">¿Qué tipo de propiedad tienes?</h3>
                                        <div className="grid grid-cols-3 gap-6">
                                            {[
                                                { id: 'house', label: "Casa", icon: Home },
                                                { id: 'flat', label: "Piso", icon: Building2 },
                                                { id: 'industrial', label: "Nave", icon: Factory },
                                            ].map((type) => (
                                                <button
                                                    key={type.id}
                                                    onClick={() => setBuildingType(type.id as any)}
                                                    className={`group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 aspect-square ${buildingType === type.id
                                                        ? "border-primary bg-primary/10 text-primary shadow-lg"
                                                        : "border-[#1a4d3a] hover:border-primary/50 text-muted-foreground hover:bg-[#0b1d16]"
                                                        }`}
                                                >
                                                    <type.icon className={`w-10 h-10 transition-transform ${buildingType === type.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                                                    <span className="font-bold text-lg">{type.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Slider */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end px-2">
                                            <span className="font-bold text-muted-foreground uppercase text-xs tracking-widest">Gasto Mensual</span>
                                            <div className="text-4xl font-black text-foreground">{consumption} €</div>
                                        </div>
                                        <input
                                            type="range"
                                            min={buildingType === "industrial" ? "200" : "50"}
                                            max={buildingType === "industrial" ? "3000" : "600"}
                                            step="10"
                                            value={consumption}
                                            onChange={(e) => setConsumption(Number(e.target.value))}
                                            className="w-full h-4 bg-[#0b1d16] rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
                                        />
                                        <div className="flex justify-between text-muted-foreground font-mono text-xs px-1">
                                            <span>{buildingType === "industrial" ? "200" : "50"}€</span>
                                            <span>{buildingType === "industrial" ? "3000" : "600"}€+</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        size="lg"
                                        className="w-full h-16 text-xl font-bold rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:scale-[1.02] transition-transform uppercase tracking-wide"
                                        onClick={nextStep}
                                    >
                                        DESCUBRIR MI POTENCIAL
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    )}

                    {/* STEP 3: RESULTS (STRICT CLONE OF REFERENCE) */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                        >
                            {/* LEFT: VISUALIZER (7/12) */}
                            <div className="lg:col-span-7 flex flex-col items-center justify-center order-2 lg:order-1 scale-110 lg:scale-[1.3] origin-center">
                                <SystemVisualizer />
                            </div>

                            {/* RIGHT: DATA (5/12) */}
                            <div className="lg:col-span-5 flex flex-col gap-5 order-1 lg:order-2">
                                <h2 className="text-4xl font-bold text-center lg:text-left text-white leading-tight">
                                    Tu Ecosistema <br /> <span className="text-primary">Optimizado.</span>
                                </h2>

                                {/* A. MAIN SAVINGS CARD */}
                                <Card className="p-6 md:p-8 border-[#1a4d3a] bg-gradient-to-br from-[#162e20]/80 to-[#0b1d16]/80 backdrop-blur-md shadow-2xl relative overflow-hidden">
                                    <div className="relative z-10 text-center lg:text-left">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Ahorro Anual Estimado</p>
                                        <div className="text-6xl lg:text-7xl font-black text-white tracking-tighter mb-2">
                                            {Math.round(annualSavings).toLocaleString()}€
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-primary/90 font-bold text-xs uppercase tracking-wider">
                                            <CheckCircle2 className="w-3 h-3" /> ROI estimado 4.5 años
                                        </div>
                                    </div>
                                </Card>

                                {/* B. KPI GRID (Wide Buttons) */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="px-4 py-3 rounded-xl border border-[#1a4d3a] bg-transparent flex flex-col items-center lg:items-start justify-center gap-1 hover:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                            <Zap className="w-3 h-3 text-yellow-500" /> Autonomía
                                        </div>
                                        <div className="text-2xl font-bold text-white leading-none">{independence}%</div>
                                    </div>
                                    <div className="px-4 py-3 rounded-xl border border-[#1a4d3a] bg-transparent flex flex-col items-center lg:items-start justify-center gap-1 hover:bg-white/5 transition-colors">
                                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                            <ShieldCheck className="w-3 h-3 text-primary" /> Garantía
                                        </div>
                                        <div className="text-2xl font-bold text-white leading-none">25 Años</div>
                                    </div>
                                </div>

                                {/* D. INCLUDES LIST (Now ABOVE Button) */}
                                <ul className="mt-2 space-y-1.5 pl-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Tu instalación incluye:</p>
                                    {hardwareList.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <CheckCircle2 className="w-3 h-3 text-primary/60 flex-shrink-0" />
                                            <span className="capitalize">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* C. PRIMARY ACTION (Solid Green, "SOLICITAR ESTUDIO") */}
                                <Button
                                    size="lg"
                                    className="w-full h-14 text-sm font-bold uppercase tracking-widest mt-2 rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:scale-[1.02] transition-transform"
                                >
                                    Solicitar Estudio Técnico
                                </Button>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </main>
        </div>
    )
}
