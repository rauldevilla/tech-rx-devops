import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import './Login.css';

import { saveLoginInformation } from './Functions';

const Login = props => {

    const [validated, setValidated] = useState(false);
    const [loginInformation, setLoginInformation] = useState({});

    const clientName = props.match.params.client;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log('pre-validating...');
            var number = Math.floor(Math.random() * 10);
            console.log('loginInformation', loginInformation);
            saveLoginInformation(number, 
                () => {
                    console.log('onSuccess');
                    props.history.push("/survey/123456789");
                },
                () => {
                    console.log('onError');
                }
            );
        }

        setValidated(true);
    }

    /*const validateSession = () => {
        var number = Math.floor(Math.random() * 10);
        console.log('number', number);
        fetch('http://numbersapi.com/' + number)
          .then(response => {
            console.log('response', response);
            response.text().then((text) => {
              console.log('body', text);
              props.history.push("/survey/123456789");
            });
          });
    }*/

    const handleOnChange = (event) => {
        console.log('handleOnChange.event', event);
        console.log('handleOnChange.event.currentTarget.value', event.currentTarget.value);
    }

    return (
        <div>
            <Container>
                <h2>DevOps assessment for <pre className="client-name">{clientName}</pre></h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Your business email</Form.Label>
                        <Form.Control required onChange={(event) => loginInformation.email = event.currentTarget.value} type="email" placeholder="Enter email" />
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