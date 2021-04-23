import React from "react"
import Layout from "@components/organisms/Layout"
import Cover from "@components/molecules/Cover"
import { NextSeo } from "next-seo"

function HomePage() {
    return <Layout>
        <NextSeo
            description="The home page of Greyvine" />
        <Cover/>
    </Layout>
}

export default HomePage