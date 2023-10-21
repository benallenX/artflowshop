import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemedProviders from './providers/ThemedProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ArtflowShop',
  description: 'e-com shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemedProviders>
        {children}
        </ThemedProviders>
      </body>
    </html>
  )
}
