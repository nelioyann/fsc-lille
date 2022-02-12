import { IonContent, IonPage } from '@ionic/react';
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
import {ReactComponent as France} from "../data/icons/France.svg"

const StyledLottiePlayer = styled(Player)`
    max-width: 20em;
    max-height: 20em;
`
const playerOptions = {
  autoplay: true,
  loop: true,
  keepLastFrame: true,
}
const Home: React.FC = () => {
  return (
    <IonPage>
      <Header label="Accueil" />
      <Content >
        <Stack space={SpacingEnum.s5}>
          <Cover noPad minHeight='50vh'>
            <Stack data-centered="true">
              <Sidebar contentMin="65%" >
                <Stack>
                  <Heading level="1">
                    Forum des Sciences Cognitives de Lille
                  </Heading>
                  <Heading level="2" color={ColorLabelsEnum.TERTIARY}>“Méfions-nous des apparences, quelle réalité percevons-nous ?”.</Heading>
                  <Label size="large">
                    Retrouvez nous pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des animations et des stands de vulgarisation.
                  </Label>
                  <Switcher space={SpacingEnum.s2}>
                    <Button href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand="block" size="large" label="Réserver ma place" color={ColorLabelsEnum.PRIMARY} />
                    <Button routerLink="/tabs/programmes" expand="block" size="large" label="Voir le programme" fill="outline" color={ColorLabelsEnum.PRIMARY} />
                  </Switcher>
                </Stack>
                <StyledLottiePlayer   {...playerOptions} src={OpticalIllusion} />
                {/* <Box> */}
              </Sidebar>
            </Stack>
          </Cover>
          <Stack>
            <Heading level="3">Les thématiques abordées</Heading>
            <Switcher space={SpacingEnum.s0}>
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Chairs} title="Conférences" subtitle=" " />
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Stands} title="Stands" subtitle=" " />
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Rubix} title="Animations" subtitle=" " />
            </Switcher>
          </Stack>
          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Le forum des sciences cognitives</Heading>
            <Sidebar side="left" sideWidth="15em">
              {/* <Box> */}
                <SvgIcon  Icon={France}/>
              {/* </Box> */}
              <Stack space={SpacingEnum.s1}>
                <Label>Pour la première fois en France, 7 Forums des sciences cognitives auront lieu durant l’année universitaire !
                  La journée est rythmée par des conférences, des stands, des animations ludiques, des débats,
                  des présentations de métiers et des posters scientifiques.
                </Label>
              </Stack>
            </Sidebar>
            <Sidebar side="left" sideWidth="15em">
            <SvgIcon color={ColorVariablesEnum.LIGHT} Icon={Logo}/>
            <Label>Cette année le forum des sciences cognitives de Lille est organisée par l'association de Sciences Cognitives de Lille (CASC) en collaboration de la fédération française des étudiants et jeunes chercheurs en sciences de la cognition (FRESCO).</Label>

            </Sidebar>
          </Stack>

          <Stack>
            <Heading level="3">Le Cogni'Quiz</Heading>
            <Label>Pendant le forum des sciences cognitives la fédération française des sciences de la cognition (FRESCO) organise le Cogni’Quiz,
                    un «question pour un champion» version sciences cognitives </Label>
          </Stack>
        </Stack>
      </Content>
    </IonPage>
  );
};

export default Home;
{/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/ }
{/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */ }
// Photo by <a href="https://unsplash.com/@kvalifik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kvalifik</a> on <a href="https://unsplash.com/s/photos/workshop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

