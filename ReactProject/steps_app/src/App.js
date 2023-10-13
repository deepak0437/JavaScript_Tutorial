import React, {useState} from 'react'
import CounterApp from './Counter'
import FlashCardApp from './FlashCard'
import StateExercise1 from './StateEx1'
import StateExercise2 from './StateEx2'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setisOpen] = useState(true)
  
  function handlePrevious(){
    step === 1 ? setStep(step) : setStep((currStep) => currStep - 1)

  }

  function handleNext(){
    step === 3 ? setStep(step) : setStep((currStep) => currStep + 1)
  }
  
  return (
    <>
    <button className='close' onClick={() => setisOpen((is) => !is)}>&times;</button>
    {
      isOpen ? (
      <>
    <div className='steps'>
      <div className='numbers'>
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className='message'>
      Step {step} : {messages[step - 1]}
      </p>
      <div className='buttons'>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
      </div>
    </div>
    <div>
    <StateExercise1></StateExercise1>
    <br /><br />
    <StateExercise2></StateExercise2>
    </div>
    </>

    ) : ( <div>
      <CounterApp></CounterApp>
      <br /><br />
      <hr />
      <br /><br />
      <FlashCardApp/>
    </div> )} 
      
      <div>
      
      </div>
    </>
  )
}

export default App
