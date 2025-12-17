"use client";

import Link from "next/link";
import { ArrowRight, Sun, Wind, Zap, Brain, PenTool, CheckCircle2, Activity, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Matrix Data
const services = [
    {
        id: "solar",
        title: "Generación Solar",
        subtitle: "Paneles Full Black y Baterías. Convierte tu tejado en un activo financiero.",
        icon: Sun,
        href: "/servicios/fotovoltaica",
        color: "text-yellow-400",
        bgHover: "group-hover:shadow-yellow-500/10",
        borderHover: "group-hover:border-yellow-500/50",
    },
    {
        id: "aerotermia",
        title: "Climatización",
        subtitle: "Bomba de calor ultra-silenciosa. Calor en invierno, frescor en verano. Sin gas.",
        icon: Wind,
        href: "/servicios/aerotermia",
        color: "text-blue-400",
        bgHover: "group-hover:shadow-blue-500/10",
        borderHover: "group-hover:border-blue-500/50",
    },
    {
        id: "cargadores",
        title: "Carga EV",
        subtitle: "Carga tu coche a 0€/km usando el excedente solar. Gestión inteligente.",
        icon: Zap,
        href: "/servicios/cargadores",
        color: "text-lime-400",
        bgHover: "group-hover:shadow-lime-500/10",
        borderHover: "group-hover:border-lime-500/50",
    },
    {
        id: "domotica",
        title: "Domótica Loxone",
        subtitle: "El sistema operativo de tu hogar. Automatización cableada y privada. Sin nubes.",
        icon: Brain,
        href: "/servicios/domotica",
        color: "text-purple-400",
        bgHover: "group-hover:shadow-purple-500/10",
        borderHover: "group-hover:border-purple-500/50",
    },
];

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* HERO SECTION */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-sm">
                        <Cpu className="w-4 h-4" />
                        <span>Tecnología Unificada</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Ingeniería, <br />
                        <span className="text-slate-500">no solo instalación.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Dominamos las 4 tecnologías que definen la vivienda del futuro.
                        Sin subcontratas. Sin comerciales. Solo rigor técnico.
                    </p>
                </div>
            </section>

            {/* THE MATRIX (Bento Grid) */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className={cn(
                                "group relative min-h-[300px] flex flex-col justify-between p-10 bg-slate-900 rounded-3xl border border-slate-800 transition-all duration-300 hover:scale-[1.02] shadow-2xl",
                                service.bgHover,
                                service.borderHover
                            )}
                        >
                            <div className="space-y-6 relative z-10">
                                <div className={cn("w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg", service.color)}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                    <p className="text-lg text-slate-400 leading-relaxed font-medium">{service.subtitle}</p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-8 flex items-center text-sm font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                                <span className={cn("mr-2", service.color)}>Explorar</span>
                                <ArrowRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", service.color)} />
                            </div>

                            {/* Background Glow Effect on Hover */}
                            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl bg-current", service.color)} />
                        </Link>
                    ))}
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="py-24 px-4 bg-slate-900/30 border-t border-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">El Estándar Domoteknik</h2>
                        <p className="text-slate-400 text-lg">Por qué nuestros clientes duermen tranquilos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* 1. Design */}
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shadow-lg text-lime-500">
                                <PenTool className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Diseño In-House</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Ingenieros propios diseñan cada milímetro. No copiamos proyectos; los creamos a medida de tus consumos.
                                </p>
                            </div>
                        </div>

                        {/* 2. Installation */}
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shadow-lg text-blue-500">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Instalación de Quirófano</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Obsesión por la estética. Cableado oculto, etiquetas y orden absoluto. Parecerá que siempre estuvo ahí.
                                </p>
                            </div>
                        </div>

                        {/* 3. Support */}
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-20 h-20 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shadow-lg text-purple-500">
                                <Activity className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Soporte Remoto Proactivo</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Monitorizamos tu sistema 24/7. A menudo detectamos y arreglamos problemas antes de que te des cuenta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA TRANSVERSAL */}
            <section className="py-24 px-4 bg-lime-500 text-slate-950">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">¿No sabes qué necesitas?</h2>
                    <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">
                        Nuestro configurador inteligente te ayuda a combinar las tecnologías ideales para tu hogar.
                    </p>
                    <Link
                        href="/simulador"
                        className="inline-flex items-center rounded-full bg-slate-950 px-10 py-5 text-lg font-bold text-white hover:bg-slate-900 transition-all shadow-2xl hover:scale-105"
                    >
                        Usar Configurador de Ecosistema <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
