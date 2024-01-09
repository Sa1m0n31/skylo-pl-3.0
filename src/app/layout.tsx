import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'
import React from "react";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700', '900']
});

export const metadata: Metadata = {
  title: 'Skylo Software House',
  description: 'Specjaliści w zakresie tworzenia oprogramowania. Aplikacje webowe, aplikacje mobilne, e-commerce i web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-528459714" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-528459714');
        `}
        </Script>
      </head>
      <body className={poppins.className}>
        <div className={'container'}>
          {children}
        </div>
      </body>
    </html>
  )
}
