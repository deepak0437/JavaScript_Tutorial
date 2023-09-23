import React, { Component } from  "react"

class StateTutorialClass extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome To Props & Hello World....!"
        }
    }

    changeMessage(){
        this.setState({
            message : "Thanks for Subscribing my Channel."
        })
    }

    render () {
        return <div>
        <hr/>
        <h1>{this.state.message}</h1>
        <p>{this.state.message}</p>
        <button class="btn btn-headline" onClick={() => this.changeMessage()}>Click Here</button>
        <hr/>
        </div>
    }
}


export default StateTutorialClass
