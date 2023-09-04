import { Team } from '@/models/interface'
import Image from 'next/image'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Team: React.FC<Team> = ({ image, name, about, email, instagram, role, linkedin }) => {
    return (
        <div className='faqborder rounded-lg p-6 grid gap-8'>
            <Image
                src={image}
                alt="OrbitDebt Banner"
                className="w-3/6 h-auto rounded-lg justify-self-center"
                width={1468}
                height={1268}
                quality={100}
                priority
            />

            <div className='grid gap-2'>
                <div className='flex items-center gap-3.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5.3" viewBox="0 0 10 9" fill="none">
                        <path
                            d="M9.5 4.5L0.5 8.39711V0.602886L9.5 4.5Z"
                            fill={"#fff"}
                        />
                    </svg>
                    <h4 className='text-white'>{name}</h4>
                </div>
                <h5 className='uppercase'>{role}</h5>
            </div>

            <div>
                <p className='text-white'>
                    {about}
                </p>
            </div>

            <div className='w-full flex flex-wrap justify-start gap-4'>
                <a href={linkedin} target='_blank' className='flex items-center gap-2'>
                    <h5 className='uppercase'>linkedin</h5>
                    <i className="ri-arrow-right-up-line text-tertiary"></i>
                </a>
                <a href={instagram} target='_blank' className='flex items-center gap-2'>
                    <h5 className='uppercase'>instagram</h5>
                    <i className="ri-arrow-right-up-line text-tertiary"></i>
                </a>
                <a href={email} target='_blank' className='flex items-center gap-2'>
                    <h5 className='uppercase'>e-mail</h5>
                    <i className="ri-arrow-right-up-line text-tertiary"></i>
                </a>
            </div>

        </div>
    )
}

export default Team