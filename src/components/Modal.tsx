import React, { useState } from 'react';
import { IonModal,IonHeader,IonToolbar,IonTitle, IonButton,IonButtons, IonContent } from '@ionic/react';

export const ModalExample: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonContent>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <div className="explanation_sec">
                    <ul>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                    </ul>
                </div>
                <IonButton color="dark" onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
    );
};