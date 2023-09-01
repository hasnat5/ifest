import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Roboto_Mono } from 'next/font/google'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'OrbitDebt',
  description: 'Pemantauan Utang dan Strategi Pelunasan adalah fitur yang menggunakan kecerdasan buatan untuk membantu individu dalam mengelola utang mereka dengan lebih efisien.',
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


const violet_sans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/violet-sans/VioletSans-Regular.woff2',
    },
  ],
  variable: '--font-violet-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} ${violet_sans.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
