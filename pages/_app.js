import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>我的博客 Allen</title>
    </Head>
    <Component {...pageProps} />

  </>
}


