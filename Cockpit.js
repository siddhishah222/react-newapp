import React,{useEffect, useRef, useContext} from 'react';
import classes from'./Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit=(props)=>{
   const toggleBtnRef=useRef(null);
   const authContext=useContext(AuthContext);
      console.log(authContext.authenticated);
  // useState()
  useEffect( ()=>{    //pass a ()function without any argument is imp
   console.log('[Cockpit.js] useEffect');
   //HTTP request...
  // setTimeout(()=>{
  //     alert('Saved data to cloud!');
  //  },1000);//seconds as first argument
  toggleBtnRef.current.click();
       return ()=>{
         console.log('[Cockpit.js] cleanup work in useEffect');
        };//cleanup
  },[]);//pass array is mandatory but empty to execute on first render
  //},[props.persons]);// //HTTP request only if persons change, second argument
  
  useEffect(()=>{
    return ()=>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect'); // no second argument so will run for every update cycle.
    };
  });//if you have diff data based on diff efects use useEffects more than one time.
    const assignedClasses=[];
      let btnClasses='';
        if(props.showPersons){
        btnClasses=classes.Red;
        }

        //if (this.state.persons.length<=2){
        if (props.personsLength<=2){
        assignedClasses.push(classes.redd);//classes=['redd']
        }

        if (props.personsLength<=1){
        assignedClasses.push(classes.redd,classes.boldd);
        }

        if (props.personsLength< 1){
        assignedClasses.push(classes.green);
        }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really great job</p>
            <button ref={toggleBtnRef}
                className={btnClasses} 
                onClick={props.clicked}>   
              Toggle Persons
            </button>    <br/>
            
                 <button onClick={authContext.login}> Log IN</button> 
        </div>
    );//onClick={this.togglePersonsHandler}>
};
export default React.memo(Cockpit);
//1. create a function with arrow function and return.
//2.copy <h1>,<p>,<button> from App.js,but this will need <div> as we pass more than 1 element in return{}.
//3.We got assigned classes thing here in cockpit where we manage CSS classes this <p> should have and CSS class <button> should have. we have that code in App.js, const assignedclasses....cut and paste above return in function.
//4.Now we dont have state function here so instead of (this.state.persons.length<=2) write  (props.persons.length<=2), change in all if statement.
//5.Now classes here needs to be imported, so create cockpit.css and store classes we are using, redd, boldd, green and app button classes. cut from App.module.css to cockpit.css.
//6.instead of .App button change all to .Cockpit in CSS file.
//7. import classes from cockpit.css here.
//8. Now we need to create a root class, className={classes.Cockpit} in <div>.
//9. Now we need to setup btnclass, back In App.js, we are switching button class conditionally depending on whether we showPersons or not.
//10. we put logic in cockpit.js and alos declaration "let" of btnclass here. so cut declaration and paste here with btnclasses=classes.Red.
//11. Now set if condition that if props.showPersons is true than "btnClasses=classes.Red;" executes.
//12. Implement cockpit component in App.js file now appropriately. <Cockpit/> and add Cockpit import.
//13. Now we expect 2 props, showPersons and persons array.
//14. we can now remove wrapping <div> in if statement in App.js
//15. for togglepersonhandler use props instead of this and any property name that we want in place if handlername.
//16. Now pass property name (clciked) here in App.js as clicked={this.togglePersonsHandler}.

    
