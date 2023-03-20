import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'


const MeshCanvas = ({scale}) => {

    const el = useRef()

    return (
        <>
            {/* <OrbitControls enableZoom={false} /> */}
            <mesh scale={scale} ref= {el} >
                <boxGeometry  />
                <meshNormalMaterial />
            </mesh> 
        </>
    )
}

export default MeshCanvas
 