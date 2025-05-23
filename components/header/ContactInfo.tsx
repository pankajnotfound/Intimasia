import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className='content-center hidden flex-col gap-3 justify-center md:hidden lg:hidden sxl:flex'>
      <a href="">
        <div className='w-fit flex text-[0.98rem] row space-between gap-4 hover:text-[#EF4AA5] delay-100 transition ease-in-out duration-300 grayscale-100 hover:grayscale-0 group'>
            <div className='w-7.5 h-7.5 flex items-center justify-center rounded-full border-1 border-black group-hover:border-[#EF4AA5] delay-100 transition ease-in-out duration-300'>
              <FontAwesomeIcon size='sm' icon={faPhone} />
            </div>
              <p className='w-fit flex justify-center items-center'>9920836252</p>
        </div>
      </a>
      <a href="">
        <div className='w-fit flex text-[0.96rem] row space-between gap-4 hover:text-[#EF4AA5] delay-100 transition ease-in-out duration-300 grayscale-100 hover:grayscale-0 group'>
            <div className='w-7.5 h-7.5 flex items-center justify-center rounded-full border-1 border-black group-hover:border-[#EF4AA5] delay-100 transition ease-in-out duration-300'>
              <FontAwesomeIcon size='sm' icon={faEnvelope} />
            </div>
            <p className='w-fit flex justify-center items-center'>intimasiaexpo@gmail.com</p>
        </div>
      </a>
    </div>
  )
}

export default ContactInfo