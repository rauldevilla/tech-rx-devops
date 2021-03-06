import { SURVEY } from './Constants';
import { Constants } from './Constants';

import axios from 'axios';

export const saveLoginInformation = (loginInformation, onSuccess, onError) => {
    
    //TODO: Send information to server an save
    var surveyId = "123456789";

    //fetch("http://.....")
    //.then((response) => {
        onSuccess(surveyId);
    //}).error((error) => {
    //    onError(error);
    //});
};

export const validateUserToken = (userToken, onSuccess, onError) => {

    fetch('https://hn8k8j5ui0.execute-api.us-east-1.amazonaws.com/prod/rxsurvey-validatesurveytoken',
    {
        "method": "post",
        "headers": {
            
        }
    }
    )


    //TODO: Send information to server
    var company = {"name": "From the function"};

    if (userToken !== null && String(userToken).endsWith('1')) {
        onSuccess(company);
    } else {
        onError({'message': 'Error'});
    }
};

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

export const getSurveyQuestions = (surveyId, onSuccess, onError) => {
    //fetch("http://.....")
    //.then((response) => {
        setTimeout(() => { onSuccess(SURVEY) }, getRandomInteger(1, 3) * 1000);
    //}).error((error) => {
    //    onError(error);
    //});
};

export const saveSurveyAnswers = (Survey, onSuccess, onError) => {
    //fetch("http://.....")
    //.then((response) => {
        setTimeout(() => { onSuccess() }, getRandomInteger(1, 3) * 1000);
    //}).error((error) => {
    //    onError(error);
    //});
}

export const getSurveyInformation = (surveyId, onSuccess, onError) => {

    axios.get(Constants.SURVEY_API_BASE_URL + "/vt/" + surveyId)
        .then((response) => {
            onSuccess(response.data)
        }).catch((error) => {
            onError(error);
        });

}

export const doCheckedIn = (checkInInformation, onSuccess, onError) => {
    //fetch("http://.....")
    //.then((response) => {
        setTimeout(() => { onSuccess() }, getRandomInteger(1, 3) * 1000);
    //}).error((error) => {
    //    onError(error);
    //});
}
