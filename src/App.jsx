import { Suspense, useRef } from "react"
import { Canvas } from '@react-three/fiber'
import Experience from "./components/MeshSection"
import { GlobalCanvas, ScrollScene, SmoothScrollbar, UseCanvas } from "@14islands/r3f-scroll-rig"
import HeroSection from "./components/HeroSection"
import { OrbitControls } from '@react-three/drei'
import MeshSection from "./components/MeshSection"

const App = () => {
  const eventSource = useRef()

  return ( 
    <div ref={eventSource}>
      <GlobalCanvas
        eventSource={eventSource}
      />
      <SmoothScrollbar>
        {(bind) => (
          <div {...bind}>
            <HeroSection />
            <MeshSection />
          </div>
        )}
      </SmoothScrollbar>
    </div>
  )
}

export default App
