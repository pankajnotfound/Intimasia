import { ROUTES } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarLogoShort = () => {
  return (
    <Link href={ROUTES.HOME} className='relative flex w-50' >
        <Image src="/resources/navbarlogo.svg" alt=" Logo" width={200} height={200} />
    </Link>
  )
}

export default NavbarLogoShort