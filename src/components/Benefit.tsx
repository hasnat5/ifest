'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Benefit = () => {
    return (
        <div className='grid gap-8 w-full bg-benefit-box bg-cover bg-no-repeat p-4'>
            <div style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='rounded-xl h-12 w-12 grid justify-center content-center'>
                <Icon icon="fluent:step-16-filled" color="white" width="24" />
            </div>
            <div className='grid gap-4'>
                <h3 className='uppercase font-mono'>Step by step</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, possimus.</p>
            </div>
        </div>
    )
}

export default Benefit