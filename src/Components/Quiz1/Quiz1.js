import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz2 from '../Quiz2/Quiz2';

const Quiz1 = () => {
    const quizDetail = useLoaderData();
    const question = quizDetail.data;
    // const {name,questions} = question;

    
    return (
        <div>
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