"use client";

import React, { useState } from 'react'

const HomeShort = (props: any) => {
    return(
        <div className={`w-fit h-[80%] text-white text-[0.9rem] font-bold flex rounded-sm text-center items-center text-nowrap delay-100 transition ease-in-out duration-300 hover::bg-[#C82D78] lg:hidden`}>
            <div className='w-full flex items-center justify-center px-2 py-2.5 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div>
                    Home
                </div>
            </div>
        </div>
    )
}

export default HomeShort