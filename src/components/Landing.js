import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => {
    return (
        <div>
            <h1>Landing</h1>
            <p><Link to='/dashboard'>View Dashboard</Link></p>
            <p>Logged in status: {props.user}</p>
            <button onClick={props.handleLogin}>Log In</button>
        </div>
    )
};

export default Landing;