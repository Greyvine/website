import { FontSize } from "@components/styles/config"
import styled from "@emotion/styled"

const Image = styled.img`
    height: ${props => props.height}
`

const Logo = ({
    height = FontSize.S
}) => 
    <Image
        src="/static/images/logo.svg"
        alt="Greyvine"
        height={height}
    />

export default Logo