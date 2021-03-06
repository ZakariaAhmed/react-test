import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {store, history} from './redux/store'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store}><ConnectedRouter history={history}> <Switch><Route exact path="/" component={App} /></Switch> </ConnectedRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
