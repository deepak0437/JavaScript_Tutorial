import React, { Component } from "react";

class ClassBaseComponent extends Component{
    render() {
        return <div>
            <h1>Welcome To Class Based Component....!</h1>
            <p>Welcome To Class Based Component....!</p>
            <hr/>
            </div>
    }
}

export default ClassBaseComponent


// It has more feature rich
// It maintain their own private data - state
// It provide lifecycle Hooks
// It is also called Statefull / Smart / Container