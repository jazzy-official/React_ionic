import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import writing from "../assets/img/writing.png"
import flashcard from "../assets/img/flashcard.png"
import checklist from "../assets/img/checklist.png"
import test from "../assets/img/test.png"
import contentwriting from "../assets/img/content-writing.png"
import graph from "../assets/img/graph.png"
import {Header} from "./Header";
export const Dashboard: React.FC = () =>  (
        <IonPage>
            <IonContent>
                <Header/>
                <div className="app-body">
                    <div className="app-dashboard-items">
                        <ul>
                            <li className="orange">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={writing} alt=""/></span>
                                    <span className="title">Notes</span>
                                </a>
                            </li>
                            <li className="sky_blue">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={flashcard} alt=""/></span>
                                    <span className="title">Flashcards</span>
                                </a>
                            </li>
                            <li className="green">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={checklist} alt=""/></span>
                                    <span className="title">Self-Assinment</span>
                                </a>
                            </li>
                            <li className="purple">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={test} alt=""/></span>
                                    <span className="title">Weekly Exams</span>
                                </a>
                            </li>
                            <li className="orange_dark">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={contentwriting} alt=""/></span>
                                    <span className="title">My Contents</span>
                                </a>
                            </li>
                            <li className="blue">
                                <a href="JavaScript:Void(0);">
                                    <span><img src={graph} alt=""/></span>
                                    <span className="title">My Stats</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="app-dashboard-leaderboard">
                        <ul>
                            <li><a href="JavaScript:Void(0);">Leaderboard Item</a></li>
                        </ul>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );