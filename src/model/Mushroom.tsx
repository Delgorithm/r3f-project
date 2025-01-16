import { useGLTF } from '@react-three/drei'

interface MushroomModelProps {
  scale: number
}

export default function MushroomModel({ scale }: MushroomModelProps) {
  const { scene } = useGLTF('/model/mushroom.glb')

  return <primitive object={scene} scale={scale} />
}
