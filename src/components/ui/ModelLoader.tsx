import ProductFullContainer from '@/model/Product-full-container'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function ModelLoader() {
  console.log('Model : ', ProductFullContainer)
  return (
    <>
      <Suspense fallback={<p>Chargement...</p>}>
        <ProductFullContainer scale={2} />
      </Suspense>
    </>
  )
}
