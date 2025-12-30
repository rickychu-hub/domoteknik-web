import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Battery, Database, Zap, ArrowDown, BrainCircuit } from "lucide-react";

export default function BatteriesPage() {
    return (
        <div className="relative min-h-screen pt-20 pb-12 px-4 selection:bg-primary/30">

            {/* 1. HERO SECTION */}
            <section className="relative max-w-5xl mx-auto text-center space-y-8 pt-12 md:pt-20 pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Componente 2/4 del Ecosistema
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                    Almacenamiento <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Inteligente LFP.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                    Si no la guardas, la pierdes. Independencia energética 24/7. <br className="hidden md:block" />
                    Tecnología de Litio Ferrofosfato para máxima seguridad y vida útil.
                </p>
            </section>

            {/* 2. TECH SPECS GRID (GLASSMORPHISM) */}
            <section className="max-w-5xl mx-auto mb-32">
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Spec 1 */}
                    <Card className="p-8 border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
                        <Database className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <div className="space-y-2">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Química Segura</span>
                            <div className="text-5xl font-black text-white">LFP<span className="text-2xl text-primary">Tech</span></div>
                            <p className="text-sm text-gray-400">Sin Cobalto. Sin riesgo de incendio. 100% Reciclable.</p>
                        </div>
                    </Card>

                    {/* Spec 2 */}
                    <Card className="p-8 border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
                        <Zap className="w-10 h-10 text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <div className="space-y-2">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Ciclos de Vida</span>
                            <div className="text-5xl font-black text-white">&gt;6000</div>
                            <p className="text-sm text-gray-400">Garantía de rendimiento con descarga del 100%.</p>
                        </div>
                    </Card>

                    {/* Spec 3 */}
                    <Card className="p-8 border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group">
                        <Battery className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <div className="space-y-2">
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Modularidad</span>
                            <div className="text-5xl font-black text-white">5-30<span className="text-2xl text-primary">kWh</span></div>
                            <p className="text-sm text-gray-400">Crece contigo. Empieza pequeño, amplía cuando quieras.</p>
                        </div>
                    </Card>

                </div>
            </section>

            {/* 3. INTEGRATION SECTION */}
            <section className="max-w-5xl mx-auto mb-32 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                        <BrainCircuit className="w-4 h-4" /> Gestión Activa
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Tu red de seguridad <br />
                        <span className="text-muted-foreground">contra apagones.</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Con el Backup Box opcional, tu casa sigue funcionando incluso si la red eléctrica cae.
                        El inversor aisla la vivienda en &lt;3 segundos y alimenta las cargas críticas desde la batería.
                    </p>
                </div>

                <div className="aspect-square rounded-3xl border border-white/5 bg-gradient-to-br from-[#162e20] to-[#0b1d16] flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1),transparent)] opacity-50" />
                    <Battery className="w-32 h-32 text-primary/20 group-hover:text-primary transition-colors duration-700" />
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="max-w-3xl mx-auto text-center space-y-8 pb-12">
                <ArrowDown className="w-8 h-8 text-primary mx-auto animate-bounce" />
                <h2 className="text-3xl font-bold text-white">¿Cuánta batería necesitas?</h2>

                <Button asChild size="lg" className="h-16 px-12 rounded-full bg-[#84cc16] hover:bg-[#84cc16]/90 text-[#0b1d16] font-bold tracking-wide uppercase shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105 transition-all text-lg">
                    <Link href="/simulador?mode=battery" className="flex items-center gap-3">
                        SIMULAR MI BATERÍA <ArrowRight className="w-5 h-5" />
                    </Link>
                </Button>
            </section>

        </div>
    );
}
