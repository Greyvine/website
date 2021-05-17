import React from "react"
import Layout from "@components/organisms/Layout"
import Cover from "@components/molecules/Cover"
import {NextSeo} from "next-seo"
import Scene from "@components/molecules/Scene"
import Section from "@components/atoms/Section"

function HomePage(): React.ReactElement {

    return <Layout>
        <NextSeo
            description="The home page of Greyvine" />
        <Cover/>
        <Section>
            <Scene/>
        </Section>
    </Layout>

}

export default HomePage
