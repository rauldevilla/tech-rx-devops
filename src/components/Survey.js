import React, { Component } from 'react';
import Unauthorized from './Unauthorized';
import Spinner from 'react-bootstrap/Spinner';

import { getSurveyQuestions } from '../functions/Functions';

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surveyId: props.match.params.id,
            surveyQuestions: []
        }
    }

    isValidSurveyId = () => {
        return this.state.surveyId !== null && this.state.surveyId !==  undefined;
    }

    isLoadingQuestions = () => {
        return this.state.surveyQuestions.length === 0;
    }

    componentDidMount = () => {
        getSurveyQuestions(this.state.surveyId,
        (questions) => {
            this.setState({surveyQuestions: questions});
        },
        (error) => {
            console.error(error);
        })
    }

    showSurveyQuestions = () => {
        if (this.state.surveyQuestions.length === 0) {
            return (<div>There's no questions</div>);
        } else {
            return (
                <ul>
                    {this.state.surveyQuestions.map((section, key) => {
                        return(<li key={key}>{section.name}</li>);
                    })}
                </ul>
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
                    <div>
                        <h2>Survey</h2>
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