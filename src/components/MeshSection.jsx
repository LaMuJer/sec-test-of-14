import { ScrollScene, SmoothScrollbar, UseCanvas } from '@14islands/r3f-scroll-rig'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import MeshCanvas from './MeshCanvas'

const MeshSection = () => {
    const el = useRef()

    console.log(el)

    return (
        <section className={`meshSection`} ref={el}>
            <div>
                <h2>This is a Watch</h2>
                <p>
                    This GLB model is rendered in the default scene. Since the global camera is static, the angle towards the model changes as it
                    moves through the viewport.
                </p>
                <p>Events works as expected. Try dragging the Drei PresentationControls.</p>
                <p>This layout is responsive. Making the window wider to see the ScrollScene detect the new DOM location.</p>
            </div>
            <UseCanvas >
                <ScrollScene track={el}>
                    {(props) => (
                        <>
                            <ambientLight />
                            <MeshCanvas {...props} />
                        </>
                    )}
                </ScrollScene>
            </UseCanvas>
        </section>
    )
}

export default MeshSection
