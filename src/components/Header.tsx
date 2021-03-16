import React from 'react';
import {
    IonMenuButton,
    IonLabel,
    IonButton,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonRouterOutlet,
    IonButtons
} from '@ionic/react';
import {IonIcon} from "@ionic/react";
import { menuController } from '@ionic/core';
import Image2 from "../assets/img/logo.png";
import {notifications, person} from "ionicons/icons";
import ForgotPassword from "./ForgotPassword";

async function openMenu() {
    await menuController.open();
}
export const Header: React.FC = () => (



        <div>
            <IonMenu side="start" content-id="main-content">
                <IonHeader>
                    <IonToolbar >
                        <IonTitle className="ml-5">Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="paper-plane" slot="start"></IonIcon>
                            <IonLabel>Outbox</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="heart" slot="start"></IonIcon>
                            <IonLabel>Favorites</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="archive" slot="start"></IonIcon>
                            <IonLabel>Archived</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="trash" slot="start"></IonIcon>
                            <IonLabel>Trash</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon name="warning" slot="start"></IonIcon>
                            <IonLabel>Spam</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>

            <div className="app-header" id="main-content">
                <IonHeader>
                    <IonToolbar color="dark">
                        <IonButtons slot="start">
                            <IonMenuButton autoHide={false} />
                        </IonButtons>
                        <IonButtons slot="primary">
                            <IonButton>
                                <IonIcon slot="icon-only" icon={person} />
                            </IonButton>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={notifications} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle className="app-header-logo  ml-5"><img className="logo" src={Image2} alt=""/></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </div>
        </div>
    )
