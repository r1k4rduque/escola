import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig'

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = getWhatsAppUrl()
  const instagramHref = siteConfig.social.instagram

  return (
    <footer className="border-t border-cyber-cyan/15 bg-deep-navy">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <img
              src={siteConfig.assets.logoIcon}
              alt=""
              className="h-9 w-9 rounded-lg object-cover"
              width={36}
              height={36}
            />
            <span className="font-heading text-sm font-semibold text-ice-white">
              {siteConfig.schoolName}
            </span>
          </div>
          <p className="mt-3 text-sm text-ice-white/70">
            Tecnologia prática e acessível, da base ao avançado, no seu ritmo.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ice-white/70 transition-colors hover:text-cyber-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={instagramHref}
            aria-label="Instagram (em breve)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-electric-blue/30 text-ice-white/80 transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-electric-blue/30 text-ice-white/80 transition-colors hover:border-cyber-cyan/50 hover:text-cyber-cyan"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-cyber-cyan/10 py-4 text-center text-xs text-ice-white/55">
        © {year} {siteConfig.schoolName}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
