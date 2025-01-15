import { useGLTF } from '@react-three/drei'

export default function MushroomModel() {
  const { scene } = useGLTF('/model/mushroom.glb')

  return <primitive object={scene} />
}
