import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class ErrorScreen extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h5>{this.props.message}</h5>
                </Container>
            </div>
        );
    }
}

export default ErrorScreen;