import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://eastorangeportapotty.com'),
  title: { default: 'East Orange Porta Potty Rentals | Clean, Local, Dependable', template: '%s | East Orange Porta Potty Rentals' },
  description: 'Portable toilet rentals in East Orange, NJ for construction sites, events, emergencies, and long-term projects. Call +1 (862) 454-6200.',
  keywords: ['porta potty rental East Orange NJ', 'portable toilet supplier', 'portable restroom rental Essex County', 'emergency porta potty rental'],
  alternates: { canonical: '/' },
  openGraph: { title: 'East Orange Porta Potty Rentals', description: 'Clean, dependable portable restroom rentals in East Orange and Essex County.', url: 'https://eastorangeportapotty.com', siteName: 'East Orange Porta Potty Rentals', type: 'website' },
  icons: { icon: '/images/Porta potty photos/favicon.png', apple: '/images/Porta potty photos/favicon.png' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#10283b', width: 'device-width', initialScale: 1, userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
