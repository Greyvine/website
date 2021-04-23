import { defaultTheme } from '@components/styles/config'
import { ThemeProvider } from '@emotion/react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
