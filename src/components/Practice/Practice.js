import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Practice.css';

const Practice = () => {
    const practice = useLoaderData();
    const practiceData = practice.data;
    const {name, questions } = practiceData;
    console.log(practice.data);
    return (
        <div className="question_container">
            <div className='questions'>
                <h2>Quiz of {name}</h2>
                {
                    questions.map(question => <Question key={question.id} question={question}></Question>)
                }
            </div>
            <div className="displayResult">
                
            </div>
        </div>
    );
};

export default Practice;