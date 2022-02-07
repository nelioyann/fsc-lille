import { IonContent, IonPage } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Box, Cover } from '../layouts';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header label="Accueil" mode="ios" />
      <IonContent fullscreen>
        <Box borderWidth="0">
          <Cover minHeight='90vh'>
            <Heading data-centered="true" level="2">Journée de conférences, stands, animations et ateliers pour permettre de vulgariser et de présenter différentes activités et
              des informations sur l’écosystème local en sciences cognitives</Heading>
          </Cover>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default Home;
