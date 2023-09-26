import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName : "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} , Welcome from ${childName}......`)
    }   

  render() {
    return (
      <div>
        <h1>Parent Class Components</h1>
        <h3>Clicked On Button</h3>
        <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
        <hr/>
      </div>
    )
  }
}

export default ParentComponent
