import React from "react";
import {IonButton, IonButtons, IonContent, IonIcon, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import Image2 from "../assets/img/logo.png";
import "../assets/css/app.css"
import {ellipsisHorizontal, ellipsisVertical, person, search,notifications} from "ionicons/icons";
const Header:React.FC=()=>(
    <div>
        {/*<header className="app-header">*/}
        {/*    <div className="app-menu-bar">*/}
        {/*        <i className="fas fa-bars"></i>*/}
        {/*    </div>*/}
        {/*    <div className="app-header-logo">*/}
        {/*        <img className="logo" src={Image2} alt=""/>*/}
        {/*    </div>*/}
        {/*    <div className="header-icon">*/}
        {/*        <ul>*/}
        {/*            <li><i className="fas fa-user"></i></li>*/}
        {/*            <li><i className="fas fa-bell"></i></li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</header>*/}
        <IonToolbar className="app-header" color="dark">
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
            <IonTitle className="app-header-logo ml-5"><img className="logo" src={Image2} alt=""/></IonTitle>
        </IonToolbar>
    </div>
);
export default Header;