import React from 'react';
import Option from '../Single/Option';
import './Quiz2.css'
const Quiz2 = ({quiz}) => {
    const {name,logo, options,correctAnswer,question
    } = quiz;
    const inputSite = field=>{
        const exist = options.find(op=> op !== field);
        if(exist){
            alert('this is worng answer');
        }
        else{
            alert('this is correct answer')
        }
    }
    return (
        <div className='question'>
            <h3>{question}</h3>
           {
            options.map(option=> <Option 
            key={option}
            option={option}
            inputSite={inputSite}
            ></Option>)
           }
        </div>
    );
};

export default Quiz2;