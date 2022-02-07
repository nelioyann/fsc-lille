import React, { HTMLAttributes } from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import styled from 'styled-components';
import { Label, SpacingEnum } from '../../../theme/globalStyles';
export interface IInput extends HTMLAttributes<HTMLIonInputElement> {
    label: string;
    placeholder?: string;
    type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
    required?: boolean;
    name: string;
    inputmode?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url" | undefined;
    enterkeyhint?: "done" | "enter" | "go" | "next" | "previous" | "search" | "send" | undefined;
    clearInput?: boolean;
    autocomplete?: "off" | "on" | "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo";
}
const StyledInput = styled(IonInput)`
    margin-top: ${SpacingEnum['s-1']};
    --padding-start: ${SpacingEnum['s-1']} !important;
    --padding-end: ${SpacingEnum['s-1']} !important;
    --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.8))));
    --background: var(--ion-color-dark-contrast) !important;

`

const StyledItem = styled(IonItem)`
    width: 100%;
    --background: transparent;
    --inner-padding-start: 0 !important; 
    --inner-padding-end: 0 !important;
    --padding-start: 0 !important;
    --padding-end: 0 !important;
    ${StyledInput}{
        border-radius: ${SpacingEnum.subtleCurve};
        border: ${SpacingEnum.borderThicc} solid var(--border-color);
    }
    &.item-interactive.item-has-focus ${StyledInput}{
        border: ${SpacingEnum.borderThicc} solid var(--highlight-background);
    }
    &.item-interactive.item-has-focus ${Label}{
        color: var(--highlight-background);
    }
`



const Input: React.FC<IInput> = ({label,...props}) => {
    return (
        <StyledItem lines="none">
            <IonLabel position="stacked">
                <Label size="large">

                {label}
                </Label>
                </IonLabel>
            <StyledInput {...props}></StyledInput>
        </StyledItem>
    )
}

export default Input;
