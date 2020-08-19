var autenticated = false;

export const saveLoginInformation = (loginInformation, onSuccess, onError) => {
    var sessionIdString = String(loginInformation);
    var last = sessionIdString.substring(sessionIdString.length - 1, 1);
    if (parseInt(last) % 2 === 0) {
        onSuccess();
    } else {
        onError();
    }
};

export const validateUserToken = (userToken, onSuccess, onError) => {
    if (userToken !== null && String(userToken).endsWith('1')) {
        autenticated = true;
        onSuccess({"name": "From the function"});
    } else {
        autenticated = false;
        onError({'message': 'Error'});
    }
};

export const isAuthenticated = () => {
    return autenticated;
};