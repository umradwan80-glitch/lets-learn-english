import { Phone, MapPin, Clock } from 'lucide-react'
import { PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from './whatsapp-icon'

const details = [
  { icon: Phone, label: 'رقم الجوال', value: PHONE_DISPLAY, ltr: true },
  { icon: MapPin, label: 'الموقع', value: 'مكة المكرمة، المملكة العربية السعودية' },
  { icon: Clock, label: 'أوقات التواصل', value: 'يوميًا من 4 مساءً حتى 10 مساءً' },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-start gap-5">
            <p className="font-semibold text-primary">تواصل معنا</p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">جاهز لبدء رحلتك؟</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              راسلنا على واتساب للاستفسار عن الدروس والمواعيد، وسنرد عليك في أقرب وقت.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="size-5" />
              راسلنا على واتساب
            </a>
          </div>

          <ul className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, ltr }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl bg-background p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-semibold text-foreground" dir={ltr ? 'ltr' : undefined}>
                    {value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
