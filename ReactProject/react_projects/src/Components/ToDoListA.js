import React, { useState } from 'react'
import ToDoListAdd from './ToDoListAA';

function ToDoListfirst() {

    const [inputList, setInputList] = useState("")
    const [Items, setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItem = () => {
        setItems(oldItems => {
            return [...oldItems, inputList]
        })
        setInputList("")
    }

    const deleteItems = (id) => {
        setItems(oldItems => {
            return oldItems.filter((arrayEle, index) => {
                return index != id;
            })
        })
     }

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" placeholder='Add an Items' value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItem}> + </button>
      <ol>
        {Items.map((itemval,index) => {
            return <ToDoListAdd key={index} id={index} text={itemval} onSelect={deleteItems}></ToDoListAdd> })
        }
      </ol>
    </div>
  )
}

export default ToDoListfirst
