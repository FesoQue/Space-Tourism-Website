import React from 'react';
import Image from 'next/image';
import { Hamburger_Icon } from '../../icons/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Toolbar = ({ setIsSidebarOpen }) => {
  const router = useRouter();

  return (
    <nav className='relative text-blue-500 flex justify-between items-center h-[80px] px-[1.5rem] mb-[1rem] md:pr-0 md:mb-[4rem] md:h-[100px] xl:pl-[2.5rem] pt-[1.4rem]'>
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
        className='md:hidden'
        onClick={() => {
          setIsSidebarOpen(true);
        }}
      >
        <Hamburger_Icon />
      </button>
      {/* desktop menu toolbar */}
      <ul className='hidden md:flex bg-white h-full items-center justify-between w-[70%] px-8 bg-[#ffffff0a] backdrop-blur-[82px] text-white lg:w-[60%] lg:px-[4rem] xl:w-[58.5%] xl:px-[6rem] xl:after xl:after:absolute xl:after:w-[60%] xl:after:h-[1px] xl:after:bg-[#dddddd7d] xl:after:top-[50%] xl:after:right-0 xl:after:left-[-55%] xl:after:bottom-0'>
        <li
          className={`menu-item ${router.pathname === '/' ? 'activeNav' : ''}`}
        >
          <Link href={'/'}>
            <a className='tracking-[2.3px] uppercase'>
              {' '}
              <span className='hidden xl:inline'>00</span> Home
            </a>
          </Link>
        </li>
        <li
          className={`menu-item ${
            router.pathname === '/destination' ? 'activeNav' : ''
          }`}
        >
          <Link href={'/destination'}>
            <a className='tracking-[2.3px] uppercase'>
              {' '}
              <span className='hidden xl:inline'>01</span> Destination
            </a>
          </Link>
        </li>
        <li
          className={`menu-item ${
            router.pathname === '/crew' ? 'activeNav' : ''
          }`}
        >
          <Link href={'/crew'}>
            <a className='tracking-[2.3px] uppercase'>
              {' '}
              <span className='hidden xl:inline'>02</span> Crew
            </a>
          </Link>
        </li>
        <li
          className={`menu-item ${
            router.pathname === '/technology' ? 'activeNav' : ''
          }`}
        >
          <Link href={'/technology'}>
            <a className='tracking-[2.3px] uppercase'>
              {' '}
              <span className='hidden xl:inline'>03</span> Technology
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
