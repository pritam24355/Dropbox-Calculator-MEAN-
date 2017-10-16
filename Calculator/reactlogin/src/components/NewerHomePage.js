import React, {Component} from 'react';
import * as API from '../api/API';
class NewerHomePage extends Component {

    state = {
        number1: '',
        number2: '',
       result: '0'
    };

    handleSubmitAdd(){
        //console.log(this);
            API.doLogin(this.state, this.success.bind(this), this.error.bind(this));

    };


    handleSubmitSub(){
        console.log(this);
        API.doSub(this.state, this.success.bind(this), this.error.bind(this));

    };

    handleSubmitMul(){
        console.log(this);
        API.doMul(this.state, this.success.bind(this), this.error.bind(this));

    };

    handleSubmitDiv(){
        console.log(this);
        API.doDiv(this.state, this.success.bind(this), this.error.bind(this));

    };



    success(result) {
        console.log(result);
    this.setState({
        result: result.value
        });

    }

    error() {
        console.log("Error in Calculator");
    }

    render() {
        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-offset-4">
            <div className="panel panel-primary">
            <div className="panel-heading">Calculate</div>
            <div className="panel-body">
            <input type="text" id="num1" placeholder="Number1" name="Number1" value={this.state.number1}onChange={(event) => {
            this.setState({
                number1: event.target.value
            });
        }}/>
        <input type="text" id="num2" placeholder="Number2" name="Number2" value={this.state.number2} onChange={(event) => {
            this.setState({
                number2: event.target.value

            });
        }}/>
        <br/>
        <button type="button" id="add"  onClick={this.handleSubmitAdd.bind(this)}>ADD</button>
        <button type="button" id="sub"  onClick={this.handleSubmitSub.bind(this)}>Subtract </button>
            <button type="button" id="mul"  onClick={this.handleSubmitMul.bind(this)}>Multiply </button>
            <button type="button" id="div" onClick={this.handleSubmitDiv.bind(this)}>Division </button>
            </div>
            </div>
            </div>

            <div className="col-sm-offset-8">
            <input type="text" id="result" placeholder="Result" name="Result" value={this.state.result}/>
            </div>
            </div>
            </div>
        );
    }
}

export default NewerHomePage;

