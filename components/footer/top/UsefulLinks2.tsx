import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { ROUTES } from '@/constant/routes'

const UsefulLinks2 = () => {
  return (
    <div className='flex flex-col w-80 lg:w-60 gap-5 text-nowrap'>
        <div className=' flex h-full w-40 gap-1 text-[1.4rem]' >
            <p>
                Useful <strong>Links</strong> 
            </p>
        </div>
        <div className='text-lg text-[#878787] flex flex-col gap-4'>
            <Link href={ROUTES.REACHINGTHESHOW} className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                            <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Reaching the Show
            </Link>
            <Link href={ROUTES.PARTICIPATIONDETAILS} className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                            <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                How to Participate
            </Link>
            <Link href={ROUTES.FLOORPLAN} className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                            <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Floor Plan
            </Link>
            <Link href={ROUTES.CONTACT} className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                            <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Contact Us
            </Link>
        </div>
    </div>
  )
}

export default UsefulLinks2