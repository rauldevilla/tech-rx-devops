import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import {ORGANIZATION_ROLES} from './Constants';

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
                        <Form.Control required onChange={(event) => loginInformation.firstName = event.currentTarget.value} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required onChange={(event) => loginInformation.lastName = event.currentTarget.value} type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>What is your role in the organization?</Form.Label>
                        <Form.Control required onChange={(event) => loginInformation.role = event.currentTarget.value} as="select">
                            <option>-- Select --</option>
                            {ORGANIZATION_ROLES.map((e, key) => {
                                return <option key={key}>{e.name}</option>;
                            })}
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