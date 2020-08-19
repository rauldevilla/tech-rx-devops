
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

    //TODO: Send information to server
    var company = {"name": "From the function"};

    if (userToken !== null && String(userToken).endsWith('1')) {
        onSuccess(company);
    } else {
        onError({'message': 'Error'});
    }
};

export const getSurveyQuestions = (surveyId, onSuccess, onError) => {
    //fetch("http://.....")
    //.then((response) => {
        onSuccess(surveyId);
    //}).error((error) => {
    //    onError(error);
    //});
};
