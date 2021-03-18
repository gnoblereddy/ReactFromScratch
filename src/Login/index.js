import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>Login Form
                <p>Not Registered: <Link to={'/register'}>If not Registered</Link> </p>
            </div>
        );
    }

};