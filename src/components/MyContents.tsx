import React  from "react";
import {IonContent, IonLabel, IonItem, IonInput} from "@ionic/react";
import {Header} from "./Header";

const MyContents: React.FC = () => {

    return (
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="header_title">
                    <h4>My Contents</h4>
                </div>
                <div className="button_group">
                    <a className="small_button" style={{textDecoration: "none"}} href="JavaScript:Void(0);">Notes</a>
                    <a className="small_button" style={{textDecoration: "none"}} href="JavaScript:Void(0);">Question</a>
                </div>
            </div>
        </IonContent>
    );
};

export default MyContents;