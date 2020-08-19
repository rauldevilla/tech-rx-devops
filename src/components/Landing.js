import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Login from './Login';
import Unauthorized from './Unauthorized';

import { validateUserToken } from '../functions/Functions';
import { UserSessionContext } from '../contexts/UserContext';

class Landing extends Component {

    static contextType = UserSessionContext;

    constructor(props) {
        super(props);

        this.state = {
            userToken: props.match.params.userToken,
            unauthorized: false
        }
    }

    componentDidMount() {

        validateUserToken(this.state.userToken,
            (c) => {
                this.context.setCompany(c);
            },
            (error) => {
                console.error(error);
                this.setState({unauthorized: true});
            });

    }

    isClientReady = () => {
        const { company } = this.context;
        console.log('company', company);
        return company !== null && company.name !== null;
    }

    render() {
        if (this.isClientReady()) {
            return (
                <Login client={this.state.client}/>
            )
        } else if (this.state.unauthorized) {
            return (
                <Unauthorized/>
            );
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