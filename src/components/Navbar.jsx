import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ isScrolled }) => {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{ label: 'Inicio', href: '#hero' },
		{ label: 'Sobre Nosotros', href: '#about' },
		{ label: 'Aliados', href: '#allies' },
		{ label: 'Servicios', href: '#services' },
		{ label: 'Proyectos', href: '#projects' },
		{ label: 'Contacto', href: '#contact' },
	]

	const goTo = (href) => {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
		setIsOpen(false)
	}

	return (
		<motion.header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav' : 'bg-transparent'}`}
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.35 }}
		>
			<div className="section-shell">
				<div className="flex h-20 items-center justify-between gap-6">
					<button onClick={() => goTo('#hero')} className="flex items-center gap-3 text-left">
						<span className="font-display text-3xl tracking-[0.08em] text-brand-light">ECEL</span>
						<span className="hidden md:block text-[0.62rem] uppercase tracking-[0.35em] text-brand-beige/75">
							Ingeniería y Construcción
						</span>
					</button>

					<nav className="hidden lg:flex items-center gap-8 text-sm text-brand-beige/80">
						{links.map((item) => (
							<button
								key={item.href}
								onClick={() => goTo(item.href)}
								className="transition-colors duration-300 hover:text-brand-light"
							>
								{item.label}
							</button>
						))}
					</nav>

					<div className="hidden md:block">
						<button onClick={() => goTo('#contact')} className="btn-secondary">
							Solicitar reunión
						</button>
					</div>

					<button
						className="lg:hidden rounded-full border border-brand-beige/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-light"
						onClick={() => setIsOpen((value) => !value)}
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
						>
							<div className="card-soft overflow-hidden p-4">
								<div className="flex flex-col gap-2">
									{links.map((item) => (
										<button
											key={item.href}
											onClick={() => goTo(item.href)}
											className="rounded-2xl px-4 py-3 text-left text-sm text-brand-light transition-colors hover:bg-brand-beige/10"
										>
											{item.label}
										</button>
									))}
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
