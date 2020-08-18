import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import Unauthorized from './Unauthorized';

const Landing = props => {

    const [target, setTarget] = useState(props.match.params.target);
    const [client, setClient] = useState({ 'name': props.match.params.client });

    return (
    <div style={{margin: "10px 10px"}}>
        <Spinner animation="grow" variant="info" />
    </div>
    )

};

//return (<Login client={client} history={props.history} handleLogin={props.handleLogin}/>);

export default Landing;