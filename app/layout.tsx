import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DAV-TJ Running Club',
  description: 'Global Running Community | Глобальное сообщество бегунов | Ҷамои давандагии ҷаҳон',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
