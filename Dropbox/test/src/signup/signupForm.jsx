import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends Component {
    handleSignUp(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("firstname", this.state.firstname);
        formData.append("lastname", this.state.lastname);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        fetch('http://localhost:3001/signup', {
            method: "POST",
            credentials: 'include',
            body: formData
        }).then(this.redirectToHome.bind(this))
        .catch(this.redirectToSignup.bind(this));
    }

    handleFirstNameChange(event) {
        this.setState({
            firstname: event.currentTarget.value
        });
    }

    handleLastNameChange(event) {
        this.setState({
            lastname: event.currentTarget.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.currentTarget.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.currentTarget.value
        });
    }


    redirectToHome(response) {
        if(response.status != 200) {
            throw new Error();
        }
        this.props.history.push("/myfiles/");
        return response;
    }

    redirectToSignup(response) {
        this.props.history.push("/myfiles/");
    }


    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSignUp.bind(this)} method="POST">
                <h1>Sign Up</h1>
                <fieldset>
                    <div className="form-group">
                            <input id="textinput" name="firstname" placeholder="First Name" className="form-control" required="" type="text" onChange={this.handleFirstNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                            <input id="textinput" name="lastname" placeholder="Last Name" className="form-control" required type="text" onChange={this.handleLastNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                            <input id="textinput" name="email" placeholder="Email" className="form-control" required type="email" onChange={this.handleEmailChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                            <input id="textinput" name="password" placeholder="Password" className="form-control" required type="password" onChange={this.handlePasswordChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                            <input type="checkbox" required/> I agree to Dropbox Terms<br/>
                    </div>
                    <div className="form-group">
                            <button style={{width: '100%'}} type="submit" id="singlebutton"  className="btn btn-primary">Sign up for free</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default withRouter(SignupForm);
