import React, { Component } from 'react'
import LifeCycleMethod2 from './LifeCycle2'

class LifeCycleMethod1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :"Vishwas"
      }
      console.log("LifeCycleA constructor")
    } 
    
    static getDrivedStateFromProps(props,state){
        console.log("LifeCycleA constructor getDrivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () => {
      this.setState({
        name : 'Code Evolution'
      })
    }

  render() {
    console.log("LifeCycleA render")
    return (
      <div>
        <h1>Parent LifeCycle Component....!</h1>
        <button class="btn btn-headline" onClick={() => this.changeState}>Change State</button>
        <LifeCycleMethod2></LifeCycleMethod2>
        <hr/>
      </div>
    )
  }
}

export default LifeCycleMethod1
