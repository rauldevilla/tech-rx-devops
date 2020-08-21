import React, { Component } from 'react';
import Unauthorized from './Unauthorized';
import Spinner from 'react-bootstrap/Spinner';

import { getSurveyQuestions } from '../functions/Functions';
import { Card, Accordion, Button, Form } from 'react-bootstrap';

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveyId: props.match.params.id,
            survey: {}
        }
    }

    groupId = 0;

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

    formatSurveyAnswers = (optAnswersArray) => {
        var groupName = "g_a_" + (this.groupId++);
        return (
            <div style={{marginLeft: "10px"}}>
            {optAnswersArray.map((a, key) => {
                    return (<Form.Check key={key} name={groupName} type="radio" label={a.text} value={a.value}/>);
                })}
            </div>
        )
    }

    formatSurveyQuestion = (question, key) => {
        return (
            <section key={key} >
                <div style={{marginBottom: "10px", padding: "10px"}}>
                    {(key + 1)  + ". " + question.text}
                </div>
                {this.formatSurveyAnswers(question.options)}
            </section>);
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