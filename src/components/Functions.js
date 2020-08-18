
export const saveLoginInformation = (loginInformation, onSuccess, onError) => {
    var sessionIdString = String(loginInformation);
    var last = sessionIdString.substring(sessionIdString.length - 1, 1);
    if (parseInt(last) % 2 === 0) {
        onSuccess();
    } else {
        onError();
    }
};

