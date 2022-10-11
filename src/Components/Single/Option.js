import React from 'react';
import './Option.css'
const Option = ({option}) => {
    return (
        <div className='option'>
         <input type="radio" id="html" name="fav_language" value="HTML"></input>
         <label for="html">{option}</label><br></br>
        </div>
    );
};

export default Option;