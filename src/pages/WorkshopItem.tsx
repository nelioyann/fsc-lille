import { IonAvatar, IonBreadcrumb, IonBreadcrumbs,IonPage} from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getWorkshop, getStand } from '../data/events';
import { getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center, Cluster, Cover, Sidebar, Stack } from '../layouts';
import { useParams } from 'react-router';
import Content from '../ui/Content/Content';
import { ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import { StyledThumbnail } from './ProgrammeItem';
import { SpeakerLabel } from '../components/Customs/Programmes/ProgrammeCard';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const WorkshopItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const workshop = getWorkshop(id);
    const breadcrumbs = [
        {
            path: '/tabs/programmes',
            label: 'Programmes'
        },
        {
            path: `/tabs/programmes/demos/${id}`,
            label: `Atelier ${id}` 
        }
    ];
    return (
        <IonPage>
            <Header mode="ios" label='Atelier' backButtonLink="/tabs/programmes" withBackButton={true} />
            <Content>
                {workshop ? (
                    <Stack space={SpacingEnum.s3}>
                        <Breadcrumbs breadcrumbs={breadcrumbs}/>
                        <Stack space={SpacingEnum['s-3']}>
                            <Box borderWidth='0' padding='0'>
                                <Cluster space={SpacingEnum['s-3']}>
                                    {workshop?.speakersId.map(speakerId => (
                                        <StyledThumbnail key={`workshopItem_Image${speakerId}`}>
                                            <img src={getSpeakerImage(speakerId)} />
                                        </StyledThumbnail>
                                    ))}
                                </Cluster>
                                <Cluster>
                                    {workshop?.speakersId.map((speakerId, index) => (
                                        <SpeakerLabel color={ColorVariablesEnum.INFO} size="default" key={`workshopItem_Summary${speakerId}`}>{`${index > 0 ? ", " : ""} ${getSpeakerSummary(speakerId)} `} </SpeakerLabel>
                                    ))}
                                </Cluster>
                            </Box>
                            <Sidebar contentMin='70%' space={SpacingEnum.s2}>
                                <Box borderWidth='0' padding='0'>
                                    <Heading level="3" color={ColorVariablesEnum.PRIMARY}>{`${workshop.title} `}</Heading>
                                    <Label size="default">
                                        {workshop.description}
                                    </Label>
                                </Box>
                            
                            </Sidebar>
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

export default WorkshopItem;
