import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiHome, FiClipboard, FiLayers, FiShield } from 'react-icons/fi'

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const services = [
    {
      icon: FiHome,
      title: 'Construcción',
      description: 'Transformamos entornos mediante la ejecución integral de infraestructura vial, hidráulica, comercial, residencial y logística. Desarrollamos proyectos complejos de alta exigencia técnica, garantizando el cumplimiento estricto de la normativa vigente. Sustentamos cada obra en los más elevados estándares internacionales de calidad, seguridad y preservación ambiental.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=900&fit=crop',
      link: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20consultar%20sobre%20el%20servicio%20de%20construcci%C3%B3n.',
    },
    {
      icon: FiClipboard,
      title: 'Supervisión de Proyectos',
      description: 'Garantizamos el controlestricto del expediente técnico, financiero y normativo de su inversión en cada etapa del proyecto. Nuestra supervisión técnica de alta exigencia asegura el cumplimiento milimétrico del expediente, especificaciones y plazos, optimizando costos bajo estándares de calidad total y cero riesgos legales.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=900&fit=crop',
      link: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20consultar%20sobre%20la%20supervisi%C3%B3n%20de%20proyectos.',
    },
    {
      icon: FiLayers,
      title: 'Proyectos de Arquitectónicos e Ingeniería',
      description: 'Desarrollamos proyectos arquitectónicos y de ingeniería de alta precisión para el sector público y privado. Transformamos visiones en expedientes técnicos viables, eficientes y rigurosamente alineados a las normativas vigentes, garantizando constructibilidad, optimización de costos y éxito en las fases de aprobación y ejecución.',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=700&h=900&fit=crop',
      link: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20consultar%20sobre%20proyectos%20de%20ingenier%C3%ADa.',
    },
    {
      icon: FiShield,
      title: 'Saneamiento técnico y legal de propiedades',
      description: 'Garantizamos la seguridad jurídica y el blindaje de sus activos inmobiliarios mediante el saneamiento físico-legal integral. Resolvemos contingencias técnicas y legales con absoluta rigurosidad, asegurando la inscripción definitiva de sus derechos de propiedad ante la SUNARP, municipalidades y gobiernos regionales, bajo el estricto cumplimiento de la normativa vigente.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&h=900&fit=crop',
      link: 'https://wa.me/51987382111?text=Hola%20ECEL,%20quiero%20consultar%20sobre%20saneamiento%20de%20propiedades.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="section-gap bg-brand-light scroll-mt-24 md:scroll-mt-28">
      <div className="section-shell" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="max-w-3xl mb-14">
            <motion.h2
              className="text-4xl md:text-6xl font-display leading-none text-brand-dark"
              variants={itemVariants}
            >
              Servicios
            </motion.h2>
            <motion.p
              className="mt-5 max-w-xl text-brand-dark/60 leading-7"
              variants={itemVariants}
            >
              Portafolio tecnico orientado a ejecucion, supervision y cumplimiento normativo.
            </motion.p>
            <div className="kicker-line mt-6" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.a
                  key={index}
                  href={service.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-[1.8rem] border border-brand-primary/12 bg-white shadow-editorial"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/6 via-brand-primary/8 to-transparent" />
                    <div className="absolute left-4 top-4 text-xs uppercase tracking-[0.32em] text-brand-beige/75">
                      0{index + 1}
                    </div>
                    <div className="absolute right-4 top-4 rounded-full border border-brand-primary/20 bg-white/90 p-3 text-brand-primary">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-display text-brand-dark">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-dark/60">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-brand-primary">
                      Consultar
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
