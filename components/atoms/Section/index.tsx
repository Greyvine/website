import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React from "react"

type SectionType = "dark" | "white"

type Props = {
    background?: SectionType
}

const Root = styled.div<{ background: SectionType }>`
    align-items: center;
    display: flex;
    background: ${(props) => props.background === "white"
        ? props.theme.colors.background
        : props.theme.colors.secondaryBackground};
    width: 100%;
`

const Content = styled.section`
    margin: auto;
    max-width: 1000px;
    padding: ${Space.X4};
    width: 100%;
`

const Section: React.FunctionComponent<Props> = ({ background = "white", children }) => <Root background={background}>
    <Content>
        {children}
    </Content>
</Root>

export default Section
