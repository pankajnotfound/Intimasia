import { ROUTES } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Image1 = () => {
  return (
    <div className=' hidden md:hidden lg:flex'>
      <Link href={ROUTES.HOME}>
        <Image src="/resources/image2.svg" alt="Image" width={348} height={48} className='w-87 content-center' />
      </Link>
    </div>
  )
}

export default Image1