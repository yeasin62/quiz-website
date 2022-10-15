import React from 'react';

const Option = ({option}) => {
    console.log(option);
    return (
        <div>
            <input type="radio" name={option.id} id={option} /> {option}
        </div>
    );
};

export default Option;