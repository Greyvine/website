import React from "react"
import LogoWithName from "@components/molecules/LogoWithName"
import Navigation from "@components/organisms/Navigation"
import {Height, Space, zIndex} from "@components/styles/config"
import styled from "@emotion/styled"
import Link from "next/link"

const Root = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.invertText};
  display: flex;
  height: ${Height.siteHeader};
  z-index: ${zIndex("site-header")};
  padding: ${Space.X5};
  position: sticky;
  top: 0;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.invertText};
  &:hover {
    text-decoration: underline;
  }
`

const Header: React.FunctionComponent = () => <Root>
    <Link href="/" passHref={true}>
        <StyledLink>
            <LogoWithName />
        </StyledLink>
    </Link>
    <Navigation/>
</Root>

export default Header
