import React from "react"
import { FontSize, Space } from "@components/styles/config"
import styled from "@emotion/styled"

const Root = styled.div<{ fontSize: typeof FontSize }>`
    font-size: ${(props) => props.fontSize};
    font-weight: normal;
    letter-spacing: ${Space.X7};
    text-transform: uppercase;
`

type Props = {
    fontSize?: typeof FontSize
}

const LogoTitle: React.FC<Props> = ({ fontSize = FontSize.XL }) => <Root fontSize={fontSize}>Greyvine</Root>

export default LogoTitle
