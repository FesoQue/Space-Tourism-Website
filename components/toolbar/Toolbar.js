import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Toolbar = () => {
  return (
    <nav className='text-blue-500 flex justify-between items-center h-[80px] px-[1.5rem] mb-[30px]'>
      <Link href={'/'}>
        <a>
          <Image src={'/assets/images/svg/logo.svg'} alt='logo' width='40px' height='40px' />
        </a>
      </Link>
      <Image src={'/assets/images/svg/hamburger.svg'} alt='logo' width='24px' height='21px' />
    </nav>
  )
}

export default Toolbar