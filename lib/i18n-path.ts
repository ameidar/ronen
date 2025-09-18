export type Locale = 'en' | 'he'

export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0]
  return first === 'he' ? 'he' : 'en'
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const parts = normalized.split('/').filter(Boolean)
  if (parts.length > 0 && (parts[0] === 'en' || parts[0] === 'he')) {
    parts[0] = locale
  } else {
    parts.unshift(locale)
  }
  return `/${parts.join('/')}`
}


