"use client";

import Link from "next/link";
import { ArrowRight, Server, ShieldCheck, Zap, Lock, Lightbulb, Thermometer, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function DomoticaPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-900/10 via-slate-950 to-slate-950 pointer-events-none" />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                            <Brain className="w-4 h-4" />
                            <span>Real Smart Home</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Tu casa en <br />
                            <span className="text-lime-500">Autopiloto.</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Olvídate de interruptores y de apps complicadas. Tecnología <strong>Loxone</strong> para un hogar que piensa, decide y ahorra por ti.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/simulador?mode=domotica"
                                className="inline-flex items-center rounded-full bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 hover:scale-105"
                            >
                                Diseñar mi Ecosistema <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* CSS ART: THE MINISERVER RACK */}
                    <div className="relative h-[500px] bg-slate-900 rounded-3xl border border-slate-800 p-8 flex items-center justify-center shadow-2xl overflow-hidden group">
                        {/* Rack Rails */}
                        <div className="absolute left-6 top-0 bottom-0 w-2 bg-slate-800 flex flex-col gap-2 py-4">
                            {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-slate-700 rounded-full mx-auto" />)}
                        </div>
                        <div className="absolute right-6 top-0 bottom-0 w-2 bg-slate-800 flex flex-col gap-2 py-4">
                            {[...Array(20)].map((_, i) => <div key={i} className="w-1 h-1 bg-slate-700 rounded-full mx-auto" />)}
                        </div>

                        {/* Shadows/Glows */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] pointer-events-none z-10" />

                        {/* THE MINISERVER UNIT */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-0 w-3/4 h-24 bg-slate-800 rounded-md border-y border-slate-700 flex shadow-xl"
                        >
                            {/* Left: Brand / Ports */}
                            <div className="w-1/3 border-r border-slate-700 p-4 flex flex-col justify-between">
                                <div className="text-[10px] font-bold text-slate-500 tracking-widest">MINISERVER</div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-4 bg-slate-950 rounded-sm border border-slate-700/50"></div>
                                    <div className="w-8 h-4 bg-slate-950 rounded-sm border border-slate-700/50"></div>
                                </div>
                            </div>

                            {/* Center: The Brain (Green Block) */}
                            <div className="w-2/3 bg-lime-500/10 flex items-center px-6 gap-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(132,204,22,0.1),transparent)] animate-shimmer" />

                                {/* Status LEDs */}
                                <div className="flex gap-3">
                                    <div className="w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_#84cc16] animate-pulse"></div>
                                    <div className="w-3 h-3 bg-lime-500/50 rounded-full animate-pulse delay-75"></div>
                                    <div className="w-3 h-3 bg-lime-500/50 rounded-full animate-pulse delay-150"></div>
                                </div>

                                <div className="text-lime-500 font-mono text-sm tracking-wider opacity-80">
                                    SYSTEM: <span className="font-bold">ONLINE</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE BRAIN SECTION (Strict Star Topology Fix) */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold text-white">El Cerebro Local.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            A diferencia de otros sistemas que dependen de internet, Loxone procesa todo en tu casa.
                            Tus datos no salen. Si se cae internet, tu casa sigue funcionando.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto py-12">
                        {/* ABSOLUTE CONNECTION LINES (The Wired Network) - Z-0 */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                            {/* Horizontal Line (Connecting Left and Right Stats) */}
                            <div className="w-full h-0.5 bg-slate-800"></div>
                            {/* Vertical Line (Connecting Top and Bottom Stats) */}
                            <div className="absolute h-full w-0.5 bg-slate-800"></div>
                        </div>

                        {/* STRICT 3x3 GRID - Z-10 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 items-center justify-items-center">

                            {/* TOP (Row 1, Col 2) */}
                            <div className="md:col-start-2 md:row-start-1">
                                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg w-fit z-20 relative">
                                    <Thermometer className="text-blue-400 w-6 h-6" />
                                    <span className="text-sm font-bold text-slate-300">CLIMA</span>
                                </div>
                            </div>

                            {/* LEFT (Row 2, Col 1) */}
                            <div className="md:col-start-1 md:row-start-2">
                                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg w-fit z-20 relative">
                                    <ShieldCheck className="text-red-400 w-6 h-6" />
                                    <span className="text-sm font-bold text-slate-300">SEGURIDAD</span>
                                </div>
                            </div>

                            {/* CENTER: THE MINISERVER (Row 2, Col 2) */}
                            <div className="md:col-start-2 md:row-start-2 z-30">
                                <div className="w-48 h-48 bg-lime-500 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(132,204,22,0.3)] relative group">
                                    <Server className="w-16 h-16 text-slate-950 mb-2 group-hover:scale-110 transition-transform" />
                                    <div className="text-slate-950 font-bold text-lg">MINISERVER</div>

                                    {/* 100% PRIVATE Badge (Top Right Inside) */}
                                    <div className="absolute top-4 right-4 bg-slate-950/20 backdrop-blur-sm border border-slate-950/20 px-2 py-1 rounded-full text-[10px] font-bold text-slate-900 flex items-center gap-1">
                                        <Lock className="w-3 h-3" /> PRIVATE
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT (Row 2, Col 3) */}
                            <div className="md:col-start-3 md:row-start-2">
                                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg w-fit z-20 relative">
                                    <Zap className="text-lime-500 w-6 h-6" />
                                    <span className="text-sm font-bold text-slate-300">ENERGÍA</span>
                                </div>
                            </div>

                            {/* BOTTOM (Row 3, Col 2) */}
                            <div className="md:col-start-2 md:row-start-3">
                                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg w-fit z-20 relative">
                                    <Lightbulb className="text-yellow-400 w-6 h-6" />
                                    <span className="text-sm font-bold text-slate-300">ILUMINACIÓN</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ENERGY ORCHESTRA (Updated with Solar Bell Curve) */}
            <section className="py-24 px-4 border-t border-slate-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">Orquesta tu Energía.</h2>
                        <p className="text-lg text-slate-400">
                            El sistema detecta cuando te sobra energía solar y automáticamente activa "consumidores" estratégicos.
                            Pone la lavadora, calienta el agua de la ducha o carga el coche eléctrico. Sin que levantes un dedo.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-lime-500" /> Priorización automática de cargas
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-lime-500" /> Aprovechamiento del 100% de excedentes
                            </li>
                            <li className="flex items-center gap-3 text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-lime-500" /> Factura eléctrica a 0€
                            </li>
                        </ul>
                    </div>

                    {/* ANIMATED CHART: PRODUCTION vs CONSUMPTION MATCHING */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl h-80 relative overflow-hidden flex flex-col justify-end">

                        {/* LEGEND overlay */}
                        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 text-xs font-bold uppercase">
                            <div className="flex items-center gap-2 text-yellow-400">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Solar (Producción)
                            </div>
                            <div className="flex items-center gap-2 text-lime-500">
                                <span className="w-2 h-2 bg-lime-500 rounded-full"></span> Consumo (Optimizado)
                            </div>
                        </div>

                        {/* CHART CONTAINER */}
                        <div className="relative w-full h-[200px] flex items-end justify-between gap-1 z-10">

                            {/* LAYER 1: SOLAR PRODUCTION CURVE (SVG Background) */}
                            <svg className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="solarGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#facc15" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#facc15" stopOpacity="0.05" />
                                    </linearGradient>
                                </defs>
                                {/* Bell Curve Path */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M0,100 C20,100 30,10 50,10 C70,10 80,100 100,100"
                                    fill="url(#solarGradient)"
                                    stroke="#facc15"
                                    strokeWidth="0.5"
                                />
                            </svg>

                            {/* LAYER 2: CONSUMPTION BARS (Foreground) */}
                            {/* We match bars to fit vaguely under the curve shape defined above */}
                            {[10, 25, 50, 80, 85, 80, 50, 30, 15, 10].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end h-full gap-1 z-10 group">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="w-full bg-lime-500/80 rounded-t-sm relative hover:bg-lime-400 transition-colors"
                                    >
                                        {/* Optional slight line to show 'grid' effect */}
                                        <div className="absolute top-0 w-full h-[1px] bg-white/20"></div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENTO GRID BENEFITS */}
            <section className="py-24 px-4 bg-slate-900/30 border-t border-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* CARD 1 */}
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-lime-500/30 transition-colors group">
                            <Server className="w-10 h-10 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Fiabilidad Cableada</h3>
                            <p className="text-slate-400 text-sm">
                                Nada de Wi-Fi inestable. Usamos tecnología <strong>Tree</strong> de grado industrial. Funciona hoy, y dentro de 20 años.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-lime-500/30 transition-colors group">
                            <Lightbulb className="w-10 h-10 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Iluminación Circadiana</h3>
                            <p className="text-slate-400 text-sm">
                                Luces que imitan al sol. Brillantes y frías para trabajar, cálidas y suaves para descansar. Automáticamente.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-lime-500/30 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Guardián 24/7</h3>
                            <p className="text-slate-400 text-sm">
                                El sistema vigila por ti. Detecta intrusos, fugas de agua o humo y actúa cerrando suministros o activando alarmas.
                            </p>
                        </div>
                    </div>

                    {/* FINAL CTA (Refactored) */}
                    <div className="mt-24 text-center space-y-8 bg-slate-900 rounded-3xl p-12 border border-slate-800">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para una Smart Home de verdad?</h2>
                        <div className="flex flex-col items-center gap-4">
                            <Link
                                href="/simulador?mode=domotica"
                                className="inline-flex items-center rounded-xl bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 hover:scale-105"
                            >
                                Diseñar mi Ecosistema Loxone <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <span className="text-sm text-slate-500 font-medium">Configuración personalizada en 2 minutos. Sin compromiso.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
