import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const links = [
        { label: 'Inicio', href: '#hero' },
        { label: 'Sobre Nosotros', href: '#about' },
        { label: 'Servicios', href: '#services' },
        { label: 'Proyectos', href: '#projects' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const goTo = (href) => {
        const target = document.querySelector(href)

        if (!target) {
            window.location.hash = href
            setIsOpen(false)
            return
        }

        const offset = 88
        const targetTop = Math.max(
            0,
            target.getBoundingClientRect().top + window.scrollY - offset
        )

        window.scrollTo({ top: targetTop, behavior: 'smooth' })
        window.history.replaceState(null, '', href)
        setIsOpen(false)
    }

    return (
        <motion.header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
                isScrolled
                    ? 'border-white/10 bg-brand-dark/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]'
                    : 'border-transparent bg-transparent'
            }`}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
        >
            <div className="section-shell">
                <div className="flex h-20 sm:h-24 items-center justify-between gap-6">
                    <button
                        onClick={() => goTo('#hero')}
                        className="flex items-center text-left"
                        aria-label="Ir al inicio"
                    >
                        <span className="block h-14 w-52 overflow-hidden rounded-sm sm:h-16 sm:w-60 lg:h-20 lg:w-65">
                            <img
                                src="/images/header-logo/logo-ecel.png"
                                alt="ECEL"
                                className="h-full w-full object-contain object-left"
                                width="320"
                                height="96"
                                loading="eager"
                                decoding="async"
                            />
                        </span>
                    </button>

                    <nav
                        className={`hidden lg:flex items-center gap-8 text-sm transition-colors duration-300 ${
                            isScrolled ? 'text-brand-light/90' : 'text-brand-beige/80'
                        }`}
                    >
                        {links.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => goTo(item.href)}
                                className="transition-colors duration-300 hover:text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex flex-col items-center translate-y-[4px]">
                        <button
                            onClick={() => goTo('#contact')}
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:bg-white/92"
                        >
                            Solicitar presupuesto
                        </button>

                        <a
                            href="tel:987382111"
                            className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-brand-light/82 transition-colors duration-300 hover:text-white"
                        >
                            <FiPhone className="text-[13px] text-brand-light/70" />
                            987382111
                        </a>
                    </div>

                    <button
                        className={`lg:hidden rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
                            isScrolled
                                ? 'border-white/18 bg-brand-dark/35 text-brand-light shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md'
                                : 'border-brand-beige/20 text-brand-light'
                        }`}
                        onClick={() => setIsOpen((value) => !value)}
                        aria-label="Abrir menú"
                    >
                        Menú
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen ? (
                        <motion.div
                            className="lg:hidden pb-6"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="overflow-hidden px-1 pt-3">
                                <div className="flex flex-col gap-1.5">
                                    {links.map((item) => (
                                        <button
                                            key={item.href}
                                            onClick={() => goTo(item.href)}
                                            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-brand-light transition-colors duration-300 hover:bg-white/5 hover:text-white"
                                        >
                                            {item.label}
                                        </button>
                                    ))}

                                    <div className="my-2 h-px bg-white/8" />

                                    <button
                                        onClick={() => goTo('#contact')}
                                        className="px-4 py-3 text-left text-sm font-semibold text-brand-light transition-colors duration-300 hover:text-white"
                                    >
                                        Solicitar presupuesto
                                    </button>

                                    <a
                                        href="tel:987382111"
                                        className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-brand-light/75 transition-colors duration-300 hover:text-white"
                                    >
                                        <FiPhone className="text-[15px]" />
                                        987382111
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Navbar