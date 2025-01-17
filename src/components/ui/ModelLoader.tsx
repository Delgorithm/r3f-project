import ProductFullContainer from '@/model/Product-full-container'

export default function ModelLoader() {
  console.log(ProductFullContainer)
  return (
    <>
      <ProductFullContainer scale={2} />
    </>
  )
}
