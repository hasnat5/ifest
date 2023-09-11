import React from 'react'
import { ButtonSec } from './Button'
import Image from 'next/image'

const CTA = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='relative grid rounded-lg overflow-hidden lg:grid-cols-2'>
            <div className='grid gap-4 items-center content-center px-6 py-12 md:gap-6 md:py-20 md:px-16'>
                <h3>Mari mulai membangun perjalanan finansial bebas utang untuk masa depan Anda.</h3>
                <ButtonSec title='get started' link='/appropriateness' />
            </div>

            <div className='grid w-full relative lg:items-end lg:w-[130%]'>
                <Image
                    src="/assets/images/fitur-kelayakan.webp"
                    alt="CTA"
                    className="w-full h-auto rounded-2xl ml-6 -mb-24 md:-mb-52 md:ml-16 lg:-mb-40 lg:ml-0"
                    width={1468}
                    height={1268}
                />
            </div>
        </div>
    )
}

export default CTA