'use client'
import React, { useState, useEffect } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const MenuOn = () => {
        const handleLinkClick = () => {
            // setTimeout(function () {
            //     setOpen(false); // Change the state when the link is clicked
            // }, 500);
            setOpen(false); // Change the state when the link is clicked
        };
        return (
            <div className={`${isOpen ? "block" : "hidden"} overflow-y-auto w-full h-full min-h-screen bg-[#0A090F] overflow-hidden max-h-full`}>
                <div className='w-full h-full'>

                    <ul className='px-6 grid divide-y divide-[#353539] md:px-12'>
                        <li><Link onClick={handleLinkClick} href={'/'} className='grid font-mono capitalize text-white text-xs md:text-sm py-4'>home</Link></li>
                        <li><Link onClick={handleLinkClick} href={'/repayment'} className='grid font-mono capitalize text-white text-xs md:text-sm py-4'>repayment</Link></li>
                        <li><Link onClick={handleLinkClick} href={'/appropriateness'} className='grid font-mono capitalize text-white text-xs md:text-sm py-4'>appropriateness</Link></li>
                        <li><Link onClick={handleLinkClick} href={'/about'} className='grid font-mono capitalize text-white text-xs md:text-sm py-4'>about us</Link></li>
                    </ul>
                </div>
            </div>
        )
    }


    return (
        <nav className='w-full fixed top-0 z-50'>
            <div className={`flex py-1.5 items-center justify-between pl-6 pr-3 transition duration-300 md:pl-12 md:pr-9 lg:px-32
            ${scrolling || isOpen ? 'bg-[#0A090F] border-b border-[#353539]' : ''}`}>
                <a href="/" className='z-10 flex items-center gap-2'>
                    <Image
                        src="/assets/images/logo/orbitdebt.png"
                        alt="OrbitDebt Logo"
                        className="h-6 w-auto"
                        width={512}
                        height={512}
                        priority
                    />
                    <h4 className='font-sans mt-1 text-white'>OrbitDebt</h4>
                </a>

                <div className='z-10 lg:hidden'>
                    <Hamburger
                        hideOutline={false}
                        size={24}
                        toggle={setOpen}
                        toggled={isOpen}
                        color={`${isOpen ? '#FFF' : '#efefe599'}`}
                    />
                </div>

                <div className='z-10 items-center hidden lg:block'>
                    <ul className='px-6 flex gap-6'>
                        <li><Link href={'/'} className='grid font-mono capitalize text-white text-sm py-4'>home</Link></li>
                        <li><Link href={'/repayment'} className='grid font-mono capitalize text-white text-sm py-4'>repayment</Link></li>
                        <li><Link href={'/appropriateness'} className='grid font-mono capitalize text-white text-sm py-4'>appropriateness</Link></li>
                        <li><Link href={'/about'} className='grid font-mono capitalize text-white text-sm py-4'>about us</Link></li>
                    </ul>
                </div>
            </div>
            <MenuOn />
        </nav>
    )
}

export default Navbar