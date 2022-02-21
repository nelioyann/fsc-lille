import { IonPage, ReactComponentOrElement, useIonModal } from '@ionic/react'
import React, { useEffect } from 'react'
import Content from '../../ui/Content/Content'

interface IModal {
    Children: ReactComponentOrElement;
    isOpen: boolean;
}
const Modal: React.FC<IModal> = ({ Children, isOpen, ...props }) => {



    const handleValidate = () => {

    }
    const handleDismiss = () => {
        dismiss();
    }

    const [present, dismiss] = useIonModal(Children, {
        onDismiss: handleDismiss,
        swipeToClose:true
    })

    useEffect(() => {
        console.log("happening", Children)
        if (isOpen) {
            present()
        };
        return () =>{
            console.log("clenaing up")
            handleDismiss()
        }
    }, [])
    return null
}

export default Modal