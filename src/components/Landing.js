import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

const Landing = props => {

    const [target, setTarget] = useState(props.match.params.target);
    const [client, setClient] = useState({'name': props.match.params.client});

    console.log('props.match', props.match);
    console.log('client', client);

    return (<Login client={client}/>);
};

export default Landing;