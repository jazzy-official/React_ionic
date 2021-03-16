import React,{useState}  from "react";
import {IonButton, IonButtons, IonContent, IonHeader, IonModal, IonToolbar,IonIcon} from "@ionic/react";
import {Accordion, Card, Button, Modal} from "react-bootstrap";
import {Header} from "./Header";
import {chevronBackOutline} from "ionicons/icons"

const ExamResult3: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <IonContent>
            <Header/>
            <div className="app-body">

                <div className="text-center mt-2 mb-3">
                    <h4>Self Exam Attempted Papers</h4>
                </div>
                <div className="text-center mt-3 mb-3">
                    <a className="btn btn-outline-secondary" href="#">Back to result</a>
                </div>
                <Accordion className="accordion">
                    <Card className="card">
                        <Card.Header className="card-header">
                            <Accordion.Toggle as={Button} variant="button" eventKey="0">
                                <span className="mr-1"><i className="far fa-bookmark"></i></span> || <span
                                className="ml-1"> Q1 The kidney</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Options</th>
                                            <th scope="col">Correct Answer</th>
                                            <th scope="col">Selected Answer</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>2)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>3)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>1)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Attempted</td>
                                            <td>Marks1</td>
                                            <td>Mark</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-center mb-3 explanation_heading explanation_heading_one">
                                    <Button variant="primary" onClick={handleShow}>
                                        Next
                                    </Button>
                                    <Button variant="primary" className="ml-1" onClick={handleShow}>
                                        Explanation
                                    </Button>


                                </div>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Card>


                    <Card className="card">
                        <Card.Header className="card-header">
                            <Accordion.Toggle as={Button} variant="button" eventKey="1">
                                <span className="mr-1"><i className="far fa-bookmark"></i></span> || <span
                                className="ml-1"> Q2 The kidney</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Options</th>
                                            <th scope="col">Correct Answer</th>
                                            <th scope="col">Selected Answer</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>2)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>3)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>1)lie with their hill at the level of the 4th lumber vetebra</td>
                                            <td>False</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Attempted</td>
                                            <td>Marks1</td>
                                            <td>Mark</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-center mb-3 explanation_heading explanation_heading_one">
                                    <Button variant="primary" onClick={handleShow}>
                                        Next
                                    </Button>
                                    <Button variant="primary" className="ml-1" onClick={handleShow}>
                                        Explanation
                                    </Button>
                                </div>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>

            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <IonHeader translucent>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={handleClose}><IonIcon icon={chevronBackOutline}></IonIcon>Back</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <div className="explanation_sec">
                    <ul>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                        <li>lie with their hill at the level of the 4th lumber vetebra</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </IonModal>
        </IonContent>
    );
};

export default ExamResult3;