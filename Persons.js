
import React, {PureComponent} from 'react';
import Person from'./Person/Person';
//import AuthContext from '../../context/auth-context';

// const persons=(props)=>{
//     return();
// }   //this is used if we have more than one line in return statement, but for just one line see below.
//1.directly put JSX code after=>.
//2.one line than omit return statement{} and directly use (), it is default ES6 arrow function notation
//3.props will contain an array of persons which we want to transform into an array of JSX elements,same as we did in App.js, so copy code from there.
//4.now omit () after=> as code is normal JS.
//5.import Person

class Persons extends PureComponent{
//    static getDerivedStateFromProps(props,state){
//        console.log('[Persons.js] getDerivedStateFromProps');    
//         return state;
//    }

//    componentWillReceiveProps(props){
//           console.log('[Persons.js] componentWillReceiveProps', props);

//    }   

//    shouldComponentUpdate(nextProps, nextState){
//            console.log('[Persons.js] shouldComponentUpdate');
//            if(nextProps.persons!==this.props.persons ||
//               nextProps.changed !== this.props.changed ||
//               nextProps.clicked !== this.props.clicked){
//                 return true;
//            }else{
//                 return false;
//            }   
//         //return true; 
//     }

    getSnapshotBeforeUpdate(prevProps,prevState){
           console.log('[Persons.js] getSnapshotBeforeUpdate');  
        return {message: 'snapshot!'};
    }

//     componentWillUpdate(){

//     }

    componentDidUpdate(prevProps,prevState,snapshot){
            console.log('[Persons.js] componentDidUpdate');        
             console.log(snapshot);
     } 

     componentWillUnmount(){
             console.log('[Persons.js] componentWillUnmount');
     }  //to clean up

   render(){
        console.log('[Persons.js] rendering...');
        
        return ( this.props.persons.map((person, index)=>{
   
                //return <ErrorBoundary key={person.id}><Person     //what u want to map the array into
                        return(
                        <Person 
                            click={()=>this.props.clicked(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event)=>this.props.changed(event,person.id)}
                            //isAuth={this.props.isAuthenticated}
                            />
                            //6.click={()=>this.deletePersonHandler(index)}, deletepersonhandler is not in this component, so wil not work and we can call this by creating class but classes sould be in one or few CONTAINERS, not in all components, so use PROPS instead of THIS.
                            //7.changed={(event)=>this.nameChangedHandler(event,person.id)}/>, same as deletepersonHandler
                            //8.also instead of handler we will use name of the property we wanna use, CLICKED AND CHANGED
                            //9. export const persons
                
                            //10. add <Persons/> component (file name P capitl) in App.js in <div> from where we copied above code.
                            //11.In App.js pass three props we used in Persons.js here, persons,clicked should pass a reference to function we wana execute when this is fired from persons component(deletehandler),changed should be (namehandler) into <Persons/> component
                            //12. save all files and run
                // </ErrorBoundary>
                        );
        
                 } )
       ) ;       
       }     
};
  
export default Persons;