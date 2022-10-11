import React from 'react';
import './Topics.css'
const Topics = ({topic}) => {
    const {logo,name} = topic;
    return (
        <div className='topic'>
            <img src={logo}></img>
            <h2>{name}</h2>
            <button>start practice</button>
        </div>
    );
};

export default Topics;