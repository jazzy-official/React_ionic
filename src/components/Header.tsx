import React from 'react';
import {
    IonMenuButton,
    IonLabel,
    IonButton,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButtons
} from '@ionic/react';
import {IonIcon} from "@ionic/react";
import Image2 from "../assets/img/logo.png";
import {notifications, person,mail,paperPlane,heart,archive,trash,warning} from "ionicons/icons";


export const Header: React.FC = () => (



        <div>
            <IonMenu side="start" content-id="main-content" type="overlay" className="menu" >
                <IonHeader>
                    <IonToolbar >
                        <IonTitle className="ml-2">Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <IonIcon icon={mail} slot="start"/>
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={paperPlane} slot="start"/>
                            <IonLabel>Outbox</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={heart} slot="start"></IonIcon>
                            <IonLabel>Favorites</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={archive} slot="start"></IonIcon>
                            <IonLabel>Archived</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={trash} slot="start"></IonIcon>
                            <IonLabel>Trash</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={warning} slot="start"></IonIcon>
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
