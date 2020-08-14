
export const validateSessionId = (sessionId, onSuccess, onError) => {
    var sessionIdString = String(sessionId);
    var last = sessionIdString.substring(sessionIdString.length - 1, 1);
    if (parseInt(last) % 2 === 0) {
        onSuccess();
    } else {
        onError();
    }
};

