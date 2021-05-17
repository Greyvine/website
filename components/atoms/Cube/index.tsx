import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

type Props = {
    position: [number, number, number]
}

const Cube: React.FC<Props> = (props) => {

    const mesh = useRef()
    const [
        cubeState,
        setCubeState
    ] = useState({isHovered: false, isActive: false})

    useFrame((state) => {

        const time = state.clock.getElapsedTime();
        mesh.current.position.y += Math.sin(time * 2) / 100;
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y = mesh.current.rotation.x;

    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={cubeState.isHovered
                ? [
                    1.5,
                    1.5,
                    1.5
                ]
                : [
                    1,
                    1,
                    1
                ]}
            onClick={() => setCubeState({...cubeState, isActive: !cubeState.isActive })}
            onPointerOver={() => setCubeState({...cubeState, isHovered: true})}
            onPointerOut={() => setCubeState({...cubeState, isHovered: false})}>
            <boxBufferGeometry args={[
                1,
                1,
                1
            ]} />
            <meshStandardMaterial color={cubeState.isActive
                ? "#820263"
                : "#D90368"} />
        </mesh>
    )

}

export default Cube
