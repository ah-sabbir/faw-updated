import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// //Themify
// import '@/plugins/themify/css/themify-icons.css'
// import '@/plugins/slick-carousel/slick-theme.css'
// import '@/plugins/slick-carousel/slick.css'
// // Slick Carousel
// import '@/plugins/owlCarousel/owl.carousel.min.css'
// import '@/plugins/owlCarousel/owl.theme.default.min.css'
// import '@/plugins/magnific-popup/magnific-popup.css'
// // Global Stylesheet


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Anywhere',
  description: 'Worlds\'s #1 Fashion and Beauty Magazine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* <!-- THEME JAVASCRIPT FILES
        ================================================== -->
          {/* <!-- Instagram Feed Js --> */}
          <Script src="plugins/instafeed-js/instafeed.min.js"></Script>
          {/* <!-- Google Map --> */}
          <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></Script>
          <Script src="plugins/google-map/gmap.js"></Script>
          {/* <!-- main js --> */}
          <Script src="js/custom.js"></Script>
        </body>
    </html>
  )
}
