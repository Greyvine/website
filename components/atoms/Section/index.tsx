import { Space } from "@components/styles/config"
import styled from "@emotion/styled"
import React from "react"

const Root = styled.section`
    padding: ${Space.X4};
`

const Section: React.FunctionComponent = ({ children }) => 
    <Root>
        {children}
    </Root>

export default Section