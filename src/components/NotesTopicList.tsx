import React from "react";
import {IonContent,IonIcon} from "@ionic/react";
import {heart,arrowBack,chevronForward} from "ionicons/icons"
import {Header} from "./Header";
const NotesTopicList:React.FC=()=>{
    return(
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="sub-categories-header">
                    <a className="prev-btn" href=""><IonIcon icon={arrowBack}></IonIcon></a>
                    <h6>Notes</h6>
                    <h5>Topic Lists</h5>
                </div>
                <div className="sub-categories-body update_sub_category">
                    <ul className="sub-category-items">
                        <li>
                            <div className="sub-category-item-head">
                                <span className="icon"><IonIcon icon={heart}></IonIcon></span>
                                <span className="text">Intro Cardiology</span>
                                <span className="next-arrow">
									<IonIcon icon={chevronForward}></IonIcon>
								</span>
                            </div>
                            <div className="sub-category-item-content">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <span className="icon"><IonIcon icon={heart}></IonIcon></span>
                                <span className="text">Intro Cardiology</span>
                                <span className="next-arrow">
							<IonIcon icon={chevronForward}></IonIcon>
								</span>
                            </div>
                            <div className="sub-category-item-content">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <span className="icon"><IonIcon icon={heart}></IonIcon></span>
                                <span className="text">Intro Cardiology</span>
                                <span className="next-arrow">
								<IonIcon icon={chevronForward}></IonIcon>
								</span>
                            </div>
                            <div className="sub-category-item-content">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <span className="icon"><IonIcon icon={heart}></IonIcon></span>
                                <span className="text">Intro Cardiology</span>
                                <span className="next-arrow">
									<IonIcon icon={chevronForward}></IonIcon>
								</span>
                            </div>
                            <div className="sub-category-item-content">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <span className="icon"><IonIcon icon={heart}></IonIcon></span>
                                <span className="text">Intro Cardiology</span>
                                <span className="next-arrow">
									<IonIcon icon={chevronForward}></IonIcon>
								</span>
                            </div>
                            <div className="sub-category-item-content">
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </IonContent>
    )
}
export default NotesTopicList;