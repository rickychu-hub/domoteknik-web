"use client";

import Link from "next/link";
import { ArrowRight, Zap, Smartphone, Clock, Sun, Battery, Settings, Power, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CargadoresPage() {
    const [isSolarMode, setIsSolarMode] = useState(true);

    return (
        <div className="relative min-h-screen pt-20 pb-12 px-4 selection:bg-primary/30">

            {/* 1. HERO SECTION (MASTER TEMPLATE) */}
            <section className="relative max-w-5xl mx-auto text-center space-y-8 pt-12 md:pt-20 pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Componente 4/4 del Ecosistema
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                    Carga Dinámica <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-primary">V.E.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                    Tu coche se alimenta del sol. Llena el depósito por 0€. <br className="hidden md:block" />
                    La carga más rápida y económica del mercado, integrada en el ecosistema.
                </p>
            </section>

            {/* 2. VISUAL 1: SPEED SELECTOR (PRESERVED & SKINNED) */}
            <section className="max-w-6xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Velocidad sin <br /> <span className="text-primary">Compromisos.</span>
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-muted-foreground text-lg">
                                <div className="w-2 h-2 rounded-full bg-primary"></div> Potencia de carga hasta 22kW.
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-lg">
                                <div className="w-2 h-2 rounded-full bg-primary"></div> Modos: Solar Puro, Híbrido y Boost.
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-lg">
                                <div className="w-2 h-2 rounded-full bg-primary"></div> Balanceo de carga para no saltar plomos.
                            </li>
                        </ul>
                    </div>

                    {/* MOCKUP CONTAINER */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative shadow-2xl space-y-8 backdrop-blur-md">
                        <h3 className="text-lg font-bold text-white mb-4">Tiempo de Carga (0-100%)</h3>

                        {/* Race Track 1: Domestic Plug */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Enchufe Doméstico (2.3kW)</span>
                                <span>24h+</span>
                            </div>
                            <div className="h-4 bg-black/40 rounded-full overflow-hidden w-full relative border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 8, ease: "linear" }}
                                    className="h-full bg-slate-700/50"
                                />
                            </div>
                        </div>

                        {/* Race Track 2: Domoteknik */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-white font-bold">
                                <span>Cargador Domoteknik (7.4kW)</span>
                                <span className="text-primary">4h 30m</span>
                            </div>
                            <div className="h-6 bg-black/40 rounded-full overflow-hidden w-full relative border border-white/10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="h-full bg-primary shadow-[0_0_20px_rgba(132,204,22,0.6)] relative"
                                >
                                    <div className="absolute top-0 right-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                            <div className="p-2 bg-primary/20 rounded-full text-primary"><Zap className="w-4 h-4" /></div>
                            <p className="text-xs text-muted-foreground">
                                Incluimos Protecciones de Sobretensión para que cargues a máxima potencia sin riesgo.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. VISUAL 2: APP SIMULATION (PRESERVED & SKINNED) */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/5 backdrop-blur-sm mb-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* PHONE SIMULATOR */}
                    <div className="order-2 md:order-1 relative flex justify-center scale-90 md:scale-100">
                        <div className="w-80 bg-[#0b1d16] border-8 border-[#162e20] rounded-[3.5rem] shadow-2xl overflow-hidden relative ring-1 ring-white/10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#162e20] rounded-b-xl z-20"></div>

                            <div className="h-full bg-[#0b1d16] p-6 flex flex-col pt-12">
                                {/* App Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="text-white font-bold text-lg">Smart Charge</div>
                                    <Settings className="w-5 h-5 text-slate-500" />
                                </div>

                                {/* Main Status Circle */}
                                <div className="flex justify-center mb-8 relative">
                                    <div className="w-48 h-48 rounded-full border-4 border-[#162e20] flex flex-col items-center justify-center relative bg-[#162e20]/30">
                                        {/* Animated Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className={cn(
                                                "absolute inset-0 rounded-full border-4 border-t-transparent border-l-transparent",
                                                isSolarMode ? "border-primary" : "border-blue-500"
                                            )}
                                        />

                                        <Zap className={cn("w-8 h-8 mb-2", isSolarMode ? "text-primary" : "text-blue-500")} />
                                        <div className="text-3xl font-bold text-white">7.4 <span className="text-sm text-slate-500">kW</span></div>
                                        <div className="text-xs text-slate-400 mt-1">{isSolarMode ? "EXCEDENTE SOLAR" : "RED ELÉCTRICA"}</div>
                                    </div>
                                </div>

                                {/* Control Panel */}
                                <div className="bg-[#162e20]/50 rounded-2xl p-6 space-y-6 border border-white/5">
                                    {/* Toggle Switch */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Sun className={cn("w-5 h-5", isSolarMode ? "text-primary" : "text-slate-500")} />
                                            <div>
                                                <div className="text-sm font-bold text-white">Modo Solar Exclusivo</div>
                                                <div className="text-xs text-slate-400">Carga solo si hay sol</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsSolarMode(!isSolarMode)}
                                            className={cn("w-12 h-7 rounded-full relative transition-colors duration-300", isSolarMode ? "bg-primary" : "bg-slate-600")}
                                        >
                                            <div className={cn("absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow", isSolarMode ? "left-6" : "left-1")}></div>
                                        </button>
                                    </div>

                                    {/* Info Card */}
                                    <div className="bg-[#0b1d16]/50 rounded-xl p-4 border border-white/5">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-slate-400">Coste sesión</span>
                                            <span className={cn("font-bold", isSolarMode ? "text-primary" : "text-white")}>
                                                {isSolarMode ? "0.00€" : "4.50€"}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-400">Coste por km</span>
                                            <span className={cn("font-bold", isSolarMode ? "text-primary" : "text-white")}>
                                                {isSolarMode ? "0.00€/km" : "0.02€/km"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Start Button */}
                                <div className="mt-auto pt-6">
                                    <button className="w-full py-4 bg-[#162e20] rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-[#1e3a31] transition-colors border border-white/5">
                                        <Power className="w-4 h-4" /> {isSolarMode ? "Pausar Carga" : "Cargando..."}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Prioriza el sol. <span className="text-primary">Carga gratis.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nuestro software detecta cuando tus paneles están produciendo más energía de la que consumes en casa.
                            <br /><br />
                            En ese momento, <strong>desvía automáticamente el excedente al coche</strong>. Sin que tengas que tocar nada.
                            Tú tienes el control total desde la App.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10">
                                <Smartphone className="text-primary w-5 h-5" /> Control Remoto
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10">
                                <Clock className="text-primary w-5 h-5" /> Programación Horaria
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="max-w-3xl mx-auto text-center space-y-8 pb-12">
                <ArrowDown className="w-8 h-8 text-primary mx-auto animate-bounce" />
                <h2 className="text-3xl font-bold text-white">¿Cuál es tu modelo de coche?</h2>

                <Button asChild size="lg" className="h-16 px-12 rounded-full bg-[#84cc16] hover:bg-[#84cc16]/90 text-[#0b1d16] font-bold tracking-wide uppercase shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105 transition-all text-lg">
                    <Link href="/simulador?mode=cargador" className="flex items-center gap-3">
                        SIMULAR CARGADOR <ArrowRight className="w-5 h-5" />
                    </Link>
                </Button>
            </section>

        </div>
    );
}
