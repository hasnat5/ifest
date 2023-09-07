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
            <section className='grid gap-12 px-6 pt-32 pb-16 text-center md:px-12 md:py-20 lg:px-32 lg:py-28'>
                <div className='grid gap-4 lg:gap-6 text-center lg:justify-items-center w-full'>
                    <h1>Who Are We ?</h1>
                    <p className='max-w-3xl'>Kami adalah 4 sahabat yang juga anggota Orbit, sebuah ekskul yang memiliki misi istimewa. Orbit adalah singkatan dari "Organization of Basic Informatics Technology".
                    </p>
                    <Button />
                </div>

                <div className='grid gap-4 grid-rows-2 grid-flow-col max-h-96 lg:gap-6 lg:grid-rows-1 lg:grid-cols-3 lg:grid-flow-dense'>
                    <div className='bg-about1 bg-cover bg-left row-span-2 rounded-lg h-80 lg:mt-16'>
                    </div>
                    <div className='bg-about2 bg-cover bg-center rounded-lg lg:h-80'>
                    </div>
                    <div className='bg-about3 bg-cover bg-center rounded-lg lg:h-64'>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className='grid gap-6 py-12 px-6 md:px-12 md:py-20 lg:px-32 lg:py-28 lg:grid-cols-2 lg:items-center'>
                <div className='grid gap-4 md:gap-6'>
                    <h2>The <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>story</span> behind OrbitDebt</h2>

                    <p>
                        Suatu hari, ketika kami berkumpul untuk proyek lomba mereka di sekolah, salah seorang anggota kami membayangkan sebuah alat yang dapat menganalisis situasi keuangan seseorang, pengecekan kelayakan peminjaman pengguna dengan menggabungkan data dan rekomendasi yang dapat membantu mereka membuat rencana pelunasan yang efektif.
                        <br /><br />
                        Kami mempelajari tentang teknologi AI, privasi data, dan membuat rancangan antarmuka. Meskipun banyak rintangan, kami bertekad untuk membantu orang-orang yang sedang berjuang dengan hutang.
                    </p>
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
            <section className='grid gap-4 py-12 px-6 md:gap-6 md:px-12 md:py-20 lg:px-32 lg:py-28 lg:text-center'>
                <h2>Our <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Mission</span></h2>
                <p>
                    Misi kami adalah memberdayakan individu dengan alat yang mereka butuhkan untuk merencanakan masa depan finansial yang lebih cerah dan mencapai kebebasan dari beban hutang. Kami ingin menjadi mitra yang terpercaya dalam perjalanan mereka menuju kebebasan finansial dan memberikan dampak positif dalam komunitas kami dan di seluruh dunia.
                </p>
            </section>

            {/* TEAM */}
            <section className='grid gap-6 py-12 px-6 md:px-12 md:py-20 lg:px-32 lg:py-28'>
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


                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {shuffledTeamData.map((data, key) => {
                        return (
                            <Team image={data.image} name={data.name} about={data.about} role={data.role} key={key} social={data.social} />
                        )
                    })}

                </div>
            </section>

            <section className='grid py-12 px-6 md:px-12 md:py-20 lg:px-32'>
                <CTA />
            </section>
        </main>
    )
}

export default About