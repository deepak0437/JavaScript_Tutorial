import React from 'react'

function BackButtonPort({onBackToPort}) {
  return (
    <div style={{margin:0 , padding:0}}>
      <p onClick={() => onBackToPort('homePort')}>Back Button</p>
    </div>
  )
}

export default BackButtonPort
