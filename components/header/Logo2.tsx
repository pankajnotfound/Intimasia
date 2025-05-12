import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo2 = () => {
  return (
    <div className='content-center flex flex-wrap lg:hidden xl:flex align-middle'>
      <Link href="https://www.source-nxt.com/" className='w-fit h-fit'>
        <Image src="/resources/image1.svg" alt="Image 1" width={100} height={48} className=" w-25 rounded " />
      </Link>
    </div>
  )
}

export default Logo2