import React from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({question}) => {
    return (
        <div className='sigle-question'>
            <h5>{ question.question}</h5>
            <div className='radio_section'>
                {
                question.options.map(option => <Option key={option.id} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;