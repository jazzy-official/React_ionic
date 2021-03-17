import React from "react";
import {IonContent} from "@ionic/react";
import {Header} from "./Header";
import Cardiology from "../assets/img/cardiology.png"
import pulmonology from "../assets/img/palmonology.png"
import gastroeutrology from "../assets/img/gastroeuterology.png"
import hepatology from "../assets/img/hepatology.png"
import nephrology from "../assets/img/nephrology.png"
import neurology from "../assets/img/neurology.png"
import hematology from "../assets/img/hematology.png"
const NotesCategories:React.FC=()=>{
    return(
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="sub-categories-header">
                    <a className="prev-btn" href=""><i className="fas fa-arrow-left"></i></a>
                    <h6>Notes</h6>
                    <h5>Categories</h5>
                </div>

                <div className="sub_category update_notes_list">
                    <ul>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={Cardiology}/></span>Cardiology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={pulmonology}/></span>Palmonology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={gastroeutrology}/></span>Gastroeuterology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={hepatology}/></span>Hepatology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={nephrology}/></span>Nephrology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={neurology}/></span>Neurology</a>
                        </li>
                        <li>
                            <a style={{textDecoration:"none"}} href="JavaScript:Void(0);"><span><img src={hematology}/></span>Hematology</a>
                        </li>
                    </ul>
                </div>
            </div>
        </IonContent>
    )
}
export default NotesCategories;