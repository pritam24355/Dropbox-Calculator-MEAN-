import React, { Component } from 'react';
import Navbar from '../common/navbar.jsx';
import SignupForm from './signupForm.jsx';
import SigninForm from './signinForm.jsx';
import {withRouter} from 'react-router-dom';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			wait: true
		};
	}

	componentWillMount() {

		fetch("http://localhost:3001/checkLogin", {
	          method: 'GET',
	          // mode: 'no-cors',
	          credentials: 'include'
	      }).then(this.handleResponse.bind(this))
	      .catch(this.handleError.bind(this));
	}

	handleResponse(response) {
		if(response.status != 200) {
			throw new Error();
		}
		this.props.history.push("/myfiles/");
		return response;
	}

	handleError(response) {
		this.setState({
			wait: false
		});
	}


	render() {
		if(this.state.wait) {
			return(<div></div>);
		}

		return (
			<div>
				<Navbar />
				<div className="container container">
					<div className="row">
						<div className="col-md-8">
							<img src="https://cfl.dropboxstatic.com/static/images/empty_states/rebrand_m1/sign-in-illo@2x-vflh_wJFN.png"/>
						</div>
						<div className="col-md-4">
							<SigninForm/>
							<SignupForm/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(SignUp);
