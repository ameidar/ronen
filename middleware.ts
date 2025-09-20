import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'he'] as const
type Locale = (typeof locales)[number]
const defaultLocale: Locale = 'en'

function hasLocale(pathname: string): boolean {
  const first = pathname.split('/').filter(Boolean)[0]
  return locales.includes(first as Locale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    /\.[\w]+$/.test(pathname) // files with extension (e.g., .png, .ico)
  ) {
    return NextResponse.next()
  }

  if (!hasLocale(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.*\\.).*)'],
}


