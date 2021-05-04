import React from "react"
import { FontSize, Space } from "@components/styles/config"
import styled from "@emotion/styled"
import LogoTitle from "@components/atoms/LogoTitle"

const Root = styled.footer`
    align-items: center;
    background: ${(props) => props.theme.colors.footerBackground};
    color: ${(props) => props.theme.colors.invertText};
    display: flex;
    padding: ${Space.X4} ${Space.X4};
`

const Section = styled.section`
    display: block;
    margin-top: ${Space.X5};
`

const Line = styled.p`
    font-size: ${FontSize.XS};
`

const Wrapper = styled.div``

const Footer: React.FC = () => <Root>
    <Wrapper>
        <LogoTitle />
        <Section>
            <Line>&copy; {new Date().getFullYear()} Greyvine Inc.</Line>
            <Line>Registered in Canada 946622-3</Line>
        </Section>

        <Section>
            <Line>Greyvine House</Line>
            <Line>29 Lauralynn Crescent</Line>
            <Line>Toronto M1S 2H3</Line>
            <Line>+1 416 893 2211</Line>
        </Section>

        <Section>
            <Line>info@greyvine.org</Line>
            <Line>LinkedIn Facebook</Line>
        </Section>
    </Wrapper>
</Root>

export default Footer
