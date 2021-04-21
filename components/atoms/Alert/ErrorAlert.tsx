import styled from "@emotion/styled"
import BaseAlert from "./BaseAlert"

const ErrorAlert = styled(BaseAlert)`
    background: ${props => props.theme.colors.errorBackground};
    border-color: ${props => props.theme.colors.errorText};
    color: ${props => props.theme.colors.errorText};
`

export default ErrorAlert