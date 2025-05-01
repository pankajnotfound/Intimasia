import React from 'react'

const UsefulLinks1 = () => {
  return (
    <div className='flex flex-col w-50 lg:w-55 gap-5'>
        <div className=' flex h-full w-40 gap-1 text-[1.4rem]' >
            <p>
                Useful <strong>Links</strong>
            </p>
            
        </div>
        <div className='text-lg text-[#878787] flex flex-col gap-4 '>
            <p className='flex w-full pl-8 grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                About The Show
            </p>
            <p className='flex w-full pl-8 grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Highlights
            </p>
            <p className='flex w-full pl-8 grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Why Exibit
            </p>
            <p className='flex w-full pl-8 grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Why Visit
            </p>
        </div>
    </div>
  )
}

export default UsefulLinks1