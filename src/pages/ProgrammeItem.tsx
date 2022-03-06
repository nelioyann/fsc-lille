import { IonAvatar, IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonPage, IonThumbnail, useIonRouter } from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { EventThemesEnum, EventThemesEnumShort, getEvent, getStand } from '../data/events';
import { getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center, Cluster, Cover, Sidebar, Stack } from '../layouts';
import { useParams } from 'react-router';
import Content from '../ui/Content/Content';
import Card from '../components/Cards/Card';
import styled from 'styled-components';
import { ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Tag from '../components/Tag/Tag';
import Button from '../components/Buttons/Button';
import { arrowForwardOutline, easelOutline, locationOutline } from 'ionicons/icons';
import ProgrammesSlider from '../components/Customs/Programmes/ProgrammesSlider';


export const StyledThumbnail = styled(IonThumbnail)`
    --size: clamp(6em ,100%, 10em);
    --border-radius: ${SpacingEnum.subtleCurve};
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.193) 0px 1px 1px 0px;

`

const ProgrammeItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = getEvent(id);

    return (
        <IonPage>
            <Header mode="ios" label='Conférence' backButtonLink="/tabs/programmes" withBackButton={true} />
            <Content>
                {event ? (
                    <Stack space={SpacingEnum.s3}>
                        <IonBreadcrumbs mode="ios">
                            <IonBreadcrumb>Programmes</IonBreadcrumb>
                            <IonBreadcrumb>Conférences</IonBreadcrumb>
                            <IonBreadcrumb>#{id}</IonBreadcrumb>
                        </IonBreadcrumbs>
                        <Stack space={SpacingEnum['s3']}>
                            <Box borderWidth='0' padding='0'>
                                <Cluster space={SpacingEnum['s-3']}>
                                    {event?.speakersId.map(speakerId => (
                                        <StyledThumbnail key={`programmeItem_Image${speakerId}`}>
                                            <img src={getSpeakerImage(speakerId)} />
                                        </StyledThumbnail>
                                    ))}
                                </Cluster>
                                <Cluster>
                                    {event?.speakersId.map((speakerId, index) => (
                                        <Label size="large" key={`programmeItem_Summary${speakerId}`}>{`${index > 0 ? ", " : ""} ${getSpeakerSummary(speakerId)} `} </Label>
                                    ))}
                                </Cluster>
                            </Box>
                            <Stack space={SpacingEnum.s2}>
                                <Stack >
                                    <Heading level="3" color={ColorVariablesEnum.PRIMARY}>{`${event.title} - ${event.date} `}</Heading>
                                    <Label size="large" color={ColorVariablesEnum.INFO}>
                                        {event.description ?? "(Pas de description pour le moment)"}
                                    </Label>
                                </Stack>
                                {
                                    event.standId && (
                                        <Box borderWidth='0' padding='0'>
                                            <Stack space={SpacingEnum['s-3']}>
                                                <Heading level="4" color={ColorVariablesEnum.PRIMARY}>Pour en découvrir plus sur le sujet visitez leur stand</Heading>
                                                <Box padding='0' borderWidth='0'>
                                                    <Label>
                                                        {getStand(event.standId)?.description}
                                                    </Label>
                                                    <Tag disabled icon={easelOutline} label={`Stand ${getStand(event.standId)?.name}`} />
                                                    <Tag disabled icon={locationOutline} label={`Emplacement ${getStand(event.standId)?.location}`} />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    )
                                }
                            </Stack>
                        </Stack>

                        <Stack space={SpacingEnum['s-5']}>
                            <Heading level='4' color={ColorVariablesEnum.TERTIARY}>{`Autres conférences sur la même thématique  (${EventThemesEnumShort[event.theme]})`}</Heading>
                            <ProgrammesSlider id={event.id} theme={event.theme} />
                        </Stack>
                    </Stack>
                ) :
                    (
                        <Cover>
                            <Center>Cet évènement semble ne pas exister</Center>
                        </Cover>
                    )}
            </Content>
        </IonPage>
    )
};

export default ProgrammeItem;
