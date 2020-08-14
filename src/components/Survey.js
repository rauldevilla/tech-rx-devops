import React from 'react';
import Unauthorized from './Unauthorized';

const Survey = (props) => {

    const id = props.match.params.id;

    console.log('id', id);

    const isUndefined = (obj) => {
        return obj === undefined;
    }

    if (!isUndefined(id)) {
        return (
            <div>
                Survey {id}
            </div>
        )
    } else {
        return (
            <Unauthorized/>
        );
    }
}

export default Survey;