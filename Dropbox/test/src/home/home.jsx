import React, {Component} from 'react';
import Logout from '../common/Logout.jsx';
import FileItem from '../common/FileItem.jsx';
import FileUploader from '../common/fileUploader.jsx';
import {withRouter} from 'react-router-dom';
import Navbar from '../common/navbar.jsx'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
        this.state.files = [];
    }

    componentWillMount() {

        fetch('http://localhost:3001/checkLogin', {
            credentials: 'include',
            // mode: 'no-cors'
        }).then(this.handleResponse.bind(this))
        .catch(this.handleError.bind(this));
    }

    handleResponse(response) {
        if(response.status != 200) {
            throw new Error();
        }

        fetch('http://localhost:3001/myfiles/', {
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                files: data,
                loggedIn: true
            });
        });
    }

    handleError() {
        this.props.history.push("/signup");
    }

    handleDelete(index) {
        this.state.files.splice(index, 1);
        this.setState({
            files: this.state.files
        });
    }

    render() {
        if(!this.state.loggedIn) {
            return (<div></div>);
        }

        let files = this.state.files.map((file, index)=> {
            return <FileItem file={file} onDelete={this.handleDelete.bind(this, index)}/>
        }); 

        return(
            <div className="home-container container">
           <nav className="navbar navbar-default">
           <p>Try Dropbox Business</p>
            
<img src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015_m1-vfleInWIl.svg" alt="" class="dropbox-logo__glyph"height="40" width="200"/>
            </nav>
            
            <hr/>
            <h1>Home</h1>
            <hr/>

            <div class="ue-effect-container" >
            <font face="verdana" font size="2">Starred</font></div>
            
            <hr/>
            <h5>Recent</h5>
            <hr/>
            
                <div className="logout-container">
                    <Logout className="pull-right"/>
                </div>
                <div className="upload-container">
                    <FileUploader/>
                </div>
                <div className="filelist-container">
                    {files}
                </div>
            </div>
            
        
        );
    }
}

export default withRouter(Home);
