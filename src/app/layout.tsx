import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Roboto_Mono } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Analytics } from '@vercel/analytics/react'


export const metadata: Metadata = {
  title: {
    default: 'OrbitDebt', // a default is required when creating a template
    template: '%s | OrbitDebt',
  },
  description: 'OrbitDebt merupakan webapp penyedia layanan pengecekan kelayakan dan strategi pelunasan utang yang menggunakan kecerdasan buatan untuk membantu individu dalam mengelola finansial dengan lebih efektif.',
  creator: 'Hasnat Ferdiananda',
  authors: [{ name: 'Raihana Aisha Az-Zahra' }, { name: 'Muhammad fadhli Fathoni' }, { name: 'Diaz Adriansyah' }],
  keywords: ['Finance', 'Debt', 'Repayment', 'AI', 'artificial intellegent', 'Money', 'Interest', 'Technology', 'Business', 'Credit', 'credit card', 'Dolar', 'Check', 'Checking', 'Strategy', 'Payment', 'Pay', 'Bank', 'Loan', 'Loans'],
  applicationName: 'OrbitDebt'
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
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
