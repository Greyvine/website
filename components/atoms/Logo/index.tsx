import React from "react"
import { FontSize } from "@components/styles/config"
import Spiral from "@public/static/images/logo.svg"
import styled from "@emotion/styled"

const AnimatedSpiral = styled(Spiral)`
    path {
        stroke-dasharray: 100;
        stroke-dashoffset: -100;
        animation: dash 1s ease-out forwards;
    }
  
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
`

type Props = {
    animate?: boolean
    height?: string
}

const Logo: React.FC<Props> = ({
    animate = false,
    height = FontSize.S
}) => {

    const Component = animate === true
        ? AnimatedSpiral
        : Spiral
    return <Component height={height} />

}

export default Logo
