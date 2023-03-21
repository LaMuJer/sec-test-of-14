
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'

export function ModelCanvas(props) {
  const group = useRef()
  
  const { scene, animations } = useGLTF('./model-transformed.glb')
  const { actions } = useAnimations(animations, scene)
  const gl = useThree(s => s.gl)

  console.log(gl.domElement)

  const htmlPortal = useRef(gl.domElement.parentNode)

  useEffect(() => {
    actions['Take 001'].play().paused = true
  }, [])

  useFrame((state, delta) => {
    const action = actions['Take 001']
    action.time = action.getClip().duration * (props.scrollState.progress * 1.1)
  })

  let tlRef = useRef()

  useEffect(() => {
    let ctx = gsap.context(() => {
      tlRef.current = gsap.timeline()
        .to(group.current.rotation, {
          duration: 60,
          x: 0,
          y: Math.PI * 2,
          z: 0,
          ease: "linear",
          repeat: -1,
        })
    }, group)
    return () => ctx.revert()
  }, [])

  return (
    <group ref={group} dispose={null} >
      <Html
        portal={htmlPortal}
        scale={50}
        transform
        occlude="raycast"
        position={[100, 300, -1]}
      >
        <div className={`annotation ${props.inViewport && 'visible'}`}  >
          <span>Wheel</span>
        </div>
      </Html>
      <Html
        portal={htmlPortal}
        scale={50}
        transform
        occlude="raycast"
        position={[-300, 100, -1]}
      >
        <div className={`annotation ${props.inViewport && 'visible'}`} >
          <span>Spinner</span>
        </div>
      </Html>
      <primitive object={scene} {...props} />
    </group>
  )
}

useGLTF.preload('./model-transformed.glb')
