import {Space} from "@components/styles/config"
import styled from "@emotion/styled"
import React, {ButtonHTMLAttributes} from "react"

const Root = styled.button`
    background: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.invertText};
    cursor: pointer;
    padding: ${Space.X6} ${Space.X5};

    &:hover {
        background: ${(props) => props.theme.colors.primary};
    }

    &:disabled {
        background: ${(props) => props.theme.colors.inputBorder};
        &:hover {            
            background: ${(props) => props.theme.colors.inputBorder}
        }
    }
`

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FunctionComponent<Props> = ({
    type = "button",
    disabled,
    children
}) => <Root type={type} disabled={disabled}>{children}</Root>

export default Button
