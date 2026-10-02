import { SpellCheck, BookA, MessagesSquare, type LucideIcon } from 'lucide-react'
import { En } from './en'

type Lesson = {
  icon: LucideIcon
  titleEn: string
  titleAr: string
  description: string
  topics: string[]
  example: { en: string; ar: string }
  tone: string
}

const lessons: Lesson[] = [
  {
    icon: SpellCheck,
    titleEn: 'English Grammar',
    titleAr: 'قواعد اللغة الإنجليزية',
    description: 'نشرح القواعد بأمثلة بسيطة وتمارين تطبيقية تساعدك على كتابة جمل صحيحة.',
    topics: ['Tenses', 'Pronouns', 'Prepositions', 'Articles'],
    example: { en: 'She is reading a book.', ar: 'هي تقرأ كتابًا.' },
    tone: 'bg-secondary text-secondary-foreground',
  },
  {
    icon: BookA,
    titleEn: 'Vocabulary',
    titleAr: 'المفردات',
    description: 'نبني حصيلتك اللغوية بكلمات يومية مصنّفة حسب المواضيع مع النطق والمعنى.',
    topics: ['Daily Life', 'School', 'Travel', 'Family'],
    example: { en: 'Knowledge', ar: 'معرفة' },
    tone: 'bg-accent/40 text-accent-foreground',
  },
  {
    icon: MessagesSquare,
    titleEn: 'Speaking & Conversation',
    titleAr: 'التحدث والمحادثة',
    description: 'نتدرّب على حوارات واقعية لتتحدث بثقة وتحسّن نطقك واستماعك.',
    topics: ['Greetings', 'Introductions', 'Shopping', 'Asking Questions'],
    example: { en: 'How are you today?', ar: 'كيف حالك اليوم؟' },
    tone: 'bg-primary/15 text-primary',
  },
]

export function Lessons() {
  return (
    <section id="lessons" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold text-primary">الأقسام التعليمية</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">ماذا ستتعلّم معنا؟</h2>
          <p className="mt-4 text-lg text-muted-foreground">ثلاثة مسارات متكاملة لإتقان اللغة الإنجليزية.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon
            return (
              <article
                key={lesson.titleEn}
                className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex size-14 items-center justify-center rounded-2xl ${lesson.tone}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="text-4xl font-bold text-border" aria-hidden="true">
                    {`0${index + 1}`}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    <En>{lesson.titleEn}</En>
                  </h3>
                  <p className="mt-1 font-medium text-primary">{lesson.titleAr}</p>
                </div>

                <p className="leading-relaxed text-muted-foreground">{lesson.description}</p>

                <ul className="flex flex-wrap gap-2" aria-label={`مواضيع ${lesson.titleAr}`}>
                  {lesson.topics.map((topic) => (
                    <li key={topic} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                      <En>{topic}</En>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto rounded-2xl border border-dashed border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted-foreground">مثال</p>
                  <p className="mt-1 font-semibold text-foreground">
                    <En>{lesson.example.en}</En>
                  </p>
                  <p className="text-sm text-muted-foreground">{lesson.example.ar}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
