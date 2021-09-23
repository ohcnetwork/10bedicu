import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Footer from '../components/common/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>10 Bed ICU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
