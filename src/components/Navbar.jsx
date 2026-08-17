import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-cyber-cyan/20 bg-dark-blue/95 md:bg-dark-blue/90 md:backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Principal"
      >
        <a
          href="#topo"
          className="flex min-w-0 items-center gap-2.5 text-ice-white"
          onClick={closeMenu}
        >
          <img
            src={siteConfig.assets.logoIcon}
            alt=""
            className="h-10 w-10 rounded-lg object-cover"
            width={40}
            height={40}
          />
          <span className="truncate font-heading text-sm font-semibold leading-tight sm:text-base">
            {siteConfig.schoolName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2.5 py-2 text-sm text-ice-white/80 transition-all duration-200 hover:translate-y-[-1px] hover:text-cyber-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex rounded-lg border border-cyber-cyan/30 p-2 text-ice-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-cyber-cyan/15 bg-deep-navy lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-ice-white/90 transition-colors hover:bg-dark-blue hover:text-cyber-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary w-full px-4 py-3 text-sm font-medium"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
