import React, {Component} from 'react';
//import styled from 'styled-components';

//import Radium from 'radium';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// function person(){
//     return({});
// }

  // const StyleDiv=styled.div`
  //     background-color: aquamarine;
  //     width: 60%;
  //     margin:16px auto;
  //     border: 1px solid #eee;
  //     box-shadow: 0 2px 3px #ccc;
  //     padding: 16px;
  //     text-align:center;
  
  //     @media(min-width:500px){
  //         width:450px; 
  //     }
  //    `;
  class Person extends Component{
    constructor(props){
      super(props)
      this.inputElementRef=React.createRef();
    }


    static contextType= AuthContext;
    componentDidMount(){  
    //   0.document.querySelector('input').focus(); 
         //this.inputElement.focus();
         this.inputElementRef.current.focus();
         console.log(this.context.authenticated);
        }

    render(){
      console.log('[Person.js] rendering...');
      return(
        //<div className="Person" style={style}>
        //<div className={classes.Person} >
        <Aux>
             {this.context.authenticated ? (<p>Authenticated</p>): (<p>Please Log In</p>)}
         
            <p key="i1"  onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age}
            </p>
            <p key="i2">{this.props.children}</p>
            <input 
                key="i3"
                //0.ref={(input)=>{inputEl.focus()}}
                //1.ref={(inputEl)=>{this.inputElement=inputEl}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}>
            </input> 
            </Aux>
      );
    }
  }
    
  Person.propTypes={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  };// for class-based compo with fist strting uppercase and other lowercase
  //person.propTypes={};// for functional comp with both starting lowercase

  // const style={
  //   '@media(min-width:500px)':{
  //       width:'450px'
  //   } 
  // };

    //  const rnd=Math.random();
    //   if (rnd>0.7){
    //     throw new Error('Something went wrong');
    //   } //errorboundary, debugging

//recommended arrow function instead of simple function abpove to help with 'this' keyword.

export default withClass(Person,classes.Person);
