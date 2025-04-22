import React from 'react'
import Logo from './Logo'
import Image1 from './Image1'
import HeaderText from './HeaderText'
import ContactInfo from './ContactInfo'


const Header = () => {
  return (
    <div className='w-full sticky flex place-content-between  overflow-hidden pl-28 pr-28 pt-2 pb-2 bg-white'>
        <Logo />
        <HeaderText />
        <Image1 />
        <ContactInfo />
    </div>
  )
}

export default Header 