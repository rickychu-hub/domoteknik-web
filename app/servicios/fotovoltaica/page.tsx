"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Battery, ShieldCheck, Layers, Smartphone, Sun, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FotovoltaicaPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Hero Section: Financial Angle (Kept as requested, but maybe tweaked slightly contextually if needed, keeping mostly same for now) */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-500/5 to-transparent pointer-events-none" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>Smart Investment</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Convierte tu tejado en un <span className="text-lime-500">Activo Financiero</span>.
                        </h1>
                        <p className="text-xl text-slate-400">
                            Deja de alquilar tu energía. Pasa a ser propietario de tu producción.
                            <br />
                            <strong>ROI superior al 15% anual</strong>, libre de impuestos.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/simulador"
                                className="inline-flex items-center rounded-full bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 hover:scale-105"
                            >
                                Calcular Retorno <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Interactive Chart Component (Kept) */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative shadow-2xl">
                        <div className="absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-400">
                            Proyección 2025-2030
                        </div>
                        <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
                            <BarChart3 className="text-lime-500" /> Tu Independencia
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Luz de la Red (Cara e Inestable)</span>
                                    <span className="text-red-400">+8% anual</span>
                                </div>
                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-red-500/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span className="text-white font-medium">Tu Energía Solar (Gratis y Fija)</span>
                                    <span className="text-lime-400">Coste 0€</span>
                                </div>
                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-lime-500/20 animate-pulse"></div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="h-full bg-lime-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                            <div className="text-sm text-slate-500">Ahorro estimado (25 años)</div>
                            <div className="text-2xl font-bold text-white">45.000€+</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHYSICAL STORAGE SECTION */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    {/* Visual: Premium Battery Hardware */}
                    <div className="flex-1 order-2 md:order-1 flex justify-center">
                        <div className="relative group">
                            {/* Battery Chassis */}
                            <div className="w-64 h-96 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col items-center pt-8">
                                {/* Brand Logo Area */}
                                <div className="text-slate-500 font-bold tracking-[0.2em] text-xs mb-8">DOMOTEKNIK STORAGE</div>

                                {/* Active Energy Core */}
                                <div className="w-48 h-full bg-slate-900 rounded-t-xl border-t border-x border-slate-800 relative overflow-hidden flex flex-col justify-end gap-1 p-2">
                                    {/* Cells */}
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0.2 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: i * 0.2 }}
                                            className="h-8 w-full bg-lime-500/80 rounded-sm shadow-[0_0_10px_rgba(132,204,22,0.4)]"
                                        />
                                    ))}
                                </div>

                                {/* Status Light */}
                                <div className="absolute top-8 right-6 w-2 h-2 bg-lime-500 rounded-full animate-pulse shadow-[0_0_10px_#84cc16]"></div>
                            </div>

                            {/* Reflection/Floor */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-lime-500/20 blur-xl rounded-[100%]"></div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-8 order-1 md:order-2">
                        <h2 className="text-4xl font-bold text-white">
                            El Sol, <span className="text-lime-500">también por la noche.</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            No regales tu energía a la red. Almacénala en baterías de <strong>Litio LFP de última generación</strong> y usa tu propia energía cuando el sol se ponga.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Battery className="w-6 h-6 text-lime-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-white block">Autonomía Nocturna</strong>
                                    <span className="text-slate-400 text-sm">Cubre el 100% de tu consumo nocturno con energía solar almacenada.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <ShieldCheck className="w-6 h-6 text-lime-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-white block">Backup Seguro</strong>
                                    <span className="text-slate-400 text-sm">Tu casa sigue funcionando incluso si cae la red eléctrica de la calle.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Layers className="w-6 h-6 text-lime-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-white block">Diseño Modular</strong>
                                    <span className="text-slate-400 text-sm">Ampliable de 5kWh a 30kWh. Crece contigo.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SOFTWARE / OS SECTION */}
            <section className="py-24 px-4 border-t border-slate-900">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center space-x-2 text-lime-500 font-bold tracking-wider uppercase text-sm">
                            <Smartphone className="w-4 h-4" />
                            <span>Domoteknik OS</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white">
                            Tu energía, <br />
                            <span className="text-slate-500">en tu bolsillo.</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            El hardware es solo la mitad de la historia. Nuestro sistema operativo gestiona inteligentemente cada vatio para maximizar tu ahorro sin que tengas que hacer nada.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                                <div className="text-3xl font-bold text-white mb-1">0€</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Coste Mantenimiento</div>
                            </div>
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Monitorización</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-end">
                        {/* Phone Mockup with CSS Graph */}
                        <div className="relative w-72 h-[500px] bg-slate-950 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-800">
                            {/* Status Bar */}
                            <div className="absolute top-0 w-full h-8 px-6 flex justify-between items-center z-20">
                                <span className="text-[10px] text-white">12:00</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                                    <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="pt-12 px-6 pb-6 bg-slate-900/50 backdrop-blur-md">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium mb-1">PRODUCCIÓN HOY</div>
                                        <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                            24.5 <span className="text-sm text-lime-500 font-medium">kWh</span>
                                        </div>
                                    </div>
                                    <Sun className="text-yellow-500 w-8 h-8 opacity-80" />
                                </div>
                            </div>

                            {/* App Graph Area */}
                            <div className="mt-4 px-2 h-48 relative flex items-end justify-between gap-1">
                                {/* Fake Area Chart using CSS columns */}
                                {[30, 45, 60, 80, 95, 100, 90, 70, 50, 40, 30, 20].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col justify-end h-full gap-1 group">
                                        {/* Solar Production */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.05 }}
                                            className="w-full bg-yellow-500/20 rounded-t-sm relative group-hover:bg-yellow-500/40 transition-colors"
                                        >
                                            {/* Consumption Overlay */}
                                            <div style={{ height: `${h * 0.6}%` }} className="absolute bottom-0 w-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Energy Flow Visualization */}
                            <div className="mt-8 px-6">
                                <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-lime-500/10 rounded-full">
                                            <Battery className="w-5 h-5 text-lime-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Batería</div>
                                            <div className="text-xs text-slate-500">Cargando...</div>
                                        </div>
                                    </div>
                                    <span className="text-lime-500 font-bold">+1.2 kW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
