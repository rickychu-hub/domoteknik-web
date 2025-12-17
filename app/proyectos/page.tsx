"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Zap, Battery, Home, ArrowDown, Euro, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Mock Data for Projects
const projects = [
    {
        id: 1,
        title: "Residencia Las Rozas",
        specs: ["10kWp Solar", "Batería 15kWh"],
        roi: "3.5 Años",
        image: "bg-slate-800", // Placeholder class
    },
    {
        id: 2,
        title: "Chalet Pozuelo",
        specs: ["Aerotermia 12kW", "Loxone Full"],
        roi: "4.2 Años",
        image: "bg-slate-800",
    },
    {
        id: 3,
        title: "Nave Industrial Getafe",
        specs: ["50kWp Solar", "Cargadores x4"],
        roi: "2.8 Años",
        image: "bg-slate-800",
    },
    {
        id: 4,
        title: "Villa Boadilla",
        specs: ["Off-Grid Total", "Suelo Radiante"],
        roi: "5.0 Años",
        image: "bg-slate-800",
    },
    {
        id: 5,
        title: "Ático Centro",
        specs: ["Aerotermia Híbrida", "Clima Zonal"],
        roi: "4.0 Años",
        image: "bg-slate-800",
    },
    {
        id: 6,
        title: "Eco-House Sierra",
        specs: ["100% Autonomía", "Pozo Canadiense"],
        roi: "3.8 Años",
        image: "bg-slate-800",
    },
];

