import React from "react";
import {IonContent} from "@ionic/react";
import Image from "../assets/img/artboard_3.png"
import Image2 from "../assets/img/logo.png"
import Header from "./Header";
const ForgotPassword: React.FC=()=>(
    <IonContent>
        <div>


        <Header/>
            <div className="app-dashboard">
                <div className="app-body">
                    <div className="header_title text-center">
                        <h4>Forget Password ?</h4>
                    </div>
                    <div className="sub_category">
                        <div className="edit_profile">
                            <div className="man_image">
                                <img className="img-fluid" src={Image} alt=""/>
                            </div>
                            <div className="forget_password_email_title">
                                <h5>Enter your email address below to reset your password</h5>
                            </div>
                            <div className="signup_form login_page_inside">
                                <div className="input_div">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="sumit_button">
                                <button type="submit" className="big_button">Send code via email</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </IonContent>
);
export default ForgotPassword;