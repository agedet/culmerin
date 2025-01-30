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
        <div className="@container w-[95%] lg:w-[95%]">
            <div className='flex justify-between items-center'>
                <div className='w-[200px]'>
                    <Link href="/" >
                        <Image 
                            src='/culmerinlogoc.png'
                            alt='culmerin_technologies_logo'
                            className='cursor-pointer'
                            height={120}
                            width={150}
                        />
                    </Link>
                </div>

                <nav className=' flex justify-between items-center'>
                    <div className='DESKTOP-MENU hidden lg:flex lg:justify-between lg:items-center lg:justify-between lg:items-center lg:gap-100'>
                        <div className=''>
                            <ul className='flex justify-center items-center tracking-[0.75px] font-medium gap-50'>
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
                                    <Link href='#services' legacyBehavior>
                                        <a target='_blank' className='px-4'>
                                            Services
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
                            <ul className='flex justify-center items-center tracking-[0.75px] font-medium gap-10'>
                                <li className='capitalize' 
                                    // onClick={closeMobileClicked}
                                >
                                    <Link href='/' legacyBehavior>
                                        <a 
                                            target='_blank'
                                            className='nav-cta-nude myPadding rounded-sm bg-accent/5 px-[15px] py-[10px] font-medium text-[14px] text-accent'
                                        >
                                            WhatsApp
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#contact' legacyBehavior>
                                        <a         
                                            className='nav-cta myPadding rounded-xs bg-accent px-[30px] py-[15px] font-medium text-[14px] text-white'
                                        >
                                            Contact Us
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <div className='MOBILE-NAV-MENU flex justify-center items-center lg:hidden'>
                        {/* HAMBURGER MENU */}
                        <div 
                            className='HAMBURGER-ICON flex flex-col gap-8 cursor-pointer'
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className='block h-2 w-32 animate-pulse bg-black'></span>
                            <span className='block h-2 w-25 animate-pulse bg-black'></span>
                            <span className='block h-2 w-23 animate-pulse bg-black'></span>
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
                                        <Link href='#services' legacyBehavior>
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
                                        <Link href='/whatsapp' legacyBehavior>
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
                                        <Link href='#contact' legacyBehavior>
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