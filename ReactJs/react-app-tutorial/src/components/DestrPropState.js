import React, { Component } from 'react'

// 1st way to destructure Props
// const DestrFunComp = ({name,heroName}) => {
//     return <div>
//             <h1>1st Way To DeStructuring Props & State....! Hello {name} and {heroName}</h1>
//             <p>1st Way To DeStructuring Props & State....! Hello {name} and {heroName}</p> <hr/> 
//            </div>
    
// }

// 2nd way to destructure Props
// const DestrFunComp1 = props => {
//     const {name, heroName} = props
//     return <div>
//             <h1>2nd Way To DeStructuring Props & State....! Hello {name} and {heroName}</h1>
//             <p>2nd Way To DeStructuring Props & State....! Hello {name} and {heroName}</p> <hr/> 
//         </div>
// }

// export default DestrFunComp 

class DestrClassComp extends Component{
    render() {
        const {name, heroName} = this.props
        return <div>
            <h1>Way To DeStructuring Props & State....! Hello {name} and {heroName}</h1>
            <p>Way To DeStructuring Props & State....! Hello {name} and {heroName}</p>
            <hr/>
            </div>
    }
}

export default DestrClassComp
