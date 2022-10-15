import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Practice.css';

const Practice = () => {
    const practice = useLoaderData();
    const practiceData = practice.data;
    const {name, questions } = practiceData;
    
    
    return (
        <div className="question_container">
            <div className='questions'>
                <h2>Quiz of {name}</h2>
                {
                    questions.map((question,index )=> <Question key={question.id} question={question} index={index}></Question>)
                }
            </div>
            <div className="displayResult">
                
            </div>
        </div>
    );
};

export default Practice;