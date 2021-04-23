import PageTitle from "@components/atoms/PageTitle"
import Layout from "@components/organisms/Layout"
import { NextSeo } from 'next-seo'

export default function AboutPage() {
    return <Layout>
            <NextSeo
                title="About"
                description="A brief description of Greyvine and who we are." />
        <PageTitle title="About" />
    </Layout>
}