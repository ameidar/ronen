import type React from 'react'

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  // Keep root layout as the only place rendering <html>/<body> and global wrappers.
  return <>{children}</>
}


