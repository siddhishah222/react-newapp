import React from 'react';

import './Person.css';
// function person(){
//     return({});
// }
const person=(props)=>{
    return(
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input> 
    </div>
  )
};
//recommended arrow function instead of simple function abpove to help with 'this' keyword.

export default person;
