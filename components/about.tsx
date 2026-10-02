import { Languages, Target, Sparkles } from 'lucide-react'

const goals = [
  { icon: Target, title: 'أساس متين', text: 'بناء فهم واضح لقواعد اللغة الإنجليزية من البداية.' },
  { icon: Languages, title: 'ثقة في التحدث', text: 'تمكين الطالب من التعبير عن نفسه بطلاقة ووضوح.' },
  { icon: Sparkles, title: 'تعلّم ممتع', text: 'دروس تفاعلية تجعل التعلّم عادة يومية محببة.' },
]

export function About() {
  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold text-primary">نبذة عنا</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">تعليم الإنجليزية بأسلوب قريب من الطالب</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            نحن منصة تعليمية في مكة المكرمة تهدف إلى تبسيط تعلّم اللغة الإنجليزية للطلاب، عبر دروس منظمة تجمع بين القواعد
            والمفردات والمحادثة، لنساعدك على استخدام اللغة في الدراسة والحياة اليومية بثقة.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {goals.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
