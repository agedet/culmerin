'use client'

import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react';

// const NAVLINKS = [
//     { href: '/', label: 'Home' },
//     { href: '/#about', label: 'About' },
//     { href: '/#services', label: 'Services' },
//     { href: '/#blog', label: 'Blog' },
// ]

const Header = () => {
    // const [clicked, setClicked] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // const closeMobileClicked = () => setIsNavOpen(false);

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
        <div className="container mx-auto max-w-[95%] lg:max-w-[90%]">
            <div className='flex justify-between items-center'>
                <div className='flex-[1]'>
                    <Link href="/" >
                        <Image 
                            src='/culmerinlogoc.png'
                            alt='culmerin_technologies_logo'
                            width={500}
                            height={100}
                            className='cursor-pointer w-[150px]'
                        />
                    </Link>
                </div>

                <nav className='flex-[2]'>
                    <div className='DESKTOP-MENU hidden lg:flex lg:justify-between lg:items-center'>
                        <ul className='flex justify-start items-center tracking-[0.75px] font-medium gap-[40px]'>
                            <li>
                                <Link href='/' legacyBehavior>
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li  className='sm:mx-3'>
                                <Link href='#about' legacyBehavior>
                                    <a>
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li >
                                <Link href='/services' legacyBehavior>
                                    <a>
                                        Services
                                    </a>
                                </Link>
                            </li>
                            <li >
                                <Link href='/blog' legacyBehavior>
                                    <a>
                                        Blog
                                    </a>
                                </Link>
                            </li>
                        </ul>
                       
                        <ul className='flex justify-center items-center tracking-[0.75px] font-medium gap-4'>
                            <li className='capitalize'>
                                <Link href='https://wa.me/message/CMEEDQ4PSHVTG1' legacyBehavior>
                                    <Image 
                                        src='/icons8-whatsapp-48.png'
                                        alt='whatsapp_icon'
                                        width={40}
                                        height={40}
                                        className='w-[40px] h-[40px] object-contain' 
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href='#contact' legacyBehavior>
                                    <a         
                                        className='nav-cta font-inter rounded-full border-[1px] border-primary px-[22px] py-[13px] text-[12px] text-primary'
                                    >
                                        Get a Free Consultation
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* MOBILE MENU */}
                    <div className='MOBILE-NAV-MENU flex justify-end items-center lg:hidden'>
                        {/* HAMBURGER MENU */}
                        <div 
                            className='HAMBURGER-ICON flex flex-col gap-1.5 cursor-pointer'
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className='block h-0.5 w-7 animate-pulse bg-black'></span>
                            <span className='block h-0.5 w-7 animate-pulse bg-black'></span>
                            <span className='block h-0.5 w-7 animate-pulse bg-black'></span>
                        </div>

                        {/* NAV MENU */}
                        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                            <div className='CROSS-ICON bg-accent absolute top-2 right-3 px-4 py-4'
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
                            <div className='MENU-LINK-MOBILE-OPEN grid gap-14'>
                                <ul className='MENU-LINK-MOBILE-OPEN grid gap-6 '>
                                    <li  
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/' legacyBehavior>
                                            <a>
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/about' legacyBehavior>
                                            <a target='_blank'>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/services' legacyBehavior>
                                            <a>
                                                Services
                                            </a>
                                        </Link>
                                    </li>
                                    
                                    <li 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/blog' legacyBehavior>
                                            <a>
                                                Blog
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <ul className='grid gap-8'>
                                    <li 
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='/whatsapp' legacyBehavior>
                                            <Image 
                                                src='/icons8-whatsapp-48.png'
                                                alt='whatsapp_icon'
                                                width={48}
                                                height={48}
                                                className='w-[48px] h-[48px]'
                                            />
                                        </Link>
                                    </li>
                                    
                                    <li
                                        // onClick={closeMobileClicked}
                                    >
                                        <Link href='#contact' legacyBehavior>
                                            <a 
                                                target='_blank'
                                                className='font-inter rounded-[4px] bg-primary px-[22px] py-[13px] font-medium text-[14px] text-white'
                                            >
                                                Contact Us
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