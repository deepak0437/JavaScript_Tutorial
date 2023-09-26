import React, { Component } from 'react'

class EventBindingClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : "Hello world ... Welcome To React"
        }
        // this.clickHandler = this.clickHandler.bind(this) //only for 3rd approch
    }

    // clickHandler(){  
    //     this.setState({
    //         message : "Thanks For Watching Videos"
    //     })
    // } 

    clickHandler = () => {
        this.setState({
            message : "Thanks For Watching Videos"
        })
    }
  render() {
    return (
      <div>
        <h1>Event Binding Class Components</h1>
        <h3>Clicked On Button</h3>
        {/* 1st method */}
        {/* <button class="btn btn-headline" onClick={this.clickHandler.bind(this)}>Click me</button> <></> */} 
        
        {/* 2nd method */}
        {/* <button class="btn btn-headline" onClick={() => this.clickHandler() }>Click me</button> <></> */}
        
        {/* 3rd method */}
        {/* <button class="btn btn-headline" onClick={this.clickHandler}>Click me</button> <></> */}

        {/* 4th method */}
        <button class="btn btn-headline" onClick={this.clickHandler}>Click me</button> <></>
        <h2>{this.state.message}</h2>
        <hr />
      </div>
    )
  }
}

export default EventBindingClass
