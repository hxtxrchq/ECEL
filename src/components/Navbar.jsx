import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ isScrolled }) => {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{ label: 'Inicio', href: '#hero' },
		{ label: 'Sobre Nosotros', href: '#about' },
		{ label: 'Servicios', href: '#services' },
		{ label: 'Proyectos', href: '#projects' },
	]

	const goTo = (href) => {
		const target = document.querySelector(href)

		if (!target) {
			window.location.hash = href
			setIsOpen(false)
			return
		}

		const offset = 88
		const targetTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset)

		window.scrollTo({ top: targetTop, behavior: 'smooth' })
		window.history.replaceState(null, '', href)
		setIsOpen(false)
	}

	return (
		<motion.header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav navbar-scrolled' : 'bg-transparent'}`}
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.35 }}
		>
			<div className="section-shell">
				<div className="flex h-20 sm:h-24 items-center justify-between gap-6">
					<button onClick={() => goTo('#hero')} className="flex items-center text-left">
						<span className="block h-14 w-52 sm:h-16 sm:w-60 lg:h-20 lg:w-65 overflow-hidden rounded-sm">
							<img
							src="/images/header-logo/logo-ecel.png"
							alt="ECEL"
							className="h-full w-full object-cover object-center"
							width="320"
							height="96"
							loading="eager"
							decoding="async"
							/>
						</span>
					</button>

					<nav className={`hidden lg:flex items-center gap-8 text-sm transition-colors duration-300 ${isScrolled ? 'text-brand-light/88' : 'text-brand-beige/80'}`}>
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
						<button onClick={() => goTo('#contact')} className={isScrolled ? 'btn-secondary btn-secondary-scrolled' : 'btn-secondary'}>
							Solicitar presupuesto
						</button>
					</div>

					<button
						className={`lg:hidden rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all duration-300 ${isScrolled ? 'border-white/18 bg-brand-dark/35 text-brand-light shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md' : 'border-brand-beige/20 text-brand-light'}`}
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
										<a
											key={item.href}
											href={item.href}
											onClick={() => setIsOpen(false)}
											className="rounded-2xl px-4 py-3 text-left text-sm text-brand-light transition-colors hover:bg-brand-beige/10"
										>
											{item.label}
										</a>
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
