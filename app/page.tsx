'use client'

import { useState } from 'react'
import Loader from '../src/components/animation/Loader'
import MainPage from '@/components/ui/main-page'

export default function Page() {
  const [loading, setLoading] = useState(true)

  const handleLoaderFinished = () => {
    setTimeout(() => setLoading(false), 500)
  }

  return (
    <div className='bg-[#F8EDE1]'>
      {loading ? <Loader onFinished={handleLoaderFinished} /> : <MainPage />}
    </div>
  )
}
