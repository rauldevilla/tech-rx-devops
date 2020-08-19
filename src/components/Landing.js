import React, { useState, Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import Unauthorized from './Unauthorized';

import { validateUserToken } from './Functions';
import { UserSessionContext } from '../contexts/UserContext';

class Landing extends Component {

    static contextType = UserSessionContext;

    constructor(props) {
        super(props);

        this.state = {
            userToken: props.match.params.userToken,
            client: { name: null }
        }
    }

    componentDidMount() {

        validateUserToken(this.state.userToken,
            (c) => {
                this.setState({ client: c });
            },
            (error) => {
                console.error(error);
            });

    }

    isClientReady = () => {
        return this.state.client !== null && this.state.client.name !== null;
    }

    render() {
        const { company } = this.context;
        console.log('Landing.state', this.state);

        if (this.isClientReady()) {
            return (
                <Login client={this.state.client}/>
            )
        } else {
            return (
                <div style={{ margin: "10px 10px" }}>
                    <Spinner animation="grow" variant="info" />
                </div>
            );
        }
    }

};

export default Landing;