import { IonCard, IonContent, IonItem, IonList, IonListHeader, IonModal, IonPage } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { Box, Center, Cluster, Cover, Sidebar, Stack, Switcher } from '../layouts';
import { ReactComponent as Logo } from "../data/icons/Logo.svg"
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Card from '../components/Cards/Card';
import Chairs from "../data/images/chair_room.jpg"
import Rubix from "../data/images/rubix.jpg"
import Stands from "../data/images/stands.jpg"
import Button from '../components/Buttons/Button';
import Content from '../ui/Content/Content';
import OpticalIllusion from "../data/lotties/optical-illusion.json"
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import { ReactComponent as France } from "../data/icons/France.svg"
import PartenairesSlides from '../components/Customs/Partenaires/PartenairesSlides';
import Tag from '../components/Tag/Tag';
import { calendar, map, pin } from 'ionicons/icons';
import Modal from '../components/Modal/Modal';
import { useEffect } from 'react';


const StyledLottiePlayer = styled(Player)`
    max-width: 20em;
    max-height: 20em;
    width: 100%;
`
const playerOptions = {
  autoplay: true,
  loop: true,
  keepLastFrame: true,
}
const Home: React.FC = () => {
  useEffect(() => {
    console.log("Home")
  }, [])
  return (
    <IonPage>
      {/* <Header label="Accueil" icon={map} /> */}
      <Content>
        <Stack space={SpacingEnum.s5}>
            <Cover noPad minHeight='80vh'>
              <Box borderWidth="0" padding="0">
                <Label size="large">
                  CASC et la FRESCO présentent la première édition du
                </Label>
              </Box>

              <Stack data-centered="true">
                <Sidebar  sideWidth="20em" >
                  <Stack space={SpacingEnum.s3}>
                    <Heading level="1">
                    FORUM DES SCIENCES COGNITIVES DE LILLE
                    </Heading>
                    {/* <Heading level="2" color={ColorLabelsEnum.TERTIARY}>“Méfions-nous des apparences, quelle réalité percevons-nous ?”.</Heading> */}
                    <Label size="large">
                      Retrouvez nous pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des animations et des stands de vulgarisation.
                    </Label>
                    <Cluster space={SpacingEnum.s2}>
                      <Button href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand="block" size="large" label="Réserver ma place" color={ColorLabelsEnum.TERTIARY} />
                      <Button routerLink="/tabs/programmes" expand="block" size="large" label="Découvrir le programme" fill="outline" color={ColorLabelsEnum.TERTIARY} />
                    </Cluster>
                  </Stack>
                  <StyledLottiePlayer {...playerOptions} src={OpticalIllusion} />
                  {/* <Box> */}
                </Sidebar>
              </Stack>
              <Box borderWidth="0" padding="0">
                <Label size="large" color={ColorVariablesEnum.PRIMARY}>
                  Samedi 19 mars 2022, 10h -18h — HEI JUNIA
                </Label>
              </Box>
            </Cover>
          {/* <Stack space={SpacingEnum.s3}>
            <Heading level="3">Thématique</Heading>
            <IonList>
              <IonListHeader>
                Méfions-nous des apparences, quelle réalité percevons-nous ?
              </IonListHeader>
              <IonItem>
                Pourquoi et comment notre cerveau transforme-t-il la réalité ?
              </IonItem>
              <IonItem>
                Peut-on prendre conscience de ces biais de perception pour mieux agir ?
              </IonItem>
              <IonItem>
                Quelle contribution des approches expérimentales et artistiques
              </IonItem>
            </IonList>
          </Stack>
          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Une journée de vulgarisation 🧠</Heading>
            <IonCard mode="ios" className="ion-padding-vertical">
              <Sidebar side="left" sideWidth="15em">
                <SvgIcon Icon={France} />
                <Label>Pour la première fois en France, 7 Forums des sciences cognitives auront lieu durant l’année universitaire !
                  La journée est rythmée par des conférences, des stands, des animations ludiques, des débats,
                  des présentations de métiers et des posters scientifiques.
                </Label>
              </Sidebar>
            </IonCard>
          </Stack>


          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Organisateurs</Heading>
            <IonCard mode="ios" className="ion-padding-vertical">
              <Sidebar side="left" sideWidth="15em">
                <SvgIcon color={ColorVariablesEnum.LIGHT} Icon={Logo} />
                <Label>Cette année le forum des sciences cognitives de Lille est organisée par l'association de Sciences Cognitives de Lille (CASC) en collaboration de la fédération française des étudiants et jeunes chercheurs en sciences de la cognition (FRESCO).</Label>
              </Sidebar>
            </IonCard>
          </Stack>

          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Cogni'Quiz</Heading>
            <Label>Pendant le forum des sciences cognitives la fédération française des sciences de la cognition (FRESCO) organise le Cogni’Quiz,
              un «question pour un champion» version sciences cognitives </Label>
            <Button label="Participer" />
          </Stack>

          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Partenaires</Heading>
            <Box borderWidth="0" padding="0">
              <PartenairesSlides />
            </Box>
          </Stack> */}
        </Stack>
        {/* <Modal isOpen={true} Children={<Box>Hey</Box>}/> */}
      </Content>
    </IonPage>
  );
};

export default Home;
{/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/ }
{/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */ }
// Photo by <a href="https://unsplash.com/@kvalifik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kvalifik</a> on <a href="https://unsplash.com/s/photos/workshop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

