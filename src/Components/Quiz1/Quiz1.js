import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz1 = () => {
    const quizDetail = useLoaderData();
    const question = quizDetail.data;
    return (
        <div>
            <h2>this is quiz1:{question.name}</h2>
            <h2>{question.total}</h2>
        </div>
    );
};

export default Quiz1;