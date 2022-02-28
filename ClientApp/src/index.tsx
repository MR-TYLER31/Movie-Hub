import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// const rootElement = document.getElementById('root');

ReactDOM.render(<Application/>, document.getElementById('root'))

registerServiceWorker();

