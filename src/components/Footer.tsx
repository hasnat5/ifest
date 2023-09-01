'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    return (
        <footer className='container min-w-full bg-primary1 px-6 lg:px-20'>
            <div className='grid py-16 gap-y-20 lg:gap-y-0 lg:gap-6 grid-cols-12 items-start mx-auto w-full max-w-screen-xl'>
                {/* LOGO */}
                <section className='grid gap-10 col-span-full lg:col-span-6'>
                    <div className='flex gap-x-4 items-center'>
                        <Image
                            src="/image/Logo-Upgradia-White.svg"
                            alt="Upgradia Logo"
                            width={48}
                            height={56}
                            priority
                        />
                        <h2 className='text-white'>OrbitDebt</h2>
                    </div>

                </section>

                {/* MENU */}
                <section className='grid gap-8 lg:gap-6 col-span-full items-start lg:grid-cols-6 lg:col-span-6'>
                    <div className='grid gap-3 lg:col-span-2'>
                        <h4 >PAGE</h4>
                        <a href="/" className='footerLink'>Home</a>
                        <a href="/" className='footerLink'>Repayment</a>
                        <a href="/" className='footerLink'>About</a>
                    </div>
                    <div className='grid gap-3 lg:col-span-2'>
                        <h4 >MEDIA SOSIAL</h4>
                        <a href="https://www.instagram.com/orbit4it/" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="bxl:instagram-alt" className='text-xl' />
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/upgradia/" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="bxl:linkedin" className='text-xl' />
                            LinkedIn
                        </a>
                    </div>
                    <div className='grid gap-3 lg:col-span-2'>
                        <h4 >CONTACT US</h4>
                        <a href="mailto:upgradia.inc@gmail.com" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="fluent:mail-16-filled" className='text-xl' />
                            <span className='w-full'>
                                upgradia.inc@gmail.com
                            </span>
                        </a>
                        <a href="/" target='_blank' className='footerLink flex items-start gap-3'>
                            <Icon icon="fluent:location-16-filled" className='text-xl' />
                            <span className='w-full'>
                                Jalan Kliningan Nomor 6, Buah Batu, 40264, Kota Bandung
                            </span>
                        </a>
                    </div>
                </section>
            </div>

            <p className='py-4 text-sm text-center text-tertiary font-mono uppercase'>© 2023 OrbitDebt. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
