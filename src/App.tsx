
import { IonApp, IonRouterOutlet } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import "../src/assets/css/app.css"

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Carousel from "./components/Carousel";
import ForgotPassword from "./components/ForgotPassword";
import {Header} from "./components/Header";
import {HeaderTest} from "./components/HeaderTest";
import {Dashboard} from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import EmailSignup from "./components/EmailSignup";
import Login from "./components/Login";
import MyContents from "./components/MyContents";
import ExamResult3 from "./components/ExamResult3_1";
import {Footer} from "./components/Footer";
import Slides1 from "./components/Slides";
import ExamQuestionNumberModal from "./components/ExamQuestionNumberModal";

const App: React.FC = () => (
  <IonApp>
    {/*<Dashboard/>*/}
    {/*  <EditProfile/>*/}
    {/*  <EmailSignup/>*/}
   {/*<Carousel/>*/}
   {/*<MyContents/>*/}
   {/*<Login/>*/}
   {/*<ExamResult3/>*/}
   {/*<Footer/>*/}
   <ExamQuestionNumberModal/>
   {/*<Slides1/>*/}
   {/*<Header/>*/}
{/*<ForgotPassword/>*/}
  </IonApp>
);

export default App;
