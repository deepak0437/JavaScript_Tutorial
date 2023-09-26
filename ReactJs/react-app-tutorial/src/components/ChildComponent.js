import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button class="btn btn-headline" onClick={() => props.greetHandler('Child')}>Click here</button> <></>  
    </div>
  )
}

export default ChildComponent
