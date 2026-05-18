import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AlliesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const brands = [
    { id: 1, name: 'Aliado 1', logo: '/images/brands/brand-1.png' },
    { id: 2, name: 'Aliado 2', logo: '/images/brands/brand-2.png' },
    { id: 3, name: 'Aliado 3', logo: '/images/brands/brand-3.png' },
    { id: 4, name: 'Aliado 4', logo: '/images/brands/brand-4.png' },
    { id: 5, name: 'Aliado 5', logo: '/images/brands/brand-5.png' },
    { id: 6, name: 'Aliado 6', logo: '/images/brands/brand-6.png' },
    { id: 7, name: 'Aliado 7', logo: '/images/brands/brand-7.png' },
    { id: 8, name: 'Aliado 8', logo: '/images/brands/brand-8.png' },
    { id: 9, name: 'Aliado 9', logo: '/images/brands/brand-9.png' },
  ]

  const logoScaleMap = {
  1: 'scale-90 md:scale-65',
  2: 'scale-150 md:scale-150',
  3: 'scale-150 md:scale-150',
  4: 'scale-80 md:scale-70',
  5: 'scale-150 md:scale-150',
  6: 'scale-150 md:scale-150',
  7: 'scale-150 md:scale-150',
  8: 'scale-150 md:scale-150',
  9: 'scale-90 md:scale-95',
}

  return (
    <section id="allies" className="section-gap bg-white py-12 md:py-16">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="eyebrow mb-2 text-black/55">Nuestros aliados</div>
              <h2 className="text-2xl md:text-3xl font-display text-black">
                Empresas que confían en nosotros
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 max-w-2xl mx-auto text-[11px] md:text-xs leading-5 text-black/65"
            >
              Colaboramos con clientes y aliados que confían en nuestra experiencia, compromiso y visión para desarrollar proyectos con respaldo técnico y resultados sólidos.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-x-10 gap-y-12 md:gap-x-16 md:gap-y-16 justify-items-center"
          >
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                className="group flex items-center justify-center"
              >
                <div className="flex items-center justify-center w-[160px] h-[64px] md:w-[220px] md:h-[88px]">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`block w-full h-full object-contain object-center brightness-0 contrast-125 opacity-90 transition-all duration-500 ${logoScaleMap[brand.id] || 'scale-100'}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AlliesSection