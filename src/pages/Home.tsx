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

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header label="Accueil" mode="ios" />
      <IonContent fullscreen>
        <Box borderWidth="0">
          <Sidebar contentMin="70%" sideWidth="15em" space={SpacingEnum.s1} noStretch>
            <Center gutters="0" >
              <Cover noPad minHeight='90vh'>
                <Stack data-centered="true">
                  <SvgIcon size="clamp(5em, 100%, 15em)" Icon={Logo} />
                  <Heading level="1" color={ColorLabelsEnum.PRIMARY}>
                    Forum des Sciences Cognitives de Lille
                  </Heading>
                  <Heading level="3">
                    Retrouvez nous le 19 Mars, à l'Université Catholique de Lille
                  </Heading>
                  <Label size="large">
                    Pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des stands, des animations ludiques, des débats, des présentations de métiers et des posters scientifiques.
                  </Label>
                </Stack>
                <Button label="Inscrivez vous" color={ColorLabelsEnum.PRIMARY} />
              </Cover>
            </Center>
            <Cover minHeight='90vh'>
              <Switcher space="0">
                <Card size="full" routerLink="/programme" imageUrl={Chairs} title="Conférences" subtitle=" " />
                {/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/}
                <Card size="full" routerLink="/programme" imageUrl={Rubix} title="Animations" subtitle=" " />
                {/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
              </Switcher>
            </Cover>
          </Sidebar>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
