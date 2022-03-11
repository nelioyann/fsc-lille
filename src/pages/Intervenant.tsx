import { IonAvatar, IonBreadcrumb, IonBreadcrumbs, IonContent, IonPage } from '@ionic/react';
import { attachOutline, logoLinkedin, logoTwitter } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Button from '../components/Buttons/Button';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import WorkshopCard from '../components/Customs/Programmes/WorkshopCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getCompanyName, getSpeakerEvents, getSpeakerWorkshops } from '../data/events';
import { getSpeaker, getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center, Cluster, Stack } from '../layouts';
import { Label } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import { StyledThumbnail } from './ProgrammeItem';

const Intervenant = () => {
    const { id } = useParams<{ id: string }>();
    const speaker = getSpeaker(id)
    const breadcrumbs = [
        {
            path: '/tabs/intervenants',
            label: 'Intervenants'
        },
        {
            path: `/tabs/intervenants/${id}`,
            label: `${speaker?.firstName} ${speaker?.lastName}`
        }
    ];
    return (
        <IonPage>
            <Header mode='ios' label="Intervenant" withBackButton={true} />
            <Content>
                {speaker ? (
                    <Stack>
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        {/* <Center> */}
                        {/* <Box maxContent padding='0'> */}
                        {/* <Cluster justify='center'> */}

                        <StyledThumbnail key={`programmeItem_Image${id}`}>
                            <img src={speaker.photoUrl} />
                        </StyledThumbnail>
                        {/* </Cluster> */}
                        {/* </Box> */}
                        <Heading level="4">{getSpeakerSummary(speaker.id, true)}</Heading>
                        {/* <Heading level="4">{`${speaker.firstName} ${speaker.lastName} ${speaker.companyId && `- ${getCompanyName(speaker.companyId)}`}`}</Heading> */}
                        {/* {speaker.companyId && <Label size="large">{getCompanyName(speaker.companyId)}</Label>} */}
                        {speaker.biography && <Label>{speaker.biography}</Label>}
                        {/* </Center> */}
                        {getSpeakerEvents(speaker.id).length > 0 && (
                            <>
                                <Heading level="5">{`${speaker.firstName} interviendra lors de cette conférence`}</Heading>
                                {getSpeakerEvents(speaker.id).map(event => (<ProgrammeCard key={`programmeCard_${event.id}`} {...event} />))}
                            </>
                        )}
                        <Cluster>
                            {speaker.twitter && <Button href={speaker.twitter} icon={logoTwitter} label="Twitter" />}
                            {speaker.linkedin && <Button href={speaker.linkedin} icon={logoLinkedin} label="LinkedIn" />}
                            {speaker.misc && <Button icon={attachOutline} label={speaker.misc.label} href={speaker.misc.url} />}
                        </Cluster>
                        {getSpeakerWorkshops(speaker.id).length > 0 && (
                            <>
                                <Heading level="5">{`${speaker.firstName} interviendra lors de cet atelier`}</Heading>
                                {getSpeakerWorkshops(speaker.id).map(workshop => (<WorkshopCard key={`programmeCard_${workshop.id}`} {...workshop} />))}
                            </>
                        )}
                    </Stack>) : (
                    <Stack>
                        <Heading level="2">Intervenant</Heading>
                    </Stack>
                )}
            </Content>
        </IonPage>
    )
};

export default Intervenant;
