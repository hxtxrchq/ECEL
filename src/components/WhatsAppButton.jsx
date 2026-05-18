import React from 'react'
import { motion } from 'framer-motion'
import whatsappLogo from '/images/social/whatsapp.png'

const WhatsAppButton = () => {
  const phoneNumber = '987382111'
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola%20ECEL,%20quiero%20hacer%20una%20cotizacion%20para%20un%20proyecto.`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      title="Contactar por WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8 object-contain brightness-0 invert" />
    </motion.a>
  )
}

export default WhatsAppButton
