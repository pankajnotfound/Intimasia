import React from 'react'

const GetInTouch = () => {
  return (
    <div className='w-fit text-white text-[1rem] flex flex-col font-bold gap-3 py-4'>
        <div>
            <p>GET IN TOUCH</p>
        </div>
        <div>
            <a href="">
                <div className='w-fit flex text-[0.98rem] row space-between gap-2 hover:text-[#EF4AA5] delay-100 transition ease-in-out duration-300 grayscale-100 hover:grayscale-0 group'>
                    <div className='w-7.5 h-7.5 flex items-center justify-center rounded-full border-1 border-black group-hover:border-[#EF4AA5] delay-100 transition ease-in-out duration-300'>
                        <img src="/resources/phone.png" alt="PhoneImage" className='w-3.5' />
                    </div>
                    <p className='w-fit text-xl flex justify-center items-center'>9920836252</p>
                </div>
            </a>
        </div>
        <div>
            <a href="">
                <div className='w-fit flex text-[0.96rem] row space-between gap-2 hover:text-[#EF4AA5] delay-100 transition ease-in-out duration-300 grayscale-100 hover:grayscale-0 group'>
                    <div className='w-7.5 h-7.5 flex items-center justify-center rounded-full border-1 border-black group-hover:border-[#EF4AA5] delay-100 transition ease-in-out duration-300'>
                        <img src="/resources/mail.png" alt="MailImage" className='w-3.5' />
                    </div>
                    <p className='w-fit flex justify-center items-center'>intimasiaexpo@gmail.com</p>
                </div>
            </a>
            </div>
    </div>
  )
}

export default GetInTouch