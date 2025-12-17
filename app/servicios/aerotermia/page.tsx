"use client";

import Link from "next/link";
import { ArrowRight, Volume2, VolumeX, Thermometer, Wind, Zap, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AerotermiaPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-wider uppercase text-sm">
                            <Wind className="w-4 h-4" />
                            <span>La Actualización Invisible</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Calefacción potente. <br />
                            <span className="text-slate-500">Más silenciosa que una biblioteca.</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            La tecnología de bomba de calor moderna no solo elimina el gas: elimina el ruido.
                            Confort térmico absoluto, sin que notes que está encendida.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/simulador?mode=calefaccion"
                                className="inline-flex items-center rounded-full bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 hover:scale-105"
                            >
                                Calcular Ahorro en Calefacción <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* ADVANCED NOISE VISUALIZER */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-center min-h-[500px] shadow-2xl">
                        <div className="absolute top-6 left-8 flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-slate-500 uppercase">Modo Análisis Acústico</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-12 text-center flex items-center justify-center gap-2 mt-8">
                            <VolumeX className="text-lime-500" /> Comparador de Silencio
                        </h3>

                        <div className="relative flex justify-around items-end h-80 gap-4 px-4 pt-10">

                            {/* 50dB Threshold Line */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-slate-700 pointer-events-none flex items-center">
                                <span className="bg-slate-900 px-2 text-[10px] text-slate-500 uppercase ml-2 translate-y-[-10px]">Umbral Confort (50dB)</span>
                            </div>

                            {/* GRAPH 1: GAS BOILER (Chaotic) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group">
                                {/* Chaotic Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {[80, 40, 90, 30, 70, 50, 95, 20].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h}%`, `${Math.random() * 100}%`, `${h}%`] }}
                                            transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                            className="w-1.5 bg-slate-500 rounded-full"
                                        />
                                    ))}
                                </div>

                                {/* Bar */}
                                <div className="w-full bg-slate-800 rounded-t-lg relative overflow-hidden h-[75%] flex items-end">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">60dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full bg-slate-700/50 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-slate-500 uppercase font-bold text-center">Caldera Gas</div>
                            </div>

                            {/* GRAPH 2: LIBRARY (Flat) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group">
                                {/* Flat Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {[20, 25, 20, 15, 20, 25, 20, 15].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                            className="w-1.5 bg-blue-400/50 rounded-full"
                                        />
                                    ))}
                                </div>

                                {/* Bar */}
                                <div className="w-full bg-slate-800 rounded-t-lg relative overflow-hidden h-[40%] flex items-end">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">40dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="w-full bg-blue-500/10 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-slate-500 uppercase font-bold text-center">Biblioteca</div>
                            </div>

                            {/* GRAPH 3: DOMOTEKNIK (Harmonic) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group">
                                {/* Harmonic Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2">
                                    {[30, 50, 70, 90, 70, 50, 30, 20].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h}%`, `${h * 0.8}%`, `${h}%`] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                            className="w-1.5 bg-lime-500 rounded-full shadow-[0_0_10px_#84cc16]"
                                        />
                                    ))}
                                </div>

                                {/* Bar */}
                                <div className="w-full bg-slate-800/50 rounded-t-lg relative overflow-hidden h-[48%] flex items-end border-t-2 border-lime-500 shadow-[0_0_30px_rgba(132,204,22,0.15)]">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-lg font-bold text-lime-500">45dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="w-full bg-gradient-to-t from-lime-500/20 to-lime-500/5 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-lime-500 uppercase font-bold text-center flex items-center gap-1">
                                    Domoteknik <Zap className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Efficiency Section (CSS GRAPHIC 2: ENERGY FLOW DIAGRAM - PIXEL PERFECT POLISH) */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-6xl mx-auto space-y-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-white">Multiplica tu dinero <span className="text-lime-500">x4</span></h2>
                            <p className="text-slate-400 text-lg">
                                La aerotermia juega con la física. Por cada kilovatio de electricidad que compras, la máquina "bombea" otros 3 o 4 kilovatios de calor gratuito desde el aire exterior.
                            </p>
                            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 inline-block">
                                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Resultado COP</span>
                                <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                    400% <span className="text-lime-500 text-sm">Eficiencia</span>
                                </div>
                            </div>
                        </div>

                        {/* FINAL CSS GRAPHIC: THE ENERGY PIPE (PIXEL PERFECT) */}
                        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative min-h-[350px] flex items-center justify-center overflow-hidden">

                            {/* MAIN WRAPPER: Width max-3xl, centered */}
                            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto h-40 flex items-center justify-between">

                                {/* 0. THE TRACK (Background Line - Z-0) */}
                                <div className="absolute left-0 right-0 h-1 bg-slate-800 rounded-full z-0 top-1/2 -translate-y-1/2"></div>


                                {/* 1. INPUT NODE (Z-20, Solid BG) */}
                                <div className="relative z-20 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-lg">
                                        <Zap className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <div className="absolute top-24 w-max text-center">
                                        <div className="text-2xl font-bold text-white">1 kW</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Tu Consumo</div>
                                    </div>
                                </div>


                                {/* 2. MACHINE NODE (Z-20, Solid BG) */}
                                <div className="relative z-20 flex flex-col items-center gap-4">
                                    {/* Rotating Ring - purely decorative outside */}
                                    <div className="absolute -inset-2 border border-dashed border-slate-700 rounded-full animate-spin-slow pointer-events-none"></div>

                                    <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center shadow-2xl">
                                        <div className="text-center leading-tight">
                                            <span className="block text-[10px] font-bold text-slate-400">BOMBA</span>
                                            <span className="block text-[10px] font-bold text-white">CALOR</span>
                                        </div>
                                    </div>
                                </div>


                                {/* 3. OUTPUT NODE (Z-20, Solid BG) */}
                                <div className="relative z-20 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-lime-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(132,204,22,0.15)]">
                                        <Thermometer className="w-8 h-8 text-lime-500" />
                                    </div>
                                    <div className="absolute top-24 w-max text-center">
                                        <div className="text-2xl font-bold text-lime-500">4 kW</div>
                                        <div className="text-[10px] text-lime-500/70 uppercase font-bold tracking-wider">Calor Útil</div>
                                    </div>
                                </div>


                                {/* 4. ANIMATION LAYER (Z-10, Between Lines and Nodes) */}
                                {/* Container spans full width of flex parent */}
                                <div className="absolute inset-0 z-10 pointer-events-none">

                                    {/* BLUE PARTICLE: Input (0%) -> Machine (50%) */}
                                    {/* Moves from center of left circle to center of middle circle */}
                                    <motion.div
                                        className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] top-1/2 -translate-y-1/2 -ml-2"
                                        initial={{ left: "0%", opacity: 0 }}
                                        animate={{
                                            left: ["0%", "50%"],
                                            opacity: [0, 1, 1, 0] // Fade in start, Fade out at center
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            repeatDelay: 1.5 // Wait for Green to finish before restarting (Cycle = 3s total)
                                        }}
                                    />

                                    {/* GREEN PARTICLES: Machine (50%) -> Output (100%) */}
                                    {/* Triggered after Blue arrives (1.5s delay) */}
                                    {[0, 1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_#84cc16] top-1/2 -translate-y-1/2 -ml-1.5"
                                            initial={{ left: "50%", opacity: 0 }}
                                            animate={{
                                                left: ["50%", "100%"],
                                                opacity: [0, 1, 1, 0], // Fade in center, Fade out end
                                                y: [0, (i - 1.5) * 8] // Stagger spreading slightly vertical
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                                delay: 1.5 + (i * 0.1), // Starts exactly when Blue finishes (1.5s) + staggering
                                                repeatDelay: 0.1 + ((3 - i) * 0.1) // Sync repeat to match 3s cycle
                                            }}
                                        />
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bundling Section */}
            <section className="py-24 px-4 relative overflow-hidden border-t border-slate-900">
                {/* Background Split */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-lime-900/10" />

                <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-xs font-bold text-white mb-4 border border-slate-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-lime-500 rounded-full"></span>
                        SMART BUNDLING
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        El Matrimonio Perfecto.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8">
                        {/* Aerotermia Node */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-slate-900 rounded-full border-2 border-blue-500/30 flex items-center justify-center text-blue-400">
                                <Wind className="w-8 h-8" />
                            </div>
                            <div className="text-sm font-bold text-slate-400">Eficiencia Pura</div>
                        </div>

                        {/* Connection */}
                        <div className="text-2xl font-bold text-white">+</div>

                        {/* Solar Node */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-slate-900 rounded-full border-2 border-lime-500/30 flex items-center justify-center text-lime-500">
                                <Sun className="w-8 h-8" />
                            </div>
                            <div className="text-sm font-bold text-slate-400">Energía Gratis</div>
                        </div>
                    </div>

                    <p className="text-2xl text-slate-200 font-medium max-w-2xl mx-auto">
                        "Si añades Solar, tu calefacción te sale a <span className="text-lime-500 font-bold decoration-wavy underline decoration-lime-500/30">0€ para siempre</span>."
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/simulador?mode=combo"
                            className="inline-flex items-center rounded-xl bg-white/10 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm"
                        >
                            Ver Pack Ahorro Total <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
