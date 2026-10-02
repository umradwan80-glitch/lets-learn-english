import { GraduationCap } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/site'
import { En } from './en'
import { WhatsAppIcon } from './whatsapp-icon'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-foreground">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <En className="text-lg">Let&apos;s Learn English</En>
        </a>

        <nav aria-label="القائمة الرئيسية" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="size-4" />
          <span>واتساب</span>
        </a>
      </div>
    </header>
  )
}
