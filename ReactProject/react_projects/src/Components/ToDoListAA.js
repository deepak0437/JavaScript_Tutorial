import React from 'react'

function ToDoListAdd(props) {
    
  return (
    <div><i className="fa fa-trash-o" onClick={()=>{props.onSelect(props.id)}}></i><li>{props.text}</li> 
    </div>
  )
}

export default ToDoListAdd
