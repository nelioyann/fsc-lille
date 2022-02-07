import React from "react";
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import { home } from "ionicons/icons";
import Heading from "../Headings/Heading";
import { ColorLabelsEnum } from "../../theme/globalStyles";
import IconButton from "../Buttons/IconButton";

interface HeaderProps {
    label?: string;
    icon?: string;
    color?: ColorLabelsEnum;
    noBorder?: boolean;
    iconSlot?: "start" | "end" | "";
    withBackButton?: boolean;
    backButtonLink?: string
    iconTargetLink?: string;
    mode?: "ios" | "md"
}
const Header: React.FC<HeaderProps> = ({ color, mode = "md", noBorder = false, label, icon, iconSlot = "end", iconTargetLink, withBackButton = false, backButtonLink = undefined }) => {
    return (
        <IonHeader mode={mode} className={noBorder ? "ion-no-border" : ""}>
            <IonToolbar color={color} >
                {/* Left side */}
                {withBackButton && <IonButtons slot="start">
                    <IonBackButton color="dark" text="" defaultHref={backButtonLink} />
                </IonButtons>}

                {/* Center side */}
                {label && <IonTitle slot="">
                    <Heading level="4" style={{ margin: "auto", textAlign: "center" }}>{label}</Heading>
                </IonTitle>}

                {/* Right side */}

                {icon &&
                    <IonButtons slot={iconSlot}>
                        <IconButton icon={icon} fill="clear" color={ColorLabelsEnum.DARK} routerLink={iconTargetLink}/>
                    </IonButtons>}
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
