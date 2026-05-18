import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GallerySection = () => {
	const { ref, inView } = useInView({ threshold: 0.18, triggerOnce: true })

	const items = [
		{ src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&h=900&fit=crop' },
		{ src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=900&fit=crop' },
	]

	return (
			<section id="gallery" className="section-gap bg-brand-light overflow-hidden">
			    <div className="section-shell pb-8" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
					transition={{ duration: 0.7 }}
				>
					<div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							
							<h2 className="mt-4 text-4xl md:text-6xl font-display text-brand-dark">
								Galería visual
							</h2>
						</div>
						<p className="max-w-xl text-sm md:text-base leading-7 text-brand-beige/70">
								Composición visual con obras, detalles constructivos, fachadas, interiores y supervisión en campo.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
						{items.map((item, index) => (
							<motion.figure
								key={item.src}
								className={`group relative aspect-square overflow-hidden`} 
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.35 }}
							>
								<img
									src={item.src}
									alt={`Galería arquitectónica ${index + 1}`}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>
							</motion.figure>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default GallerySection
