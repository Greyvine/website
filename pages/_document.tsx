import React from "react"
import Document, {Head, Html, Main, NextScript} from "next/document"

export default class MyDocument extends Document {

    render(): React.ReactElement {

        return <Html>
            <Head>
                <meta charSet="utf-8" />
                <link href="/static/styles/main.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>

    }

}
