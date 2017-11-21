import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showSuccessMessage: false
        }
    }

    login() {
        this.setState({
            showSuccessMessage: true
        })
    }

    clearMessages() {
        this.setState({
            showSuccessMessage: false
        })
    }

    render() {
        return (
            <div className="App">
                <div className="Login-Wrapper">
                    <h3 className="login-header-text"><i className="fa fa-user-circle"></i>
                        &nbsp; Login
                        <i className="fa fa-times pull-right" onClick={() => this.clearMessages()}></i>
                    </h3>
                    <hr/>
                    <div className="Form-Group">
                        <label className="label">Username</label>
                        <input type="text" placeholder="Enter Username" className="input-field" required/>
                        <label className="label">Password</label>
                        <input type="password" placeholder="Enter Password" className="input-field" required/>
                        {this.state.showSuccessMessage &&
                        <span className="success-msg"><i
                            className="fa fa-check-circle"></i> Logged in Successfully!</span>
                        }
                        <hr/>
                        <button type="submit" className="btn-login" onClick={() => this.login()}><i className="fa fa-sign-in"></i> Login</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


