import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const listVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <div className='fixed top-0 z-10'>
      <nav className='flex items-center justify-between px-3 py-2'>
        <Link href='/'>
          <motion.ul
            className='list-none flex gap-0 fixed top-0 left-16 font-baskervville text-[#FA4A14]'
            initial='hidden'
            animate='visible'
            variants={listVariants}
          >
            <motion.li className='text-[6em]' variants={listItemVariants}>
              H
            </motion.li>
            <motion.li className='text-[6em]' variants={listItemVariants}>
              i
            </motion.li>
            <motion.li className='text-[6em]' variants={listItemVariants}>
              r
            </motion.li>
            <motion.li className='text-[6em]' variants={listItemVariants}>
              o
            </motion.li>
          </motion.ul>
        </Link>
        <motion.ul
          className='flex items-center gap-1 text-[12px] font-light fixed right-4 top-2'
          initial='hidden'
          animate='visible'
          variants={listVariants}
        >
          <motion.li variants={listItemVariants}>
            <Link href='/' className=''>
              Info,
            </Link>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <Link href='/' className=''>
              Product
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  )
}
