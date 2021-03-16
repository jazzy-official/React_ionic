
import React from "react";
import {IonContent} from "@ionic/react";
import "../assets/css/app.css"
import Image from "../assets/img/artboard_2.png"

const EmailSignup: React.FC = () => (
    <IonContent>
        <div>


        <div className="loaded">
import React, {useState} from "react";
import {IonContent, IonLabel, IonItem, IonInput} from "@ionic/react";
import {Header} from "./Header";
import Image from "../assets/img/artboard_2.png"

const EmailSignup: React.FC = () => (

    <IonContent>
        <div className="loaded">
            <div>
                <div className="app-dashboard">
                    <div className="app-body margin_top_0">
                        <div className="header_title text-center">
                            <h4>We are glad to see you back</h4>
                        </div>
                        <div className="sub_category">
                            <div className="edit_profile">
                                <div className="man_image phone_image">
                                    <img src={Image}/>
                                </div>
                                <div className="signup_form">
                                    <div className="input_div">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="input_div">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password"/>
                                        <span className="pt-2 float-right">
                                                <a href="#">Forgot?</a>
                                        </span>

                                    </div>
                                </div>
                                <div className="input_div pt-3">
                                    <p>
                                        I don't have an account
                                        <a href="#" className="ml-3">Sign Up</a>
                                    </p>
                                </div>
                                <div className="big_button_div signup sumit_button">
                                    <a className="big_button" style={{textDecoration: "none"}} href="#">LETS START</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </IonContent>
)

export default EmailSignup;