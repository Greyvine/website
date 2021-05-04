import React, {InputHTMLAttributes} from "react"
import {Space} from "@components/styles/config"
import styled from "@emotion/styled"

const Root = styled.input`
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
    padding: ${Space.X5};
    width: 100%;
    
    &:hover {
        border-color: ${(props) => props.theme.colors.primary};
    }
    
    &:focus {
        border-color: ${(props) => props.theme.colors.headerBackground};
    }
`

type Props = InputHTMLAttributes<HTMLInputElement>

const Input: React.FunctionComponent<Props> = (props) => <Root {...props} />

export default Input
