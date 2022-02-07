import { IonAvatar } from '@ionic/react';
import React from 'react';

export interface IAvatar{
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
const Avatar: React.FC<IAvatar> = (props) => {
    const {Icon} = props;
    return (
        <IonAvatar>
            <Icon/>
        </IonAvatar>
    )
};

export default Avatar;
