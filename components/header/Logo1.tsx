import { ROUTES } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo1 = () => {
  return (
    <div className='content-center'>
      <Link href={ROUTES.HOME}>
        <Image  src="/resources/logo.svg" alt="Logo Image" width={144} height={48} className=" w-36 rounded " />
      </Link>
    </div>
  )
}

export default Logo1