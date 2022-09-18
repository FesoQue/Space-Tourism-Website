import React from 'react';
import { Close_Icon } from '../icons/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();

  const sidebarVariant = {
    open: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: '100%',
      transition: {
        delay: 0.45,
      },
    },
  };

  const listvariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const itemvariants = {
    open: {
      // x: 0,
      x: [0, 20, 0],
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.aside
      animate={isSidebarOpen ? 'open' : 'closed'}
      variants={sidebarVariant}
      className={`fixed top-0 bottom-0 right-0 w-[70vw] h-[100vh] max-w-[400px] bg-[#ffffff0a] backdrop-blur-[82px] overflow-hidden md:hidden }`}
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
        <motion.nav>
          <motion.ul variants={listvariants}>
            <motion.li
              variants={itemvariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/'}>
                <motion.a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>00</span> Home
                </motion.a>
              </Link>
            </motion.li>
            <motion.li
              variants={itemvariants}
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/destination' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/destination'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>01</span> destination
                </a>
              </Link>
            </motion.li>
            <motion.li
              variants={itemvariants}
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/crew' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/crew'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>02</span> crew
                </a>
              </Link>
            </motion.li>
            <motion.li
              variants={itemvariants}
              className={`relative w-full mb-[1.5rem] ${
                router.pathname === '/technology' ? 'activeLink' : ''
              }`}
            >
              <Link href={'/technology'}>
                <a className='text-[#ddd] text-[1rem] tracking-[2.7px] uppercase'>
                  <span className='text-white  mr-[11px]'>03</span> technology
                </a>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
