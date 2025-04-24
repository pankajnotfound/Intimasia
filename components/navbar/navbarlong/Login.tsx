import React from 'react'
import MenuElement from './MenuElement'

const Login = (props: any) => {
    return (
        <div className={`rounded-full text-center hidden items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex `}>
            <div className='w-full flex items-center justify-center cursor-pointer '>
                <div className='w-full h-full group relative flex text-[0.98rem] row space-between gap-4'>
                    <div className='w-8 h-8 hidden items-center justify-center rounded-full border-1 border-white delay-100 transition ease-in-out duration-300 lg:flex '>
                        <img src="/resources/user.png" alt="User" className='w-4' />
                    </div>
                    <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-95px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                        <MenuElement Text="Visitor Login" />
                        <MenuElement Text="Exibitor Login" />
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Login