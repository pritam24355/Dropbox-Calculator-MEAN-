import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'


class Logout extends Component{
    constructor() {
        super();
    }

    handleLogout(e) {
        e.preventDefault();
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'POST'
        }).then(this.logout.bind(this))
        .catch(this.logout.bind(this));
    }

    logout() {
        this.props.history.push("/signup");
    }

    render() {
        return (
            <div className="logout-component row">
                <div className="col-md-12">
                    <form onSubmit={this.handleLogout.bind(this)} className="pull-right">
                        <button className="btn btn-primary" type="submit">Logout</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Logout);
