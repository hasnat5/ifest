'use client'
import { Benefit } from '@/models/interface'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Benefit: React.FC<Benefit> = (props) => {
    return (
        <div className='grid gap-8 w-full bg-benefit-box bg-cover bg-no-repeat bg-top p-4 md:content-start'>
            <div style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='rounded-xl h-12 w-12 grid justify-center content-center'>
                <Icon icon="fluent:step-16-filled" color="white" width="24" />
            </div>
            <div className='grid gap-4'>
                <h3 className='uppercase font-mono'>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Benefit