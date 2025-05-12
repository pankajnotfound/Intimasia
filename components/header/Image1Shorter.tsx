import { ROUTES } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Image1Shorter = () => {
  return (
    <div className=' w-auto flex flex-wrap content-center justify-center md:flex lg:hidden '>
      <Link href={ROUTES.HOME} className='w-auto'>
        <Image src="/resources/image1shorter.svg" alt="Image" width={112} height={48} className='min-w-27.5  w-28 content-center' />
      </Link>
    </div>
  )
}

export default Image1Shorter