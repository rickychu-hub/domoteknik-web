"use client";

import Link from "next/link";
import { ArrowRight, Zap, Smartphone, Clock, Sun, Battery, Settings, Power } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CargadoresPage() {
    const [isSolarMode, setIsSolarMode] = useState(true);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                            <Zap className="w-4 h-4" />
                            <span>E-Mobility Ecosystem</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Llena el depósito por 0€ <br />
                            <span className="text-slate-500">con la fuerza del sol.</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            La carga más rápida y económica del mercado.
                            Integra tu vehículo en el ecosistema Domoteknik y olvídate de las gasolineras.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/simulador"
                                className="inline-flex items-center rounded-full bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 hover:scale-105"
                            >
                                Elegir Cargador <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* VISUAL 1: SPEED SELECTOR (RACE) */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative shadow-2xl space-y-8">
                        <h3 className="text-lg font-bold text-white mb-4">Tiempo de Carga (0-100%)</h3>

                        {/* Race Track 1: Domestic Plug */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-400">
                                <span>Enchufe Doméstico (2.3kW)</span>
                                <span>24h+</span>
                            </div>
                            <div className="h-4 bg-slate-950 rounded-full overflow-hidden w-full relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 8, ease: "linear" }} /* VERY SLOW */
                                    className="h-full bg-slate-700/50"
                                />
                            </div>
                        </div>

                        {/* Race Track 2: Domoteknik */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-white font-bold">
                                <span>Cargador Domoteknik (7.4kW)</span>
                                <span className="text-lime-500">4h 30m</span>
                            </div>
                            <div className="h-6 bg-slate-950 rounded-full overflow-hidden w-full relative border border-slate-800">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, ease: "circOut" }} /* FAST */
                                    className="h-full bg-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.6)] relative"
                                >
                                    <div className="absolute top-0 right-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/50 flex items-start gap-3">
                            <div className="p-2 bg-lime-500/10 rounded-full text-lime-500"><Zap className="w-4 h-4" /></div>
                            <p className="text-xs text-slate-400">
                                Instalamos Protecciones de Sobretensión para que cargues a máxima potencia sin riesgo de "saltar los plomos".
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Simulation "Solar Mode" SECTION */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative flex justify-center">

                        {/* VISUAL 2: CSS PHONE MOCKUP FOR APP */}
                        <div className="w-80 bg-slate-950 border-8 border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden relative ring-1 ring-slate-800">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

                            <div className="h-full bg-slate-900 p-6 flex flex-col pt-12">
                                {/* App Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="text-white font-bold text-lg">Smart Charge</div>
                                    <Settings className="w-5 h-5 text-slate-500" />
                                </div>

                                {/* Main Status Circle */}
                                <div className="flex justify-center mb-8 relative">
                                    <div className="w-48 h-48 rounded-full border-4 border-slate-800 flex flex-col items-center justify-center relative">
                                        {/* Animated Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className={cn(
                                                "absolute inset-0 rounded-full border-4 border-t-transparent border-l-transparent",
                                                isSolarMode ? "border-lime-500" : "border-blue-500"
                                            )}
                                        />

                                        <Zap className={cn("w-8 h-8 mb-2", isSolarMode ? "text-lime-500" : "text-blue-500")} />
                                        <div className="text-3xl font-bold text-white">7.4 <span className="text-sm text-slate-500">kW</span></div>
                                        <div className="text-xs text-slate-400 mt-1">{isSolarMode ? "EXCEDENTE SOLAR" : "RED ELÉCTRICA"}</div>
                                    </div>
                                </div>

                                {/* Control Panel */}
                                <div className="bg-slate-800 rounded-2xl p-6 space-y-6">
                                    {/* Toggle Switch */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Sun className={cn("w-5 h-5", isSolarMode ? "text-lime-500" : "text-slate-500")} />
                                            <div>
                                                <div className="text-sm font-bold text-white">Modo Solar Exclusivo</div>
                                                <div className="text-xs text-slate-400">Carga solo si hay sol</div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsSolarMode(!isSolarMode)}
                                            className={cn("w-12 h-7 rounded-full relative transition-colors duration-300", isSolarMode ? "bg-lime-500" : "bg-slate-600")}
                                        >
                                            <div className={cn("absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow", isSolarMode ? "left-6" : "left-1")}></div>
                                        </button>
                                    </div>

                                    {/* Info Card */}
                                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-slate-400">Coste sesión</span>
                                            <span className={cn("font-bold", isSolarMode ? "text-lime-400" : "text-white")}>
                                                {isSolarMode ? "0.00€" : "4.50€"}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-400">Coste por km</span>
                                            <span className={cn("font-bold", isSolarMode ? "text-lime-400" : "text-white")}>
                                                {isSolarMode ? "0.00€/km" : "0.02€/km"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Start Button */}
                                <div className="mt-auto pt-6">
                                    <button className="w-full py-4 bg-slate-800 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                                        <Power className="w-4 h-4" /> {isSolarMode ? "Pausar Carga" : "Cargando..."}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Prioriza el sol. <span className="text-lime-500">Carga gratis.</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Nuestro software detecta cuando tus paneles están produciendo más energía de la que consumes en casa.
                            <br /><br />
                            En ese momento, <strong>desvía automáticamente el excedente al coche</strong>. Sin que tengas que tocar nada.
                            Tú tienes el control total desde la App.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-slate-300 bg-slate-900 p-4 rounded-lg border border-slate-800">
                                <Smartphone className="text-lime-500 w-5 h-5" /> Control Remoto
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 bg-slate-900 p-4 rounded-lg border border-slate-800">
                                <Clock className="text-lime-500 w-5 h-5" /> Programación Horaria
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
