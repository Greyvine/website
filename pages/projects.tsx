import React from "react"
import Layout from "@components/organisms/Layout"
import PageTitle from "@components/atoms/PageTitle"
import {NextSeo} from "next-seo"

export default function ProjectsPage(): React.ReactElement {

    return <Layout>
        <NextSeo
            title="Projects"
            description="The applications Greyvine has built" />
        <PageTitle title="Projects" />
    </Layout>

}
