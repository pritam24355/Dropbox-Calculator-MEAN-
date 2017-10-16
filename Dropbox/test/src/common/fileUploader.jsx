import React, {Component} from 'react';
import Navbar from './navbar.jsx';
export default class FileUploader extends Component {
    constructor() {
        super();
    }

    uploadFile(e) {
        var formData = new FormData();
        formData.append('file', e.currentTarget.files[0]);
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });
    }

    render() {
        return (
            

            <form encType="multipart/form-data">
                <input onChange={this.uploadFile} id="file-uploader" type="file" className="hidden"/>
                <label className="btn btn-primary" for="file-uploader">Upload file</label>
            </form>
        );
    }
}