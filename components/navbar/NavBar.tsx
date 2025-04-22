import React from 'react'
import Home from './Home'
import TheShow from './TheShow'
import Exhibiting from './Exhibiting'
import Visiting from './Visiting'
import PracticalInfo from './PracticalInfo'
import Press from './Press'
import Blog from './Blog'
import Contact from './Contact'
import RegisterButton from './RegisterButton'
import Login from './Login'



const NavBar = () => {
  return (
    <div className='w-full h-[3.6rem] flex items-center justify-center bg-linear-to-tr from-[#e5479e] to-[#d61573]  uppercase '>
        <ul className='w-[70%] h-20 flex gap-4 max-w-300 py-4 text-[1.05rem] items-center rounded-2xl text-white font-[roboto] font-bold '>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] '>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                    <Home />
                </div>
                
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                    <TheShow />
                </div>
                
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                    <Exhibiting />
                </div>
                
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                    <Visiting />
                </div>
               
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                <PracticalInfo />

                </div>
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                <Press />

                </div>
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                <Blog />

                </div>
            </li>
            <li className='w-fit h-[80%] rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                <Contact />

                </div>
            </li>
            <div className='h-[80%] flex items-center justify-center rounded-[2px] bg-[linear-gradient(-45deg,#ff6ec4,#7873f5,#4ade80)] bg-[length:400%_400%] animate-[gradientRotate_3s_ease_infinite] transition-transform duration-300"'>
                <li className='w-[99%] h-[97%] relative top-[1%] rounded-[2px] text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                    <div className='w-full flex items-center justify-center p-2 cursor-pointer'>
                    <RegisterButton />

                    </div>
                </li>
            </div>
            <li className=' rounded-full text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78]'>
                <div className='w-full flex items-center justify-center cursor-pointer'>
                <Login />

                </div>
            </li>
        </ul>
    </div>
  )
}

export default NavBar