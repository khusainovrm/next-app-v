import '../styles/global.css'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} />
      <Component {...pageProps} />
    </>
  )
}
