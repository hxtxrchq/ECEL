import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

const ProjectsSection = () => {
	const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
	const [activeCard, setActiveCard] = useState(null)

	const projects = [
		{
			title: 'Edificio Santa Clara – Trujillo',
			category: 'Proyecto multifamiliar',
			description: 'Desarrollo residencial con enfoque en calidad de ejecución, control técnico, compatibilización de especialidades y detalle arquitectónico.',
			image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900&h=1200&fit=crop',
			href: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&h=2000&fit=crop',
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Edificio%20Santa%20Clara%20%E2%80%93%20Trujillo.',
		},
		{
			title: 'Cancha de Bochas – Lima',
			category: 'Infraestructura urbana',
			description: 'Proyecto de cancha de bochas en el Jockey Plaza con enfoque funcional, orden espacial y correcta resolución de uso.',
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1200&fit=crop',
			href: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=2000&fit=crop',
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Cancha%20de%20Bochas%20%E2%80%93%20Lima.',
		},
		{
			title: 'Rephop – Trujillo',
			category: 'Desarrollo comercial',
			description: 'Proyecto de minimarket para Repsol con coordinación técnica, imagen corporativa y orden constructivo.',
			image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=1200&fit=crop',
			href: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=2000&fit=crop',
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Rephop%20%E2%80%93%20Trujillo.',
		},
		{
			title: 'Villa Irene – Chimbote',
			category: 'Habilitación urbana',
			description: 'Proyecto de habilitación urbana en Chimbote con control del trazo, servicios y ejecución ordenada.',
			image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=1200&fit=crop',
			href: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&h=2000&fit=crop',
			cta: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20informaci%C3%B3n%20del%20proyecto%20Residencial%20Villa%20Irene%20%E2%80%93%20Chimbote.',
		},
	]

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

					<div className="grid gap-5 md:grid-cols-2">
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
														<div className="max-w-[12ch]">
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

											<div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#121214] via-[#0d0d0f] to-[#080809] p-6 text-brand-light [backface-visibility:hidden] [transform:rotateY(180deg)]">
												<div>
													<div className="text-[10px] uppercase tracking-[0.35em] text-brand-beige/60">
														{project.category}
													</div>
													<h3 className="mt-4 text-2xl md:text-3xl font-display leading-[0.95]">
														{project.title}
													</h3>
												</div>

												<p className="max-w-sm text-sm leading-6 text-brand-beige/78">
													{project.description}
												</p>

												<div className="flex items-center justify-between border-t border-brand-beige/10 pt-4">
													<span className="text-[10px] uppercase tracking-[0.3em] text-brand-beige/45">
														0{index + 1} / 04
													</span>
													<a
														href={project.cta}
														target="_blank"
														rel="noreferrer"
														className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-brand-light/85"
													>
														Consultar
														<FiExternalLink />
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
		</section>
	)
}

export default ProjectsSection
