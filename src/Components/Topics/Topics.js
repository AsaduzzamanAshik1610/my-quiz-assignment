import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'
const Topics = ({topic}) => {
    const {id,logo,name} = topic;
    console.log(id)
    return (
        <div className='topic'>
            <img src={logo}></img>
            <h2>{name}</h2>
          <Link to={`/quiz/${id}`}><button>start practice</button></Link>
          
        </div>
    );
};

export default Topics;