import { OrbitControls } from '@react-three/drei'


const MeshCanvas = ({props}) => {
    return (
        <>
            <OrbitControls enableZoom={false} />
            <ambientLight />
            <mesh {...props}  >
                <boxGeometry args={[.5, .5, 1]} />
                <meshStandardMaterial color="red" />
            </mesh> 
        </>
    )
}

export default MeshCanvas
 