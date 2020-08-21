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

    surveyQuestionAnswerOnChangeHandler = (event) => {

    }

    formatSurveyQuestion = (question, bottomBorder, key) => {
        return (
            <div key={key}>
                <Question data={question} order={key + 1} borderBottom={bottomBorder} />
            </div>
        );
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
                                            return this.formatSurveyQuestion(question, (k2 + 1 !== section.questions.length), k2);
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
                        <div style={{marginTop: "30px"}}>
                            <Button type="submit" variant="info">Send answers</Button>
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
    }

    answerChangeHandler = (event, data) => {
        var answer = event.currentTarget;

        if (this.props.data.type === 'checkbox') {
            var newSelection = null;
            if (answer.checked) {
                newSelection = this.state.selectedAnswers.slice();
                newSelection.push(data);
            } else {
                newSelection = this.state.selectedAnswers.filter((e, index, arr) => e.value !== data.value);
            }
            this.setState({selectedAnswers: newSelection});

        } else {
            this.setState({selectedAnswers: [data]});
        }
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
        const sectionStyle = {borderBottom: (this.props.bottomBorder ? "1px solid #ddd" : "")};
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