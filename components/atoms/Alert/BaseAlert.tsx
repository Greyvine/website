import { Space } from "@components/styles/config"
import styled from "@emotion/styled"

const BaseAlert = styled.div`
    border: 1px solid ${props => props.theme.colors.inputBorder};
    padding: ${Space.X6} ${Space.X5};
`

export default BaseAlert