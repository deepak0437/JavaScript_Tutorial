import React, { Component } from 'react'

class FormHandlingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'react'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommenteChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSumbit = (event) => {
        
        alert(`${this.state.username} And ${this.state.comments} And ${this.state.topic}`)
        event.preventDefault()
    }

    clickHandler = (event) => {

    }
    
  render() {
    const {username, comments, topic} = this.state
    return (
      <div>
        <h1 >Welcome To Form Component in React </h1>
        <form onSubmit={this.handleSumbit}>
        <div>
        <label>Your User Name : </label>
        <input type='text' value={username} onChange={this.handleUsernameChange}></input><br/><br/>
        
        <label>Comment : </label>
        <textarea value={comments} onChange={this.handleCommenteChange}></textarea><br/><br/>

        <label>Select Options : </label>
        <select value={topic} onChange={this.handleSelectChange}>
        <option value="react">React Js </option>
        <option value="node">Node Js </option>
        <option value="angular">Angular Js </option>
        </select><br/><br/>

        <button onClick={this.clickHandler}>Submit</button> <></>

        <h2 >You Enter Value : </h2>
        <p>User Name : {username}</p>
        <p>Commnets : {comments}</p>
        <p>Your Skills : {topic}</p>
        </div>
        </form><br/>
        <hr/>
      </div>
    )
  }
}

export default FormHandlingClass
