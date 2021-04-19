import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React from "react"

const Root = styled.section`
    margin: auto;
    max-width: 1000px;
    padding: ${Space.X4};
    width: 100%;
`

const Section: React.FunctionComponent = ({ children }) => 
    <Root>
        {children}
    </Root>

export default Section