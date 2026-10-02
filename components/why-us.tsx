import { CircleCheck, Users, Clock, Lightbulb, Award, Heart } from 'lucide-react'

const reasons = [
  { icon: Users, text: 'مجموعات صغيرة واهتمام شخصي بكل طالب' },
  { icon: Lightbulb, text: 'شرح مبسّط بالعربية والإنجليزية' },
  { icon: Clock, text: 'مواعيد مرنة تناسب جدولك الدراسي' },
  { icon: Award, text: 'متابعة مستمرة وتقييم لمستوى التقدّم' },
  { icon: Heart, text: 'بيئة تعليمية هادئة ومحفّزة' },
  { icon: CircleCheck, text: 'تطبيق عملي في كل درس' },
]

export function WhyUs() {
  return (
    <section id="why" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <p className="mb-3 font-semibold text-accent">مميزاتنا</p>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">لماذا تتعلّم معنا؟</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            نؤمن أن كل طالب قادر على إتقان اللغة الإنجليزية عندما يجد الطريقة المناسبة والدعم الصحيح.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-3">
          {reasons.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/15"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-medium leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
