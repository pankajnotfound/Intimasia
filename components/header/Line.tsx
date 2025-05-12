import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Line = () => {
  return (
    <div className='absolute z-99 top-[0.45rem] right-[-8%] lg:hidden xl:flex'>
        <Link href="https://www.source-nxt.com/">
            <Image src="/resources/line.png" alt="Line" width={20} height={96} className='w-[1.2rem] h-24 ' />
        </Link>
    </div>
  )
}

export default Line