import React  from "react";
import {IonContent,} from "@ionic/react";
import {Header} from "./Header";
import {Footer} from "./Footer";

const ExamQuestion: React.FC = () => {

    return (
        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="sub-categories-header exam">
                    <ul>
                        <li>Exam Name</li>
                        <li id="MyClockDisplay">02:59:59</li>
                    </ul>
                </div>
                <div className="exam_question_sec">
                    Questions 1 of 200
                </div>
                <div className="exam_question_title">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially
                        unchanged.</p>
                </div>
                <div>
                    <ul className="sub-category-items exam_sub_category_items">
                        <li>
                            <div className="sub-category-item-head">
                                <div className="round">
                                    <label className="input-label">
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <span className="title_text">Lorem Ipsum is simply</span>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <div className="round">
                                    <label className="input-label">
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <span className="title_text">Lorem Ipsum</span>
                            </div>
                        </li>
                        <li>
                            <div className="sub-category-item-head">
                                <div className="round">
                                    <label className="input-label">
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <span className="title_text">Lorem </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </IonContent>
    );
};

export default ExamQuestion;