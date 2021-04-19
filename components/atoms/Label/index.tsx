import { FontSize, Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React from "react"

const Root = styled.label`
    color: ${props => props.theme.colors.buttonBackground};
    display: block;
    font-size: ${FontSize.S};
    letter-spacing: -${Space.X9};
    line-height: ${FontSize.XL2};
`

type Props = {
    htmlFor?: string
}

const InputLabel: React.FunctionComponent<Props> = ({ htmlFor, children }) => 
    <Root htmlFor={htmlFor}>
        {children}
    </Root>

export default InputLabel