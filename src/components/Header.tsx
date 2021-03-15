import React from "react";
import {IonContent} from "@ionic/react";
import Image2 from "../assets/img/logo.png";
import "../assets/css/app.css"
const Header:React.FC=()=>(
    <IonContent>
        <header className="app-header">
            <div className="app-menu-bar">
                <i className="fas fa-bars"></i>
            </div>
            <div className="app-header-logo">
                <img className="logo" src={Image2} alt=""/>
            </div>
            <div className="header-icon">
                <ul>
                    <li><i className="fas fa-user"></i></li>
                    <li><i className="fas fa-bell"></i></li>
                </ul>
            </div>
        </header>
    </IonContent>
);
export default Header;