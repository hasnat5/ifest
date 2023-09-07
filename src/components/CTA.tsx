import React from 'react'
import { ButtonSec } from './Button'
import Image from 'next/image'

const CTA = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='relative grid rounded-lg overflow-hidden lg:grid-cols-2'>
            <div className='grid gap-4 items-center content-center px-6 py-12 md:gap-6 md:py-20 md:px-16'>
                <h2>Let&#39;s start building binge-worthy experiences for your customers</h2>
                <ButtonSec />
            </div>

            <div className='grid w-full relative lg:items-end lg:w-[150%]'>
                <Image
                    src="https://assets.website-files.com/63b8916a2666a32bc26a89ba/63b8916a2666a315fe6a89fe_image-1-hero-v1-dataplus-template-p-1600.png"
                    alt="CTA"
                    className="w-full h-auto rounded-2xl ml-6 -mb-24 md:-mb-52 md:ml-16 lg:-mb-32 lg:ml-0"
                    width={1468}
                    height={1268}
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default CTA