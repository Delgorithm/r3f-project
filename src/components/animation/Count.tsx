'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Count() {
  const [count, setCount] = useState(0)

  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      count: 100,
      transition: {
        duration: 4,
        ease: 'circOut',
      },
    })
  }, [controls])

  return (
    <div>
      <motion.div
        className='absolute bottom-0 right-0 text-[14em] font-extralight text-[#FA4A14]'
        animate={controls}
        onUpdate={(latest) => setCount(Math.round(latest.count))}
      >
        {count}
      </motion.div>
    </div>
  )
}
