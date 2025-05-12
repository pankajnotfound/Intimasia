import { ROUTES } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <Link href={ROUTES.CONTACT} className={`w-fit h-[80%] hidden rounded-sm text-center items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex`}>
        <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
            <div>Contact</div>
        </div>
    </Link>
  )
}

export default Contact