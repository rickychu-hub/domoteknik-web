import Link from "next/link";
import { Zap, Sun, Award, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tu Hogar Desconectado de la Red",
  description: "Ingeniería energética premium. Instalamos placas solares Full Black, Aerotermia silenciosa y Cargadores EV. Sin comerciales, solo ingenieros.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Tu hogar, <br className="hidden md:block" />
          <span className="text-lime-500">desconectado</span> de la red.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
          Genera, almacena y gestiona tu propia energía. El ecosistema integral para la independencia energética.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/simulador"
            className="rounded-full bg-lime-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
          >
            Diseña tu Ecosistema
          </Link>
          <Link
            href="/servicios"
            className="rounded-full bg-slate-800 px-8 py-4 text-base font-medium text-white hover:bg-slate-700 transition-all"
          >
            Explorar Servicios
          </Link>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="w-full max-w-5xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Fotovoltaica */}
          <Link href="/servicios/fotovoltaica" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-lime-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sun className="w-32 h-32 text-lime-500" />
            </div>
            <Sun className="w-10 h-10 text-lime-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Fotovoltaica</h3>
            <p className="text-slate-400 mb-6">Generación solar de alta eficiencia con paneles Full Black.</p>
            <div className="flex items-center text-lime-500 font-medium group-hover:text-lime-400">
              Ver Soluciones <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>

          {/* Card 2: Aerotermia */}
          <Link href="/servicios/aerotermia" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-lime-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32 text-lime-500" />
            </div>
            <Zap className="w-10 h-10 text-lime-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Aerotermia</h3>
            <p className="text-slate-400 mb-6">Climatización eficiente (frío/calor) sin gas ni emisiones.</p>
            <div className="flex items-center text-lime-500 font-medium group-hover:text-lime-400">
              Ver Sistemas <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>

          {/* Card 3: Cargadores */}
          <Link href="/servicios/cargadores" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-lime-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32 text-lime-500" />
            </div>
            <Zap className="w-10 h-10 text-lime-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Cargadores VE</h3>
            <p className="text-slate-400 mb-6">Puntos de recarga inteligente para tu vehículo eléctrico.</p>
            <div className="flex items-center text-lime-500 font-medium group-hover:text-lime-400">
              Ver Cargadores <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>

          {/* Card 4: Domótica */}
          <Link href="/servicios/domotica" className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-lime-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-32 h-32 text-lime-500" />
            </div>
            <Award className="w-10 h-10 text-lime-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Domótica</h3>
            <p className="text-slate-400 mb-6">Control total de tu ecosistema energético desde el móvil.</p>
            <div className="flex items-center text-lime-500 font-medium group-hover:text-lime-400">
              Ver Smart Home <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
