import ReactDOM from 'react-dom/client';
import { MoralisProvider } from 'react-moralis';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
const APPLICATION_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;

const Application = () => {
    const isServerInfo = APPLICATION_ID && SERVER_URL ? true : false;

    //Validate
    if ((!APPLICATION_ID || !SERVER_URL) && isServerInfo === false) {
        return (
            <main className="my-1 d-flex justify-content-center align-items-center w-100 h-100 bg-light">
                <h1 className="text-muted">This page is unable at the moment.</h1>
            </main>
        );
    } else {
        return (
            <MoralisProvider appId={APPLICATION_ID} serverUrl={SERVER_URL}>
                <App isServerInfo />
            </MoralisProvider>
        );
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);

serviceWorkerRegistration.register();
