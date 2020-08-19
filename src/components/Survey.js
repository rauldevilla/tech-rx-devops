import React, { Component } from 'react';
import Unauthorized from './Unauthorized';
import Spinner from 'react-bootstrap/Spinner';

import { getSurveyQuestions } from '../functions/Functions';
import { Card, Accordion, Button } from 'react-bootstrap';

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveyId: props.match.params.id,
            survey: {}
        }
    }

    isValidSurveyId = () => {
        return this.state.surveyId !== null && this.state.surveyId !==  undefined;
    }

    isLoadingQuestions = () => {
        return this.state.survey.survey === undefined;
    }

    componentDidMount = () => {
        getSurveyQuestions(this.state.surveyId,
        (survey) => {
            this.setState({survey: survey});
        },
        (error) => {
            console.error(error);
        })
    }

    surveyHasQuestions = () => {
        return this.state.survey.survey !== undefined && this.state.survey.survey.length > 0;
    }

    formatSurveyQuestion = (question, key) => {
        return <div style={{background: (key % 2 === 0 ? "#f5fffe" : ""), marginBottom: "10px", padding: "10px"}}>{question.text}</div>;
    }

    showSurveyQuestions = () => {
        if (!this.surveyHasQuestions()) {
            return (<div>There's no questions</div>);
        } else {
            return (
                <Accordion defaultActiveKey="0" style={{marginTop: "10px"}}>
                    {this.state.survey.survey.map((section, key) => {
                        return(
                            <Card key={key}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={key + 1} >
                                        {section.name}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key + 1}>
                                    <Card.Body>
                                        {section.questions.map((question, k2) => {
                                            return this.formatSurveyQuestion(question, k2);
                                        })}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        );
                    })}
                </Accordion>
            );
        }
    }

    render() {
        if (this.isValidSurveyId()) {
            if (this.isLoadingQuestions()) {
                return (
                    <div style={{ margin: "10px 10px" }}>
                        <Spinner animation="grow" variant="info" />
                    </div>
                );
            } else {
                return (
                    <div style={{margin: "10px"}}>
                        <h2>{this.state.survey.name}</h2>
                        {this.showSurveyQuestions()}
                    </div>
                )
            }
        } else {
            return (
                <Unauthorized/>
            );
        }
    }
}

export default Survey;