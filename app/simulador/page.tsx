"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Factory, Car, X, Zap, ArrowRight, CheckCircle2, Flame, Droplets, Hammer, Wifi, Sun, Lightbulb, Thermometer, Mic2, Shield, Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HousingType = "piso" | "casa" | "nave" | null;
type HeatingType = "gas" | "gasoil" | "electrico" | null;
type DomoticaType = "obra" | "habitada" | null;

function SimuladorContent() {
    const searchParams = useSearchParams();
    const mode = searchParams.get("mode") || "solar"; // 'solar' | 'calefaccion' | 'combo' | 'domotica'

    const totalSteps = mode === "domotica" ? 3 : 4;

    const [step, setStep] = useState(1);

    // Existing States
    const [housing, setHousing] = useState<HousingType>(null);
    const [heating, setHeating] = useState<HeatingType>(null);
    const [bill, setBill] = useState(100);
    const [ev, setEv] = useState<boolean | null>(null);

    // Domotica States
    const [domoticaType, setDomoticaType] = useState<DomoticaType>(null);
    const [domoticaFeatures, setDomoticaFeatures] = useState<string[]>([]);

    const nextStep = () => setStep((prev) => Math.min(totalSteps, prev + 1));
    const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

    const toggleDomoticaFeature = (feature: string) => {
        setDomoticaFeatures(prev =>
            prev.includes(feature)
                ? prev.filter(f => f !== feature)
                : [...prev, feature]
        );
    };

    const calculateSavings = () => {
        let baseSavings = 0;
        if (mode === "solar") {
            baseSavings = (bill * 12) * 0.7;
        } else if (mode === "calefaccion") {
            baseSavings = (bill * 12) * 0.6;
        } else if (mode === "combo") {
            baseSavings = (bill * 12) * 0.9;
        }
        return Math.round(baseSavings);
    };

    const variants = {
        enter: { x: 50, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 },
    };

    const getModeTitle = () => {
        if (mode === "calefaccion") return "Simulador de Aerotermia";
        if (mode === "combo") return "Simulador de Ahorro Total";
        if (mode === "domotica") return "Configurador Smart Home";
        return "Simulador Solar";
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="mb-8 flex justify-between items-center px-2">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">{getModeTitle()} | PASO {step} DE {totalSteps}</span>
                    {step > 1 && step <= totalSteps && (
                        <button onClick={prevStep} className="text-slate-400 hover:text-white text-sm underline">
                            Atrás
                        </button>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-900 rounded-full mb-12 overflow-hidden">
                    <motion.div
                        className="h-full bg-lime-500"
                        initial={{ width: "20%" }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    {/* STEP 1: HOUSING / HEATING / DOMOTICA TYPE */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {mode === "domotica" ? (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold text-center">¿Cuál es la situación de tu vivienda?</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <OptionCard
                                            icon={Hammer} // Obra
                                            label="Obra Nueva / Reforma"
                                            selected={domoticaType === "obra"}
                                            onClick={() => { setDomoticaType("obra"); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={Home} // Habitada
                                            label="Vivienda ya habitada"
                                            selected={domoticaType === "habitada"}
                                            onClick={() => { setDomoticaType("habitada"); nextStep(); }}
                                        />
                                    </div>
                                </>
                            ) : mode === "calefaccion" ? (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold text-center">¿Qué calefacción tienes ahora?</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <OptionCard
                                            icon={Flame}
                                            label="Caldera Gas"
                                            selected={heating === "gas"}
                                            onClick={() => { setHeating("gas"); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={Droplets}
                                            label="Caldera Gasoil"
                                            selected={heating === "gasoil"}
                                            onClick={() => { setHeating("gasoil"); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={Zap}
                                            label="Radiadores Eléctricos"
                                            selected={heating === "electrico"}
                                            onClick={() => { setHeating("electrico"); nextStep(); }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold text-center">¿Qué tipo de propiedad tienes?</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <OptionCard
                                            icon={Building2}
                                            label="Piso / Comunidad"
                                            selected={housing === "piso"}
                                            onClick={() => { setHousing("piso"); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={Home}
                                            label="Casa Unifamiliar"
                                            selected={housing === "casa"}
                                            onClick={() => { setHousing("casa"); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={Factory}
                                            label="Nave / Empresa"
                                            selected={housing === "nave"}
                                            onClick={() => { setHousing("nave"); nextStep(); }}
                                        />
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* STEP 2: BILL (Others) OR FEATURES (Domotica) */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-12 text-center"
                        >
                            {mode === "domotica" ? (
                                <div className="space-y-8">
                                    <h1 className="text-3xl md:text-3xl font-bold">Diseña tu Ecosistema.<br />¿Qué quieres automatizar?</h1>
                                    <p className="text-slate-400 text-sm">Selecciona todas las que apliquen</p>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <MultiSelectCard
                                            icon={Sun} label="Sombreado"
                                            selected={domoticaFeatures.includes("sombreado")}
                                            onClick={() => toggleDomoticaFeature("sombreado")}
                                        />
                                        <MultiSelectCard
                                            icon={Lightbulb} label="Iluminación"
                                            selected={domoticaFeatures.includes("iluminacion")}
                                            onClick={() => toggleDomoticaFeature("iluminacion")}
                                        />
                                        <MultiSelectCard
                                            icon={Thermometer} label="Clima"
                                            selected={domoticaFeatures.includes("clima")}
                                            onClick={() => toggleDomoticaFeature("clima")}
                                        />
                                        <MultiSelectCard
                                            icon={Mic2} label="Audio"
                                            selected={domoticaFeatures.includes("audio")}
                                            onClick={() => toggleDomoticaFeature("audio")}
                                        />
                                        <MultiSelectCard
                                            icon={Shield} label="Seguridad"
                                            selected={domoticaFeatures.includes("seguridad")}
                                            onClick={() => toggleDomoticaFeature("seguridad")}
                                        />
                                    </div>

                                    <button
                                        onClick={nextStep}
                                        disabled={domoticaFeatures.length === 0}
                                        className="bg-lime-500 text-slate-950 font-bold px-12 py-4 rounded-full hover:bg-lime-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Ver Propuesta
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold">
                                        {mode === "calefaccion" ? "¿Cuánto gastas en calefacción al mes?" : "¿Cuál es tu factura media de luz?"}
                                    </h1>

                                    <div className="space-y-6">
                                        <div className="text-6xl font-bold text-lime-500 font-mono">
                                            {bill}€ <span className="text-2xl text-slate-500">/ mes</span>
                                        </div>

                                        <input
                                            type="range"
                                            min="30"
                                            max="800"
                                            step="10"
                                            value={bill}
                                            onChange={(e) => setBill(Number(e.target.value))}
                                            className="w-full max-w-lg h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-lime-500"
                                        />
                                        <p className="text-slate-400 text-sm">Desliza para ajustar tu gasto mensual</p>
                                    </div>

                                    <button
                                        onClick={nextStep}
                                        className="bg-lime-500 text-slate-950 font-bold px-8 py-3 rounded-full hover:bg-lime-400 transition-colors"
                                    >
                                        Siguiente
                                    </button>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* STEP 3: EV (Others) */}
                    {step === 3 && mode !== "domotica" && (
                        <motion.div
                            key="step3"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="space-y-8 text-center"
                        >
                            {mode === "calefaccion" ? (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold">¿Tienes suelo radiante?</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                                        <OptionCard
                                            icon={Home}
                                            label="Sí, tengo suelo radiante"
                                            selected={ev === true}
                                            onClick={() => { setEv(true); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={X}
                                            label="No, tengo radiadores"
                                            selected={ev === false}
                                            onClick={() => { setEv(false); nextStep(); }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-3xl md:text-4xl font-bold">¿Tienes vehículo eléctrico?</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                                        <OptionCard
                                            icon={Car}
                                            label="Sí, tengo o planeo tener"
                                            selected={ev === true}
                                            onClick={() => { setEv(true); nextStep(); }}
                                        />
                                        <OptionCard
                                            icon={X}
                                            label="No, por ahora no"
                                            selected={ev === false}
                                            onClick={() => { setEv(false); nextStep(); }}
                                        />
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* RESULT STEP (Step 4 for normal, Step 3 for domotica) */}
                    {step === totalSteps && (
                        <motion.div
                            key="result"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-3xl mx-auto space-y-8"
                        >
                            {mode === "domotica" ? (
                                <div className="space-y-8">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-xl text-slate-400 uppercase tracking-widest font-medium">Propuesta Técnica</h2>
                                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                                            Tu Ecosistema <span className="text-lime-500">Loxone</span> Recomendado
                                        </h1>
                                        <p className="text-slate-400">
                                            Basado en tecnología <span className="text-white font-bold">{domoticaType === 'obra' ? 'Loxone Tree (Cableado)' : 'Loxone Air (Inalámbrico)'}</span> para máxima estabilidad.
                                        </p>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                                        <div className="space-y-4">
                                            <ResultItem
                                                title={`Miniserver ${domoticaType === 'obra' ? '' : 'Go'} (Gen 2)`}
                                                desc="El cerebro local de tu vivienda. Privacidad 100%."
                                            />
                                            {domoticaFeatures.includes("clima") && (
                                                <ResultItem title="Actuadores Clima Inteligente" desc="Control por zonas y aprendizaje automático." />
                                            )}
                                            {domoticaFeatures.includes("iluminacion") && (
                                                <ResultItem title="Dimmer Extension / Air" desc="Control de luces, escenas y ritmo circadiano." />
                                            )}
                                            {domoticaFeatures.includes("audio") && (
                                                <ResultItem title="Audioserver 4-Zonas" desc="Música multiroom y alarmas integradas." />
                                            )}
                                            {domoticaFeatures.includes("sombreado") && (
                                                <ResultItem title="Nano Relay Air / Tree" desc="Automatización solar de persianas." />
                                            )}
                                            {domoticaFeatures.includes("seguridad") && (
                                                <ResultItem title="Sensores de Presencia & Agua" desc="Protección activa ante intrusión y fugas." />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-4">
                                        <Link
                                            href="/contacto"
                                            className="flex items-center bg-lime-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-lime-400 transition-transform hover:scale-105 shadow-xl shadow-lime-500/20"
                                        >
                                            Solicitar Estudio Técnico <Search className="ml-2 w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                /* EXISTING RESULTS FOR SOLAR/COMBO/CALEF */
                                <div className="space-y-8">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-xl text-slate-400 uppercase tracking-widest font-medium">
                                            {mode === "combo" ? "Ahorro Total Estimado" : "Resultado del Análisis"}
                                        </h2>
                                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                                            Ahorra hasta <span className="text-lime-500">{calculateSavings()}€</span> al año
                                        </h1>
                                        <p className="text-slate-400">
                                            {mode === "combo" && "Combinando Solar + Aerotermia."}
                                            {mode === "calefaccion" && "Sustituyendo tu caldera actual por Aerotermia."}
                                            {mode === "solar" && "Pasándote al autoconsumo inteligente."}
                                        </p>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Zap className="text-lime-500" /> Tu Ecosistema {mode === "combo" ? "Completo" : "Recomendado"}
                                        </h3>
                                        <div className="space-y-4">
                                            {/* SOLAR Items */}
                                            {(mode === "solar" || mode === "combo") && (
                                                <>
                                                    <ResultItem
                                                        title="Instalación Fotovoltaica"
                                                        desc={bill > 150 ? "12 Paneles (550W) Mono PERC" : "8 Paneles (450W) Mono PERC"}
                                                    />
                                                    <ResultItem
                                                        title="Batería Virtual Domoteknik"
                                                        desc="Almacenamiento ilimitado excedentes."
                                                    />
                                                </>
                                            )}
                                            {/* HEATING Items */}
                                            {(mode === "calefaccion" || mode === "combo") && (
                                                <ResultItem
                                                    title="Aerotermia Domoteknik AI"
                                                    desc={ev ? "Equipo Alta Temperatura (Radiadores)" : "Equipo Alta Eficiencia (Suelo Radiante)"}
                                                />
                                            )}
                                            {/* EV Items */}
                                            {(mode === "solar" || mode === "combo") && ev === true && (
                                                <ResultItem
                                                    title="Cargador Inteligente"
                                                    desc="V2C Trydan con balanceo dinámico."
                                                />
                                            )}
                                            <ResultItem
                                                title="Monitorización App"
                                                desc="Control total de producción y consumo."
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-4">
                                        <Link
                                            href="/contacto"
                                            className="flex items-center bg-lime-500 text-slate-950 font-bold px-8 py-4 rounded-full hover:bg-lime-400 transition-transform hover:scale-105 shadow-xl shadow-lime-500/20"
                                        >
                                            Solicitar estudio detallado <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function SimuladorPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Cargando simulador...</div>}>
            <SimuladorContent />
        </Suspense>
    );
}

// Subcomponents

function OptionCard({ icon: Icon, label, selected, onClick }: { icon: any, label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-200 group h-48",
                selected
                    ? "border-lime-500 bg-lime-500/10"
                    : "border-slate-800 bg-slate-900 hover:border-slate-700 hover:bg-slate-800"
            )}
        >
            <Icon className={cn(
                "w-12 h-12 mb-4 transition-colors",
                selected ? "text-lime-500" : "text-slate-400 group-hover:text-white"
            )} />
            <span className={cn(
                "text-lg font-medium",
                selected ? "text-lime-500" : "text-slate-300 group-hover:text-white"
            )}>{label}</span>
        </button>
    )
}

function MultiSelectCard({ icon: Icon, label, selected, onClick }: { icon: any, label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-200 h-40",
                selected
                    ? "border-lime-500 bg-lime-500/10 shadow-[0_0_15px_rgba(132,204,22,0.15)]"
                    : "border-slate-800 bg-slate-900 hover:border-slate-700"
            )}
        >
            <Icon className={cn(
                "w-10 h-10 mb-3 transition-colors",
                selected ? "text-lime-500" : "text-slate-500"
            )} />
            <span className={cn(
                "text-sm font-bold",
                selected ? "text-white" : "text-slate-400"
            )}>{label}</span>
            {selected && <div className="absolute top-2 right-2 w-2 h-2 bg-lime-500 rounded-full"></div>}
        </button>
    )
}

function ResultItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50">
            <CheckCircle2 className="w-6 h-6 text-lime-500 mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-bold text-white text-lg">{title}</h4>
                <p className="text-slate-400">{desc}</p>
            </div>
        </div>
    )
}
