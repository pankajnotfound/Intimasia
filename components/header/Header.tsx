import React from 'react'
import Logo from './Logo'
import Image1 from './Image1'
import HeaderText from './HeaderText'
import ContactInfo from './ContactInfo'
import Image1Shorter from './Image1Shorter'


const Header = () => {
  return (
    <div className='w-full z-50 sticky flex flex-wrap align-middle content-center overflow-hidden px:0 py-2 sm:px-28 sm:py-2 bg-white justify-center lg:justify-around lg:gap-21 lg:px-8 xl:gap-22 xl:px-18 2xl:justify-center 2xl:gap-25 '>
        <Logo />
        <HeaderText />
        <Image1 />
        <Image1Shorter />
        <ContactInfo />
    </div>
  )
}

export default Header 