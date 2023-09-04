'use client'
import { Button } from '@/components/Button'
import Team from '@/components/Team'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dataTeam from '../../data/dataTeam.json';
import CTA from '@/components/CTA';
import shuffleArray from '@/utils/shuffleFunction'
import { TeamDataType } from '@/models/interface'


const About = () => {
    const [shuffledTeamData, setShuffledTeamData] = useState<Array<TeamDataType>>([]);

    useEffect(() => {
        // Shuffle the initial team data when the component mounts
        const shuffledData = shuffleArray(dataTeam);
        setShuffledTeamData(shuffledData);
    }, []);
    return (
        <main className='container min-w-full'>
            {/* HERO */}
            <section className='grid gap-12 px-6 pt-32 pb-16 text-center'>
                <div className='grid gap-4'>
                    <h1>Who Are We ?</h1>
                    <p>Sit at urna amet elementum ullamcorper hendrerit arcu interdum fermentum leo nisl sapien aliquam proin id purus tellus condimentum integer dolor sit amet consector.</p>
                    <Button />
                </div>

                <div className='grid gap-4 grid-rows-2 grid-flow-col max-h-96'>
                    <div className='bg-about1 bg-cover bg-left row-span-2 rounded-lg h-80'>
                    </div>
                    <div className='bg-about2 bg-cover bg-center rounded-lg'>
                    </div>
                    <div className='bg-about3 bg-cover bg-center rounded-lg'>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className='grid gap-6 py-12 px-6'>
                <div className='grid gap-4'>
                    <h2>The <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>story</span> behind OrbitDebt</h2>
                    <p>Sit at urna amet elementum ullamcorper hendrerit arcu interdum fermentum leo nisl sapien aliquam proin id purus tellus condimentum integer dolor sit amet consector.</p>
                </div>

                <Image
                    src="https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80"
                    alt="OrbitDebt Banner"
                    className="w-full h-auto rounded-lg"
                    width={1468}
                    height={1268}
                    quality={100}
                    priority
                />
            </section>

            {/* MISSION */}
            <section className='grid gap-4 py-12 px-6'>
                <h2>Our <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Mission</span></h2>
                <p>We are committed to delivering the best voice support across diverse industries, including education, audiobooks, gaming, movies, and real-time conversations. Our goal is to provide unparalleled voice assistance, enabling seamless communication and understanding among global audiences.</p>
            </section>

            {/* TEAM */}
            <section className='grid gap-6 py-12 px-6'>
                <div className='grid gap-16'>
                    <h2>Faces behind <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>OrbitDebt</span></h2>

                    <div className='flex items-center gap-3.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5.3" viewBox="0 0 10 9" fill="none">
                            <path
                                d="M9.5 4.5L0.5 8.39711V0.602886L9.5 4.5Z"
                                fill={"#efefe599"}
                            />
                        </svg>
                        <h4 className='uppercase'>the team</h4>
                        <span className='text-xs text-tertiary flex items-center mb-0.5'>[4]</span>
                    </div>
                </div>


                <div className='grid gap-6'>
                    {shuffledTeamData.map((data, key) => {
                        return (
                            <Team image={data.image} name={data.name} about={data.about} role={data.role} key={key} social={data.social} />
                        )
                    })}

                </div>
            </section>

            <section className='grid py-12 px-6'>
                <CTA />
            </section>
        </main>
    )
}

export default About