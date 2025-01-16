import MushroomModel from '@/model/Mushroom'
import { Float, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

interface CanvasMushroomProps {
  scale: number
}

export default function CanvasMushroom({ scale }: CanvasMushroomProps) {
  return (
    <div>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [20, -8, -15],
        }}
        className=' r3f'
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <PresentationControls global rotation={[0.13, 0.1, 0]} polar={[-1, 0.5]}>
          <Float rotationIntensity={0.8} speed={7}>
            <MushroomModel scale={scale} />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
