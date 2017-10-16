import React, {Component} from 'react';

export default class FileItem extends Component {
    constructor() {
        super();
    }

    deleteFile(path) {
        fetch('http://localhost:3001/delete', {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify({
                path: path
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(this.props.onDelete);

    }

    render() {
        return(
            <div className="file-item row">
                <div className="col-md-8">
                    <span>{this.props.file.name}</span>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger pull-right" onClick={this.deleteFile.bind(this, this.props.file.path)}>Delete</button>
                </div>
            </div>
        );
    }
}