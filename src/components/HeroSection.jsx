import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const HeroSection = () => {
	const slides = [
		{
			src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&h=900&q=70',
			alt: 'Edificio corporativo y contexto inmobiliario',
		},
		{
			src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&h=900&q=70',
			alt: 'Detalle arquitectónico de obra contemporánea',
		},
		{
			src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&h=900&q=70',
			alt: 'Obra e infraestructura moderna',
		},
	]

	const [activeSlide, setActiveSlide] = useState(0)

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveSlide((current) => (current + 1) % slides.length)
		}, 5200)

		return () => window.clearInterval(timer)
	}, [slides.length])

	return (
		<section id="hero" className="relative min-h-[100svh] overflow-hidden pt-20 group">
				<div className="absolute inset-0">
					<AnimatePresence mode="wait">
						<motion.img
							key={activeSlide}
							src={slides[activeSlide].src}
							alt={slides[activeSlide].alt}
							className="h-full w-full object-cover"
							loading={activeSlide === 0 ? 'eager' : 'lazy'}
							decoding="async"
							initial={{ opacity: 0, scale: 1.06 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 1.03 }}
							transition={{ duration: 1.05, ease: 'easeInOut' }}
						/>
					</AnimatePresence>
					<div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/50" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
				</div>

				<div className="relative section-shell min-h-[calc(100svh-5rem)] flex items-center">
					<motion.div
						className="max-w-3xl py-20 lg:py-29 -translate-y-2 sm:-translate-y-4 lg:-translate-y-6"
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<div className="mb-4 text-brand-beige/90">
							<div className="text-sm uppercase tracking-widest font-semibold">ECEL Ingeniería y Construcción</div>
						</div>

						<h1 className="editorial-title text-brand-light leading-tight">
							Construimos confianza, edificamos tu futuro
						</h1>

						<p className="mt-6 max-w-2xl text-base leading-7 text-brand-beige/80 md:text-lg">
							Cada proyecto es una nueva historia que merece ser contada con pasión y excelencia.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-4">
							<a href="#contact" className="btn-primary inline-flex items-center">
								Solicitar presupuesto
								<FiArrowRight className="ml-3" />
							</a>
							<a href="#projects" className="btn-secondary">
								Portafolio
							</a>
						</div>

					</motion.div>
				</div>
			</section>
	)
}

export default HeroSection
