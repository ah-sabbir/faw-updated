import './themify/css/themify-icons.css'
import './globals.css'


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import RootHeader from '@/components/header/header'
import { FooterSection } from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Anywhere',
  description: 'Worlds\'s #1 Fashion and Beauty Magazine',
}



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <RootHeader/>
        {children}
        <FooterSection/>
        </body>
    </html>
  )
}
