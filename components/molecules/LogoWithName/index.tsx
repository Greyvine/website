import React from "react"
import styled from "@emotion/styled"
import Logo from "@components/atoms/Logo"
import { Height, Space } from "@components/styles/config"

const Root = styled.div`
    align-items: center;
    display: flex;
    height: ${Height.siteHeader};
    vertical-align: middle;
`

const Name = styled.section`
    margin: ${Space.X8};
`;

const LogoWithName: React.FC = () => <Root>
    <Logo />
    <Name>Greyvine</Name>
</Root>

export default LogoWithName
