import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeSite from '../HomeSite/HomeSite';
import Topics from '../Topics/Topics';
import './Home.css'
const Home = () => {
    const topics = useLoaderData();
    const getTopics = topics.data;
    return (
        <div>
            <HomeSite></HomeSite>
            <div className='home-container'>
            
            <div className='topic-container'>
            {
             getTopics.map(topic=> <Topics 
             key={topic.id}
             topic={topic}
             ></Topics>)
            }
            </div>
        </div>
        </div>
    );
};

export default Home;