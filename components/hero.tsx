import Image from 'next/image'
import { BookOpen, MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { En } from './en'
import { WhatsAppIcon } from './whatsapp-icon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:px-6 md:pb-24 md:pt-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            مكة المكرمة
          </span>

          <p className="text-lg font-medium text-muted-foreground">أهلًا وسهلًا بطلابنا الأعزاء</p>

          <h1 className="text-balance text-5xl font-bold leading-tight text-foreground md:text-6xl">
            <En className="text-primary">Let&apos;s Learn English</En>
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            رحلتك لتعلّم اللغة الإنجليزية تبدأ هنا. نتعلّم معًا خطوة بخطوة، بأسلوب هادئ وممتع يناسب جميع المستويات.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#lessons"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <BookOpen className="size-5" aria-hidden="true" />
              ابدأ التعلّم
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <WhatsAppIcon className="size-5 text-whatsapp" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary/70 rotate-2" aria-hidden="true" />
          <Image
            src="/images/hero-learning.png"
            alt="كتاب إنجليزي مفتوح مع فقاعات حوار وأحرف إنجليزية"
            width={1024}
            height={1024}
            priority
            className="aspect-square w-full rounded-[2rem] border border-border object-cover shadow-sm"
          />
          <div className="absolute -bottom-5 start-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-md">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-bold text-accent-foreground">
              <En>Aa</En>
            </span>
            <div className="text-sm">
              <p className="font-semibold text-foreground">
                <En>Hello, friend!</En>
              </p>
              <p className="text-muted-foreground">مرحبًا يا صديقي!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
