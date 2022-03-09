import { IonItem, IonItemDivider, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import { Label } from '../../../theme/globalStyles';
import styled from 'styled-components';

const ProgrammeItem = styled(IonItem)`
  --background: transparent;
`
const StyledList = styled(IonList)`
margin-left: 0 !important;
margin-right: 0 !important;
margin-bottom: 0 !important;

`
const conferencesList = [
  {
    name: "La perception sous influence !",
    date: "11H",
  },
  {
    name: "Environnement et société : améliorer la perception pour passer à l’action",
    date: "12H",
  },
  {
    name: "Au-delà du mouvement",
    date: "14H",
  },
  {
    name: "Regards croisés sur l’expérimentation citoyenne et artistique",
    date: "15H",
  },
];
const ProgrammeList = () => {
  return (
    <StyledList inset>
      <IonItemDivider>
        <Label size='large'>Ateliers </Label>
      </IonItemDivider>
      <ProgrammeItem >
        <Label>Dark patterns et design éthique</Label>
        <Label size="default" slot="end"></Label>
      </ProgrammeItem>
      <ProgrammeItem >
        <Label>Augmentations visuelles pour la musique numérique</Label>
        <Label size="default" slot="end"></Label>
      </ProgrammeItem>
      <ProgrammeItem >
        <Label>Reconnaissance d'actions humaines dans un environnement robotique d'assistance à la personne</Label>
        <Label size="default" slot="end"></Label>
      </ProgrammeItem>
      <IonItemDivider>
        <Label size='large'>Conférences</Label>
      </IonItemDivider>
      {conferencesList.map((program) => (
        <ProgrammeItem key={program.name}>
          <Label>{program.name}</Label>
          <Label size='default' slot="end">{program.date}</Label>
        </ProgrammeItem>
      ))}
      <IonItemDivider>
        <Label size='large'>Animations</Label>
      </IonItemDivider>
      <ProgrammeItem >
        <Label>Cogni'Quiz</Label>
        <Label size="default" slot="end">16H</Label>
      </ProgrammeItem>
      <ProgrammeItem >
        <Label >Table Ronde des alumnis</Label>
        <Label size="default" slot="end">17H</Label>
      </ProgrammeItem>
    </StyledList>
  )
};

export default ProgrammeList;
