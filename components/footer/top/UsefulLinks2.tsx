import React from 'react'

const UsefulLinks2 = () => {
  return (
    <div className='flex flex-col w-80 lg:w-60 gap-5 text-nowrap'>
        <div className=' flex h-full w-40 gap-1 text-[1.4rem]' >
            <p>
                Useful <strong>Links</strong> 
            </p>
        </div>
        <div className='text-lg text-[#878787] flex flex-col gap-4'>
            <p className='flex w-full pl-8 content-center grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Reaching the Show
            </p>
            <p className='flex w-full pl-8 content-center grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                How to Participate
            </p>
            <p className='flex w-full pl-8 content-center grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Floor Plan
            </p>
            <p className='flex w-full pl-8 content-center grayscale-100 items-center gap-2 transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:grayscale-0 hover:text-[#d61573]'>
                <img src="resources/footerarrow.png" alt="" className='w-4.5 h-4.5' />
                Contact Us
            </p>
        </div>
    </div>
  )
}

export default UsefulLinks2