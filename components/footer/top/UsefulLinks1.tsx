import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const UsefulLinks1 = () => {
  return (
    <div className='flex flex-col w-50 lg:w-55 gap-5'>
        <div className=' flex h-full w-40 gap-1 text-[1.4rem]' >
            <p>
                Useful <strong>Links</strong>
            </p>
            
        </div>
        <div className='text-lg text-[#878787] flex flex-col gap-4 '>
            <p className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                About The Show
            </p>
            <p className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Highlights
            </p>
            <p className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Why Exibit
            </p>
            <p className='flex w-full group pl-8 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                <FontAwesomeIcon icon={faArrowRight} size='xs' className=' w-3 h-4 text-white bg-[#676766] rounded-full p-1 transition duration-300 group-hover:bg-[#f06baa]'/>
                Why Visit
            </p>
        </div>
    </div>
  )
}

export default UsefulLinks1