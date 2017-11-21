import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Login-Wrapper">
                    <h3 className="login-header-text"><i className="fa fa-user-circle"></i> Login</h3>
                    <hr/>
                    <div className="Form-Group">
                        <label className="label">Username</label>
                        <input type="text" placeholder="Enter Username" className="input-field" required/>
                        <label className="label">Password</label>
                        <input type="password" placeholder="Enter Password" className="input-field" required/>
                        <hr/>
                        <button type="submit" className="btn-login"><i className="fa fa-sign-in"></i> Login</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


