import React from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({question}) => {
    const handleAnswer = () => {
        return console.log(question);
        
    }
    console.log(question);
    return (
        <div className='sigle-question'>
            <h5>{ question.question}</h5>
            <div className='radio_section'>
                {
                question.options.map(option => {
                    return <Option key={option.id} option={option} question={question} handleAnswer={handleAnswer}></Option>
                })
                }
            </div>
        </div>
    );
};

export default Question;