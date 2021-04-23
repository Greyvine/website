import styled from "@emotion/styled"
import BaseAlert from "./BaseAlert"

const SuccessAlert = styled(BaseAlert)`
    background: ${props => props.theme.colors.successBackground};
    border-color: ${props => props.theme.colors.successText};
    color: ${props => props.theme.colors.successText};
`

export default SuccessAlert