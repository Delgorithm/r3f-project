import Image from 'next/image'

export default function Clouds() {
  const cloud = '/img/clouds01.webp'

  return (
    <div>
      <Image src={cloud} alt='images' fill className='w-44' />
    </div>
  )
}
