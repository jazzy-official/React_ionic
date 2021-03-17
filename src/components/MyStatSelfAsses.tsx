import React from "react";
import {IonContent, IonIcon} from "@ionic/react";
import {Header} from "./Header";
import {chevronForward} from "ionicons/icons"
const MyStatSelfAsses:React.FC=()=>{
    return(
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="sub-categories-header">
                    <h5>MySelf Assesment</h5>
                </div>
                <div className="sub-categories-body">
                    <ul className="sub-category-items">
                        <li>
                            <div className="self_assement_list_item">
                                <span className="title_text">Exam Name</span>
                                <span className="title_text_score">Score</span>
                                <span className="next-arrow"><IonIcon icon={chevronForward}></IonIcon></span>
                                <span className="date_created">Date Created : 19/11/2019</span>
                                <span className="topic_content">
                                    <p><strong className="topic_title">Topic :</strong>text one, Text Two, Text Three, Text
                                        Four Text Five Text six Text seven Text eight..........</p>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="self_assement_list_item">
                                <span className="title_text">Exam Name</span>
                                <span className="title_text_score">Score</span>
                                <span className="next-arrow"><IonIcon icon={chevronForward}></IonIcon></span>
                                <span className="date_created">Date Created : 20/11/2019</span>
                                <span className="topic_content">
                                    <p><strong className="topic_title">Topic :</strong>text one, Text Two, Text Three, Text
                                        Four Text Five Text six Text seven Text eight..........</p>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="self_assement_list_item">
                                <span className="title_text">Exam Name</span>
                                <span className="title_text_score">Score</span>
                                <span className="next-arrow"><IonIcon icon={chevronForward}></IonIcon></span>
                                <span className="date_created">Date Created : 21/11/2019</span>
                                <span className="topic_content">
                                    <p><strong className="topic_title">Topic :</strong>text one, Text Two, Text Three, Text
                                        Four Text Five Text six Text seven Text eight..........</p>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="self_assement_list_item">
                                <span className="title_text">Exam Name</span>
                                <span className="title_text_score">Score</span>
                                <span className="next-arrow"><IonIcon icon={chevronForward}></IonIcon></span>
                                <span className="date_created">Date Created : 22/11/2019</span>
                                <span className="topic_content">
                                    <p><strong className="topic_title">Topic :</strong>text one, Text Two, Text Three, Text
                                        Four Text Five Text six Text seven Text eight..........</p>
                                </span>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </IonContent>
    )
}
export default MyStatSelfAsses;