import React from 'react';
import Image from 'next/image';
import { Hamburger_Icon } from '../../icons/Icons';
import Link from 'next/link';

const Toolbar = ({ setIsSidebarOpen }) => {
  return (
    <nav className='text-blue-500 flex justify-between items-center h-[80px] px-[1.5rem] mb-[1rem]'>
      <Link href={'/'}>
        <a>
          <Image
            src={'/assets/images/svg/logo.svg'}
            alt='logo'
            width='40px'
            height='40px'
          />
        </a>
      </Link>
      <button
        onClick={() => {
          setIsSidebarOpen(true);
        }}
      >
        <Hamburger_Icon />
      </button>
    </nav>
  );
};

export default Toolbar;
