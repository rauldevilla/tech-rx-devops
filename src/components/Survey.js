import React, { Component } from 'react';
import Unauthorized from './Unauthorized';
import Spinner from 'react-bootstrap/Spinner';

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
                        Survey {this.state.surveyId}
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