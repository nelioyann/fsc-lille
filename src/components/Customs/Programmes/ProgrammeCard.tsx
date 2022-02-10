import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { Stack } from '../../../layouts';
import Heading from '../../Headings/Heading';

const StyledCard = styled(IonCard)`
margin: 0;`
export interface IProgrammeCard {
    id: string;
    title: string;
    description?: string;
    date?: string;
    speakerThumbnail?: string;
    category?: string;
}
const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, description, date, id, ...props }) => {
    return (
        <StyledCard button={true} routerLink={`/tabs/programmes/${id}`} {...props}>
            <Stack space="0">
                <IonCardHeader>
                    <IonAvatar>
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </IonAvatar>
                    {title && title !== "" && <IonCardTitle>{title}</IonCardTitle>}
                    {description && description !== "" && <IonCardSubtitle>{description}</IonCardSubtitle>}
                </IonCardHeader>
                <IonCardContent>
                    {date}
                </IonCardContent>
            </Stack>
        </StyledCard>
    )
};

export default ProgrammeCard;
