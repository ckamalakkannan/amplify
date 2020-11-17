import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import login from './login';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(<login />, document.getElementById('root'));
serviceWorker.unregister();
