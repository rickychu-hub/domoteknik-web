import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Domoteknik</h3>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Ingeniería experta en soluciones energéticas sostenibles. Transformamos hogares y empresas con tecnología de vanguardia.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/servicios/fotovoltaica" className="hover:text-lime-500 transition-colors">Fotovoltaica</Link></li>
                            <li><Link href="/servicios/aerotermia" className="hover:text-lime-500 transition-colors">Aerotermia</Link></li>
                            <li><Link href="/servicios/domotica" className="hover:text-lime-500 transition-colors">Domótica</Link></li>
                            <li><Link href="/servicios/cargadores" className="hover:text-lime-500 transition-colors">Cargadores VE</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/proyectos" className="hover:text-lime-500 transition-colors">Proyectos</Link></li>
                            <li><Link href="/ecosistema" className="hover:text-lime-500 transition-colors">Ecosistema</Link></li>
                            <li><Link href="/contacto" className="hover:text-lime-500 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>info@domoteknik.com</li>
                            <li>+34 900 000 000</li>
                            <li>Madrid, España</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Domoteknik. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
