
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
import 'bootstrap/dist/css/bootstrap.min.css'
// /* Theme variables */
import './theme/variables.css';
import Carousel from "./components/Carousel";

import Header from "./components/Header";
import EmailSignup from "./components/EmailSignup";
import Login from "./components/Login";

const App: React.FC = () => (
  <IonApp>

   {/*<Carousel/>*/}
   {/*<Header/>*/}
{/*<EmailSignup/>*/}
<Login/>
  </IonApp>
);

export default App;
