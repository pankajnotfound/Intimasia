import { ROUTES } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const BottomText = () => {
  return (
    <div className='flex overflow-hidden gap-1.5 content-center justify-center text-[1.05rem]'>
      <p  className='text-white text-center'>
          ©2022-24{" "}
        <Link href={ROUTES.HOME} className='text-[#F06AAB]  hover:text-[#D51572] delay-100 transition ease-in-out duration-300'>
          www.intimasia.in{" "}
        </Link>
          all rights reserved, Design By {" "}
        <Link href={ROUTES.HOME} className='text-[#F06AAB]  hover:text-[#D51572] delay-100 transition ease-in-out duration-300 font-bold' >
          Peppermint Communications Pvt Ltd
        </Link>
      </p>
    </div>
  )
}

export default BottomText