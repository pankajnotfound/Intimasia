import React from 'react'

const RegisterButton = (props : any) => {
  return (
    <div className={`h-10 hidden items-center justify-center content-center align-middle rounded-[2px] bg-[linear-gradient(-60deg,#a7bde9,#df8abf)] bg-[length:200%_200%] animate-[gradientRotate_3s_ease_infinite] transition-transform duration-300 lg:flex`}>
        <div className='w-[99%] h-[97%] relative top-[0.5px] rounded-[2px] text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
            <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div>Register Now</div>
            </div>
        </div>
    </div>
  )
}

export default RegisterButton