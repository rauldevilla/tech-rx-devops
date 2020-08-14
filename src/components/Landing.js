import React, { useState } from 'react';

import Login from './Login';
import Unauthorized from './Unauthorized';

const Landing = props => {

    const [target, setTarget] = useState(props.match.params.target);
    const [client, setClient] = useState({'name': props.match.params.client});

    return (<Login client={client} history={props.history} handleLogin={props.handleLogin}/>);
};

export default Landing;