import { ROUTES } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoText = () => {
  return (
    <div className='flex flex-col w-full left-[-1rem] sm:w-80 lg:w-50 gap-5 '>
        <Link href={ROUTES.HOME} className='relative h-full w-full sm:w-80 lg:w-50 sxl:w-75 xl:w-75'>
            <Image src="resources/footerlogo.svg" alt="Logo" width={320} height={400} />
        </Link>
        <div >
            <p className='text-[1.05rem]/8 full text-wrap left-[-1rem] sm:w-75 lg:w-50 sxl:w-75 xl:w-75'>
              Asmeeta Textile Park, Unit 204-205, Building NO. E2A MIDC, Additional Kalyan Bhiwandi Ind. Area, Plot No. 1, Bhiwandi, Thane, Maharashtra 421311
            </p>
        </div>
    </div>
  )
}

export default LogoText