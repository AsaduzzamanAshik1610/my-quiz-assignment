import React from 'react';
import Option from '../Single/Option';
const Quiz2 = ({quiz}) => {
    const {name,logo, options,correctAnswer,question
    } = quiz;
    return (
        <div>
            <h3>{question}</h3>
           {
            options.map(option=> <Option 
            key={option}
            option={option}
            ></Option>)
           }
        </div>
    );
};

export default Quiz2;