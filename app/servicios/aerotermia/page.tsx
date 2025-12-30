"use client";

import Link from "next/link";
import { ArrowRight, Volume2, VolumeX, Thermometer, Wind, Zap, Sun, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AerotermiaPage() {
    return (
        <div className="relative min-h-screen pt-20 pb-12 px-4 selection:bg-primary/30">

            {/* 1. HERO SECTION (MASTER TEMPLATE STYLE) */}
            <section className="relative max-w-5xl mx-auto text-center space-y-8 pt-12 md:pt-20 pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Componente 3/4 del Ecosistema
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                    Climatización <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Invisible.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                    Calefacción potente. Más silenciosa que una biblioteca. <br className="hidden md:block" />
                    La tecnología de bomba de calor moderna no solo elimina el gas: elimina el ruido.
                </p>
            </section>

            {/* 2. THE JEWEL: NOISE VISUALIZER (ADAPTED TO GLASSMORPHISM) */}
            <section className="max-w-6xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Context */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            El silencio es <br /> <span className="text-primary">Ingeniería.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nuestras máquinas Daikin Altherma 3 operan en rangos de frecuencia diseñados para ser imperceptibles.
                            Mientras una caldera de gas ruge, nuestra aerotermia susurra.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <VolumeX className="w-8 h-8 text-primary mb-2" />
                                <div className="text-2xl font-bold text-white">35dB</div>
                                <div className="text-xs uppercase text-muted-foreground font-bold">Modo Noche</div>
                            </div>
                        </div>
                    </div>

                    {/* VISUALIZER COMPONENT (PRESERVED LOGIC, NEW SKIN) */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative flex flex-col justify-center min-h-[500px] shadow-2xl group hover:bg-white/[0.07] transition-colors">
                        <div className="absolute top-6 left-8 flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-muted-foreground uppercase">Análisis Acústico en Tiempo Real</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-12 text-center flex items-center justify-center gap-2 mt-8">
                            <Volume2 className="text-primary" /> Comparador de Decibelios
                        </h3>

                        <div className="relative flex justify-around items-end h-80 gap-4 px-4 pt-10">

                            {/* 50dB Threshold Line */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-white/10 pointer-events-none flex items-center">
                                <span className="bg-[#0b1d16] px-2 text-[10px] text-muted-foreground uppercase ml-2 translate-y-[-10px] rounded border border-white/10">Umbral Confort (50dB)</span>
                            </div>

                            {/* GRAPH 1: GAS BOILER (Chaotic) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group/bar">
                                {/* Chaotic Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2 opacity-50 group-hover/bar:opacity-100 transition-opacity">
                                    {[80, 40, 90, 30, 70, 50, 95, 20].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h}%`, `${Math.random() * 100}%`, `${h}%`] }}
                                            transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                            className="w-1.5 bg-red-500/50 rounded-full"
                                        />
                                    ))}
                                </div>
                                {/* Bar */}
                                <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden h-[75%] flex items-end border-t border-red-500/30">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-red-500">60dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full bg-red-500/10 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-muted-foreground uppercase font-bold text-center">Caldera Gas</div>
                            </div>

                            {/* GRAPH 2: LIBRARY (Flat) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group/bar">
                                {/* Flat Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2 opacity-50 group-hover/bar:opacity-100 transition-opacity">
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
                                <div className="w-full bg-white/5 rounded-t-lg relative overflow-hidden h-[40%] flex items-end border-t border-blue-400/30">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-400">40dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="w-full bg-blue-500/10 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-muted-foreground uppercase font-bold text-center">Biblioteca</div>
                            </div>

                            {/* GRAPH 3: DOMOTEKNIK (Harmonic - The Star) */}
                            <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-end group/bar">
                                {/* Harmonic Waves */}
                                <div className="flex items-end justify-center gap-[2px] h-12 w-full mb-2">
                                    {[30, 50, 70, 90, 70, 50, 30, 20].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h}%`, `${h * 0.8}%`, `${h}%`] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                            className="w-1.5 bg-[#84cc16] rounded-full shadow-[0_0_10px_#84cc16]"
                                        />
                                    ))}
                                </div>
                                {/* Bar */}
                                <div className="w-full bg-white/10 rounded-t-lg relative overflow-hidden h-[45%] flex items-end border-t-2 border-[#84cc16] shadow-[0_0_30px_rgba(132,204,22,0.15)]">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-lg font-bold text-[#84cc16]">45dB</div>
                                    <motion.div
                                        initial={{ height: "10%" }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="w-full bg-gradient-to-t from-[#84cc16]/20 to-[#84cc16]/5 absolute bottom-0"
                                    />
                                </div>
                                <div className="text-xs text-[#84cc16] uppercase font-bold text-center flex items-center gap-1">
                                    Domoteknik <Zap className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ENERGY COP SECTION (PRESERVED PIPE ANIMATION) */}
            <section className="max-w-6xl mx-auto mb-32 grid lg:grid-cols-2 gap-16 items-center">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative min-h-[350px] flex items-center justify-center overflow-hidden shadow-2xl">

                    {/* MAIN WRAPPER: Width max-3xl, centered */}
                    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto h-40 flex items-center justify-between">

                        {/* 0. THE TRACK (Background Line - Z-0) */}
                        <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full z-0 top-1/2 -translate-y-1/2"></div>


                        {/* 1. INPUT NODE (Z-20, Solid BG) */}
                        <div className="relative z-20 flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-[#162e20] border-4 border-[#0b1d16] flex items-center justify-center shadow-lg z-10">
                                <Zap className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="absolute top-24 w-max text-center">
                                <div className="text-2xl font-bold text-white">1 kW</div>
                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Tu Consumo</div>
                            </div>
                        </div>


                        {/* 2. MACHINE NODE (Z-20, Solid BG) */}
                        <div className="relative z-20 flex flex-col items-center gap-4">
                            {/* Rotating Ring - purely decorative outside */}
                            <div className="absolute -inset-2 border border-dashed border-white/20 rounded-full animate-spin-slow pointer-events-none"></div>

                            <div className="w-24 h-24 rounded-full bg-[#0b1d16] border-4 border-[#162e20] flex items-center justify-center shadow-2xl z-10">
                                <div className="text-center leading-tight">
                                    <span className="block text-[10px] font-bold text-muted-foreground">BOMBA</span>
                                    <span className="block text-[10px] font-bold text-white">CALOR</span>
                                </div>
                            </div>
                        </div>


                        {/* 3. OUTPUT NODE (Z-20, Solid BG) */}
                        <div className="relative z-20 flex flex-col items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-[#162e20] border-4 border-[#84cc16]/30 flex items-center justify-center shadow-[0_0_20px_rgba(132,204,22,0.15)] z-10">
                                <Thermometer className="w-8 h-8 text-[#84cc16]" />
                            </div>
                            <div className="absolute top-24 w-max text-center">
                                <div className="text-2xl font-bold text-[#84cc16]">4 kW</div>
                                <div className="text-[10px] text-[#84cc16]/70 uppercase font-bold tracking-wider">Calor Útil</div>
                            </div>
                        </div>


                        {/* 4. ANIMATION LAYER (Z-10, Between Lines and Nodes) */}
                        {/* Container spans full width of flex parent */}
                        <div className="absolute inset-0 z-0 pointer-events-none">

                            {/* BLUE PARTICLE: Input (0%) -> Machine (50%) */}
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
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-[#84cc16] rounded-full shadow-[0_0_10px_#84cc16] top-1/2 -translate-y-1/2 -ml-1.5"
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

                {/* Text Context */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white">Multiplica tu dinero <span className="text-[#84cc16]">x4</span></h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        La aerotermia juega con la física. Por cada kilovatio de electricidad que compras, la máquina "bombea" otros 3 o 4 kilovatios de calor gratuito desde el aire exterior.
                    </p>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                        <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">Resultado COP</span>
                        <div className="text-4xl font-black text-white flex items-baseline gap-2 mt-1">
                            400% <span className="text-[#84cc16] text-sm font-bold">Eficiencia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SMART BUNDLING (Glassmorphism + Final CTA) */}
            <section className="max-w-4xl mx-auto mb-20 text-center relative p-12 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-[#84cc16]/10 opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-white mb-4 border border-white/10">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-[#84cc16] rounded-full"></span>
                        SMART BUNDLING
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        El Matrimonio Perfecto.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8">
                        {/* Aerotermia Node */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white/5 rounded-full border-2 border-blue-500/30 flex items-center justify-center text-blue-400 backdrop-blur-sm">
                                <Wind className="w-8 h-8" />
                            </div>
                            <div className="text-sm font-bold text-muted-foreground">Eficiencia Pura</div>
                        </div>

                        {/* Connection */}
                        <div className="text-2xl font-bold text-white/50">+</div>

                        {/* Solar Node */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white/5 rounded-full border-2 border-[#84cc16]/30 flex items-center justify-center text-[#84cc16] backdrop-blur-sm">
                                <Sun className="w-8 h-8" />
                            </div>
                            <div className="text-sm font-bold text-muted-foreground">Energía Gratis</div>
                        </div>
                    </div>

                    <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                        "Si añades Solar, tu calefacción te sale a <span className="text-[#84cc16] font-bold decoration-wavy underline decoration-[#84cc16]/30">0€ para siempre</span>."
                    </p>

                    <div className="pt-8">
                        <Button asChild size="lg" className="h-16 px-12 rounded-full bg-[#84cc16] hover:bg-[#84cc16]/90 text-[#0b1d16] font-bold tracking-wide uppercase shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105 transition-all text-lg">
                            <Link href="/simulador?mode=combo" className="flex items-center gap-3">
                                VER PACK AHORRO TOTAL <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
