import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig"
import { Environment, Html, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { ModelCanvas } from "./ModelCanvas"

const ModelSection = () => {

    const el = useRef()

    return (
        <section ref={el} className="meshSection modelSection" >
            <div>
                <h1>This is a Model Section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dicta laborum consectetur iure ut commodi odio, praesentium rerum ex quis mollitia? Distinctio, incidunt. Qui tempora saepe ipsum quae dolorem quisquam tenetur ex delectus repellendus commodi deserunt dicta laudantium architecto, doloribus corrupti exercitationem quaerat, sint dolor dolorum possimus sapiente amet quidem!</p>
            </div>
            <UseCanvas>
                <ScrollScene track={el}>
                    {(props) => (
                        <>
                            <OrbitControls enableZoom={false} />
                            <ModelCanvas {...props} scale={[5, 5, 5]} />
                        </>
                    )}
                </ScrollScene>
            </UseCanvas>
        </section>
    )
}

export default ModelSection
