import React, { Component } from 'react'

class GreetingUserClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN : true
      }
    }

  render() {

    // 1st approch
    // if (this.state.isLoggedIN){
    //     return (
    //         <div>
    //         <h1>Welcome Vishwas Harshit </h1>
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>
    //         <h1>Welcome User Please Do Login </h1>
    //         </div>
    //     )
    // }

    // 2nd approch
    // let message 
    // if (this.state.isLoggedIN){
    //     message =  <h1>Welcome Vishwas Harshit </h1>
    // }else{
    //     message = <h1>Welcome User Please Do Login </h1>
    // }
    // return <div>{message}</div>


    // 3rd approch 
    // return (this.state.isLoggedIN ?
    //         <h1>Welcome Vishwas Harshit </h1> : 
    //         <h1>Welcome User Please Do Login </h1>)

    // 4th approch 
    return this.state.isLoggedIN && <h1>Welcome Vishwas Harshit </h1>

    // return (
    //   <div>
    //     <h1>Greeting Users By Class Components</h1>
    //     <h1>Welcome Users</h1>
    //     <h3>Clicked On Button</h3>
    //     <hr/>
    //   </div>
    // )
  }
}

export default GreetingUserClass
