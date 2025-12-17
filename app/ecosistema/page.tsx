"use client";

import Link from "next/link";
import { ArrowRight, Sun, Battery, Car, Thermometer, Zap, CheckCircle2, XCircle, Home, Brain, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function EcosistemaPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/20 skew-x-12 transform origin-top-right" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-900/5 via-slate-950 to-slate-950 pointer-events-none" />

                <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 space-y-8">
                    <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                        <Activity className="w-4 h-4" />
                        <span>Integration Matters</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        El Poder del <span className="text-lime-500">Uno.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
                        Solar, Clima, Movilidad y Control. Un solo sistema, una sola app, un solo responsable.
                        Deja de jugar a integrar piezas de puzle que no encajan.
                    </p>
                </div>
            </section>

            {/* THE INFINITY LOOP VISUALIZATION */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center">
                        {/* THE ORBIT SYSTEM */}
                        <div className="relative w-[400px] h-[400px]">

                            {/* Orbital Path (Dashed) */}
                            <svg className="absolute inset-0 w-full h-full rotate-45" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>

                            {/* Active Energy Flow (Rotating Ring) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-lime-500/30 border-t-lime-500 shadow-[0_0_30px_rgba(132,204,22,0.1)]"
                            >
                                {/* Particle traveling */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-lime-500 rounded-full shadow-[0_0_15px_#84cc16]"></div>
                            </motion.div>

                            {/* CENTER NODE */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-900 rounded-full border border-slate-800 flex flex-col items-center justify-center z-20 shadow-2xl">
                                <Home className="w-10 h-10 text-white mb-1" />
                                <span className="text-[10px] font-bold text-lime-500 tracking-widest uppercase">DOMOTEKNIK</span>
                            </div>

                            {/* SATELLITES */}
                            {/* We manually position them on the circle radius */}

                            {/* Top: Solar */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 flex flex-col items-center z-20">
                                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                    <Sun className="w-8 h-8 text-yellow-500" />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase bg-slate-950 px-2 py-1 rounded">Generación</span>
                            </div>

                            {/* Right: Battery */}
                            <div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 flex flex-col items-center z-20">
                                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                    <Battery className="w-8 h-8 text-green-500" />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase bg-slate-950 px-2 py-1 rounded">Reserva</span>
                            </div>

                            {/* Bottom: Charger */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex flex-col items-center z-20">
                                <span className="text-xs font-bold text-slate-400 uppercase bg-slate-950 px-2 py-1 rounded mb-2">Movilidad</span>
                                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Car className="w-8 h-8 text-blue-500" />
                                </div>
                            </div>

                            {/* Left: Climate */}
                            <div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 flex flex-col items-center z-20">
                                <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                                    <Thermometer className="w-8 h-8 text-red-400" />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase bg-slate-950 px-2 py-1 rounded">Clima</span>
                            </div>

                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Todo conectado. <br /><span className="text-lime-500">Todo optimizado.</span></h2>
                        <p className="text-lg text-slate-400">
                            Cuando las piezas hablan entre sí, la magia ocurre. Tu coche sabe cuándo hay sol, tu calefacción sabe cuándo la batería está llena. Sin fisuras.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-lime-500/10 rounded-full"><Zap className="w-5 h-5 text-lime-500" /></div>
                                <span className="text-slate-300">Flujos de energía en tiempo real.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="p-2 bg-lime-500/10 rounded-full"><Brain className="w-5 h-5 text-lime-500" /></div>
                                <span className="text-slate-300">Decisiones automáticas basdas en datos.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* LOXONE CONDUCTOR SECTION */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="flex justify-center mb-6">
                        <div className="bg-lime-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Brain className="w-4 h-4" /> El Director de Orquesta
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Loxone pone el ritmo.</h2>
                    <p className="text-lg text-slate-400">
                        Sin Loxone, tus placas no saben que tu coche necesita carga y tu aerotermia no sabe que te vas de vacaciones.
                        Con Domoteknik, todos los sistemas dialogan en un idioma común.
                    </p>
                </div>
            </section>

            {/* CHAOS VS ORDER COMPARISON */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-white mb-16">¿Por qué elegir un Ecosistema?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* LEFT: THE OLD WAY (CHAOS) */}
                        <div className="bg-slate-900/50 border border-red-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><XCircle className="w-32 h-32 text-red-500" /></div>
                            <h3 className="text-2xl font-bold text-white mb-2">El Viejo Modelo</h3>
                            <p className="text-red-400 font-medium mb-8">Fragmentación y Problemas</p>

                            <ul className="space-y-6 relative z-10">
                                <li className="flex gap-4">
                                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-200">3 Instaladores Diferentes</strong>
                                        <span className="text-slate-500 text-sm">El fontanero, el chispa y el de las placas. Ninguno se conoce.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-200">3 Apps que no se hablan</strong>
                                        <span className="text-slate-500 text-sm">Tienes que abrir una app para ver el sol y otra para encender la calefacción.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-slate-200">"No es mi culpa"</strong>
                                        <span className="text-slate-500 text-sm">Cuando algo falla, todos se pasan la pelota. Tú pierdes.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT: DOMOTEKNIK (ORDER) */}
                        <div className="bg-slate-900 border border-lime-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(132,204,22,0.05)]">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><CheckCircle2 className="w-32 h-32 text-lime-500" /></div>
                            <h3 className="text-2xl font-bold text-white mb-2">El Ecosistema Domoteknik</h3>
                            <p className="text-lime-500 font-medium mb-8">Integración y Paz Mental</p>

                            <ul className="space-y-6 relative z-10">
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-white">Ingeniería Unificada</strong>
                                        <span className="text-slate-400 text-sm">Diseñamos todo el sistema en conjunto para que encaje al milímetro.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-white">Un Solo Cerebro (Loxone)</strong>
                                        <span className="text-slate-400 text-sm">Una sola app para controlar clima, energía, luces y seguridad.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-white">Responsabilidad Única</strong>
                                        <span className="text-slate-400 text-sm">Si algo falla, nosotros respondemos. Sin excusas.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-4 bg-lime-500 text-slate-950">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">¿Quieres la solución completa?</h2>
                    <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">
                        Deja de sufrir con instalaciones mediocres. Pásate a la ingeniería integral.
                    </p>
                    <Link
                        href="/simulador?mode=combo"
                        className="inline-flex items-center rounded-full bg-slate-950 px-10 py-5 text-lg font-bold text-white hover:bg-slate-900 transition-all shadow-2xl hover:scale-105"
                    >
                        Diseñar mi Ecosistema Integral <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
