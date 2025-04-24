import React from 'react'

const MenuElementShort = (props: any) => {
  return (
    <div>
        <a href="">
            <li className='p-2 pl-4 text-left transition-all duration-500 ease-in-out delay-75 hover:translate-x-3 hover:text-[#d61573]'>
                {props.Text}
            </li>
        </a>
    </div>
  )
}

export default MenuElementShort