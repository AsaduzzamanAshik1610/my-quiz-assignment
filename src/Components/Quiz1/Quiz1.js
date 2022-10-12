import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz2 from '../Quiz2/Quiz2';
import './Quiz1.css'
const Quiz1 = () => {
    const quizDetail = useLoaderData();
    const question = quizDetail.data;
    // const {name,questions} = question;

    
    return (
        <div>
            <div className='questionlogo'>
            <img src={question.logo}></img>
            <h3>{question.name}</h3>
            <h3>{question.total}</h3>
            </div>
            {
             question.questions.map(quiz=> <Quiz2 
                key={quiz.id}
                quiz={quiz}
             ></Quiz2>)
            }
        </div>
    );
};

export default Quiz1;