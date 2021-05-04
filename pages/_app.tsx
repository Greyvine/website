import React from "react"
import {defaultTheme} from "@components/styles/config"
import {ThemeProvider} from "@emotion/react"
import Head from "next/head"
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps): React.ReactElement {

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
