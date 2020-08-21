import React, { Component } from 'react';
import { Form, Container, Button, Spinner } from 'react-bootstrap';

import './CommonStyles.css';

import { getSurveyInformation } from '../functions/Functions';
import { doCheckedIn } from '../functions/Functions';
import ErrorScreen from './ErrorScreen';

class Checkin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyId: props.match.params.surveyId,
            validated: false,
            surveyInformation: null,
            email: null,
            checkedIn: false,
            isSaving: false,
            showError: false
        }
    }

    componentDidMount = () => {
        getSurveyInformation(this.state.surveyId,
            (surveyInformation) => {
                this.setState({ surveyInformation: surveyInformation });
            },
            (error) => {
                console.error(error);
                this.setState({ showError: true });
            }
        );
    }

    isLoading = () => {
        return this.state.surveyInformation === null;
    }

    handleOnChange = (event) => {
        this.setState({ email: event.currentTarget.value });
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.stopPropagation();
        event.preventDefault();
        if (form.checkValidity()) {
            this.setState({ isSaving: true });

            var checkInInformation = {
                email: this.state.email,
                surveyId: this.state.surveyId
            }
            doCheckedIn(checkInInformation,
                () => {
                    this.setState({ checkedIn: true, isSaving: false })
                },
                (error) => {
                    console.error(error);
                    this.setState({ isSaving: false });
                }
            )
        }

        this.setState({ validated: true });
    }

    render() {
        if (this.state.showError) {
            return (
                <div>
                    <ErrorScreen message="Something went wrong" />
                </div>
            );
        } else if (this.state.checkedIn) {
            return (
                <div>
                    <Container>
                        <h2>{this.state.surveyInformation.name}</h2>
                        <div className="confirmation-message">Please check you email account <strong>{this.state.email}</strong> to continue</div>
                    </Container>
                </div>
            );
        } else if (this.isLoading()) {
            return (
                <div style={{ margin: "10px 10px" }}>
                    <Spinner animation="grow" variant="info" />
                </div>
            );
        } else {
            return (
                <div>
                    <Container>
                        <h2>{this.state.surveyInformation.name}</h2>
                        <div className="client-name" style={{ marginBottom: "15px" }}>Checkin</div>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} >
                            <Form.Group>
                                <Form.Label>Your business email</Form.Label>
                                <Form.Control id="email" required onChange={this.handleOnChange} type="email" placeholder="Enter business email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>

                            <div>
                                <div style={{ float: "left" }}>
                                    <Button disabled={this.state.isSaving} type="submit" variant="info">Checkin</Button>
                                </div>
                                <div className="spinner-for-button" style={{ display: (this.state.isSaving ? "block" : "none") }}>
                                    <Spinner animation="grow" variant="info" />
                                </div>
                            </div>
                        </Form>
                    </Container>
                </div>
            );
        }
    }

}

export default Checkin;