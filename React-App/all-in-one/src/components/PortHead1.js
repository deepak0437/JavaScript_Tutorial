import React,{useState} from 'react'
import './PortHead.css'
import ToDoList from './ToDoList'
import SplitWise from './SplitWise'


function PortHead1() {
    const [changeApp, setChangeApp] = useState("")

    function handleChangeApp(value){
        setChangeApp(value)
    }
    const ShowPageApp = (changeApp) => {
        switch(changeApp) {
          case 'splitwise':
            return <SplitWise/>;
            case 'todolist':
              return <ToDoList/>;
          
        }
      }


  return (
    <div>
    {changeApp ==='' ?
    <>
     <PortHeadTop/> 
     <PortHead2 onChangeApp={handleChangeApp}/></>
     :
     <div>
     {ShowPageApp(changeApp)}
     </div>
     }
    </div>
  )
}


 
function PortHeadTop(){
    return(
        <section className='start'>
      <div className='container'>
        <h1>Welcome To Our PortFolio</h1>
        <p>Join us in the exciting world of programming and turn your ideas into
          reality. Unlock the world of endless possibilities - learn to code and
          shape the digital future with us.</p>
      
          <a href="#" className="new-btn">Register Now</a>
          <a href="#" className="new-btn1">Connect Now</a>
        </div>
        </section>
    )
}

function PortHead2({onChangeApp}){
    return (
        <div className='start2 container'>
        <p className='learnings'>Applications</p><br />
        <h1>Our Most UseFull Applications</h1>
        <ul className='app-name'>
            <li onClick={() => onChangeApp('splitwise')}>SplitWise</li>
            <li onClick={() => onChangeApp('todolist')}>ToDo List</li>
            <li>SplitWise</li>
            <li>ToDo List</li>
            <li>SplitWise</li>
            <li>ToDo List</li>
        </ul>
        </div>
    )
}

export default PortHead1
