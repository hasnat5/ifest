import Image from 'next/image'
import React from 'react'
import { Button } from './Button'

const UnderConstruction = () => {
    return (
        <div className='w-full h-screen md:min-h-screen min-h-[666px] max-w-screen-xl grid content-center justify-items-center gap-6 px-6 py-16 mx-auto text-center'>
            <Image
                src="/assets/images/underConstructionOptimize.webp"
                alt="accent"
                className="w-2/3 h-auto md:w-56"
                priority
                width={311}
                height={500}
            // quality={100}
            />

            <h2>Under <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Construction</span>!</h2>

            <Button link='/' title='Back Home' />
        </div>
    )
}

export default UnderConstruction