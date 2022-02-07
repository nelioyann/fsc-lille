import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { appsOutline } from 'ionicons/icons';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ColorVariablesEnum, LargeButton, SpacingEnum } from '../../theme/globalStyles';

interface IMenuItem extends HTMLAttributes<HTMLIonItemElement> {
    icon: string;
    label: string;
    path: string;
    isActive?: boolean;
}

interface ItemProps{
    $isActive?: boolean;
}
const StyledItem = styled(IonItem)<ItemProps>`
    border-radius: ${SpacingEnum.subtleCurve};
    --background-hover-opacity: 0.2;
    --background-hover: ${ColorVariablesEnum.PRIMARY};
    margin: ${SpacingEnum.s0};
    border: ${SpacingEnum.borderThicc} solid transparent;

    ${({ $isActive }) =>
        $isActive &&
        css`
            --color: ${ColorVariablesEnum.PRIMARY};
            border: ${SpacingEnum.borderThicc} solid ${ColorVariablesEnum.PRIMARY};
            ${LargeButton}{
                color: ${ColorVariablesEnum.PRIMARY};
            }
        `
    }

`

const MenuItem: React.FC<IMenuItem> = ({path = "", isActive,  icon = appsOutline, label = "Menu Item", ...props }) => {
    return (
        <StyledItem detail={false} $isActive={isActive} mode="ios" routerLink={path} shape="round" button={true} {...props}>
            <IonIcon style={{ marginRight: "0.5em" }} icon={icon} />
            <LargeButton>{label}</LargeButton>
        </StyledItem>
    )
};

export default MenuItem;
