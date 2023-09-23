import React from 'react'

function FunctionalComponent(){
    return <div>
            <hr/>
            <h1>Welcome To Functional Component....!</h1>
            <p>Welcome To Functional Component....!</p>
            <hr/>
            </div>
    
}

export default FunctionalComponent

// in es6
// export const FunctionalComponent = () => <h1>Welcome To Functional Component....!</h1>


// If it is possible to create component with both the approaches , always go to functional approaches
// It is also called Stateless / Dumb / Presentational