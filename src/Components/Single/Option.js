import React from 'react';
import './Option.css'
const Option = ({option,inputSite}) => {
    return (
        <div className='option-site'>
        <div className='option'>
         <input onClick={()=>inputSite(option)} type="radio" id="html" 
         name="fav_language" value="HTML"></input>
         <label for="html">{option}</label><br></br>
        </div>
        </div>
    );
};

export default Option;