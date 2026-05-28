import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiLinkedin } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import whatsappLogo from '/images/social/whatsapp.png'
import facebookLogo from '/images/social/facebook.png'
import instagramLogo from '/images/social/instagram.png'

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const details = [
  { 
    icon: FiPhone, 
    label: 'WhatsApp', 
    value: '+51 987 382 111', 
    logo: whatsappLogo, 
    link: 'https://wa.me/51987382111' 
  },
  { 
    icon: FiMail, 
    label: 'Correo', 
    value: 'elazo@ecelperu.com', 
    link: 'mailto:elazo@ecelperu.com' 
  },
  { 
    icon: FiMapPin, 
    label: 'Oficina', 
    value: 'Av. Los Colibríes - Trujillo',
    link: 'https://www.google.com/maps/search/?api=1&query=Av.%20Los%20Colibr%C3%ADes%20-%20Trujillo'
  },
  { 
    icon: FiMapPin, 
    label: 'Cobertura', 
    value: 'Trujillo - Chimbote - Lima' 
  },
]

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/profile.php?id=61568978417602',
      logo: facebookLogo,
      pending: false,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ecelingenieriaconstruccion/',
      logo: instagramLogo,
      pending: false,
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: FiLinkedin,
      pending: true,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@ecel_constructora?is_from_webapp=1&sender_device=pc',
      icon: SiTiktok,
      pending: false,
    },
  ]

  return (
    <section id="contact" className="section-gap bg-brand-dark overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div ref={ref} className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-editorial backdrop-blur-sm flex flex-col min-h-[500px] md:min-h-[600px]">
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="eyebrow mb-6 text-brand-beige/60">Contacto</div>
              <h2 className="text-4xl md:text-5xl font-display text-brand-light leading-[1.1] mb-6 text-glow-subtle">
                Solicita una <br/>presupuesto
              </h2>
              <p className="max-w-md text-base leading-relaxed text-brand-beige/72 mb-10">
                Completa el formulario y nos pondremos en contacto para brindarte una propuesta personalizada.
              </p>

              <div className="space-y-6">
                {details.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="rounded-full border border-white/10 bg-black/30 p-2.5 text-brand-light flex-shrink-0 transition-colors group-hover:bg-white/10 group-hover:border-white/20">
                      {item.logo ? (
                        <img 
                          src={item.logo} 
                          alt={item.label} 
                          className="w-5 h-5 object-contain brightness-0 invert" 
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }} 
                        />
                      ) : (
                        <item.icon size={18} className="opacity-80" />
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-brand-beige/50 font-semibold mb-0.5">
                        {item.label}
                      </div>
                      {item.link ? (
                        <a href={item.link} className="text-[14px] text-brand-light hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[14px] text-brand-light">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10 flex gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-disabled={social.pending ? 'true' : 'false'}
                      title={social.pending ? `${social.label} disponible próximamente` : social.label}
                      className={`group relative flex items-center justify-center rounded-full border border-white/10 bg-black/50 p-5 transition-all hover:scale-110 hover:border-white/30 hover:bg-white/10 ${social.pending ? 'opacity-75' : ''}`}
                    >
                      {social.logo ? (
                        <img
                          src={social.logo}
                          alt={social.label}
                          className="w-8 h-8 object-contain transition-transform group-hover:scale-110 brightness-0 invert"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <Icon size={32} className="text-brand-light transition-transform group-hover:scale-110" />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 md:p-14 backdrop-blur-sm shadow-editorial self-center">
            <div className="mb-6 whitespace-nowrap text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-brand-beige/45 text-center md:text-left leading-none overflow-hidden">
              Construcción - Supervisión - Diseño arquitectónico - Saneamiento de propiedades
            </div>
            <div className="grid gap-7">
              <div className="grid gap-3">
                <label className="text-[11px] uppercase tracking-[0.3em] text-brand-beige/60 font-bold ml-1.5">Nombre completo</label>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/50 px-7 py-5 text-brand-light outline-none transition-all placeholder:text-brand-beige/20 focus:border-white/40 focus:bg-black/70 focus:ring-1 focus:ring-white/15 text-base"
                  placeholder="Escribe tu nombre y apellidos"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-[11px] uppercase tracking-[0.3em] text-brand-beige/60 font-bold ml-1.5">Empresa</label>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/50 px-7 py-5 text-brand-light outline-none transition-all placeholder:text-brand-beige/20 focus:border-white/40 focus:bg-black/70 focus:ring-1 focus:ring-white/15 text-base"
                  placeholder="Nombre de tu organización"
                />
              </div>
              <div className="grid gap-3">
                <label className="text-[11px] uppercase tracking-[0.3em] text-brand-beige/60 font-bold ml-1.5">Correo electrónico</label>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/50 px-7 py-5 text-brand-light outline-none transition-all placeholder:text-brand-beige/20 focus:border-white/40 focus:bg-black/70 focus:ring-1 focus:ring-white/15 text-base"
                  placeholder="tu@email.com"
                  type="email"
                />
              </div>
              
              <div className="grid gap-3">
                <label className="text-[11px] uppercase tracking-[0.3em] text-brand-beige/60 font-bold ml-1.5">Descripción</label>
                <textarea
                  rows="4"
                  className="w-full rounded-2xl border border-white/15 bg-black/50 px-7 py-5 text-brand-light outline-none transition-all placeholder:text-brand-beige/20 focus:border-white/40 focus:bg-black/70 resize-none focus:ring-1 focus:ring-white/15 text-base"
                  placeholder="Cuéntanos brevemente sobre tu proyecto"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <button className="inline-flex items-center justify-center rounded-full bg-brand-light px-8 py-5 text-[13px] font-black uppercase tracking-widest text-brand-dark transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.15)] hover:bg-white w-full">
                ENVIAR SOLICITUD
                <FiArrowRight className="ml-3" />
              </button>
              <p className="text-center text-[9px] uppercase tracking-[0.4em] text-brand-beige/25">
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
