import Link from "next/link";
import {
  ArrowRight, Sun, Wind, PlugZap, BrainCircuit,
  Cpu, Wrench, ShieldCheck, Factory,
  LayoutGrid, TrendingDown, XCircle, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
// Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/home/feature-card";
import { AuthorityPillar } from "@/components/home/authority-pillar";

export default function Home() {
  return (
    // Note: bg-background is already on body, so we can use transparency or relative positioning mainly.
    // We add the grid background here just like in simulator for consistency.
    <div className="relative min-h-screen overflow-hidden selection:bg-primary/30 bg-transparent">



      <div className="relative z-10 font-sans text-foreground">

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-16">

          {/* TACTICAL GRID (HERO ONLY) */}
          <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] dark:hidden" />
            <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Atmosphere Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(132,204,22,0.15),transparent)] pointer-events-none dark:opacity-100 opacity-60"></div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-10 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-foreground">
                Autonomía Energética <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 drop-shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                  Inteligente.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
                Integramos Solar, Baterías y Aerotermia en un ecosistema único.
                Ingeniería de precisión para quienes buscan control total.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
              <Button asChild size="lg" className="h-16 px-10 rounded-full bg-[#84cc16] hover:bg-[#84cc16]/90 text-[#0b1d16] font-bold tracking-wide uppercase shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:scale-105 transition-all">
                <Link href="/simulador" className="flex items-center gap-3">
                  DISEÑA TU ECOSISTEMA <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg border-foreground/20 hover:bg-foreground/5 font-medium tracking-wide">
                <Link href="/proyectos" className="flex items-center gap-3">
                  Nuestra Ingeniería <LayoutGrid className="w-5 h-5 text-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>

        </section>

        {/* SECCIÓN PROBLEMA VS SOLUCIÓN: VISUAL CONFRONTATION */}
        <section className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              La verdad incómoda: <span className="text-[#ef4444] drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">Tu casa pierde dinero</span> mientras duermes.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Subidas de luz, excedentes regalados y consumo ineficiente.
              La fotovoltaica estándar es solo el primer paso; sin control, es energía desperdiciada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative items-stretch">

            {/* PROBLEMA 1: ESTILO ROJO CRÍTICO */}
            <div className="relative group rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-transparent p-1 hover:border-red-500/50 transition-all duration-500">
              <FeatureCard
                icon={TrendingDown}
                color="text-red-500"
                title="Desperdicio de Excedentes"
                description="Regalas tu energía a la red a 0,05€/kWh para luego comprarla a 0,20€/kWh por la noche. Un negocio ruinoso."
              />
              {/* Sombra roja interna */}
              <div className="absolute inset-0 rounded-3xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            {/* PROBLEMA 2: ESTILO ROJO CRÍTICO */}
            <div className="relative group rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-transparent p-1 hover:border-red-500/50 transition-all duration-500">
              <FeatureCard
                icon={XCircle}
                color="text-red-500"
                title="Consumo Ciego"
                description="Tu aerotermia o cargador funcionan al máximo cuando la electricidad es más cara, ignorando si hace sol o no."
              />
              <div className="absolute inset-0 rounded-3xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            {/* LA SOLUCIÓN: ESTILO VERDE LUMINOSO Y DESTACADO (HÉROE) */}
            <div className="relative group rounded-3xl border border-[#84cc16]/50 bg-gradient-to-b from-[#84cc16]/10 to-[#162e20]/40 p-1 md:scale-110 z-10 shadow-[0_0_50px_rgba(132,204,22,0.2)] hover:shadow-[0_0_80px_rgba(132,204,22,0.4)] transition-all duration-500">
              <FeatureCard
                icon={CheckCircle2}
                color="text-[#84cc16]"
                title="El Cerebro Domoteknik"
                description="Unificamos solar, batería, clima y carga. Tu casa decide automáticamente cuándo consumir tu propia energía gratuita."
              />
              {/* Brillo verde intenso */}
              <div className="absolute inset-0 rounded-3xl bg-[#84cc16]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-xl"></div>
            </div>

          </div>
        </section>

        {/* 3. SERVICES GRID */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Arquitectura Energética</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ingeniería Integral. <span className="text-primary">Sin Parches.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                No vendemos paneles, vendemos sistemas. Cada componente se comunica con los demás.
                Todo controlado desde una única app local.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/servicios/fotovoltaica" className="block h-full cursor-pointer group">
                <FeatureCard
                  icon={Sun}
                  color="text-amber-500"
                  title="Generación Solar"
                  description="Paneles Tier-1 con optimizadores. Garantía de producción a 25 años. Energía limpia desde el primer rayo de sol."
                />
              </Link>
              <Link href="/servicios/domotica" className="block h-full cursor-pointer group">
                <FeatureCard
                  icon={Cpu}
                  color="text-[#84cc16]"
                  title="Gestión Inteligente"
                  description="El Miniserver Loxone decide cuándo cargar baterías, cuándo vender a la red y cuándo activar el coche eléctrico."
                />
              </Link>
              <Link href="/servicios/baterias" className="block h-full cursor-pointer group">
                <FeatureCard
                  icon={PlugZap}
                  color="text-blue-500"
                  title="Almacenamiento"
                  description="Baterías de Litio Ferrofosfato (LFP). Máxima seguridad y ciclos de vida. Tu energía, disponible de noche."
                />
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN POR QUÉ: DISEÑO ARQUITECTÓNICO INTEGRADO */}
        <section className="container mx-auto px-4 py-24 relative z-10">

          {/* CONTENEDOR MAESTRO DE CRISTAL */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

            {/* HEADER INTEGRADO (Título dentro de la caja) */}
            <div className="p-8 md:p-10 border-b border-white/10 text-center bg-white/[0.02]">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
                ¿Por qué elegir Domoteknik?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ingeniería real aplicada a tu hogar. Sin atajos. Sin letra pequeña.
              </p>
            </div>

            {/* GRID DE CARACTERÍSTICAS (Con divisores) */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

              {/* CARACTERÍSTICA 1 */}
              <div className="p-8 md:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group">
                <div className="mb-6 p-4 rounded-full bg-[#84cc16]/10 group-hover:bg-[#84cc16]/20 transition-all shadow-[0_0_20px_rgba(132,204,22,0.1)] group-hover:shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                  <Wrench className="w-10 h-10 text-[#84cc16]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instaladores Certificados</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Platinum Partners de Loxone y Victron Energy. Formación continua directa del fabricante.
                </p>
              </div>

              {/* CARACTERÍSTICA 2 */}
              <div className="p-8 md:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group">
                <div className="mb-6 p-4 rounded-full bg-[#84cc16]/10 group-hover:bg-[#84cc16]/20 transition-all shadow-[0_0_20px_rgba(132,204,22,0.1)] group-hover:shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                  <ShieldCheck className="w-10 h-10 text-[#84cc16]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Garantía de Sistema</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  No solo cubrimos el producto. Cubrimos la programación y el funcionamiento conjunto por 5 años.
                </p>
              </div>

              {/* CARACTERÍSTICA 3 */}
              <div className="p-8 md:p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300 group">
                <div className="mb-6 p-4 rounded-full bg-[#84cc16]/10 group-hover:bg-[#84cc16]/20 transition-all shadow-[0_0_20px_rgba(132,204,22,0.1)] group-hover:shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                  <Factory className="w-10 h-10 text-[#84cc16]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ingeniería Propia</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Sin subcontratas opacas. Nuestros ingenieros diseñan, instalan y mantienen tu proyecto.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="relative py-24 flex flex-col items-center text-center px-4">
          {/* Título: Blanco Hueso Grande */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-[#ecfccb] max-w-3xl">
            ¿Cuánto dinero estás perdiendo cada mes?
          </h2>

          {/* Descripción: GRIS ELEGANTE (La clave del cambio) */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Calcula tu potencial de independencia energética en <span className="text-white font-bold">30 segundos</span>.
            Obtén un presupuesto preliminar y un análisis de ROI instantáneo.
          </p>

          {/* Botón: Verde Intenso con Sombra */}
          <Button
            asChild
            size="lg"
            className="h-16 px-12 rounded-full bg-[#84cc16] text-[#0b1d16] hover:bg-[#65a30d] shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Link href="/simulador" className="flex items-center gap-2 text-lg font-black uppercase tracking-wide">
              <PlugZap className="w-6 h-6" strokeWidth={2.5} />
              ABRIR SIMULADOR DE AHORRO
            </Link>
          </Button>

          {/* Footer pequeño: Gris muy sutil */}
          <p className="mt-8 text-sm text-muted-foreground/70">
            Sin compromiso. Sin llamadas de spam. Solo ingeniería.
          </p>
        </section>

      </div>
    </div>
  );
}
