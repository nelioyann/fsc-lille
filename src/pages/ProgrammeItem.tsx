import { IonAvatar, IonContent, IonItem, IonPage, IonThumbnail, useIonRouter } from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { EventThemesEnum, getEvent } from '../data/agenda';
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
    --size: clamp(6em ,100%, 14em);
    --border-radius: 50%;
    box-shadow: 0 0 0 0.50rem ${ColorVariablesEnum.LIGHT};
`

const ProgrammeItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = getEvent(id);
    return (
        <IonPage>
            <Header backButtonText="Programme" backButtonLink="/tabs/programmes" withBackButton={true} />
            <Content>
                {event ? (
                    <Cover noPad minHeight='80vh'>

                        <Stack data-centered>
                        <Cluster>
                                {event?.speakersId.map(speakerId => (
                                    <div key={`programmeItem_${speakerId}`} >
                                        <StyledThumbnail >
                                            <img src={getSpeakerImage(speakerId)} />
                                        </StyledThumbnail>
                                        {/* <Label>{getSpeakerSummary(speakerId)}</Label> */}
                                    </div>
                                ))}
                            </Cluster>
                            <Heading level="3">{event.title}</Heading>
                            <Box padding='0' borderWidth='0'>
                                <Tag label={event.date} />
                            </Box>
                            {/* <Heading level="4">Description</Heading> */}
                            <Label size="large">
                                {event.description}
                            </Label>
                        </Stack>
                        <Stack >
                            <Heading level='5'>Dans la même catégorie</Heading>
                            <ProgrammesSlider id={event.id} theme={event.theme} />
                        </Stack>
                    </Cover>) :

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
