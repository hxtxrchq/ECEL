import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-brand-beige/10 bg-brand-dark py-10">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="text-2xl font-display text-brand-light">ECEL</div>
          <p className="mt-2 text-sm text-brand-beige/55">
            Ingeniería y construcción con respaldo técnico.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.28em] text-brand-beige/55">
          <span>Construcción</span>
          <span>Supervisión</span>
          <span>Ingeniería</span>
          <span>Saneamiento</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
