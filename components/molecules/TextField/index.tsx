import React from "react"
import styled from "@emotion/styled"
import Input from "@components/atoms/Input"
import InputLabel from "@components/atoms/Label"
import Textarea from "@components/atoms/Textarea"

const Root = styled.div``

type Props = {
    id?: string
    label?: string
    multiline?: boolean
    input: any
}

const TextField: React.FunctionComponent<Props> = ({
    id,
    label,
    multiline = false, 
    input,
    ...other
}) => {
    const InputComponent = multiline ? Textarea : Input
    return (
        <Root>
            { label && <InputLabel htmlFor={id}>{label}</InputLabel> }
            <InputComponent id={id} {...input} {...other} />
        </Root>
    )
}

export default TextField