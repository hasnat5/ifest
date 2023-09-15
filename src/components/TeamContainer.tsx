'use client'
import React, { useEffect, useState } from 'react'
import Team from './Team';
import { TeamDataType } from '@/models/interface';
import shuffleArray from '@/utils/shuffleFunction';
import dataTeam from '../data/dataTeam.json';

const TeamContainer = () => {
    const [shuffledTeamData, setShuffledTeamData] = useState<Array<TeamDataType>>([]);

    useEffect(() => {
        // Shuffle the initial team data when the component mounts
        const shuffledData = shuffleArray(dataTeam);
        setShuffledTeamData(shuffledData);
    }, []);
    return (
        <>
            {shuffledTeamData.map((data, key) => {
                return (
                    <Team image={data.image} name={data.name} about={data.about} role={data.role} key={key} social={data.social} size={data.size} />
                )
            })}
        </>
    )
}

export default TeamContainer