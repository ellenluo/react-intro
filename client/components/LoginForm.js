/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);

        this.state = {

        }
    }

    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    submitFormFunction(event) {
        // Javascript regular function definition, same function as above, but DOESN'T autobind to this. You need to bind it in constructor.
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    loginWithFacebook(event) {

    }

    loginWithGoogle(event) {

    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements
        return (
            <form onSubmit={this.submitForm}>
                <input type="button" name="login" value="Log in with Facebook" className="btn-login" id="login-fb" />
                <input type="button" name="login" value="Log in with Google" className="btn-login" id="login-google" />
                <div className="container">
                    <p> or </p>
                </div>
                <input type="text" name="email" placeholder="Email Address" className="text-field" />
                <input type="text" name="password" placeholder="Password" className="text-field" />
                <div className="container">
                    <input type="checkbox" name="remember" className="checkbox-field"/>
                    <p id="remember-label"> Remember me</p>
                    <a>Forgot password?</a>
                </div>
                <input type="button" name="login" value="Log in" className="btn-login" id="login" />
                <div>
                    <p> Don't have an account? </p>
                    <input type="button" name="sign-up" value="Sign up" className="btn-login" id="sign-up" />
                </div>
            </form>
        );
    }
}

export default LoginForm;