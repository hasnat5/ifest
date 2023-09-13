import { ButtonType } from '@/models/interface'
import Link from 'next/link'
import React from 'react'

export const Button: React.FC<ButtonType> = ({ title, link }) => {
    return (
        <Link
            href={link}
            style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }}
            // style={{ backgroundImage: 'linear-gradient(313deg, #00FF68 -0%, #6843EC 100%)' }}
            className='rounded-lg py-2 px-4 text-white font-mono text-base text-center uppercase lg:w-fit lg:px-6'>
            {title}
        </Link>
    )
}

export const ButtonSec: React.FC<ButtonType> = ({ title, link }) => {
    return (
        <Link
            href={link}
            // style={{ backgroundImage: 'linear-gradient(313deg, #00FF68 -0%, #6843EC 100%)' }}
            className='bg-white rounded-lg py-2 px-4 text-white font-mono text-base uppercase lg:w-fit lg:px-6'>
            <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }}
                className='grid bg-clip-text text-transparent text-center'>{title}
            </span>
        </Link>
    )
}


// linear-gradient(107.65deg,#17C969 17.53%,#005DBB 94.64%);
// -8.01%