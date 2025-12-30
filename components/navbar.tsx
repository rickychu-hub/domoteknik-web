"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Battery, Wind, Zap, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

const links = [
    { href: "/servicios", label: "Servicios" },
    { href: "/ecosistema", label: "Ecosistema" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Domoteknik
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {links.map((link) => {
                        if (link.label === "Servicios") {
                            return (
                                <div key={link.href} className="group relative">
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64">
                                        <div className="bg-[#0b1d16]/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-2xl overflow-hidden">
                                            {[
                                                { href: "/servicios/fotovoltaica", label: "Fotovoltaica", icon: Sun },
                                                { href: "/servicios/baterias", label: "Baterías", icon: Battery },
                                                { href: "/servicios/aerotermia", label: "Aerotermia", icon: Wind },
                                                { href: "/servicios/cargadores", label: "Cargadores", icon: Zap },
                                                { href: "/servicios/domotica", label: "Domótica", icon: Brain },
                                            ].map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#84cc16]/10 hover:text-[#84cc16] text-slate-300 transition-all group/item"
                                                >
                                                    <subItem.icon className="w-4 h-4 text-slate-400 group-hover/item:text-[#84cc16]" />
                                                    <span className="text-sm font-medium">{subItem.label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <ModeToggle />
                    <Link
                        href="/simulador"
                        className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Diseña tu Ecosistema
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-slate-950"
                    >
                        <div className="space-y-1 px-4 py-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/simulador"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full rounded-md bg-lime-500 px-3 py-2 text-center text-base font-bold text-slate-950 hover:bg-lime-400"
                                >
                                    Diseña tu Ecosistema
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
