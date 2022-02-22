import { IonPage, ReactComponentOrElement, useIonModal } from '@ionic/react'
import React, { useEffect } from 'react'
import Content from '../../ui/Content/Content'

interface IModal {
    Children: ReactComponentOrElement;
    isOpen: boolean;
    dismissHandler: () => void
}
const Modal: React.FC<IModal> = ({ Children, isOpen, dismissHandler, ...props }) => {



    const handleValidate = () => {

    }
    const handleDismiss = () => {
        dismissHandler();
        dismiss();
    }

    const modalOptions = {
        onDismiss: handleDismiss,
        swipeToClose:true,
        initialBreakpoint:0.5,
        breakpoints: [0, 0.5, 1]
    }
    const [present, dismiss] = useIonModal(Children, {
        modalOptions
    })

    useEffect(() => {
        if (isOpen) {
            console.log("happening", Children)
            present()
        };
        return () =>{
            console.log("clenaing up")
            handleDismiss()
        }
    }, [isOpen])
    return null
}

export default Modal