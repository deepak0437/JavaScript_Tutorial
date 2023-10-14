import React from 'react'

function Body3() {
  return (
    <div>
      <div className='body3-part'>
      <div className="row row1">
        <div className="column columns-1">
        <div className='items-all'>
            <span><i class="fa fa-fw fa-home"></i></span>
            <span className='digits'> {<Timer1 totalTime={4570}></Timer1>}<span className='sentence'>SUCCESS STORIES</span></span>
        </div>
        </div>
        <div class="column columns-1">
        <div className='items-all'>
            <span><i class="fa fa-fw fa-home"></i></span>
            <span className='digits'>{<Timer2 totalTime1={370}></Timer2>} <span className='sentence'>TRUSTED TUTORS</span></span>
        </div>
        </div>
        <div class="column columns-1">
        <div className='items-all'>
            <span><i class="fa fa-fw fa-home"></i></span>
            <span className='digits'>{<Timer3 totalTime2={1254}></Timer3>}<span className='sentence'>SCHEDULES</span></span>
        </div>
        </div>
        <div class="column columns-1">
        <div className='items-all'>
            <span><i class="fa fa-fw fa-home"></i></span>
            <span className='digits'>{<Timer4 totalTime3={910}></Timer4>} <span className='sentence'>COURSES</span></span>
        </div>
        </div>
        </div>
      </div>
      <div class="icon"><span class="flaticon-design"></span></div>
      </div>
  )
}
let timer;
let counter = 0
function Timer1({totalTime}){
    const [ counterState, setCounter ] = React.useState(0)
    React.useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (counterState === totalTime) {
         clearInterval(timer)
         return
       }
      setCounter(prev => prev+1)
      counter++
      
   },0.1)
  
   return () => clearInterval(timer)
  },[counterState])

  return (<div>{counterState}</div>)
}

let timer1;
let counter1 = 0
function Timer2({totalTime1}){
    const [ counterState, setCounter ] = React.useState(0)
    React.useEffect(() => {
    clearInterval(timer1)
    timer1 = setInterval(() => {
      if (counterState === totalTime1) {
         clearInterval(timer1)
         return
       }
      setCounter(prev => prev+1)
      counter1++
      
   },1)
  
   return () => clearInterval(timer1)
  },[counterState])

  return (<div>{counterState}</div>)
}

let timer2;
let counter2 = 0
function Timer3({totalTime2}){
    const [ counterState, setCounter ] = React.useState(0)
    React.useEffect(() => {
    clearInterval(timer2)
    timer2 = setInterval(() => {
      if (counterState === totalTime2) {
         clearInterval(timer2)
         return
       }
      setCounter(prev => prev+1)
      counter2++
      
   },1)
  
   return () => clearInterval(timer2)
  },[counterState])

  return (<div>{counterState}</div>)
}

let timer3;
let counter3 = 0
function Timer4({totalTime3}){
    const [ counterState, setCounter ] = React.useState(0)
    React.useEffect(() => {
    clearInterval(timer3)
    timer3 = setInterval(() => {
      if (counterState === totalTime3) {
         clearInterval(timer3)
         return
       }
      setCounter(prev => prev+1)
      counter3++
      
   },1)
  
   return () => clearInterval(timer3)
  },[counterState])

  return (<div>{counterState}</div>)
}

export default Body3
