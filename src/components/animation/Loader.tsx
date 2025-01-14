import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Count from './Count'
import Mushroom from './Mushroom'

export default function Loader({ onFinished }) {
  const [isDisappearing, setIsDisappearing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisappearing(true)
      onFinished()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onFinished])

  return (
    <motion.div
      className='relative min-h-screen w-full flex justify-center items-center'
      initial={{ opacity: 1 }}
      animate={{ opacity: isDisappearing ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <Count />
      <Mushroom />
    </motion.div>
  )
}
