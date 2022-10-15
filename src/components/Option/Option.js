import React from 'react';

const Option = ({option,question,handleAnswer}) => {
    return (
        <div>
            <input onClick={()=>handleAnswer(option)} type="radio" name={question.id} id={option} value={option}/> {option}
        </div>
    );
};

export default Option;