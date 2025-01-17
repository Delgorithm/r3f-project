/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'

export default function ProductFullContainer(props) {
  const { nodes, materials } = useGLTF('/model/hiro-full-container-product.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Bottom-bottle'].geometry}
        material={materials['bottom-bottle-color']}
        position={[0.333, 0.197, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Top-bottle'].geometry}
        material={materials['top-bottle-color']}
        position={[0.332, 1.453, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
        position={[0.332, 0.844, 0]}
      />
      <group position={[0.34, 0.827, 0.009]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['cylinder-top-color']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials['cylinder-top-surface-top']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinderbottom001.geometry}
        material={materials['cylinder-bottom-color.001']}
        position={[0.34, 0.548, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[0.332, 0.824, 0.176]}
        rotation={[1.573, 0, 0]}
        scale={0.087}
      />
    </group>
  )
}

useGLTF.preload('/model/hiro-full-container-product.glb')
