import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from './navbar'

export default function HeroeSection() {
  const cloud1 = '/img/clouds01.svg'
  const cloud2 = '/img/clouds02.svg'
  const cloud3 = '/img/clouds03.svg'
  const cloud4 = '/img/clouds04.svg'
  const handflower = '/img/hand-flower.webp'

  const listItemVarientsY = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const listItemVarientsX = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const listItemVarientsX2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  const listVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className='relative bg-[#F8EDE1] h-screen w-full flex flex-col justify-between'>
      <Navbar />
      <div className='relative'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={listItemVarientsY}
          className='text-center font-light text-[54px]'
        >
          Hiro Technologies
        </motion.h1>
        <motion.ul
          className='absolute left-[57%] font-extralight text-sm flex flex-col gap-5'
          initial='hidden'
          animate='visible'
          variants={listVariants}
        >
          <motion.li variants={listItemVarientsY}>Sustainability before all</motion.li>
          <motion.li variants={listItemVarientsY}>Plastic Breakdown Kit</motion.li>
          <motion.li variants={listItemVarientsY}>HIRO Diaper Bundle</motion.li>
        </motion.ul>
      </div>
      <motion.div initial='hidden' animate='visible' variants={listVariants}>
        <motion.p
          variants={listItemVarientsX}
          className='absolute top-[30%] left-64 uppercase font-extralight z-10'
        >
          Authenticity
        </motion.p>
        <motion.p
          variants={listItemVarientsX2}
          className='absolute top-[23%] right-52 uppercase font-extralight z-10'
        >
          Recycle
        </motion.p>
        <motion.p
          variants={listItemVarientsX2}
          className='absolute top-[70%] right-96 uppercase font-extralight z-10'
        >
          Vision
        </motion.p>
      </motion.div>
      <div>
        <Image
          src={cloud1}
          width={500}
          height={500}
          alt='image'
          className='absolute top-[20%] left-12'
          style={{
            filter: 'brightness(1.05) saturate(150%) sepia(90%) hue-rotate(15deg) contrast(100%)',
          }}
        />
        <Image
          src={cloud2}
          width={500}
          height={500}
          alt='image'
          className='absolute top-[70%] left-20'
        />
        <Image
          src={cloud3}
          width={500}
          height={500}
          alt='image'
          className='absolute top-[10%] right-14 '
        />
        <Image
          src={cloud4}
          width={500}
          height={500}
          alt='image'
          className='absolute top-[60%] right-44'
        />
        <Image
          src={handflower}
          width={80}
          height={80}
          alt='image'
          className='absolute top-[75%] left-80'
        />
      </div>
    </section>
  )
}
