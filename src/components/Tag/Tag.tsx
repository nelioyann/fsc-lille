import { IonBadge, IonChip, IonIcon } from '@ionic/react';
import { closeCircle, pin } from 'ionicons/icons';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ColorLabelsEnum, ButtonText } from '../../theme/globalStyles';

export interface ITag extends HTMLAttributes<HTMLIonChipElement> {
    outline?: boolean;
    color?: ColorLabelsEnum;
    /**Wether the tag is interactive  */
    disabled?: boolean;
    /**Text label shown in the tag */
    label?: string;
    icon?: string;
    /**Show a close Icon  */
    withCloseIcon?: boolean;
}

const StyledTag = styled(IonChip)`
    border-radius: 0.5em;
    ${({ disabled }) =>
        disabled === true &&
        css`
            pointer-events: none;
            opacity: 1;
            background: rgba(var(--ion-color-base-rgb), 0.22);
        `
    }
    ${ButtonText}{
        user-select:none;
    }
`

const TagDefaultProps: ITag = {
    outline: true,
    label: "Restaurant",
    color: ColorLabelsEnum.PRIMARY,
    icon: pin,
    withCloseIcon: false,
    disabled: false
}
const Tag = ({ label, icon, color,withCloseIcon, ...TagDefaultProps }: ITag) => {
    return (
    <StyledTag color={color} {...TagDefaultProps}>
        {icon && <IonIcon icon={icon} color={color} />}
        {label && <ButtonText size="small">{label}</ButtonText>}
        {withCloseIcon && !TagDefaultProps.disabled && <IonIcon icon={closeCircle} color={color} />}
    </StyledTag>
    )
};

Tag.defaultProps = TagDefaultProps;

export default Tag;
