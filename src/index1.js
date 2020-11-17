import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(<App1 />, document.getElementById('root'));
serviceWorker.unregister();
