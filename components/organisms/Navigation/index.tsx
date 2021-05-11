import React from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { Space } from "@components/styles/config"

type NavigationItem = {
    name: string
    href: string
}

const items: NavigationItem[] = [
    // { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
]

const StyledLink = styled.a`
    color: ${(props) => props.theme.colors.invertText};
    &:hover {
      text-decoration: underline;
    }
`

const NavigationLink: React.FunctionComponent<NavigationItem> = ({ name, href }) => <Link href={href} passHref={true} >
    <StyledLink>{name}</StyledLink>
</Link>

const NavigationList = styled.ul`
    display: flex;
    justify-content: space-between;
`
const NavigationListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding-left: ${Space.X5};
`

const Navigation: React.FunctionComponent = () => <nav>
    <NavigationList>
        { items.map((x, i) => <NavigationListItem key={i}>
            <NavigationLink {...x} />
        </NavigationListItem>) }
    </NavigationList>
</nav>


export default Navigation
