import { IonPage, IonContent, IonCard, IonRouterLink } from '@ionic/react';
import { logoFacebook, logoLinkedin, logoTwitter, mail } from 'ionicons/icons';
import React from 'react';
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input/Input';
import Textarea from '../components/Forms/Input/Textarea';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Box, Cluster, Cover, Stack } from '../layouts';
import { ColorLabelsEnum, Label, SpacingEnum } from '../theme/globalStyles';
import CascBanner from "../data/images/casc_banner.jpg"
import Card from '../components/Cards/Card';
import Content from '../ui/Content/Content';
import PartenairesSlides from '../components/Customs/Partenaires/PartenairesSlides';


const Contact = () => {
    return (
        <IonPage>
            <Header mode="ios" label="A propos" />
            <Content>
                <Cover minHeight="80vh" noPad>
                    <Stack space={SpacingEnum.s3}>
                        <Stack>
                            <Heading level="3">Une question ? Contactez l'association CASC</Heading>
                            <Label size='large'>Pour toute question concernant l'événement, envoyez un mail sur contact@fsc-lille.com</Label>
                            {/* <Box borderWidth="0" padding="0"> */}
                                <Button color={ColorLabelsEnum.PRIMARY} target='_self' icon={mail} fill="solid" href="mailto:contact@fsc-lille.com" label="Envoyer un email..." />
                            {/* </Box> */}
                            <Heading level="3">Suivez les dernières informations sur le forum</Heading>
                            <Cluster space={SpacingEnum.s0}>
                                <Button color={ColorLabelsEnum.PRIMARY} href="https://twitter.com/Podcasc" fill="outline" icon={logoTwitter} label="Twitter" />
                                <Button color={ColorLabelsEnum.PRIMARY} href="https://www.facebook.com/CASC.association" fill="outline" icon={logoFacebook} label="Facebook" />
                                <Button color={ColorLabelsEnum.PRIMARY} href="https://www.linkedin.com/company/casc-asso/" fill="outline" icon={logoLinkedin} label="LinkedIn" />
                            </Cluster>
                        </Stack>

                        <Stack>
                            <Heading level="3">A propos</Heading>
                            <Label>
                                Le Forum des Sciences Cognitives de Lille (FSC-Lille) est un événement dont le but est de
                                mettre en valeur et de favoriser les échanges entre les actrices et acteurs des sciences
                                cognitives des Hauts de France. Organisé par deux associations, l’une locale, CASC et par la
                                fédération nationale des sciences de la cognition (FRESCO), le FSC-Lille propose au grand
                                public, aux étudiants comme aux spécialistes du domaine, un panorama des formations, des
                                outils de la recherche, et des nombreuses questions passionnantes autour du fonctionnement
                                de notre cerveau.
                            </Label>


                            <Label>
                                Avant une 2e édition hébergée par l’Université de Lille en 2023 consacrée à la réalité virtuelle,
                                cette toute première édition est accueillie par l’Université Catholique de Lille, au sein des
                                locaux de JUNIA HEI. Intitulé « Méfions-nous des apparences, quelle réalité percevonsnous ? », le FSC-Lille #1 s’intéresse aux différences qui peuvent exister entre la réalité et ce
                                que nous en percevons. Des illusions visuelles à l’influence de la musique sur le goût, vous
                                découvrirez comment notre cerveau a souvent tendance à nous faire vivre une réalité qui n’est
                                pas tout à fait, voire pas du tout, … la réalité !
                            </Label>
                            <Label>
                                Autour de cette thématique, le FSC-Lille propose de retrouver en un lieu unique la richesse
                                des travaux des laboratoires des Hauts de France, la variété des formations universitaires et
                                l’effervescence de la R&D dans l’intégration des sciences cognitives et de la démarche
                                expérimentale aux enjeux de la société de 2022. Cette approche résolument multi-disciplinaire
                                est idéalement complétée par des réflexions artistiques (Le Fresnoy) et philosophiques sur la
                                perception souvent biaisée que nous avons de notre environnement et sur les conséquences
                                de nos actions ou de nos inactions !
                            </Label>
                            <Heading level="3">FSC-Lille #2 (2023)</Heading>
                            <Label>
                                Le FSC-Lille est aussi une occasion pour les professionnel.le.s et scientifiques de se retrouver
                                pour échanger simplement, en buvant un café ou en dégustant un des plats frais et locaux
                                concoctés par les cuisiniers à vélo qui participeront à l’événement.
                                La deuxième édition du FSC-Lille s’intéressera à la réalité virtuelle qui d’un point de vue
                                cérébral n’a souvent de virtuelle que le nom. Le FSC-Lille #2 : « Réalité virtuelle, une réalité si
                                irréelle ? » se tiendra en mars 2023 et sera hébergé par l’Université de Lille au sein de de
                                l’Imaginarium de Tourcoing et de son plateau de recherche en psychologie cognitive IrDIVE
                            </Label>
                            {/* <Box borderWidth="0" padding="0">
                                <img src={CascBanner} />
                            </Box> */}
                        </Stack>

                        <Stack space={SpacingEnum.s3}>
                            <Heading level="3">Structures participantes</Heading>
                            <Box borderWidth="0" padding="0">
                                <PartenairesSlides />
                            </Box>
                        </Stack>
                    </Stack>
                </Cover>
            </Content>
        </IonPage>
    )
};

export default Contact;
