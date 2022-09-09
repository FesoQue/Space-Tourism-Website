import React from 'react';
import { Close_Icon } from '../icons/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  return (
    <aside
      className={`fixed top-0 bottom-0 w-[70vw] h-[100vh] max-w-[400px] bg-[#ffffff0a] backdrop-blur-[82px] ${
        isSidebarOpen ? 'show-sidebar' : ''
      }`}
    >
      <div className='py-[2rem] pl-[2rem]'>
        <button
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className='flex justify-end w-full mb-[4rem] pr-[2rem]'
        >
          <Close_Icon />
        </button>
        <nav>
          <ul>
            <li
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>00</span> Home
                </a>
              </Link>
            </li>
            <li
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/destination' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/destination'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>01</span> destination
                </a>
              </Link>
            </li>
            <li
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/crew' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/crew'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>02</span> crew
                </a>
              </Link>
            </li>
            <li
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/technology' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/technology'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>03</span> technology
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
