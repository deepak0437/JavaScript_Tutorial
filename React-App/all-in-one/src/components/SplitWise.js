import React,{useState} from 'react'
import PortFolio from './PortFolio';
import BackButtonPort from './BackButtonPort';
import SplitWiseApp from './SplitWiseApp';

function SplitWise() {
    const [backToPort, setBackToPort] = useState('')
    function submitBackToPort(value){
        setBackToPort(value)
    }
  return (
    <div>
    {backToPort === '' ? <><SplitWiseApp/><BackButtonPort onBackToPort={submitBackToPort}/></> : <PortFolio/>}      
    </div>
  )
}



// https://dribbble.com/shots/9688170-Splitwise-Expense-handling-web-app

export default SplitWise
