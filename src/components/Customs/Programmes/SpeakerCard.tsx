import React from 'react';
import { ISpeaker } from '../../../data/speakers';
import Card from '../../Cards/Card';



interface ISpeakerCard extends ISpeaker{
}
const SpeakerCard: React.FC<ISpeakerCard> = ({ ...speaker}) => {
    return (
        <Card 
        // routerLink={`/tabs/intervenants/${speaker.id}`}
        size="full"
        imageUrl={speaker.photoUrl} title={`${speaker.firstName} ${speaker.lastName}`} subtitle={`${speaker.role}`}/>

    )
};

export default SpeakerCard;
