import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './signup/signup.jsx';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './home/home.jsx';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		    <Route exact path="/signup" render={() => (
			    	<SignUp />
		    	)}>
		    </Route>
		    <Route exact path="/myfiles/" render={() => (
			    	<Home />
			    )}>
		    </Route>
		    <Redirect exact from="/" to="/signup"/>
	    </Switch>
	</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
