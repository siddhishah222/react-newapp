import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component{
  state= {
    persons:[
      {id :'sddd', name:'Sid',age:27},
      {id :'sdss' ,name:'Boss',age:29},
      { id :'sdsss',name:'shreyansh',age:26}
    ],
    otherState:'some other value',
    showPersons:false
  }

  // switchNameHandler=(newName)=>{ 
  //   //console.log('was clicked')
  //   //DO NOT USE THIS: this.state.persons[0].name="Siddhi";
  //   this.setState({
  //   persons:[
  //     { name:newName,age:27},
  //     { name:'Boss',age:29},
  //     { name:'shreyansh',age:25}
  //   ],
  //   })
  // }
  deletePersonHandler=(personIndex)=>{
     //const persons=this.state.persons.slice();
     const persons=[...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons:persons});
  }

  nameChangedHandler=(event, id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    }
    );

    const person={
      ...this.state.persons[personIndex]};
    
    //   const person=object.assign({}, this.state.persons[personIndex])
    
      person.name=event.target.value;

      const persons=[...this.state.persons];
      persons[personIndex]=person;

    this.setState({persons:persons
      // persons:[
      //   { name:'sid',age:27},
      //   { name:event.target.value,age:29},
      //   { name:'shreyansh',age:26}
      // ],
      })
  }
  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
render(){
  const style={
    backgroundcolor:'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'

  };
  

let persons=null;

  if(this.state.showPersons){
    persons=(
      <div>
        {this.state.persons.map((person, index)=>{
          return<Person     //what u want to map thi array into
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
    </div>
  );
}

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really great job</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now?'));
}
}
export default App;
