import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'


const MeshCanvas = (props) => {

    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.y = props.scrollState.progress * Math.PI * 2
        mesh.current.rotation.x = props.scrollState.progress * Math.PI * 2
        mesh.current.rotation.z = props.scrollState.progress * Math.PI * 2

        mesh.current.position.x = -(props.scrollState.progress * .5)
        mesh.current.position.y = -(props.scrollState.progress * .5)
    })
    return (
        <group scale={props.scale.xy.min() / 4}>
            <mesh ref={mesh} >
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

export default MeshCanvas
