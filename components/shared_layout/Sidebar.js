import React from 'react';
import { Close_Icon } from '../icons/Icons';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className='fixed top-0 bottom-0 right-0 w-[70vw] h-[100vh] bg-[#ffffff0a] backdrop-blur-[82px]'>
      <div className='p-[2rem]'>
        <div className='flex justify-end mb-[4rem]'>
          <Close_Icon />
        </div>
        <nav>
          <ul>
            <li className='mb-[1.5rem]'>
              <Link href={'/'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>00</span> Home
                </a>
              </Link>
            </li>
            <li className='mb-[1.5rem]'>
              <Link href={'/destination'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>01</span> destination
                </a>
              </Link>
            </li>
            <li className='mb-[1.5rem]'>
              <Link href={'/crew'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>02</span> crew
                </a>
              </Link>
            </li>
            <li className='mb-[1.5rem]'>
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
