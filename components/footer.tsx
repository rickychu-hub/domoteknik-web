import Link from "next/link";
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0b1d16]/80 backdrop-blur-md border-t border-white/10 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* 1. Brand */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight mb-2">DOMOTEKNIK</h3>
                            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                                Ingeniería energética para el hogar del futuro. Sin concesiones.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-slate-400 hover:text-[#84cc16] transition-colors"><Github className="w-5 h-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-[#84cc16] transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="text-slate-400 hover:text-[#84cc16] transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* 2. Services */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Servicios</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/servicios/fotovoltaica" className="hover:text-[#84cc16] transition-colors">Fotovoltaica</Link></li>
                            <li><Link href="/servicios/baterias" className="hover:text-[#84cc16] transition-colors">Baterías & Backup</Link></li>
                            <li><Link href="/servicios/aerotermia" className="hover:text-[#84cc16] transition-colors">Aerotermia</Link></li>
                            <li><Link href="/servicios/cargadores" className="hover:text-[#84cc16] transition-colors">Cargadores V.E.</Link></li>
                            <li><Link href="/servicios/domotica" className="hover:text-[#84cc16] transition-colors">Domótica Loxone</Link></li>
                        </ul>
                    </div>

                    {/* 3. Company */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/ecosistema" className="hover:text-[#84cc16] transition-colors">El Ecosistema</Link></li>
                            <li><Link href="/proyectos" className="hover:text-[#84cc16] transition-colors">Proyectos Realizados</Link></li>
                            <li><Link href="/contacto" className="hover:text-[#84cc16] transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* 4. Quick Contact */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Contacto Directo</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#84cc16] mt-0.5" />
                                <span>info@domoteknik.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#84cc16] mt-0.5" />
                                <span>+34 900 000 000</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#84cc16] mt-0.5" />
                                <span>Edificio High Tech, Madrid<br />España</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} Domoteknik S.L. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-slate-400 transition-colors">Aviso Legal</Link>
                        <Link href="#" className="hover:text-slate-400 transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-slate-400 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
