import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({question, index}) => {
    const [answer, setAnswer] = useState([]);
    const singleQuestion = question.question;
    singleQuestion.slice(0,3);
    const handleAnswer = () => {
        return console.log(question);
        
    }
    console.log(question);
    return (
        <div className='sigle-question'>
            <h5>Quiz {index+1}. {singleQuestion.replace(/(<([^>]+)>)/ig, '')}</h5>
            
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