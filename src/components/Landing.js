import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';
import TestComponent from './TestComponent';
import Unauthorized from './Unauthorized';

const Landing = props => {

    const [target, setTarget] = useState(props.match.params.target);
    const [client, setClient] = useState({'name': props.match.params.client});

    if (target === 'assessment') {
        return (<Login client={client}/>);
    } else if (target === 'test') {
            return (<TestComponent client={client}/>);
    } else {
        return (<Unauthorized/>);
    }
};

export default Landing;