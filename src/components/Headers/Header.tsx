import React from "react";
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import { home } from "ionicons/icons";
import Heading from "../Headings/Heading";
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from "../../theme/globalStyles";
import { ReactComponent as Logo } from "../../data/icons/Logo.svg"

import IconButton from "../Buttons/IconButton";
import styled from "styled-components";
import SvgIcon from "../SvgIcon/SvgIcon";
import { homeOutline } from "ionicons/icons";

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
const Header: React.FC<HeaderProps> = ({ color = ColorLabelsEnum.LIGHT, mode = "md", iconOnclickHandler = () => console.log("Clicked on empty"), noBorder = false, label, icon, iconSlot = "end", iconTargetLink, withBackButton = false, backButtonLink = "/tabs/accueil", backButtonText = "", children }) => {
    return (
        <IonHeader style={{ backgroundColor: ColorVariablesEnum.LIGHT }} mode={mode} className={noBorder ? "ion-no-border" : ""}>
            <StyledToolBar color={color} >
                {/* Left side */}
                {withBackButton ?
                    <IonButtons slot="start">
                        <IonBackButton color="dark" text={backButtonText} defaultHref={backButtonLink} />
                    </IonButtons> :
                    <IconButton routerLink="/tabs/accueil" icon={homeOutline} fill="clear" color={ColorLabelsEnum.DARK}  />


                }

                {/* Center side */}
                {label && <IonTitle slot="">
                    <Label size="large">{label}</Label>
                </IonTitle>}

                {children}

                {/* Right side */}

                {icon &&
                    <IonButtons slot={iconSlot}>
                        <IconButton onClick={() => iconOnclickHandler()} icon={icon} fill="clear" color={ColorLabelsEnum.DARK} routerLink={iconTargetLink} />
                    </IonButtons>}
            </StyledToolBar>
        </IonHeader>
    );
};

export default Header;
