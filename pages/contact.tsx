import React from "react"
import Layout from "@components/organisms/Layout"
import PageTitle from "@components/atoms/PageTitle"
import ContactSection from "@components/organisms/ContactSection"
import {NextSeo} from "next-seo"

export default function ContactPage(): React.ReactElement {

    return <Layout>
        <NextSeo
            title="Contact"
            description="Send Greyvine an email" />
        <PageTitle title="Contact" />
        <ContactSection />
    </Layout>

}
