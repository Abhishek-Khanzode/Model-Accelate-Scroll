import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div className='w-full text-white h-[60px] flex items-center justify-between  px-12 py-5  z-55 fixed top-0 left-0'>
            <h1 className='text-3xl font-semibold'>Aeternum</h1>
            <div className="links flex items-center justify-center gap-5">
                <Link href={"/"} className='text-[18px] font-medium'>Index</Link>
                <Link href={"/"} className='text-[18px] font-medium'>Studio</Link>
                <Link href={"/"} className='text-[18px] font-medium'>Resources</Link>
                <Link href={"/"} className='text-[18px] font-medium'>Contact</Link>
            </div>
        </div>
    )
}

export default Nav