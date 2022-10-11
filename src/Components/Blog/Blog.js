import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
           <h3>1. what is the purpose of react router</h3>
           <p>
           Answer:
           React Router is a standard library for routing in React.It enables the navigation among views of various components in a React Application allows changing the browser URL and keeps.
           At its heart React Router is a state container for the current location , or URL. It keeps track of the location and renders different as it changes.
           <h3>2.How does context API works</h3>
           <p>
            Answer:
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from  grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context is primarily used when some data needs to be accessible by many components at different nesting levels.The React Context API allows us to produce the global data and share.
           </p>
           </p>
           <h3>3. react hooks useref</h3>
           <p>
           The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.If you re new to Hooks, you might want to check out the overview first. You may also find useful.
           </p>
        </div>
    );
};

export default Blog;