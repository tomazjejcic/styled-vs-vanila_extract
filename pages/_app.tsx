import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { themeClass } from '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={themeClass}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
