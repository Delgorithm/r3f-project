'use client'

import Loader from '@/components/ui/Loader'

export default function Page() {
  return (
    <>
      <div className='bg-[#F8EDE1] min-h-screen flex flex-col items-center justify-center'>
        <Loader />
      </div>
      <div className='min-h-screen bg-blue-50'></div>
    </>
  )
}
