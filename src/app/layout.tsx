'use client'

import '@/plugins/bootstrap/css/bootstrap.min.css'
import '@/plugins/themify/css/themify-icons.css'
import '@/plugins/magnific-popup/magnific-popup.css'

import './globals.css'


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import RootHeader from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Anywhere',
  description: 'Worlds\'s #1 Fashion and Beauty Magazine',
}



// import type { AppProps } from 'next/app'

// export function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//     <Component {...pageProps} />
//     <Script src="/plugins/bootstrap/js/bootstrap.min.js" defer/>
//     <Script src="/plugins/bootstrap/js/popper.min.js" defer/>
//     <Script src="/js/custom.js"/>

//     </>
//   )
// }



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        {/* <script src="plugins/jquery/jquery.js" defer></script>

        <script src='../plugins/bootstrap/js/bootstrap.min.js' defer></script>
        <script src='../plugins/bootstrap/js/popper.min.js' defer></script>

        <script src="plugins/owl-carousel/owl.carousel.min.js" defer></script>
        <script src="plugins/slick-carousel/slick.min.js" defer></script>
        <script src="plugins/magnific-popup/magnific-popup.js" defer></script>

        <script src="plugins/instafeed-js/instafeed.min.js" defer></script>
        
        <script src='../plugins/bootstrap/js/popper.min.js' defer></script> */}



      </Head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <RootHeader/>
        {children}
        
        

      {/* <script src="/plugins/jquery/jquery.js" defer ></script>

      <script src='/plugins/bootstrap/js/bootstrap.min.js' defer ></script>
      <script src='/plugins/bootstrap/js/popper.min.js' defer ></script>

      <script src="/plugins/owl-carousel/owl.carousel.min.js" defer ></script>
      <script src="/plugins/slick-carousel/slick.min.js" defer ></script>
      <script src="/plugins/magnific-popup/magnific-popup.js" defer ></script>

      <script src="/plugins/instafeed-js/instafeed.min.js" defer ></script>

      <script src='/plugins/bootstrap/js/popper.min.js' defer ></script> */}

      {/* <script src='/js/custom.js' defer ></script> */}
      
        </body>
    </html>
  )
}
