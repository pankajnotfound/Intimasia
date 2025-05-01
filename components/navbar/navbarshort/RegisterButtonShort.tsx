import React, { useState } from 'react'

const RegisterButtonShort = (props : any) => {

  const [buttonClicked, ClickButton] = useState(false);

  return (
    <div onClick = {() => {ClickButton(!buttonClicked)}} className={`w-fit text-white text-[0.9rem] font-bold flex items-center justify-center rounded-[2px] bg-[linear-gradient(-45deg,#ff6ec4,#7873f5,#4ade80)]  bg-[length:200%_200%] animate-[gradientRotate_3s_ease_infinite] transition-transform duration-300 lg:hidden`}>
        <div className='w-[99%] h-[97%] relative top-[1%] rounded-[2px] overflow-hidden text-center flex items-center text-nowrap'>
            <div className={`w-full flex items-center justify-center px-2 py-2.5 cursor-pointer ${(buttonClicked) ? "bg-[#C82D78]" : "" } lg:p-[0.6rem] xl:p-2`}>
                <div>
                  Register Now
                  </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterButtonShort