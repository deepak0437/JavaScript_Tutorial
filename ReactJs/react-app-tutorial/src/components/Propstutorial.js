import React, { Component } from 'react'

// function PropsTutorial(props){
//     return <div>
//             <hr/>
//             <h1>Welcome To Props & Hello {props.name} and {props.heroName}....!</h1>
//             <p>{props.children}</p>
//             <p>Welcome To Props & Hello {props.name} and {props.heroName}....!</p>
//             <hr/>
//             </div>
    
// }

class PropsTutorialClass extends Component{
    render () {
        return <div>
        <hr/>
        <h1>Welcome To Props & Hello {this.props.name} and {this.props.heroName}....!</h1>
        <p>{this.props.children}</p>
        <p>Welcome To Props & Hello {this.props.name} and {this.props.heroName}....!</p>
        <hr/>
        </div>
    }
}

// export default PropsTutorial
export default PropsTutorialClass

// props are immutable it means if we once create any prop we cannot change the value of that prop
// example : if name is already assign then we cannot change the name like prop.name = "abcd" or this.prop.name = "abcd"