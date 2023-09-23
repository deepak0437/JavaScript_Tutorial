// npx create-react-app appname
// npm start

// Components
// Components in React basically return a piece of JSX code that tells what should be rendered on the screen.
// It describes a part of the user Interface
// They are re-usable and can be nested inside other Components
// Two Types of Components
// 1. Functional Components (Stateless Functional Components)
// Functional components are simply javascript functions. 
// We can create a functional component in React by writing a javascript function.
// example: function Welcome(props){
//              return <h1>Functional Components</h1>}
// 2. Class Components (Stateful Class Components)
// A class based component is created using ES6 classes and extends from react's Component base class, which provides methods for managing state within our application.
// Stateful class components have state and lifecycle methods like componentDidMount, componentDidUpdate etc..
// example: Class Welcome extends React.Components{
//              render (){
//                  return <h1>Class Based Components</h1>}}


// JSX
// JavaScript XML (JSX) - It is extension of JavaScript language Syntax
// write XML -like codes for elements and components
// JSX tags have a tag name , attribute and children
// It is not necessity to write React app , but it makes our react code simpler and elegant

// Props
// Props stand for "Properties." They are read-only components. 
// It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. 
// It gives a way to pass data from one component to other components.
// Props are immutable so we cannot modify the props from inside the component.


// State
// The state is an updatable structure that is used to contain data or information about the component.
// To define a state, you have to first declare a default set of values for defining the component's initial state
// The 'this.state' property can be rendered inside render() method.
// We can change the component state by using the setState() method and passing a new state object as the argument. 


// Props vs State
// props get passed to the Component AND State is managed within the Component.
// Props pass as functional paramenter AND State is variables declared in the unction body.
// Props are immutable AND State can be changed.
// props - Functional & this.props - Class Component AND useState Hook - Functional & this.state - Class Component.


// setState
// Always make use of setState , never modify the state directly.
// Code has to be executed after the state has been updated , Always place the code in call back function ,
// which is the second arguments to the setState method.
// When you have to update state based on the previous state value, pass in a function as an argumnets
// instead of the regular opbjects .