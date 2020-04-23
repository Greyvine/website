import { defaultTheme } from '@components/styles/config'
import { ThemeProvider } from '@emotion/react'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
