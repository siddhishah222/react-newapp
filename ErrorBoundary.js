import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state={         
        hasError: false,
        errorMessage:''
    }
//1.create a method called componentDidCatch, this method receives potential error and some additional information passed

    componentDidCatch=(error,info)=>{
        this.setState({hasError:true, errorMessage: error});
    } //2.receives a potential error and some additional information passed into it automatically by react and componentDidCatch will be executed whenever a component we wrap with the ErrorBoundary throws an error.


  render()
  {
    //3. now in render method 2 possibilty, either our state has an error,in this case, return 'something went wrong',to be precise i can render error message, so {this.state.errorMessage} in place of something w r.
    if(this.state.hasError){
        //return <h1>Something went wrong</h1>;
          return <h1>{this.state.errorMessage}</h1>;
    } else{
          return this.props.children;
    }//4. in else case return this.props.children, that is imp when accessing prop's in a class component, you need to add this in front, just as u did in state.
    
    
  }
}
//5. export
export default ErrorBoundary;
//6. use this component in App.js with import and wrap <person> in it.
//ErrorBoundary is so-called higher order component, it is a component which simply wraps a component with the goal of handling any errors that component might throw,in the case of error boundary, that is its job.
//.in App.js move key to error boundary  like
// 7. return <ErrorBoundary 
// key={person.id}><Person .... in outer element in map method.
  