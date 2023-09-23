import React, { Component } from 'react'

class Countertutorial extends Component {
    constructor(props){
        super(props)
            this.state = {
                count : 0
            }
    }
    incrementValue(){
        // this.state.count = this.state.count + 1  //it can change value but not refelect in UI
        
        this.setState({
            count : this.state.count + 1
        }, ()=>{console.log("Call Back Function : ", this.state.count)})
        
        // this.setState((prevState, props) => ({
        //     count : prevState.count + 1
        // }))
    }

    // incrementValueByFive(){
    //     this.incrementValue()
    //     this.incrementValue()
    //     this.incrementValue()
    //     this.incrementValue()
    //     this.incrementValue()
    // }


    decrementValue(value){
        let newvalue = (value => {
            if (value > 1){ value -= 1 }
            else{ value = 0 }
            return value
        })
        this.setState({
            count : newvalue(value)
        }, ()=>{console.log("Call Back Function : ", this.state.count)})
    }

  render() {
    return (
      <div>
        <h1>Counting the Value Or Increment</h1>
        <h3>Count : <strong>{this.state.count}</strong></h3>
        <button class="btn btn-headline" onClick={() => this.incrementValue()}>Increment</button> <></>
        <button class="btn btn-headline" onClick={() => this.decrementValue(this.state.count)}>Decrement</button>
        {/* <button class="btn btn-headline" onClick={() => this.incrementValueByFive()}>Increment</button> */}
        <hr/>
      </div>
    )
  }
}

export default Countertutorial
