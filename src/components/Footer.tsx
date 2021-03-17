import React, {useState} from 'react';
import {
    IonContent,
    IonFooter,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonHeader,
    IonButtons,
    IonButton, IonIcon, IonModal, IonSlides, IonSlide
} from '@ionic/react';
import {chevronBackOutline} from "ionicons/icons";
export const Footer: React.FC = () => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <div>
            <div></div>
            <IonFooter id="main-content" className="footer add_next_button exam_questinn_footer">
                <IonToolbar style={{paddingBottom:"-16px"}} color="light">
                        <ul>
                            <li><a href="JavaScript:Void(0);">Add More</a></li>
                            <li><a onClick={handleShow}><span><i className="fas fa-bars"></i></span></a></li>
                            <li><a href="JavaScript:Void(0);">Next</a></li>
                        </ul>
                </IonToolbar>
            </IonFooter>


            <IonModal isOpen={showModal} cssClass='my-custom-className'>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={handleClose}><IonIcon
                                icon={chevronBackOutline}></IonIcon>Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                    <div className="exam_number_popup">
                        <h3>Question Plate</h3>
                        <div id="numberPlateSlider" className="carousel slide" data-ride="carousel">
                            <IonSlides pager={true} options={slideOpts}>
                                <IonSlide>
                                    <ul className="number_plate">
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                    </ul>
                                </IonSlide>
                                <IonSlide>

                                    <ul className="number_plate">
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                    </ul>

                                </IonSlide>
                                <IonSlide>

                                    <ul className="number_plate">
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                    </ul>

                                </IonSlide>
                                <IonSlide>

                                    <ul className="number_plate">
                                        <li className="active">1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                    </ul>
                                </IonSlide>
                            </IonSlides>
                        </div>


                        <ul className="number_plate_last">
                            <li>
                                <span className="number">0</span>
                                <span className="answer">Answered</span>
                            </li>
                            <li>
                                <span className="number redball">1</span>
                                <span className="answer">Not Answered</span>
                            </li>
                            <li>
                                <span className="number">19</span>
                                <span className="answer">Not Visited</span>
                            </li>
                            <li>
                                <span className="number blueball">0</span>
                                <span className="answer">Mark For Review</span>
                            </li>
                            <li>
                                <span className="number blueball">0</span>
                                <span className="answer">Answered & Mark for review ( will be considered for evaluation )</span>
                            </li>
                        </ul>
                    </div>
            </IonModal>
        </div>
    );
};