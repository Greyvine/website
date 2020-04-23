import { FontSize, Space } from "@components/styles/config"
import styled from "@emotion/styled"

const Root = styled.div<{ fontSize: string }>`
    font-size: ${props => props.fontSize};
    font-weight: normal;
    letter-spacing: ${Space.X7};
    text-transform: uppercase;
`

const LogoTitle = ({ fontSize = FontSize.XL }) => 
    <Root fontSize={fontSize}>Greyvine</Root>

export default LogoTitle