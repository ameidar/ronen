'use client'

import { usePathname } from 'next/navigation'

export type Locale = 'en' | 'he'

export function useLocale(): Locale {
  const pathname = usePathname()
  const first = pathname?.split('/').filter(Boolean)[0]
  return first === 'he' ? 'he' : 'en'
}


