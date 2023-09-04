import React from 'react'
import { ButtonSec } from './Button'
import Image from 'next/image'

const CTA = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='grid gap-6 rounded-lg px-6 pt-12 pb-48 relative overflow-hidden'>
            <h3>Let&#39;s start building binge-worthy experiences for your customers</h3>
            <ButtonSec />
            <Image
                src="https://assets.website-files.com/63b8916a2666a32bc26a89ba/63b8916a2666a315fe6a89fe_image-1-hero-v1-dataplus-template-p-1600.png"
                alt="CTA"
                className="w-full h-auto rounded-lg absolute -bottom-20 -right-10"
                width={1468}
                height={1268}
                quality={100}
                priority
            />
        </div>
    )
}

export default CTA