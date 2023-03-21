import { Suspense, useRef } from "react"
import { act, Canvas } from '@react-three/fiber'
import Experience from "./components/MeshSection"
import { GlobalCanvas, ScrollScene, SmoothScrollbar, UseCanvas } from "@14islands/r3f-scroll-rig"
import HeroSection from "./components/HeroSection"
import { OrbitControls, useProgress } from '@react-three/drei'
import MeshSection from "./components/MeshSection"
import ModelSection from "./components/ModelSection"
import Loader from "./components/Loader"

const App = () => {
  const eventSource = useRef()
  const { active, progress } = useProgress()

  return (
    <div ref={eventSource}>
      <GlobalCanvas
        eventSource={eventSource}
      >
        <ambientLight />
      </GlobalCanvas>
      <SmoothScrollbar>
        {(bind) => (
          <div {...bind}>
            {/* <Loader active={active} progress={progress} /> */}
            <MeshSection />
            <HeroSection />
            <ModelSection />
          </div>
        )}
      </SmoothScrollbar>
    </div>
  )
}

export default App
