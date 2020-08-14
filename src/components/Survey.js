import React from 'react';

const Survey = (props) => {
    return (
        <div>
            Survey {props.match.params.id}
        </div>
    )
}

export default Survey;