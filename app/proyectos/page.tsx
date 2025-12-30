"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight, MapPin, Zap, Battery, Home,
    Leaf, Euro, Eye, CheckCircle2, Factory,
    Building, Warehouse
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// --- PROJECT DATA ---
type Category = "all" | "residencial" | "atico" | "industrial";

interface Project {
    id: number;
    category: Category;
    title: string;
    location: string;
    description: string;
    badges: string[];
    result: string;
    roi: string;
    image: string; // Unsplash URL
}

const projects: Project[] = [
    {
        id: 1,
        category: "residencial",
        title: "Villa Pasiva Sant Cugat",
        location: "Valldoreix, Sant Cugat",
        description: "Desconexión total del gas. Integración arquitectónica en vivienda unifamiliar de diseño.",
        badges: ["Solar 12kW", "Batería 20kWh", "Aerotermia"],
        result: "Factura media: 45€/mes",
        roi: "4.5 Años",
        image: "https://images.unsplash.com/photo-1600596542815-e32cb5308d99?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        category: "atico",
        title: "Ático Sarrià-Sant Gervasi",
        location: "Barcelona Alta",
        description: "Instalación técnica en cubierta plana con lastres de hormigón. Sin perforar impermeabilización.",
        badges: ["Solar 4kW", "Cargador EV", "Pérgola Solar"],
        result: "Autoconsumo: 75%",
        roi: "3.8 Años",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        category: "residencial",
        title: "Rehabilitación Sitges",
        location: "Sitges, Garraf",
        description: "Estética 'Full Black' para preservar el diseño mediterráneo cerca del mar.",
        badges: ["Estética Premium", "Aerotermia", "Suelo Radiante"],
        result: "Confort térmico 365 días",
        roi: "5.0 Años",
        image: "https://images.unsplash.com/photo-1600607687644-c6cbd7163f2c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        category: "industrial",
        title: "Logística Sostenible",
        location: "Zona Franca, BCN",
        description: "Nave industrial de 2.000m² con inyección cero y compensación de reactiva.",
        badges: ["Industrial 100kW", "Ahorro Fiscal", "Monitorización"],
        result: "Retorno Inversión: 3.5 Años",
        roi: "3.5 Años",
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop",
    },
];

const categories = [
    { id: "all", label: "Todas" },
    { id: "residencial", label: "Residencial", icon: Home },
    { id: "atico", label: "Áticos BCN", icon: Building },
    { id: "industrial", label: "Industrial", icon: Factory },
];

export default function ProyectosPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen font-sans selection:bg-primary/30">

            {/* 1. HERO SECTION (CATALONIA CONTEXT) */}
            <section className="relative py-24 px-4 border-b border-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(132,204,22,0.03))]" />
                <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 text-lime-400 font-bold tracking-wider uppercase text-xs bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
                        <MapPin className="w-4 h-4" />
                        <span>Referentes en el Sector</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                        Proyectos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Cataluña.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        De l'Empordà al Vallès. Transformamos viviendas y empresas locales con ingeniería de precisión y conocimiento del territorio.
                    </p>
                </div>
            </section>

            {/* 2. FILTERS */}
            <section className="sticky top-16 z-40 bg-[#0b1d16]/80 backdrop-blur-lg border-b border-white/5 py-4 px-4 transition-all">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as Category)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                activeCategory === cat.id
                                    ? "bg-primary text-[#0b1d16] border-primary shadow-[0_0_20px_rgba(132,204,22,0.3)] scale-105"
                                    : "bg-white/5 text-muted-foreground border-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {cat.icon && <cat.icon className="w-4 h-4" />}
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. PROJECTS GRID (MAGAZINE STYLE) */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    key={project.id}
                                    className="group relative bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl backdrop-blur-sm"
                                >
                                    {/* 1. IMAGE (Top Half) */}
                                    <div className="h-72 w-full overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                                        {/* Floating Location Badge */}
                                        <div className="absolute top-6 left-6 bg-[#0b1d16]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                                            <MapPin className="w-3 h-3 text-lime-500" /> {project.location}
                                        </div>
                                    </div>

                                    {/* 2. CONTENT (Bottom Half) */}
                                    <div className="p-8 relative">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.badges.map((tag, i) => (
                                                <span key={i} className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Result Box */}
                                        <div className="bg-[#0b1d16]/50 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Resultado</div>
                                                <div className="text-lime-500 font-bold text-lg flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5" /> {project.result}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-slate-500 uppercase font-bold mb-1">ROI</div>
                                                <div className="text-white font-mono font-bold">{project.roi}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="py-24 px-4 text-center border-t border-white/5 bg-white/[0.02] relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-lime-500/5" />
                <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                    <h2 className="text-4xl font-bold text-white">¿Tienes una propiedad similar?</h2>
                    <p className="text-xl text-slate-400">
                        Nuestros ingenieros analizan tu caso específico en Barcelona, Girona o Tarragona sin coste.
                    </p>
                    <Link
                        href="/simulador"
                        className="inline-flex items-center rounded-full bg-lime-500 px-10 py-5 text-xl font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-[0_0_40px_rgba(132,204,22,0.3)] hover:scale-105"
                    >
                        Solicitar Estudio en Cataluña <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
