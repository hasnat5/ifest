import React from 'react'

export const Button = () => {
    return (
        <button
            style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }}
            // style={{ backgroundImage: 'linear-gradient(313deg, #00FF68 -0%, #6843EC 100%)' }}
            className='rounded-lg py-2 px-4 text-white font-mono text-base uppercase'>
            Get Started
        </button>
    )
}

export const ButtonSec = () => {
    return (
        <button
            // style={{ backgroundImage: 'linear-gradient(313deg, #00FF68 -0%, #6843EC 100%)' }}
            className='bg-white rounded-lg py-2 px-4 text-white font-mono text-base uppercase'>
            <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Get Started</span>
        </button>
    )
}


// linear-gradient(107.65deg,#17C969 17.53%,#005DBB 94.64%);
// -8.01%