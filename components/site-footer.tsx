import { WHATSAPP_URL } from '@/lib/site'
import { En } from './en'
import { WhatsAppIcon } from './whatsapp-icon'

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>
            <En className="font-semibold text-foreground">Let&apos;s Learn English</En> — مكة المكرمة
          </p>
          <p>{`© ${new Date().getFullYear()} جميع الحقوق محفوظة`}</p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  )
}