export default function ProyectosPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                        <Euro className="w-4 h-4" />
                        <span>Prueba Social Financiera</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Resultados Reales. <br />
                        <span className="text-lime-500">Facturas a 0€.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
                        No creas en promesas. Mira lo que nuestros ingenieros han logrado en hogares como el tuyo.
                        Matemáticas simples, ahorro masivo.
                    </p>
                </div>
            </section>

            {/* FEATURED CASE STUDY (Bill Comparator) */}
            <section className="py-24 px-4 bg-slate-900/30">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: DATA */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 text-slate-500 font-mono text-sm uppercase">
                            <MapPin className="w-4 h-4" /> La Moraleja, Madrid
                        </div>
                        <h2 className="text-4xl font-bold text-white">Villa Autocosumo Total</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                <div className="text-slate-400 text-sm mb-1">Ahorro Anual</div>
                                <div className="text-3xl font-bold text-lime-500">4.500€</div>
                            </div>
                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                <div className="text-slate-400 text-sm mb-1">Retorno (ROI)</div>
                                <div className="text-3xl font-bold text-white">4.1 Años</div>
                            </div>
                        </div>
                        <ul className="space-y-4 text-slate-400 pt-4">
                            <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-lime-500" /> 12kWp Fotovoltaica SunPower</li>
                            <li className="flex items-center gap-2"><Battery className="w-4 h-4 text-lime-500" /> 20kWh Batería Virtual</li>
                            <li className="flex items-center gap-2"><Home className="w-4 h-4 text-lime-500" /> Control Integral Loxone</li>
                        </ul>
                    </div>

                    {/* RIGHT: BILL COMPARATOR VISUAL */}
                    <div className="relative h-[500px] flex items-center justify-center bg-slate-950 rounded-3xl border border-slate-800 p-8 shadow-2xl overflow-hidden group">

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_1px,_transparent_1px)] bg-[size:20px_20px] opacity-20" />

                        <div className="relative flex items-center gap-8">

                            {/* OLD BILL (Red) */}
                            <motion.div
                                initial={{ x: -20, opacity: 0.5, scale: 0.9 }}
                                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-64 bg-slate-900 border-2 border-red-500/20 rounded-2xl p-6 shadow-xl relative rotate-[-6deg] group-hover:rotate-[-12deg] transition-transform duration-500"
                            >
                                <div className="text-center border-b border-slate-800 pb-4 mb-4">
                                    <div className="text-xs text-slate-500 uppercase font-bold">Antes</div>
                                    <div className="text-red-500 font-mono text-4xl font-bold">350€</div>
                                    <div className="text-xs text-red-400 mt-1">/ MES</div>
                                </div>
                                <div className="space-y-2 text-xs text-slate-500 font-mono">
                                    <div className="flex justify-between"><span>Potencia</span><span>45€</span></div>
                                    <div className="flex justify-between"><span>Consumo</span><span>210€</span></div>
                                    <div className="flex justify-between"><span>Impuestos</span><span>95€</span></div>
                                </div>
                                <div className="absolute -top-3 -right-3 bg-red-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                                    DOLOROSO
                                </div>
                            </motion.div>

                            {/* ARROW */}
                            <div className="z-10 bg-slate-800 p-2 rounded-full border border-slate-700">
                                <ArrowRight className="text-white w-6 h-6" />
                            </div>

                            {/* NEW BILL (Lime) */}
                            <motion.div
                                initial={{ x: 20, opacity: 0.5, scale: 0.9 }}
                                whileInView={{ x: 0, opacity: 1, scale: 1.1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-64 bg-slate-900 border-2 border-lime-500 rounded-2xl p-6 shadow-[0_0_50px_rgba(132,204,22,0.2)] relative rotate-[6deg] group-hover:rotate-[0deg] transition-transform duration-500 z-20"
                            >
                                <div className="text-center border-b border-lime-500/20 pb-4 mb-4">
                                    <div className="text-xs text-lime-500 uppercase font-bold">Ahora (Domoteknik)</div>
                                    <div className="text-white font-mono text-5xl font-bold">0€</div>
                                    <div className="text-xs text-lime-400 mt-1">/ SIEMPRE</div>
                                </div>
                                <div className="space-y-2 text-xs text-slate-400 font-mono">
                                    <div className="flex justify-between"><span>Potencia</span><span>0€ (Comp.)</span></div>
                                    <div className="flex justify-between"><span>Consumo</span><span>0€</span></div>
                                    <div className="flex justify-between"><span>Excedentes</span><span className="text-lime-500">-45€</span></div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-lime-500 text-slate-950 text-sm font-bold px-4 py-1 rounded-full shadow-lg animate-bounce">
                                    LIBERTAD
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>

            {/* BENTO GRID PROJECTS */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12">Instalaciones Recientes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="group relative h-80 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden cursor-crosshair">
                                {/* Background Image Placeholder */}
                                <div className={cn("absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-110", project.image)}>
                                    {/* Abstract Pattern as placeholder */}
                                    <div className="w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-slate-900 to-slate-950"></div>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.specs.map((spec, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded text-xs text-slate-300">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* HOVER REVEAL: ROI */}
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-lime-500 font-bold">
                                            <span>ROI Estimado:</span>
                                            <span>{project.roi}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPACT MAP (Abstract) */}
            <section className="py-24 px-4 bg-slate-950 border-t border-slate-900 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-white">Domoteknik en tu zona</h2>
                        <p className="text-slate-400">Expandiendo la independencia energética por todo el territorio.</p>
                    </div>

                    {/* ABSTRACT MAP VISUAL */}
                    <div className="relative w-full h-[400px] bg-slate-900/50 rounded-3xl border border-slate-800 flex items-center justify-center overflow-hidden">
                        {/* Grid Dots */}
                        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-8 opacity-20">
                            {[...Array(72)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-slate-700 rounded-full mx-auto" />
                            ))}
                        </div>

                        {/* Glowing Green Nodes (Simulating Clusters) */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0.5, scale: 0.8 }}
                                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                className="absolute w-4 h-4 bg-lime-500 rounded-full shadow-[0_0_20px_#84cc16]"
                                style={{
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 80 + 10}%`,
                                }}
                            />
                        ))}

                        <div className="relative z-10 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-6 py-3 rounded-full text-white font-bold text-sm">
                            +150 Proyectos Ejecutados
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center">
                <Link
                    href="/simulador"
                    className="inline-flex items-center rounded-full bg-lime-500 px-10 py-5 text-lg font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105"
                >
                    Quiero estos resultados <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
            </section>
        </div>
    );
}
