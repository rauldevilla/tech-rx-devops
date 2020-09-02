import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ErrorScreen extends Component {
    render() {
        return (
            <div>
                <Alert variant='danger'>
                <Alert.Heading>{this.props.title}</Alert.Heading>
                    <p>{this.props.message}</p>
                </Alert>
            </div>
        );
    }
}

export default ErrorScreen;