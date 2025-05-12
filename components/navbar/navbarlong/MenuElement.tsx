'use client';
import Link from 'next/link'
import React from 'react'

type PropsDataType = {
  autoClose: (value:boolean) => void;
  Path: string;
  Text: string;
}

const MenuElement = (props: PropsDataType) => {

  const autoClose = props.autoClose;

  const autoCloseDropdown = () => {
    autoClose(true);
  }

  return (
    <div>
        <Link onClick={autoCloseDropdown} href={props.Path}>
            <li className='p-2 pl-4 text-left transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                {props.Text}
            </li>
        </Link>
    </div>
  )
}

export default MenuElement