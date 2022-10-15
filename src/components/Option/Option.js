import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({option,question,handleAnswer}) => {
    return (
        <div>
            
            <Link onClick={()=>handleAnswer(option.correctAnswer)}><FontAwesomeIcon className='eye' icon={faEye}></FontAwesomeIcon></Link>
            <input onClick={()=>handleAnswer(option)} type="radio" name={question.id} id={option} value={option}/> {option}
        </div>
    );
};

export default Option;