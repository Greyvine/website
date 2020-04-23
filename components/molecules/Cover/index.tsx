import Logo from "@components/atoms/Logo";
import LogoTitle from "@components/atoms/LogoTitle";
import { FontSize, Height, Space } from "@components/styles/config";
import styled from "@emotion/styled"

const fontSize = FontSize.XL

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${Height.cover};
    width: 100%;
    background: ${props => props.theme.colors.primaryGradient};
    color: ${props => props.theme.colors.invertText};
    text-align: center;
`

const Center = styled.div`
    position: relative;
    top: -${fontSize};
`

export default function Cover() {
    return <Root>
        <Center>
            <Logo height={Height.largeLogo} />
            <LogoTitle fontSize={fontSize} />
        </Center>
    </Root>
}