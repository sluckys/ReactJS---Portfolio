import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './Component/App';
import Jokes from './Component/Jokes';
import Header from './Component/Header';
import './index.css';


const history = createBrowserHistory();
ReactDOM.render(
   <Router history={history}>
       <Switch>
           <Route exact path='/' render={() => <Header><App /></Header> } />
<Route path='/Jokes'  render={()=> <Header><Jokes /></Header> }/>
       </Switch>
   </Router>
    , document.getElementById('root'));
