import React from "react";
import {IonContent} from "@ionic/react";
import {Header} from "./Header";

const MyStats:React.FC=()=>{
    return(
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="header_title">
                    <h4>My Stats</h4>
                </div>
                <div className="button_group">
                    <a className="small_button"style={{textDecoration:"none"}} href="JavaScript:Void(0);">Self-assesment</a>
                    <a className="small_button" style={{textDecoration:"none"}}href="JavaScript:Void(0);">Weekly Exams</a>
                </div>
            </div>

        </IonContent>
    )
}
export default MyStats;