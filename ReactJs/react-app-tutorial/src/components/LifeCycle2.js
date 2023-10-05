import React, { Component } from 'react'

class LifeCycleMethod2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name :"Vishwas"
      }
      console.log("LifeCycleB constructor")
    } 
    
    static getDrivedStateFromProps(props,state){
        console.log("LifeCycleB constructor getDrivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate")
    }

  render() {
    console.log("LifeCycleB render")
    return (
      <div>
        <h1>Child LifeCycle Component....!</h1>
        
      </div>
    )
  }
}

export default LifeCycleMethod2
