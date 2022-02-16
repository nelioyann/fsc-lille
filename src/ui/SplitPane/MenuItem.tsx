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

interface ItemProps {
    $isActive?: boolean;
}
const StyledItem = styled(IonItem) <ItemProps>`
    border-radius: ${SpacingEnum.subtleCurve};
    --background-hover-opacity: 0.2;
    --background-hover: ${ColorVariablesEnum.SECONDARY};
    margin: ${SpacingEnum.s0};
    /* box-shadow: 0px 0px 0px ${SpacingEnum.borderThicc} var(--background); */
    transition: all 300ms;
    &:focus, &:focus-within{
    box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.SECONDARY}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
  }
    ${({ $isActive }) =>
        $isActive &&
        css`
            --color: ${ColorVariablesEnum.PRIMARY};
            /* --background: ${ColorVariablesEnum.PRIMARY}; */
            box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.SECONDARY}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
            ${LargeButton}{
                color: ${ColorVariablesEnum.PRIMARY};
            }
        `
    }

`

const MenuItem: React.FC<IMenuItem> = ({ path = "", isActive, icon = appsOutline, label = "Menu Item", ...props }) => {
    return (
        <StyledItem detail={false} $isActive={isActive} mode="ios" routerLink={path} shape="round" button={true} {...props}>
            <IonIcon style={{ marginRight: "0.5em" }} icon={icon} />
            <LargeButton>
                {label}
            </LargeButton>
        </StyledItem>
    )
};

export default MenuItem;
