import Layout from "@components/organisms/Layout"
import PageTitle from "@components/atoms/PageTitle"
import ContactSection from "@components/organisms/ContactSection"

export default function ContactPage() {
    return <Layout>
        <PageTitle title="Contact" />
        <ContactSection />
    </Layout>
}