import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Skylo',
  description: 'Dedykowane aplikacje webowe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={'container'}>
          {children}
        </div>
      </body>
    </html>
  )
}
