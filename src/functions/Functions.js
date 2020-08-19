var autenticated = false;

export const saveLoginInformation = (loginInformation, onSuccess, onError) => {
    
    //TODO: Send information to server an save
    var surveyId = "123456789";

    //fetch("http://.....")
    //.then((response) => {
        onSuccess(surveyId);
    //}).error((error) => {
    //    onError();
    //});
};

export const validateUserToken = (userToken, onSuccess, onError) => {

    //TODO: Send information to server
    var company = {"name": "From the function"};

    if (userToken !== null && String(userToken).endsWith('1')) {
        autenticated = true;
        onSuccess(company);
    } else {
        autenticated = false;
        onError({'message': 'Error'});
    }
};

export const isAuthenticated = () => {
    return autenticated;
};