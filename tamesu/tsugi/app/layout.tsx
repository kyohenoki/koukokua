import type { Metadata } from 'next'
import './subete.css'
import './hiragino.css'

export const metadata: Metadata = {
  title: '次の実験',
  description: 'Nextjsで試してみる'
}

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  )
}
