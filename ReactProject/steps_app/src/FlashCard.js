import React, { useState } from 'react'
import './FlashCard.css'

function FlashCardApp() {
  return (
    <div>
      <FlashCard/>
      <br /><br />
      <hr />
      <br /><br />
      <CounterApp/>
    </div>
  )
}

const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];

function FlashCard(){

    const [selectedId, setSelectedId] = useState(null)

    function handleClick(id){
        setSelectedId(id !== selectedId ? id : null) 
    }
// onMouseEnter
    return (
      <>
        <h2 className='nameflash'>Flash Card ....</h2>
        <div className='flashcards'>
        {questions.map(question => 
            <div key={question.id} className={question.id === selectedId ? "selected" : ""} onClick={() => handleClick(question.id)}>
                <p>{question.id === selectedId ? question.answer : question.question}</p>
            </div>
        )}
        </div>
        </>
    )
}

function CounterApp(){

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1);
      }
    const date = new Date();
    date.setDate(date.getDate() + count);
    return(
        <div className='steps'>
        <h2 className='nameflash'>Set Counter Date ...</h2>
            <div>
                <input className='rangenum' type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))} />
                <span className='step'>Step: {step}</span>
            </div><br />
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
        <p><span className='step'>
        {count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
        </span>
            <span className='step'>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (<div>
                                        <button onClick={handleReset}>Reset</button>
                                    </div> ) : null}
        </div>
    )
}

export default FlashCardApp
