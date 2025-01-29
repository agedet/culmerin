'use client'

import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react';


const Header = () => {
    // const [clicked, setClicked] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // const handleClick = () => {
    //     setClicked(!clicked);
    // }

    // const closeMobileClicked = () => setClicked(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


  return (
    <div className={isScrolled ? 'isScrolled' : 'notScrolled'}>
        <div className="container mx-auto">
            <div className='flex justify-between items-center'>
                <div className=''>
                    <Link href="/" >
                        <Image 
                            src='/culmerinlogob.png'
                            alt='culmerin_technologies_logo'
                            className='h-[50px] w-[50px] cursor-pointer'
                            height={120}
                            width={120}
                        />
                    </Link>
                </div>

                <nav className='flex justify-between items-center'>
                    <div className='DESKTOP-MENU hidden sm:flex sm:justify-between sm:items-center'>
                        <div className=''>
                            <ul className='flex justify-center items-center tracking-[0.75px] font-medium'>
                                <li className='mx-3'>
                                    <Link href='/' legacyBehavior>
                                        <a className='px-4'>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li  className='sm:mx-3'>
                                    <Link href='#about' legacyBehavior>
                                        <a className='px-4'>
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li  className='mx-3'>
                                    <Link href='/market' legacyBehavior>
                                        <a target='_blank' className='px-4'>
                                            Market
                                        </a>
                                    </Link>
                                </li>
                                <li  className='mx-3'>
                                    <Link href='/blog' legacyBehavior>
                                        <a target='_blank' className='px-4'>
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='mx-1'>
                                    <Link href='#learn-to-trade' legacyBehavior>
                                        <a         
                                            // className='                 border-4 border-[#43BC6E] rounded-xs px-6 py-3 font-bold tracking-[0.75px]'
                                            className='nav-cta'
                                        >
                                            Contact Us
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <div className='MOBILE-NAV-MENU flex justify-center items-center sm:hidden'>
                        {/* HAMBURGER MENU */}
                        <div 
                            className='HAMBURGER-ICON gap-2 cursor-pointer'
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className='block h-0.5 w-8 animate-pulse bg-black'></span>
                            <span className='block h-0.5 w-7 animate-pulse bg-black'></span>
                            <span className='block h-0.5 w-6 animate-pulse bg-black'></span>
                        </div>

                        {/* NAV MENU */}
                        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                            <div className='CROSS-ICON bg-accent absolute top-6 right-6 px-8 py-8'
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className='h-8 w-8 text-[#000000] animate-pulse'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <line x1='18' y1='6' x2='6' y2='18' />
                                    <line x1='6' y1='6' x2='18' y2='18' />
                                </svg>
                            </div>

                            {/* links */}
                            <div className='MENU-LINK-MOBILE-OPEN h-[500px] gap-10 flex flex-col items-center justify-center'>
                                <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center gap-10 h-auto p-8'>
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/' legacyBehavior>
                                            <a>
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/about' legacyBehavior>
                                            <a target='_blank'>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/market' legacyBehavior>
                                            <a target='_blank'>
                                                Services
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/blog' legacyBehavior>
                                            <a target='_blank'>
                                                Blog
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className=' flex flex-col items-center justify-center gap-10 px-8'>
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/market' legacyBehavior>
                                            <a 
                                                target='_blank'
                                                className='rounded-sm bg-accent/5 px-[15px] py-[10px] font-medium text-[14px] text-accent'
                                            >
                                                WhatsApp
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li className='my-8 capitalize' 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/blog' legacyBehavior>
                                            <a 
                                                target='_blank'
                                                className='rounded-xs bg-accent px-[20px] py-[10px] font-medium text-[14px] text-white'
                                            >
                                                CONTACT US
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header