import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FollowUs = () => {
  return (
    <div className='h-auto flex w-40 xl:w-70'>
      <div className='text-[1.4rem] flex flex-col gap-5  '>
        <p>Follow us <strong>On</strong> </p>
        <div className='h-fit flex gap-5 justify-center items-center'>
          <Link href="https://www.instagram.com/intimasiaexpo/">
            <Image src="/resources/instagram.png" alt="Instagram" width={40} height={40} className='w-10 h-10'/>
          </Link>
          <Link href="https://www.youtube.com/@INTIMASIA">
            <Image src="/resources/youtube.png" alt="Youtube" width={32} height={32} className='w-8 h-8' />
          </Link>
          <Link href="https://www.linkedin.com/showcase/intimasia/">
            <Image src="/resources/linkedin.png" alt="LinkedIn" width={32} height={32} className='w-8 h-8' />
          </Link>
        </div>
      </div>
        
    </div>
  )
}

export default FollowUs