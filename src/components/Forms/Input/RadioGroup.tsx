import { IonRadioGroup } from '@ionic/react';
import React, { HTMLAttributes, useState } from 'react';
import { Stack } from '../../../layouts';
import Radio from './Radio';


export interface IRadioGroup extends HTMLAttributes<HTMLIonRadioGroupElement> {
    name: string;
    radios: {label: string, value: string}[]
}
const radios = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
]

const RadioGroupDefaultProps: IRadioGroup = {
    name: "fruits",
    radios
}
const RadioGroup: React.FC<IRadioGroup> = ({ name, radios, ...RadioGroupDefaultProps }) => {
    const [selected, setSelected] = useState<string>("apple")
    return (
        <IonRadioGroup {...RadioGroupDefaultProps} value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <Stack>
            {radios.map(({label, value}, index) =>(
                <Radio key={`radio_${index}`} label={label} value={value} name={name}/>
            ))}
            </Stack>
        </IonRadioGroup>
    );
};
RadioGroup.defaultProps = RadioGroupDefaultProps;
export default RadioGroup;
