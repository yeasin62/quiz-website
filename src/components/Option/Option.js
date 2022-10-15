import React from 'react';

const Option = ({option,question}) => {
    return (
        <div>
            <input type="radio" name={question.id} id={option} /> {option}
        </div>
    );
};

export default Option;