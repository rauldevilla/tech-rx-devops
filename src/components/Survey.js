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
            survey: null
        }
    }

    groupId = 0;

    isValidSurveyId = () => {
        return this.state.surveyId !== null && this.state.surveyId !==  undefined;
    }

    isLoadingQuestions = () => {
        return this.state.survey === null;
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
        return this.state.survey.sections !== undefined && this.state.survey.sections.length > 0;
    }

    updateSurvey = (question) => {
    }

    surveyQuestionOnChangeHandler = (question) => {
    }

    formatSurveyQuestion = (sectionName, question, borderBottom, key) => {
        return (
            <div key={key}>
                <Question data={question} sectionName={sectionName} order={key + 1} borderBottom={borderBottom} onChange={this.surveyQuestionOnChangeHandler}/>
            </div>
        );
    }

    showSurveyQuestions = () => {
        if (!this.surveyHasQuestions()) {
            return (<div>There's no questions</div>);
        } else {
            return (
                <Accordion defaultActiveKey="0" style={{marginTop: "10px"}}>
                    {this.state.survey.sections.map((section, key) => {
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
                                            return this.formatSurveyQuestion(section.name, question, (k2 + 1 !== section.questions.length), k2);
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

    sendAnswersClickHandler = (event) => {
        console.log('send anwers', this.state.survey);
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
                        <div style={{marginTop: "30px"}}>
                            <Button type="submit" variant="info" onClick={this.sendAnswersClickHandler}>Send answers</Button>
                        </div>
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

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswers: []
        }
        this.props.data.sectionName = this.props.sectionName;
    }

    answerChangeHandler = (event, data) => {
        var answer = event.currentTarget;
        var newSelection = null;

        if (this.props.data.type === 'checkbox') {
            if (answer.checked) {
                newSelection = this.state.selectedAnswers.slice();
                newSelection.push(data);
            } else {
                newSelection = this.state.selectedAnswers.filter((e, index, arr) => e.value !== data.value);
            }

        } else {
            newSelection = [data];
        }

        this.setState({selectedAnswers: newSelection});
        this.props.data.answers = newSelection;
        this.props.onChange(this.props.data);
    }

    showAnwers = () => {
        const answerDivStyle = {marginLeft: "10px", paddingBottom: "15px"};
        var groupName = this.props.data.id;
        return (
            <div style={answerDivStyle}>
            {this.props.data.options.map((a, key) => {
                return (<Answer key={key} group={groupName} data={a} type={this.props.data.type} onChange={this.answerChangeHandler}/>);
            })}
            </div>
        )
    }

    render() {
        const sectionStyle = {borderBottom: (this.props.borderBottom ? "1px solid #ddd" : "")};
        const textStyle = {marginBottom: "10px", padding: "10px"};
        return (
            <section key={this.props.key} style={sectionStyle}>
                <div style={textStyle}>
                    {this.props.order  + ". " + this.props.data.text}
                </div>
                {this.showAnwers()}
            </section>
        );
    }

}

class Answer extends Component {

    render() {
        return (
            <Form.Check name={this.props.group} type={this.props.type} label={this.props.data.text} value={this.props.data.value} onChange={(event) => this.props.onChange(event, this.props.data)}/>
        );
    }
}

export default Survey;