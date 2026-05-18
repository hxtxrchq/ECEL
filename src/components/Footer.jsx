import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-brand-beige/10 bg-brand-dark py-10">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="block h-14 w-44 overflow-hidden">
							<img
							src="/images/header-logo/logo-ecel.png"
							alt="ECEL"
							className="h-full w-auto origin-left scale-[2.35] object-contain"
							width="250"
							height="74"
							loading="eager"
							decoding="async"
							/>
						</span>
          <p className="mt-2 text-sm text-brand-beige/55">
            Ingeniería y construcción con respaldo técnico.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.28em] text-brand-beige/55 -translate-x-4">
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
