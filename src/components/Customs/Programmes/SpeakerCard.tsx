import React from 'react';
import Card from '../../Cards/Card';

export interface ISpeaker  {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
    companyId?: string;
    photoUrl?: string;
    twitter?: string;
    linkedin?: string;
    biography?: string;
}

interface ISpeakerCard extends ISpeaker{
}
const SpeakerCard: React.FC<ISpeakerCard> = ({ ...speaker}) => {
    console.log("Speaker from card", speaker);
    return (
        <Card 
        routerLink={`/intervenants/${speaker.id}`}
        imageUrl={speaker.photoUrl} title={`${speaker.firstName} ${speaker.lastName}`} subtitle={`${speaker.role}`}/>

    )
};

export default SpeakerCard;
