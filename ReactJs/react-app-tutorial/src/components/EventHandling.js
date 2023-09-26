import React, {Component} from 'react'

function EventHandlingFunction(){
    function clickHandler(){
        console.log("You clicked on me")
    }
    return <div>
        <h1>Event Handling Functional Components</h1>
        <h3>Clicked On Button</h3>
        <button class="btn btn-headline" onClick={clickHandler}>Click me</button> <></>
        <hr />
    </div>
}

// export default EventHandlingFunction;


class EventHandlingClass extends Component {
    clickHandler(){
        console.log("You clicked on me")
    }
  render() {
    return (
      <div>
        <h1>Event Handling Class Component</h1>
        <h3>Clicked On Button</h3>
         <button class="btn btn-headline" onClick={this.clickHandler}>Click me</button> <></>
         <hr />
      </div>
    )
  }
}

export default EventHandlingClass
