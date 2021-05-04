import React from "react"
import {FontSize, Height, Space} from "@components/styles/config"
import styled from "@emotion/styled"

const Root = styled.section`
    color: ${(props) => props.theme.colors.invertText};
    height: ${Height.cover};
    background: ${(props) => props.theme.colors.primaryGradient};
    font-size: ${FontSize.XXL};
    font-weight: bolder;
    text-transform: uppercase;
    padding: ${Space.X4};
`

type Props = {
    title: string
}

const PageTitle: React.FunctionComponent<Props> = ({title}) => <Root>{title}</Root>

export default PageTitle
