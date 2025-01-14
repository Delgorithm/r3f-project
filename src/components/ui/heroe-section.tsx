import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroeSection() {
  // Variants pour les `li`
  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  // Variants pour le conteneur
  const listVariants = {
    hidden: { opacity: 1 }, // Le conteneur reste visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Décalage entre chaque élément enfant
      },
    },
  }

  return (
    <div className='relative bg-[#F8EDE1] min-h-screen w-full flex flex-col items-center justify-center'>
      <nav>
        <Link href='/'>
          <motion.ul
            className='list-none flex gap-4 absolute top-0 left-16 font-baskervville text-[#FA4A14]'
            initial='hidden' // Départ
            animate='visible' // Cible
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
      </nav>
    </div>
  )
}
