import Heading from "@components/atoms/Heading"
import Section from "@components/atoms/Section"
import IntroScene from "@components/molecules/IntroScene"
import React from "react"

const IntroSection: React.FC = () => <Section>
    <Heading>We build software at scale</Heading>
    <IntroScene />
</Section>

export default IntroSection
