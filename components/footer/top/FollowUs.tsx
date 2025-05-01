import React from 'react'

const FollowUs = () => {
  return (
    <div className='h-auto flex w-40 xl:w-70'>
      <div className='text-[1.4rem] flex flex-col gap-5  '>
        <p>Follow us <strong>On</strong> </p>
        <div className='h-fit flex gap-5 justify-center items-center'>
          <img src="resources/instagram.png" alt="Instagram" className='w-10 h-10'/>
          <img src="resources/youtube.png" alt="Youtube" className='w-8 h-8' />
          <img src="resources/linkedin.png" alt="LinkedIn" className='w-8 h-8' />
        </div>
      </div>
        
    </div>
  )
}

export default FollowUs