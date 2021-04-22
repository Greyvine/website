import React from "react"
import styled from "@emotion/styled"
import Input from "@components/atoms/Input"
import InputLabel from "@components/atoms/Label"
import Textarea from "@components/atoms/Textarea"
import { FontSize } from "@components/styles/config"

const Root = styled.div``

type Props = {
    id?: string
    label?: string
    multiline?: boolean
    input: any
    meta: any
}

const HelperText = styled.span`
    color: ${props => props.theme.colors.errorText};
    font-size: ${FontSize.XS};
`

const TextField: React.FunctionComponent<Props> = ({
    id,
    label,
    multiline = false, 
    input,
    meta,
    ...other
}) => {
    const InputComponent = multiline ? Textarea : Input
    return (
        <Root>
            { label && <InputLabel htmlFor={id}>{label}</InputLabel> }
            <InputComponent id={id} {...input} {...other} />
            {meta.touched && meta.error && <HelperText>{meta.error}</HelperText>}
        </Root>
    )
}

export default TextField