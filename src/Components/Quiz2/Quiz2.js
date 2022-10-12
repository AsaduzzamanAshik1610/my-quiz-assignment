import React from 'react';
import Option from '../Single/Option';
import './Quiz2.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const Quiz2 = ({quiz}) => {
    const {options,correctAnswer,question
    } = quiz;
    const inputSite = option=>{
        if(option === correctAnswer){
            toast('this is correct answer');
        }
        else{
            toast('this is wrong answer')
        }
    }
    const eyaButton = option=>{
        if(option === correctAnswer){
           alert('this is currect answer')
        }
    }
    return (
        <div className='question'>
            <svg onClick={()=>eyaButton()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            <h3>{question}</h3>
           {
            options.map(option=> <Option 
            key={option}
            option={option}
            inputSite={inputSite}
            ></Option>)
            
           }
           <ToastContainer />
        </div>
    );
};

export default Quiz2;