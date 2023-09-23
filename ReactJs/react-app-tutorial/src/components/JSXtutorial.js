import React  from "react";

const JSXTutorial = () => {
    return (
        <div className = "jumbotron">
            <h1>Welcome To JSX Tutorial....!</h1>
            <p>Welcome To JSX Tutorial....!</p>
            <hr/>
        </div>
    )
    // return React.createElement("div", {id: 'hello', className : "jumbotron"}, React.createElement("h1", "Null", "Without Using JSX"))
}

export default JSXTutorial