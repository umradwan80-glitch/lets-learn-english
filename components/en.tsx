import { cn } from '@/lib/utils'

export function En({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span lang="en" dir="ltr" className={cn('inline-block', className)}>
      {children}
    </span>
  )
}
