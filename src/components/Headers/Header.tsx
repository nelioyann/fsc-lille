import React from "react";
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import { home } from "ionicons/icons";
import Heading from "../Headings/Heading";
import { ColorLabelsEnum, ColorVariablesEnum } from "../../theme/globalStyles";
import IconButton from "../Buttons/IconButton";
import styled from "styled-components";

interface HeaderProps {
    label?: string;
    icon?: string;
    color?: ColorLabelsEnum;
    noBorder?: boolean;
    iconSlot?: "start" | "end" | "";
    withBackButton?: boolean;
    backButtonLink?: string;
    backButtonText?: string;
    iconTargetLink?: string;
    iconOnclickHandler?: () => any;
    mode?: "ios" | "md"
}
const StyledToolBar = styled(IonToolbar)`
    width: clamp(15em, 100%, 70em); //set on higher styled component
    margin: 0px auto !important;

`
const Header: React.FC<HeaderProps> = ({ color = ColorLabelsEnum.LIGHT, mode = "md", iconOnclickHandler = () => console.log("Clicked icon header"), noBorder = false, label, icon, iconSlot = "end", iconTargetLink, withBackButton = false, backButtonLink = "/tabs/accueil", backButtonText = "" }) => {
    return (
        <IonHeader style={{backgroundColor: ColorVariablesEnum.LIGHT}} mode={mode} className={noBorder ? "ion-no-border" : ""}>
            <StyledToolBar color={color} >
                {/* Left side */}
                {withBackButton && <IonButtons slot="start">
                    <IonBackButton color="dark" text={backButtonText} defaultHref={backButtonLink} />
                </IonButtons>}

                {/* Center side */}
                {label && <IonTitle slot="">
                    <Heading level="4" >{label}</Heading>
                </IonTitle>}

                {/* Right side */}

                {icon &&
                    <IonButtons slot={iconSlot}>
                        <IconButton onClick={() => iconOnclickHandler()} icon={icon} fill="clear" color={ColorLabelsEnum.DARK} routerLink={iconTargetLink}/>
                    </IonButtons>}
            </StyledToolBar>
        </IonHeader>
    );
};

export default Header;
