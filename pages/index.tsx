import React from "react"
import Layout from "@components/organisms/Layout"
import Cover from "@components/molecules/Cover"
import {NextSeo} from "next-seo"
import IntroSection from "@components/organisms/IntroSection"

function HomePage(): React.ReactElement {

    return <Layout>
        <NextSeo
            description="The home page of Greyvine" />
        <Cover/>
        <IntroSection />
    </Layout>

}

export default HomePage
