import { IonContent, IonPage } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { Box, Center, Cover, Sidebar, Stack, Switcher } from '../layouts';
import { ReactComponent as Logo } from "../data/icons/Logo.svg"
import { ColorLabelsEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Card from '../components/Cards/Card';
import Chairs from "../data/images/chair_room.jpg"
import Rubix from "../data/images/rubix.jpg"
import Button from '../components/Buttons/Button';
import Content from '../ui/Content/Content';
import OpticalIllusion from "../data/lotties/optical-illusion.json"
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

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
        <Stack >
          <Cover noPad minHeight='80vh'>
            <Stack data-centered="true">
              <Sidebar side="left">
                <StyledLottiePlayer   {...playerOptions} src={OpticalIllusion} />
                <Stack>
                  <Heading level="1">
                    Forum des Sciences Cognitives de Lille
                  </Heading>
                  <Heading level="2" color={ColorLabelsEnum.TERTIARY}>“Méfions-nous des apparences, quelle réalité percevons-nous ?”.</Heading>
                  <Label size="large">
                    Retrouvez nous pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des animations et des stands de vulgarisation.
                  </Label>
              <Box padding="0" borderWidth="0">
                <Button expand={undefined} size="large" label="Inscrivez vous, c'est gratuit" color={ColorLabelsEnum.PRIMARY} />
              </Box>
                </Stack>
                {/* <Box> */}

              </Sidebar>
            </Stack>
          </Cover>
          <Stack >
            <Heading level="3">Les thématiques abordées</Heading>
            <Switcher space={SpacingEnum.s0}>
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Chairs} title="Conférences" subtitle=" " />
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Chairs} title="Conférences" subtitle=" " />
              <Card size="full" routerLink="/tabs/programmes" imageUrl={Rubix} title="Animations" subtitle=" " />
            </Switcher>
          </Stack>
        </Stack>
      </Content>
    </IonPage>
  );
};

export default Home;
{/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/ }
{/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */ }
