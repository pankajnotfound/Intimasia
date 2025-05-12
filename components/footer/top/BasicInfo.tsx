import Image from 'next/image'
import React from 'react'

const BasicInfo = () => {
  return (
    <div className='w-full  h-fit flex flex-wrap justify-center md:flex-nowrap lg:w-full xl:justify-center gap-7 '>
        <div className='h-full flex justify-center w-140 min-w-60 md:w-75 lg:w-110'>
            <div className='h-auto w-25 bg-[#686869] flex justify-center items-center'>
                <Image src="/resources/calendar.png" alt="CalanderIcon" width={28} height={48} className=' w-7' />
            </div>
            <div className='flex flex-col w-full h-fit bg-[#545454] pl-7 pt-2 pb-[1.05rem] gap-2'>
                <p className='text-white'>
                    Date
                </p>
                <p className='text-[#f06aab] font-bold'>
                    24th To 26th FEB 2025
                </p>
            </div>
        </div>
        <div className='h-full flex justify-center w-140 min-w-60 md:w-75 lg:w-110'>
            <div className='h-auto w-25 bg-[#686869] flex justify-center items-center'>
                <Image src="/resources/location.png" alt="LocationIcon" width={48} height={48} className=' w-7' />
            </div>
            <div className='flex flex-col w-full h-full bg-[#545454]  pl-7 pt-2 pb-[1.05rem] gap-1.5'>
                <p className='text-white'>
                    Location
                </p>
                <p className='text-[#f06aab] font-bold'>
                    Yashobhoomi Convention
                </p>
            </div>
        </div>
        <div className='h-full flex justify-center w-140 min-w-60 md:w-75 lg:w-110'>
            <div className='h-auto w-25 bg-[#686869] flex justify-center items-center'>
                <Image src="/resources/phoneWhite.png" alt="ContactIcon" width={48} height={48} className=' w-7' />
            </div>
            <div className='flex flex-col w-full h-full bg-[#545454]  pl-7 pt-2 pb-[1.05rem] gap-2'>
                <p className='text-white'>
                    Contact
                </p>
                <p className='text-[#f06aab] font-bold'>
                    9920836252
                </p>
            </div>
        </div>
    </div>
  )
}

export default BasicInfo