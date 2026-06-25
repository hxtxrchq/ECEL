import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowLeft, FiArrowRight, FiX, FiExternalLink, FiImage } from 'react-icons/fi'

const ProjectsSection = () => {
	const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
	const [activeCard, setActiveCard] = useState(null)
	const [galleryProject, setGalleryProject] = useState(null)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const projects = [
		{
			title: 'Villa Irene',
			category: 'Habilitación urbana',
			description: 'Proyecto de habilitación urbana y saneamiento integral de predios, asegurando la viabilidad técnica y legal del desarrollo inmobiliario.',
			image: '/images/portfolio/VILLA IRENE/1.jpg',
			images: [
				'/images/portfolio/VILLA IRENE/1.jpg',
				'/images/portfolio/VILLA IRENE/2.jpg',
				'/images/portfolio/VILLA IRENE/3.jpg',
				'/images/portfolio/VILLA IRENE/4.jpg',
				'/images/portfolio/VILLA IRENE/5.jpg',
				'/images/portfolio/VILLA IRENE/6.jpg',
				'/images/portfolio/VILLA IRENE/7.jpg',
				'/images/portfolio/VILLA IRENE/8.jpg',
				'/images/portfolio/VILLA IRENE/9.jpg',
				'/images/portfolio/VILLA IRENE/10.jpg'
			],
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Villa%20Irene.',
		},
		{
			title: 'Ampliación de Almacenes',
			category: 'Infraestructura industrial',
			description: 'Ampliación estructural de naves industriales y almacenes con enfoque en constructibilidad, optimización de espacios y estándares de seguridad.',
			image: '/images/portfolio/AMPLIACIÓN DE ALMACENES/1.jpg',
			images: [
				'/images/portfolio/AMPLIACIÓN DE ALMACENES/1.jpg',
				'/images/portfolio/AMPLIACIÓN DE ALMACENES/2.jpg',
				'/images/portfolio/AMPLIACIÓN DE ALMACENES/3.jpg'
			],
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Ampliaci%C3%B3n%20de%20Almacenes.',
		},
		{
			title: 'Remodelación de Oficinas',
			category: 'Arquitectura comercial',
			description: 'Rediseño, distribución arquitectónica y remodelación de oficinas corporativas con acabados premium y optimización ergonómica.',
			image: '/images/portfolio/REMODELACIÓN DE OFICINAS/1.jpg',
			images: [
				'/images/portfolio/REMODELACIÓN DE OFICINAS/1.jpg',
				'/images/portfolio/REMODELACIÓN DE OFICINAS/2.jpg',
				'/images/portfolio/REMODELACIÓN DE OFICINAS/3.jpg',
				'/images/portfolio/REMODELACIÓN DE OFICINAS/4.jpg'
			],
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Remodelaci%C3%B3n%20de%20Oficinas.',
		},
	]

	const openGallery = (project) => {
		setGalleryProject(project)
		setCurrentImageIndex(0)
	}

	const closeGallery = () => {
		setGalleryProject(null)
	}

	const nextImage = (e) => {
		if (e) e.stopPropagation()
		if (!galleryProject) return
		setCurrentImageIndex((prev) => (prev + 1) % galleryProject.images.length)
	}

	const prevImage = (e) => {
		if (e) e.stopPropagation()
		if (!galleryProject) return
		setCurrentImageIndex((prev) => (prev - 1 + galleryProject.images.length) % galleryProject.images.length)
	}

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!galleryProject) return
			if (e.key === 'ArrowRight') nextImage()
			if (e.key === 'ArrowLeft') prevImage()
			if (e.key === 'Escape') closeGallery()
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [galleryProject])

	useEffect(() => {
		if (galleryProject) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [galleryProject])

	return (
		<section id="projects" className="section-gap bg-brand-dark scroll-mt-24 md:scroll-mt-28">
			<div className="section-shell" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.7 }}
				>
					<div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<div className="eyebrow text-brand-beige/70">Portafolio</div>
							<h2 className="mt-4 text-4xl md:text-6xl font-display text-brand-light">
								Proyectos
							</h2>
						</div>
						<p className="max-w-2xl text-sm md:text-base leading-7 text-brand-beige/78">
							Cada proyecto de ECEL refleja nuestro compromiso con la calidad, la eficiencia y la confianza en cada etapa de ejecución.
						</p>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{projects.map((project, index) => {
							const isActive = activeCard === index

							return (
								<div key={project.title} style={{ perspective: '1600px' }}>
									<motion.button
										type="button"
										className="group relative h-[420px] w-full overflow-hidden rounded-[1.75rem] border border-brand-beige/10 bg-brand-dark text-left shadow-editorial outline-none transition-transform duration-300 focus:ring-2 focus:ring-brand-beige/25"
										onClick={() => setActiveCard(isActive ? null : index)}
										onKeyDown={(event) => {
											if (event.key === 'Enter' || event.key === ' ') {
												event.preventDefault()
												setActiveCard(isActive ? null : index)
											}
										}}
										aria-pressed={isActive}
										whileHover={{ y: -8 }}
										transition={{ duration: 0.35 }}
									>
										<div
											className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]"
											style={isActive ? { transform: 'rotateY(180deg)' } : undefined}
										>
											{/* Front side */}
											<div className="absolute inset-0 [backface-visibility:hidden]">
												<img
													src={project.image}
													alt={project.title}
													className="h-full w-full object-cover"
													loading="lazy"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/28 to-black/5" />
												<div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between text-brand-light">
													<div className="flex items-start justify-between gap-4">
														<div>
															<div className="text-[10px] uppercase tracking-[0.35em] text-brand-beige/75">
																{project.category}
															</div>
															<h3 className="mt-3 text-2xl md:text-3xl font-display leading-[0.95]">
																{project.title}
															</h3>
														</div>
														<div className="text-[10px] uppercase tracking-[0.35em] text-brand-beige/55">
															0{index + 1}
														</div>
													</div>
												</div>
											</div>

											{/* Back side */}
											<div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#121214] via-[#0d0d0f] to-[#080809] p-6 text-brand-light [backface-visibility:hidden] [transform:rotateY(180deg)]">
												<div>
													<div className="text-[10px] uppercase tracking-[0.35em] text-brand-beige/60">
														{project.category}
													</div>
													<h3 className="mt-4 text-2xl md:text-3xl font-display leading-[0.95]">
														{project.title}
													</h3>
												</div>

												<p className="max-w-sm text-sm leading-6 text-brand-beige/78 text-justify">
													{project.description}
												</p>

												<div className="flex items-center justify-between border-t border-brand-beige/10 pt-4">
													<button
														type="button"
														onClick={(e) => {
															e.stopPropagation()
															openGallery(project)
														}}
														className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-brand-light/85 hover:text-emerald-500 hover:scale-105 transition-all duration-300 font-bold"
													>
														<FiImage size={14} />
														Ver fotos
													</button>
													<a
														href={project.cta}
														target="_blank"
														rel="noreferrer"
														onClick={(e) => e.stopPropagation()}
														className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-brand-light/85 hover:text-white hover:scale-105 transition-all duration-300 font-bold"
													>
														Consultar
														<FiExternalLink size={14} />
													</a>
												</div>
											</div>
										</div>
									</motion.button>
								</div>
							)
						})}
					</div>
				</motion.div>
			</div>

			{/* Gallery Lightbox Modal */}
			<AnimatePresence>
				{galleryProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeGallery}
						className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-6 backdrop-blur-md select-none"
					>
						{/* Close Button */}
						<button
							onClick={closeGallery}
							className="absolute top-4 right-4 z-[110] rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 outline-none"
							aria-label="Cerrar galería"
						>
							<FiX size={20} />
						</button>

						{/* Carousel Container */}
						<div 
							className="relative group flex items-center justify-center w-full max-w-4xl h-[60vh] md:h-[70vh] px-4" 
							onClick={(e) => e.stopPropagation()}
						>
							{/* Left Navigation Arrow */}
							<button
								onClick={prevImage}
								className="absolute left-6 z-[110] rounded-full bg-black/40 border border-white/10 p-3 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
								aria-label="Imagen anterior"
							>
								<FiArrowLeft size={20} />
							</button>

							{/* Main Image Container */}
							<div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-2xl border border-white/10 bg-black/40">
								<motion.img
									key={currentImageIndex}
									src={galleryProject.images[currentImageIndex]}
									alt={`${galleryProject.title} - Foto ${currentImageIndex + 1}`}
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.96 }}
									transition={{ duration: 0.25 }}
									className="absolute max-w-full max-h-full object-contain"
								/>
							</div>

							{/* Right Navigation Arrow */}
							<button
								onClick={nextImage}
								className="absolute right-6 z-[110] rounded-full bg-black/40 border border-white/10 p-3 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
								aria-label="Siguiente imagen"
							>
								<FiArrowRight size={20} />
							</button>
						</div>

						{/* Title & Counter */}
						<div className="mt-4 text-center text-brand-light z-[110]" onClick={(e) => e.stopPropagation()}>
							<h4 className="text-lg md:text-xl font-display uppercase tracking-widest text-brand-light/90">
								{galleryProject.title}
							</h4>
							<p className="text-xs text-brand-beige/50 mt-1">
								{currentImageIndex + 1} de {galleryProject.images.length}
							</p>
						</div>

						{/* Thumbnails Navigation Bar */}
						<div 
							className="mt-6 flex gap-2.5 overflow-x-auto max-w-full px-4 py-2 scrollbar-none z-[110]" 
							onClick={(e) => e.stopPropagation()}
						>
							{galleryProject.images.map((img, idx) => (
								<button
									key={idx}
									onClick={() => setCurrentImageIndex(idx)}
									className={`relative h-12 w-16 md:h-16 md:w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
										idx === currentImageIndex 
											? 'border-emerald-500 scale-105 shadow-md shadow-emerald-950/50' 
											: 'border-transparent opacity-40 hover:opacity-80'
									}`}
								>
									<img src={img} alt="" className="h-full w-full object-cover" />
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default ProjectsSection
