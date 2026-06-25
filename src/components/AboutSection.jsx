import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Counter = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const endNum = parseInt(end)
    const incrementTime = (duration * 1000) / endNum

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === endNum) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.22, triggerOnce: true })

  const metrics = [
    { endValue: '23', suffix: '', label: 'Proyectos ejecutados' },
    { endValue: '425', suffix: '', label: 'Expedientes de saneamiento de propiedades' },
    { endValue: '218', suffix: '', label: 'Proyectos de arquitectura' },
    { endValue: '135', suffix: '+', label: 'Contratos por supervisión' },
  ]

  return (
    <section id="about" className="section-gap bg-brand-dark py-20 md:py-28 scroll-mt-24 md:scroll-mt-28">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative">
              <div className="eyebrow mb-3 text-brand-beige/75">Sobre nosotros</div>
              <h2 className="text-3xl md:text-5xl font-display leading-[0.94] text-brand-light">
                Estructura técnica para construir con confianza.
              </h2>

              <div className="mt-6 space-y-3">
                <p className="max-w-3xl text-sm leading-6 text-brand-beige/78">
                  En ECEL Ingeniería y Construcción contamos con 9 años de experiencia desarrollando soluciones en construcción, supervisión y saneamiento físico-legal inmobiliario, con enfoque en calidad, cumplimiento, seguridad y respaldo técnico en cada proyecto.
                </p>

                <p className="max-w-3xl text-sm leading-6 text-brand-beige/62">
                  Trabajamos con criterio técnico, orden operativo y compromiso profesional para responder a las necesidades de cada cliente con soluciones eficientes y confiables.
                </p>
              </div>


            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-beige/20 to-brand-beige/0 rounded-2xl blur opacity-60" />
              <div className="relative rounded-lg border border-brand-beige/20 bg-gradient-to-br from-brand-beige/10 to-brand-dark/40 p-6 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-beige/60">Indicadores clave</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric, idx) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="group relative rounded-lg border border-brand-beige/15 bg-gradient-to-br from-brand-beige/8 to-transparent p-4 overflow-hidden hover:border-brand-beige/25 transition-all duration-300"
                    >
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-beige/5 rounded-full blur-2xl group-hover:bg-brand-beige/10 transition-all duration-300" />
                      <div className="relative">
                        <div className="text-3xl md:text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-beige/70">
                          {metric.static ? (
                            metric.endValue
                          ) : metric.prefix ? (
                            <>
                              <Counter end={metric.endValue} duration={2.5} />
                              {metric.suffix}
                            </>
                          ) : (
                            <>
                              <Counter end={metric.endValue} duration={2.5} />
                              {metric.suffix}
                            </>
                          )}
                        </div>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-brand-beige/60 leading-4 font-medium">
                          {metric.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-8 border-t border-brand-beige/15 pt-8"
          >
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-beige/55">Dirección institucional</div>
            <div className="grid gap-0 overflow-hidden rounded-lg border border-brand-beige/15 bg-gradient-to-br from-brand-beige/8 to-brand-dark/40 md:grid-cols-2">
              <article className="relative p-6 md:p-7 group hover:from-brand-beige/12 transition-all duration-300 border-r border-brand-beige/10 md:border-r-0 md:border-b-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-beige/5 rounded-full blur-3xl -z-0 group-hover:bg-brand-beige/8 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-lg md:text-2xl font-display text-brand-light">Misión</h3>
                  <p className="mt-4 text-xs md:text-sm leading-6 text-brand-beige/75">
                    Nuestra fuerza diferenciadora es la capacidad de identificar, formar e integrar líderes de alto rendimiento. A través de una delegación estratégica y planificada, empoderamos a la pequeña empresa para garantizar la máxima satisfacción del cliente y, en consecuencia, asegurar una sólida generación de riqueza

                  </p>
                </div>
              </article>

              <article className="relative p-6 md:p-7 group border-t border-brand-beige/10 md:border-t-0 md:border-l md:border-brand-beige/10 hover:from-brand-beige/12 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-beige/5 rounded-full blur-3xl -z-0 group-hover:bg-brand-beige/8 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-lg md:text-2xl font-display text-brand-light">Visión</h3>
                  <p className="mt-4 text-xs md:text-sm leading-6 text-brand-beige/75">
                    Consolidarnos como la organización más confiable del mercado, distinguidos por una cultura de disciplina, respeto y alta calidad. Transformamos desafíos en oportunidades de negocio viables que garantizan el éxito de nuestros clientes y el crecimiento integral de nuestro equipo
                  </p>
                </div>
              </article>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
