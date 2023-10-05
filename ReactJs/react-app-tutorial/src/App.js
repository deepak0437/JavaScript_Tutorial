import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FunctionalComponent from './components/Functional';
// import {FunctionalComponent} from './components/Functional';
import ClassBaseComponent from './components/ClassBased';
import JSXTutorial from './components/JSXtutorial';
import PropsTutorial from './components/Propstutorial';
import PropsTutorialClass from './components/Propstutorial';
import StateTutorialClass from './components/Statetutorial';
import Countertutorial from './components/CounterSetState';
import DestrFunComp from './components/DestrPropState';
import DestrClassComp from './components/DestrPropState';
import EventHandlingFunction from './components/EventHandling';
import EventHandlingClass from './components/EventHandling';
import EventBindingClass from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import GreetingUserClass from './components/GreetingUser';
import NameList2 from './components/ListRendering';
import ChildListRendering from './components/ChildListRender';
import StyleSheet from './components/StyleSheet';
import InLineCssStyl from './components/InLineStyl';
import './components/AppStyles.css';
import styles from './components/AppStyles.module.css';
import FormHandlingClass from './components/FormHandling';
import LifeCycleMethod1 from './components/LifeCycle1';
import LifeCycleMethod2 from './components/LifeCycle2';


// class App extends Component{
//   render ()
//     return ()
// }

function App() {
  return (
    <div className="App">
    {/* <h1 className='error'>Error Message</h1>
    <h1 className={styles.success}>Success Message</h1> */}
      {/* <FunctionalComponent></FunctionalComponent>
      <ClassBaseComponent></ClassBaseComponent>
      <JSXTutorial></JSXTutorial>

      <PropsTutorial name = "Deepak" heroName = "BatMan">
        This Is A Children Props
      </PropsTutorial>
      <PropsTutorial name = "Vishwash" heroName = "SuperMan">
      <button class="btn btn-headline" id="clickMe">Learn More</button>
      </PropsTutorial>
      <PropsTutorial name = "Harshit" heroName = "IronMan">
      <ul class="nav-items">
          <li class="nav-item"><a href="#home">Home</a></li>
          <li class="nav-item"><a href="">Todo</a></li>
          <li class="nav-item"><a href="">Sign Up</a></li>
        </ul>
      </PropsTutorial>
      
      <PropsTutorialClass name = "Deepak" heroName = "BatMan">
      This Is A Children Props
      </PropsTutorialClass>
      <PropsTutorialClass name = "Vishwash" heroName = "SuperMan">
      <button class="btn btn-headline" id="clickMe">Learn More</button>
      </PropsTutorialClass>

      <StateTutorialClass></StateTutorialClass> */}

      <Countertutorial></Countertutorial>

      {/* <DestrFunComp name = "Deepak" heroName = "BatMan"></DestrFunComp>
      <DestrClassComp name = "Deepak" heroName = "BatMan"></DestrClassComp> */}

      {/* <EventHandlingFunction></EventHandlingFunction>
      <EventHandlingClass></EventHandlingClass> */}

      {/* <EventBindingClass></EventBindingClass> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <GreetingUserClass></GreetingUserClass> */}

      {/* <NameList2></NameList2> */}
      {/* <ChildListRendering></ChildListRendering> */}
      {/* <StyleSheet primary = {true}></StyleSheet> */}
      {/* <InLineCssStyl></InLineCssStyl> */}
      <FormHandlingClass></FormHandlingClass>

      <LifeCycleMethod1></LifeCycleMethod1>
      {/* <LifeCycleMethod2></LifeCycleMethod2> */}

    </div>
  );
}

export default App;
