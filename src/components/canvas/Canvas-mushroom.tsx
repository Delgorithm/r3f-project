import MushroomModel from '@/model/Mushroom'
import { Float, OrbitControls, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function CanvasMushroom() {
  return (
    <div>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 2, 15],
        }}
        className='w-full h-full r3f '
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[-1, 0.5]}>
          <Float rotationIntensity={0.8} speed={7}>
            <MushroomModel />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
