import React,{useState} from "react";
import {IonContent,IonLabel,IonItem,IonInput} from "@ionic/react";
import {Header} from "./Header";
const EditProfile : React.FC = () => {


    return(

        <IonContent>
            <Header/>
            <div className="app-body">
                <div className="header_title text-center">
                    <h4>Edit Profile</h4>
                </div>
                <div className="sub_category">
                    <div className="edit_profile">
                        <div className="form-group row">

                            <div className="col-sm-12">
                                <label className="col-form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label className="col-form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label className="col-form-label">Address</label>
                                <input type="text" className="form-control" placeholder="Address"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label className="col-form-label">Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Phone number"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label className="col-form-label">BMDC</label>
                                <input type="text" className="form-control" placeholder="1"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <label className="col-form-label">Other Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Other Phone number"/>
                            </div>
                        </div>
                        <div className="sumit_button">
                            <button type="submit" className="submit_btn">Update</button>
                        </div>
                    </div>

                </div>
            </div>
        </IonContent>
    )
};
export default EditProfile;