import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp com a ${siteConfig.schoolName}`}
      className="whatsapp-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-electric-blue text-ice-white transition-all duration-300 hover:scale-110 hover:bg-neon-blue hover:shadow-[0_0_28px_rgba(0,207,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-cyan active:scale-95 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
