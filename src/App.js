import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showSuccessMessage: false,
            showEmailError: false,
            showErrorMessage: false,
            email: '',
            password: ''
        };
    }

    login() {
        let emailPrefix = 'user';
        let emailSuffix = '@gmail.com';
        let passwordPrefix = 'password';

        //check if email and pass is valid
        if (!this.state.showEmailError && this.state.password.length) {
            //match credentials
            for (let i = 1; i <= 100; i++) {
                let user = emailPrefix + i + emailSuffix;
                let pass = passwordPrefix + i;

                if (this.state.email === user && this.state.password === pass) {
                    this.setState({
                        showSuccessMessage: true,
                        showErrorMessage: false
                    })
                    return; //If valid break loop and return
                }
            }

            //If no credential matches, show error
            this.setState({
                showErrorMessage: true,
                showSuccessMessage: false
            })

        } else {
            //If input fields are incomplete, show error
            this.setState({
                showErrorMessage: true,
                showSuccessMessage: false
            })
        }
    }

    clearMessages() {
        this.setState({
            showSuccessMessage: false,
            showEmailError: false,
            showErrorMessage: false
        })
    }

    handleInput = (event, field) => {
        if (field === 'email') {
            this.setState({
                email: event.target.value
            }, () => {
                this.validateEmail();
            })
        }
        else {
            this.setState({
                password: event.target.value
            })
        }

        event.preventDefault(); //prevent browser's default implementation for onclick
    };
    validateEmail = () => {
        let email = this.state.email;
        const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!emailPattern.test(email)) {
            this.setState ({
                showEmailError: true
            })
        } else {
            this.setState ({
                showEmailError: false
            })
        }
    };


    render() {
        return (
            <div className="App">
                <div className="Login-Wrapper">
                    <h3 className="login-header-text"><i className="fa fa-user-circle"></i>
                        &nbsp; Login
                        <i className="fa fa-times-circle pull-right" onClick={() => this.clearMessages()}></i>
                    </h3>
                    <hr/>
                    <div className="Form-Group">
                        <label className="label">Username</label>
                        <input type="text" placeholder="Enter Username" className="input-field" value={this.state.email}
                               onChange={(event) => this.handleInput(event, 'email')} required/>

                        {
                            this.state.showEmailError &&
                            <span className="invalid-msg"><i
                                className="fa fa-times"></i> Invalid Email<br/></span>
                        }

                        <label className="label">Password</label>
                        <input type="password" placeholder="Enter Password" value={this.state.password}
                               onChange={(event) => this.handleInput(event, 'password')} className="input-field"
                               required/>

                        {
                            this.state.showSuccessMessage &&
                            <span className="success-msg"><i
                                className="fa fa-check-circle"></i> Logged in Successfully!</span>
                        }

                        {
                            this.state.showErrorMessage &&
                            <span className="invalid-msg"><i
                                className="fa fa-check-circle"></i> Error! Invalid Credentials.</span>
                        }

                        <hr/>
                        <button type="submit" className="btn-login" onClick={() => this.login()}><i
                            className="fa fa-sign-in"></i> Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


