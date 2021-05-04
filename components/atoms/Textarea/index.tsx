import React from "react"
import {Space} from "@components/styles/config"
import styled from "@emotion/styled"

const Root = styled.textarea`
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
    padding: ${Space.X5};
    resize: vertical;
    width: 100%;
    
    &:hover {
        border-color: ${(props) => props.theme.colors.primary};
    }
    
    &:focus {
        border-color: ${(props) => props.theme.colors.headerBackground};
    }
`

const Textarea: React.FunctionComponent = (props) => <Root rows={8} {...props} />

export default Textarea
