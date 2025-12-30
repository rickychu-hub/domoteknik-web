"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Briefcase, UserCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactoPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate network request
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div className="min-h-screen selection:bg-primary/30">
            {/* HERO SIMPLE */}
            <section className="relative py-24 px-4 overflow-hidden border-b border-slate-900">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        ¿Hablamos de <br /> <span className="text-lime-500">Ingeniería?</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Sin comerciales agresivos. Sin letra pequeña. Habla directamente con el equipo técnico que diseñará tu sistema.
                    </p>
                </div>
            </section>

            {/* INTENT SELECTOR */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* OPTION A: NEW PROJECT (Main CTA) */}
                    <div className="bg-white/5 border border-primary/30 rounded-3xl p-8 hover:bg-white/10 transition-all group relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-3 bg-lime-500/10 rounded-bl-2xl border-b border-l border-lime-500/20">
                            <Briefcase className="w-6 h-6 text-lime-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Nuevos Proyectos</h3>
                        <p className="text-slate-400 mb-8">
                            "Quiero diseñar mi ecosistema, solicitar un estudio o pedir presupuesto."
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="#contacto-form" className="flex items-center justify-center w-full bg-lime-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-lime-400 transition-colors">
                                Rellenar Formulario <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link href="/simulador" className="flex items-center justify-center w-full bg-slate-800 text-white font-medium py-4 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                                Ir al Simulador
                            </Link>
                        </div>
                    </div>

                    {/* OPTION B: SUPPORT (Secondary) */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all group backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-white">Soy Cliente / Soporte</h3>
                        </div>
                        <p className="text-slate-400 mb-8">
                            "Tengo una duda técnica sobre mi instalación actual o necesito mantenimiento."
                        </p>
                        <a
                            href="mailto:soporte@domoteknik.com"
                            className="flex items-center justify-center w-full bg-transparent text-slate-300 font-bold py-4 rounded-xl hover:bg-slate-900 transition-colors border-2 border-slate-800 hover:border-slate-600 hover:text-white"
                        >
                            <Mail className="mr-2 w-5 h-5" /> Contactar Soporte
                        </a>
                    </div>

                </div>
            </section>

            {/* CONTACT VISUAL DATA */}
            <section className="py-12 px-4 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start gap-4 p-6">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary border border-white/10">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Oficinas Centrales</h4>
                            <p className="text-slate-400">c/ Innovación 12, P.I. Alcobendas</p>
                            <p className="text-slate-400">28108 Madrid, España</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4 p-6">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-500 border border-white/10">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Teléfono Ingeniería</h4>
                            <p className="text-slate-400">+34 912 345 678</p>
                            <p className="text-slate-500 text-sm">Lunes a Viernes, 09:00 - 18:00</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4 p-6">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-500 border border-white/10">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Email Directo</h4>
                            <p className="text-slate-400">proyectos@domoteknik.com</p>
                            <p className="text-slate-500 text-sm">Respuesta en max. 24h</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NO-SPAM FORM */}
            <section id="contacto-form" className="py-24 px-4">
                <div className="max-w-3xl mx-auto bg-[#0b1d16]/80 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-2">Háblanos de tu proyecto</h2>
                        <p className="text-slate-400">Rellena los datos clave para que podamos estudiar tu caso antes de llamarte.</p>
                    </div>

                    {formStatus === "success" ? (
                        <div className="text-center py-12 space-y-6">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-20 h-20 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto"
                            >
                                <CheckCircle2 className="w-10 h-10 text-lime-500" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                            <p className="text-slate-400">
                                Un ingeniero revisará tus datos y te contactará en breve.<br />
                                Mientras tanto, ¿por qué no pruebas el simulador?
                            </p>
                            <Link href="/simulador" className="inline-block mt-4 text-lime-500 font-bold hover:underline">
                                Ir al Simulador →
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300 ml-1">Nombre Completo</label>
                                    <input
                                        type="text" required placeholder="Tu nombre"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300 ml-1">Teléfono</label>
                                    <input
                                        type="tel" required placeholder="600 000 000"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                                <input
                                    type="email" required placeholder="tu@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Tipo de Proyecto</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [&>option]:bg-[#0b1d16]">
                                    <option>Autoconsumo Solar y Baterías</option>
                                    <option>Aerotermia / Climatización</option>
                                    <option>Domótica Integral Loxone</option>
                                    <option>Cargadores Vehículo Eléctrico</option>
                                    <option>Pack Completo (Ecosistema)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Detalles Adicionales</label>
                                <textarea
                                    rows={4} placeholder="Cuéntanos un poco sobre tu vivienda y tus objetivos..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            {/* HUMAN CHECK */}
                            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                                <input
                                    type="checkbox" required id="humanCheck"
                                    className="mt-1 w-5 h-5 accent-lime-500 cursor-pointer"
                                />
                                <label htmlFor="humanCheck" className="text-sm text-slate-400 cursor-pointer select-none">
                                    Confirmo que <span className="text-white font-bold">soy humano</span> y tengo una vivienda en propiedad (o proyecto de obra) donde realizar la instalación.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === "submitting"}
                                className={cn(
                                    "w-full bg-lime-500 text-slate-950 font-bold text-lg py-4 rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2",
                                    formStatus === "submitting" && "opacity-70 cursor-wait"
                                )}
                            >
                                {formStatus === "submitting" ? "Enviando..." : "Solicitar Estudio Gratuito"}
                                {formStatus !== "submitting" && <ArrowRight className="w-5 h-5" />}
                            </button>

                            <p className="text-center text-xs text-slate-600">
                                Tus datos están seguros. Solo los usaremos para contactarte sobre tu proyecto.
                            </p>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
