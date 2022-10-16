
import React, { useState } from 'react';
import Option from '../Option/Option';
import './Question.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({question, index}) => {
    const [answer, setAnswer] = useState([]);


    const singleQuestion = question.question;
    singleQuestion.slice(0,3);

    const handleAnswer = () => {
        setAnswer(question.correctAnswer); 
        toast.success( answer);   
        
    }
    const handleOption = (val) => {
        if(val === question.correctAnswer){
            toast.success("Correct Answer");
            
            //alert('Matched')
            
        }else {
            toast.error("Wrong Answer");
            //alert('Not matched')
        }
    }

    return (
        <div className='sigle-question'>
            <h5>Quiz {index+1}. {singleQuestion.replace(/(<([^>]+)>)/ig, '')}</h5>
            
            <div className='radio_section'>
                {
                question.options.map(option => {
                    return <Option key={option.id} option={option} handleOption={handleOption} question={question} handleAnswer={handleAnswer}></Option>
                })
                }
                <ToastContainer />
            </div>

        </div>
    );
};

export default Question;