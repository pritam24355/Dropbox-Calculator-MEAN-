import React, {Component}from 'react';
import {withRouter} from 'react-router-dom';

class SigninForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        fetch('http://localhost:3001/signin', {
            method: "POST",
            credentials: 'include',
            // mode: 'no-cors',
            body: formData
        }).then(this.redirectToHome.bind(this))
        .catch(this.redirectToSignup.bind(this));
    }

    redirectToHome(response) {
        if(response.status != 200) {
            throw new Error();
        }
        this.props.history.push("/myfiles/");
        return response;
    }

    redirectToSignup(response) {
        this.props.history.push("/signup");
    }

    handleUsernameChange(event) {
        this.setState({
            email: event.currentTarget.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.currentTarget.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} method="POST" encType="application/x-www-form-urlencoded">
                <h1>Sign In</h1>
                <div className="form-group">
                    <input name="email" placeholder="email" className="form-control" required="" type="email" onChange={this.handleUsernameChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input name="password" placeholder="password" className="form-control" required type="password" onChange={this.handlePasswordChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Sign In" />
                </div>
            </form>
        );
    }
}

export default withRouter(SigninForm);