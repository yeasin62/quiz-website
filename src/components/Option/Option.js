import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({option,question,handleAnswer,handleOption}) => {
    console.log(option);
    return (
        <div>
            
            <Link onClick={()=>handleAnswer()}><FontAwesomeIcon className='eye' icon={faEye}></FontAwesomeIcon></Link>
            <input onClick={(e)=>handleOption(e.target.value)} type="radio" name={question.id} id={option} value={option}/> {option}
        </div>
    );
};

export default Option;