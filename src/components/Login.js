import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const Login = props => {

    const [client, setClient] = useState(props.client);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>DevOps assessment for {client.name}</h2>
                    </Col>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Your business email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>What is your role in the organization?</Form.Label>
                        <Form.Control required as="select">
                            <option></option>
                            <option>Business Directive</option>
                            <option>Business Sponsor</option>
                            <option>Business Architect</option>
                            <option>Business Analyst</option>
                            <option>Digital Transformation Directive</option>
                            <option>Digital Transformation Sponsor</option>
                            <option>Digital Transformation Analyst</option>
                            <option>Product Owner</option>
                            <option>IT Directive</option>
                            <option>IT Analyst</option>
                            <option>IT Architect</option>
                            <option>IT Development</option>
                            <option>IT Operations</option>
                            <option>IT DevOps</option>
                            <option>IT Outsourcing</option>
                            <option>IT Consultant</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                    <br />
                    <Button type="submit" variant="info">Start assessment</Button>
                </Form>
            </Container>
        </div>
    )
};

export default Login;