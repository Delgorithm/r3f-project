import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    primitive: THREE.Object3D
  }
}

declare module '*.glb' {
  const content: GLTF
  export default content
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
