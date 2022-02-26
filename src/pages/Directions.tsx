import { IonPage, IonList, IonListHeader, IonItem, IonBreadcrumb, IonBreadcrumbs } from '@ionic/react'
import React from 'react'
import Header from '../components/Headers/Header'
import Heading from '../components/Headings/Heading'
import Tag from '../components/Tag/Tag'
import { Label } from '../theme/globalStyles'
import Content from '../ui/Content/Content'

const Directions = () => {
    return (
        <IonPage>
            <Header backButtonLink="/tabs/accueil" withBackButton={true} label="Se rendre au forum" mode="ios" />
            <Content>
                {/* <Heading level="2">Comment accéder au lieu</Heading> */}
                <IonBreadcrumbs mode="ios">
                    <IonBreadcrumb>Accueil</IonBreadcrumb>
                    <IonBreadcrumb>Directions</IonBreadcrumb>
                </IonBreadcrumbs>
                <Tag disabled label="13 rue de Toul - 59000  Lille" />
                <Label size="large">
                    Située sur le campus de l'Université Catholique de Lille, HEI est accessible en voiture, en vélo ou en transports en commun
                </Label>
                <IonList>
                    <IonListHeader>
                        <Heading level="5">
                            EN METRO
                        </Heading>
                    </IonListHeader>
                    <IonItem>
                        Les arrêts Cormontaigne ou Port de Lille sont les plus proches d’HEI. Ils se situent à une dizaine de minutes à pied de l’école.
                    </IonItem>
                    <IonListHeader>
                        <Heading level="5">
                            EN TRAIN
                        </Heading>
                    </IonListHeader>
                    <IonItem>
                        HEI est située à une vingtaine de minutes à pied des gares Lille Flandres et Lille Europe.
                    </IonItem>
                    <IonListHeader>
                        <Heading level="5">
                            EN BUS
                        </Heading>
                    </IonListHeader>
                    <IonItem>
                        Les lignes L5 et la ligne 18 desservent l’arrêt “Université Catholique de Lille”, située à 3 minutes à pied de l’école. Arrêt situé face à la gare Lille Flandres et sur les grands axes.
                    </IonItem>
                    <IonListHeader>
                        <Heading level="5">
                            Carte
                        </Heading>
                    </IonListHeader>
                    <IonItem>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6442132342295!2d3.0429153157380493!3d50.633725879501085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579573550df%3A0xaa9c89af983f58e9!2sJunia%20Hei%20Lille%20-%20School%20D&#39;ing%C3%A9nieur%20Lille!5e0!3m2!1sen!2sfr!4v1645571926708!5m2!1sen!2sfr" height="450" style={{ "border": 0, width: "100%" }} loading="lazy"></iframe>
                    </IonItem>
                </IonList>
                {/* <Button expand='block' label="Fermer" fill='outline' onClick={() => setShowModal(false)} /> */}
            </Content>
        </IonPage>
    )
}

export default Directions