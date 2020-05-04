import React from 'react';

// const withClass=props=>(
//     <div className={props.classesss}>
//         {props.children}
//     </div>

// ); this is for withClass HOC

const withClass=(WrappedComponent, classNamee)=>{
    return props=>(
        //{name:'Siddhi', age:27} //this synatx will help to pass props in wrapped component
        <div className={classNamee}>
         <WrappedComponent {...props}/>   
        </div>
    );
};

export default withClass;


//1. Import React
//2. Const withClass=props=>();     //normal functional component
//3. Export withClass
//4. In const, render a <div className={props.classesss}> where classes here can be any name you want which will be a property expected to get on that HOC.
//</div>
//5. Return {props.children} between opening and closing <div> </div>, which is entire content between the <div> and </div>
//6. test this in App.js by importing WithClass
//7. replace <div> and </div> with <WithClass> and </WithClass> in App.js and instead of className pass classesss of props.classesss
