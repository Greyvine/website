import { FontSize, FontWeight, Space } from "@components/styles/config"
import styled from "@emotion/styled"

const Heading = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-size: ${FontSize.XL};
    font-weight: ${FontWeight.NORMAL};
    margin-bottom: ${Space.X5};
`

export default Heading
