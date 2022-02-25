import { IonAvatar, IonContent, IonItem, IonPage, IonThumbnail, useIonRouter } from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { EventThemesEnum, getEvent } from '../data/events';
import { getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center, Cluster, Cover, Stack } from '../layouts';
import { useParams } from 'react-router';
import Content from '../ui/Content/Content';
import Card from '../components/Cards/Card';
import styled from 'styled-components';
import { ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Tag from '../components/Tag/Tag';
import Button from '../components/Buttons/Button';
import { arrowForwardOutline } from 'ionicons/icons';
import ProgrammesSlider from '../components/Customs/Programmes/ProgrammesSlider';


const StyledThumbnail = styled(IonThumbnail)`
    --size: clamp(6em ,100%, 10em);
    --border-radius: 1em;
    box-shadow: 0 0 0 0.50rem ${ColorVariablesEnum.LIGHT};
`

const ProgrammeItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = getEvent(id);
    return (
        <IonPage>
            <Header mode="ios"  backButtonLink="/tabs/programmes" withBackButton={true} />
            <Content>
                {event ? (
                    <Stack space={SpacingEnum.s5}>

                        <Stack data-centered>
                            <Box borderWidth='0' padding='0'>

                                <Cluster space="0">
                                    {event?.speakersId.map(speakerId => (
                                        <StyledThumbnail key={`programmeItem_Image${speakerId}`}>
                                            <img src={getSpeakerImage(speakerId)} />
                                        </StyledThumbnail>
                                    ))}
                                </Cluster>
                                <Cluster>
                                    {event?.speakersId.map((speakerId, index) => (
                                        <Label size="large" key={`programmeItem_Summary${speakerId}`}>{`${index > 0 ? "  & " : ""} ${getSpeakerSummary(speakerId)} `} </Label>
                                    ))}

                                </Cluster>
                            </Box>
                            <Cluster align='center' space={SpacingEnum['s-3']}>
                                <Heading level="3" color={ColorVariablesEnum.TERTIARY}>{event.title}</Heading>
                                <Box padding='0' borderWidth='0'>
                                    <Tag label={event.date} />
                                </Box>
                            </Cluster>

                            {/* <Heading level="4">Description</Heading> */}
                            <Label size="large">
                                {event.description}
                            </Label>
                        </Stack>
                        <Stack >
                            <Heading level='5'>Dans la même catégorie</Heading>
                            <ProgrammesSlider id={event.id} theme={event.theme} />
                        </Stack>
                    </Stack>) :

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
