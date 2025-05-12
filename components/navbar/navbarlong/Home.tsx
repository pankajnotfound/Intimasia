"use client";

import { ROUTES } from '@/constant/routes';
import Link from 'next/link';

const Home = () => {
    return(
        <Link href={ROUTES.HOME} className={`w-fit h-[80%] hidden rounded-sm text-center items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex`}>
            <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div>Home</div>
            </div>
        </Link>
    )
}

export default Home