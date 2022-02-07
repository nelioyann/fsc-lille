import { IonItem, IonLabel, IonRadio } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColorVariablesEnum, LargeButton } from '../../../theme/globalStyles';

export interface IRadio extends HTMLAttributes<HTMLIonRadioElement> {
    /**
     * name of the group of radio
     */
    name: string;
    /**
     * value of the current radio
     */
    value: any;
    /** displayed label */
    label: string;
}

const StyledItem = styled(IonItem)`
    border: 0.2em solid ${ColorVariablesEnum.MEDIUM};
    border-radius: 8px;
    &.item-radio-checked{
        --color: ${ColorVariablesEnum.PRIMARY};
        --background: var(--ion-color-light);
        border: 0.2em solid ${ColorVariablesEnum.PRIMARY};
        ${LargeButton}{
            color: ${ColorVariablesEnum.PRIMARY};
        }
    }
`

const RadioDefaultProps: IRadio = {
    name: "fruits",
    value: "apple",
    label: "Apple"
}

const Radio: React.FC<IRadio> = ({ label, value, name, ...RadioDefaultProps }) => {
    return (
        <StyledItem mode="ios" lines="none">
            <LargeButton>{label}</LargeButton>
            <IonRadio {...RadioDefaultProps} slot="start" name={name} value={value} />
        </StyledItem>
    );
};

Radio.defaultProps = RadioDefaultProps;
export default Radio;
