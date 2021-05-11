import React from "react"
import PageTitle from "@components/atoms/PageTitle"
import Layout from "@components/organisms/Layout"
import {NextSeo} from "next-seo"
import Section from "@components/atoms/Section"
import styled from "@emotion/styled"
import { FontSize, FontWeight, Space } from "@components/styles/config"
import List from "@components/molecules/List"

const Header = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-size: ${FontSize.XL};
    font-weight: ${FontWeight.NORMAL};
    margin-bottom: ${Space.X5};
`

const Text = styled.p`
    font-size: ${FontSize.S};
`

export default function AboutPage(): React.ReactElement {

    return <Layout>
        <NextSeo
            title="About"
            description="A brief description of Greyvine and who we are." />
        <PageTitle title="About" />
        <Section>
            <Header>Greyvine builds software at scale</Header>
            <Text>
                I began Greyvine in 2015 to help large companies solve complex problems.
                Since then I’ve led teams across industries—from Banks to AdTech Companies
                —helping clients build software with meaningful impact on their business.
            </Text>
        </Section>
        <Section background="dark">
            <Header>Greyvine operates in the heart of downtown Toronto</Header>
            <Text>
                As a software company in the heart of Toronto, Greyvine is uniquely situated
                among a growing network of engineers collaborating in one of the fastest growing
                tech hubs in the world.
            </Text>
        </Section>
        <Section>
            <Header>What is building at scale?</Header>
            <Text>
                Scalable software maintains performance as the number of users grows.
                Similarly teams that build at scale maintain productivity as the number of developers grow.
                Most teams fail to build at scale because their productivity does not grow proportionally as the number of team members grow.
                Such teams become increasingly less productive as the scope and size of their codebase grows over time.
                Building at scale is not adopting Agile, nor is it adopting more middleware software for sake of software.
                Instead building at scale can only be achieved with fundamental changes in the team itself.
                At Greyvine, I’m still articulating what building at scale means. In my time I have learned what building at scale is not.
                <List items={[
                    "Your team is not building at scale if it takes more than 1 minute to startup your software",
                    "Your team is not building at scale if it takes more than 10 minutes to setup development environment",
                    "Your team is not building at scale if you or the manager cannot name all the services in the system",
                    "Your team is not building at scale if it takes more than 1 days for onboarding new developers into contributors",
                    "Your team is not building at scale if each member has difficulty debugging issues in the same way they might occur in production",
                    "Your team is not building at scale if it relies has unescapable dependencies on Jenkins and middleware and can’t be run locally",
                    "Your organisation is not building at scale if you rely too much on hand-written documentation to maintain effective communication and contracts between your teams",
                    "Your organisation is not building at scale if any subset of the nodes in the graph of the services in your system form a pentagon.",
                    "Your organisation is not building at scale if it focuses more on people and process instead of the building blocks that actually drive their business",
                    "Your team is not building at scale if the time between code completion of a new feature and its deployment to an environment is more than 10 minutes",
                    "Your organisation is not building at scale if it has more managers than contributors"
                ]} />
                To build at scale is to have a team on autopilot that seamlessly adds new members with a proportional increase in productivity.
                It means having a team that can flexibly experiment and explore uncharted ideas while collaborating with Product and Business teams.
                It means an organisation that can adapt fast and frequently.
            </Text>
        </Section>
        <Section background="dark">
            <Header>What is Greyvine doing now?</Header>
            <Text>
                As Greyvine, I am currently building a major Web App at a leading AdTech company in Toronto.
                In this project I have combined my expertise in Big Data, Streaming and Application Design.
                I have delivered a robust web app that seamlessly integrates across multiple software domains.
            </Text>
        </Section>
        <Section>
            <Header>Where is Greyvine heading?</Header>
            <Text>
                As I spread my message across more companies I want Greyvine to start building its own software.
                To that end I want to build a team of like-minded people interested in breaking conventions
                and build the next-generation of web applications. We would first build POCs and then move on to
                building full-fledged software. I have many ideas I want to try and too little time.
            </Text>
        </Section>
    </Layout>

}
