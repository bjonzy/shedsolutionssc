import '@/styles/main.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shed Solutions SC</title>
        <meta name="description" content="Shed Solutions" />
        <meta name="keywords" content="Sheds, Shed, Barns, Barn, Garages, Garage, Construction, On-site, Delivery, Custom, Financing" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <div className="app-wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
