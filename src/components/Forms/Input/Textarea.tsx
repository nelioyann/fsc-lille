import React, { HTMLAttributes } from 'react';
import { IonTextarea, IonItem, IonLabel } from '@ionic/react';
import styled from 'styled-components';
import { Label, SpacingEnum } from '../../../theme/globalStyles';
export interface ITextarea extends HTMLAttributes<HTMLIonTextareaElement> {
    label: string;
    name: string;
    placeholder?: string;
    autoGrow?: boolean;
    type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
    rows?: number;
    required?: boolean;
    readonly?: boolean;
    inputmode?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url" | undefined;
    enterkeyhint?: "done" | "enter" | "go" | "next" | "previous" | "search" | "send" | undefined;
    clearTextarea?: boolean;
}
const StyledTextarea = styled(IonTextarea)`
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
    ${StyledTextarea}{
        border-radius: ${SpacingEnum.subtleCurve};
        border: ${SpacingEnum.borderThicc} solid var(--border-color);
    }
    &.item-interactive.item-has-focus ${StyledTextarea}{
        border: ${SpacingEnum.borderThicc} solid var(--highlight-background);
    }
    &.item-interactive.item-has-focus ${Label}{
        color: var(--highlight-background);
    }
`

const Textarea: React.FC<ITextarea> = ({ label, ...props }) => {
    return (
        <StyledItem lines="none">
            <IonLabel position="stacked">
                <Label size="large">
                    {label}
                </Label>
            </IonLabel>
            <StyledTextarea {...props}></StyledTextarea>
        </StyledItem>
    )
}

export default Textarea;
