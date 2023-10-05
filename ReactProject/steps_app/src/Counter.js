import React,{ useState } from 'react'
import "./index.css"

function CounterApp() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    function stepDecrement(){
        if (step  > 1){
            setStep(step - 1)
        }
    }

    function stepIncrement(){
        setStep(step+1)
    }
    
    function counterDecrement(){
        setCount(count - step)
    }

    function counterIncrement(){
        setCount(count + step)
    }
    
    const date = new Date();
    date.setDate(date.getDate() + count);

  return (
    <div className='steps newone'>
      <h2 id='welcome'>Counter Timer ........</h2>
      <button className='counter' onClick={stepDecrement}>-</button>
      <span className='incdec'> Steps : {step}</span>
      <button className='counter' onClick={stepIncrement}>+</button>
      <br /><br />
      <button className='counter' onClick={counterDecrement}>-</button>
      <span className='incdec'> Count : {count}</span>
      <button className='counter' onClick={counterIncrement}>+</button>
      <br /><br />
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  )
}

export default CounterApp
