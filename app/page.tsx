import Link from "next/link";
import {
  ArrowRight, Sun, Wind, PlugZap, BrainCircuit,
  Cpu, Wrench, ShieldCheck, CheckCircle2, Factory,
  LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- COMPONENTS ---
const ServiceCard = ({ icon: Icon, title, desc, href, colorClass }: { icon: any, title: string, desc: string, href: string, colorClass: string }) => (
  <Link href={href} className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500", colorClass.replace("text-", "bg-"))} />
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors", "bg-slate-950 group-hover:bg-slate-900", colorClass)}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 group-hover:text-white">
      Explorar <ArrowRight className="w-3 h-3" />
    </div>
  </Link>
);

const AuthorityPillar = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className="flex flex-col items-center text-center gap-4 p-6">
    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-2", color)}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-lime-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-16">
        {/* Tech Mesh Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#84cc1610,transparent)] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight">
            Autonomía Energética <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Inteligente.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Integramos Solar, Baterías y Aerotermia en un ecosistema único.<br className="hidden md:block" />
            Ingeniería de precisión para quienes buscan control total, no parches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/simulador" className="w-full sm:w-auto bg-lime-500 text-slate-950 font-black px-8 py-4 rounded-full text-lg hover:bg-lime-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(132,204,22,0.3)] flex items-center justify-center gap-2">
              DISEÑA TU ECOSISTEMA <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/proyectos" className="w-full sm:w-auto border border-slate-700 text-slate-200 font-bold px-8 py-4 rounded-full text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Nuestra Ingeniería <LayoutGrid className="w-5 h-5 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* 2. PROBLEM VS SOLUTION */}
      <section className="py-24 px-4 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* The Past */}
          <div className="space-y-6 text-center md:text-right border-b md:border-b-0 md:border-r border-slate-800 pb-12 md:pb-0 md:pr-12 md:mr-12 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs">El Problema</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">La Red es el Pasado</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Subidas del 400% en 10 años. Cortes de suministro en momentos críticos. Dependencia total de geopolítica y corporaciones. <br />
              <span className="text-red-400 font-bold">Estás pagando un alquiler que nunca termina.</span>
            </p>
          </div>

          {/* The Future */}
          <div className="space-y-6 text-center md:text-left">
            <span className="text-lime-500 font-bold tracking-widest uppercase text-xs">La Solución</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">La Independencia es Futuro</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Coste fijo y predecible. Control total de tu producción con Baterías LFP. Valor patrimonial para tu vivienda desde el primer día. <br />
              <span className="text-lime-400 font-bold">Tu casa empieza a trabajar para ti.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Arquitectura Energética</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ingeniería Integral. <span className="text-lime-500">Sin Parches.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No instalamos paneles; diseñamos plantas de generación de energía. Cada componente se comunica con el siguiente para maximizar la eficiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Energía Solar"
              desc="Paneles N-Type de máxima eficiencia. Generación optimizada incluso con sombras parciales."
              icon={Sun}
              href="/servicios/solar"
              colorClass="text-yellow-500"
            />
            <ServiceCard
              title="Baterías & Backup"
              desc="Almacenaje inteligente LFP. Energía 24/7 y protección total ante apagones."
              icon={Factory}
              href="/servicios/baterias"
              colorClass="text-emerald-500"
            />
            <ServiceCard
              title="Aerotermia"
              desc="Climatización invisible. Calor y frío con un COP de 5.0. Adiós al gas para siempre."
              icon={Wind}
              href="/servicios/aerotermia"
              colorClass="text-blue-500"
            />
            <ServiceCard
              title="Carga V.E."
              desc="Cargadores con balanceo dinámico. Carga tu coche con el sol, gratis."
              icon={PlugZap}
              href="/servicios/cargadores"
              colorClass="text-purple-500"
            />
          </div>
          {/* Domotica Highlight */}
          <div className="mt-6">
            <Link href="/servicios/domotica" className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-slate-900 transition-colors">
              <div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center text-lime-500 shrink-0">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-2xl font-bold text-white">El Cerebro: Loxone Automation</h3>
                <p className="text-slate-400">Todo el ecosistema orquestado por un único miniserver. La energía fluye a donde más se necesita, automáticamente.</p>
              </div>
              <div className="shrink-0 bg-lime-500/10 text-lime-500 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider group-hover:bg-lime-500 group-hover:text-slate-950 transition-all">
                Explorar Loxone
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. AUTHORITY (WHY US) */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <AuthorityPillar
            icon={Cpu}
            title="Ingeniería In-House"
            desc="No somos comerciales con un catálogo. Somos ingenieros diseñando sistemas a medida basándonos en tu curva de carga real."
            color="bg-lime-500/10 text-lime-500"
          />
          <AuthorityPillar
            icon={Wrench}
            title="Instalación Quirúrgica"
            desc="Nuestros técnicos no son subcontratas. Cableado oculto, protecciones industriales de grado Schneider/ABB y limpieza extrema."
            color="bg-blue-500/10 text-blue-500"
          />
          <AuthorityPillar
            icon={ShieldCheck}
            title="Garantía Proactiva"
            desc="Monitorización remota 24/7. Si un inversor falla, nos enteramos (y lo solucionamos) antes de que tú veas la alerta."
            color="bg-purple-500/10 text-purple-500"
          />
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 px-4 relative overflow-hidden group">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-lime-500/5 group-hover:bg-lime-500/10 transition-colors duration-1000"></div>
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1)_0%,transparent_50%)] animate-spin-slow opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            ¿Cuánto dinero estás <br /> perdiendo cada mes?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Calcula tu potencial de independencia energética en <strong>30 segundos</strong>. Obtén un presupuesto preliminar y un análisis de ROI instantáneo.
          </p>
          <Link href="/simulador" className="inline-flex items-center gap-3 bg-lime-500 text-slate-950 font-black px-10 py-6 rounded-2xl text-xl md:text-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(132,204,22,0.4)]">
            <PlugZap className="w-8 h-8" /> ABRIR SIMULADOR DE AHORRO
          </Link>
          <p className="text-sm text-slate-500 pt-4">
            Sin compromiso. Sin llamadas de spam. Solo ingeniería.
          </p>
        </div>
      </section>
    </div>
  );
}
