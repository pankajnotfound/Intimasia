import React from 'react'

const BottomText = () => {
  return (
    <div className='flex overflow-hidden gap-1.5 content-center justify-center text-[1.05rem]'>
      <p  className='text-white text-center'>
          ©2022-24{" "}
        <a href="" className='text-[#F06AAB]  hover:text-[#D51572] delay-100 transition ease-in-out duration-300'>
          www.intimasia.in{" "}
        </a>
          all rights reserved, Design By {" "}
        <a href="" className='text-[#F06AAB]  hover:text-[#D51572] delay-100 transition ease-in-out duration-300 font-bold' >
          Peppermint Communications Pvt Ltd
        </a>
      </p>
    </div>
  )
}

export default BottomText