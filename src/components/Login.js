import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import { ORGANIZATION_ROLES } from './Constants';

import './Login.css';

import { saveLoginInformation } from './Functions';
import { UserSessionContext } from '../contexts/UserContext';

class Login extends Component {

    static contextType = UserSessionContext;

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            loginInformation: {}
        };
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            var number = Math.floor(Math.random() * 10);
            saveLoginInformation(number,
                () => {
                    this.props.history.push("/survey/123456789");
                },
                () => {
                    console.log('onError');
                }
            );
        }

        this.setState({validated: true});
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

    handleOnChange = (event) => {
        var info = this.state.loginInformation;

        if (event.currentTarget.id === "email") {
            info.email = event.currentTarget.value;
        } if (event.currentTarget.id === "firstName") {
            info.firstName = event.currentTarget.value;
        } if (event.currentTarget.id === "lastName") {
            info.lastName = event.currentTarget.value;
        } if (event.currentTarget.id === "role") {
            info.role = event.currentTarget.value;
        }

        this.setState({loginInformation: info});
    }

    render() {
        const { company } = this.context;
        return (
            <div>
                <Container>
                    <h2>DevOps assessment for <pre className="client-name">{company.name}</pre></h2>
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Your business email</Form.Label>
                            <Form.Control id="email" required onChange={this.handleOnChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>First name</Form.Label>
                            <Form.Control id="firstName" required onChange={this.handleOnChange} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control id="lastName" required onChange={this.handleOnChange} type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What is your role in the organization?</Form.Label>
                            <Form.Control id="role" required onChange={this.handleOnChange} as="select">
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
    }
}

export default Login;