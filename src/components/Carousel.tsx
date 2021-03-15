
import { IonApp, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import {Carousel} from "react-bootstrap";
import Image1 from "../assets/img/icom.png"
import "../assets/css/app.css"
import "./Carousel.css"



const slideOpts = {
    initialSlide: 0,
    speed: 400
};


export const Carousel1: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
                <Carousel.Item className="orange">
                    <img
                        className="crosal-img"
                        src={Image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="slider_item_text">
                        <h5>Residency/Diploma Self-Help Aid</h5>
                        <ul>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">First one of its kinds</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Create Your own schedule</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Test your preparation</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Compare with your peers</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Improve yourself</span></li>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
            </IonSlide>
            <IonSlide>
                <Carousel.Item className="orange_dark">
                    <img
                        className="crosal-img"
                        src={Image1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="slider_item_text">
                        <h5>Notes</h5>
                        <ul>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Cover all bases</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Systemically orgranized</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Updated reference from textbooks</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Star important topics</span></li>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
            </IonSlide>
            <IonSlide>
                <Carousel.Item className="sky_blue">
                    <img
                        className="crosal-img"
                        src={Image1}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="slider_item_text">
                        <h5>Self - Assessment</h5>
                        <ul>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Choose your topic(s)</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Create your exam</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Revise repeat</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span"> Check your programs or just try our</span></li>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
            </IonSlide>
            <IonSlide>
                <Carousel.Item className="green">
                    <img
                        className="crosal-img"
                        src={Image1}
                        alt="fourth slide"
                    />

                    <Carousel.Caption className="slider_item_text">
                        <h5>Flashcards</h5>
                        <ul>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span">Want to go the other way around</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span><span
                                className="slider_text_span"> Try our handy flashcards</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">test your memory</span></li>
                            <li><span className="check_icon"><i className="fas fa-check"></i></span> <span
                                className="slider_text_span">Then go through the otes</span></li>
                        </ul>
                        <div className="sumit_button">
                            <a href="#" className="submit_btn">GET STARTTED</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </IonSlide>
        </IonSlides>
    </IonContent>
);

export default Carousel1;