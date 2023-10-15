import React,{useState} from 'react';
import PortFolio from './PortFolio';
import ToDoListApp from './ToDoListApp';
import BackButtonPort from './BackButtonPort';

function ToDoList() {
    const [backToPort, setBackToPort] = useState('')
    function submitBackToPort(value){
        setBackToPort(value)
    }
  return (
    <div>
      {backToPort==='' ? <><ToDoListApp/><BackButtonPort onBackToPort={submitBackToPort}/></> : <PortFolio/>}    
    </div>
  )
}

export default ToDoList
