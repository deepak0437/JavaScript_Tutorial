import React, { useState } from 'react'
import './Body2.css';

const cardBody = [ 
    {id:1,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:2,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:3,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:4,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:5,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:6,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:5,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
    {id:6,'logo':<i className="fa fa-fw fa-home"></i>, 'detail':"Art & Design", 'number':"25 Courses"},
]

const TeamDetails = [
    {id:1,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:2,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:3,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:4,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    
]

function Bod4Card() {
  return (
    <>
    <div className='cardBody'>
    <div className='conatiner display'>
    <p className='learning'>COURSES</p>
    <h1 className='benifits'>Browse Our Online Courses</h1> <br />
    </div>
      <CardBody cardBody={cardBody}></CardBody>
    </div>
    <TeamBody/>
    </>
  )
}

function CardBody({ cardBody }){

   return( 
    <div className='row card-row'>{
        cardBody.map((element, index) => (
            <ShowingCardBody logo={element.logo} detail={element.detail} number={element.number} id={element.id}  key={element.id}></ShowingCardBody>
        ))
    }</div>
   )
}

function ShowingCardBody({ logo, detail, number, id}){
    const [selectedId, setSelectedId] = useState(null)
    function handleClick(id){
        setSelectedId(id !== selectedId ? id : null) 
    }

//  onClick={() => handleClick(cardBody.id)}

    return (
    
            <div className='column column-card'  onClick={() => handleClick(id)}>
                <div className='card card1'>
                {id != selectedId ?
                <span>
                    <p className='cardlogo'>{logo}</p>
                    <p className='carddetail'>{detail}</p>
                    <button type="button" class="btn btn-default">{number}</button>
                </span>
                 :
                
                    <span className='elsePart'>
                    <span className='tpo5c'>Top 3 Courses</span>
                    <br />
                    <span>
                        <ul>
                            <li className='language'>Python</li>
                            <li className='language'>JavaScript</li>
                            <li className='language'>ReactJs</li>
                        </ul>
                    </span>
                       
                    </span>
                }
                </div> 
            </div>
    )
}


function TeamBody() {
    return (
      <div className='teambody'>
         <div className='container displayteam'><p className='learning'>OUR TEAMS</p></div>
      <TeamDeitailShow TeamDetails={TeamDetails}></TeamDeitailShow>
      </div>
    )
  }
  
  function TeamDeitailShow({ TeamDetails }){
      return( 
          <div className='row card-row'>{
              TeamDetails.map((element, index) => (
                  <ShowingTeam images={element.pimage} name={element.name} role={element.role} id={element.id}  key={element.id}></ShowingTeam>
              ))
          }</div>
         )
  }
  
  function ShowingTeam({ images, name, role, id}){
      return(
          <div className='column column-card'>
          <div className='card card1'>
              <img src={images} alt="" />
              <p className='carddetail'>{name}</p>
              <p className='cardrole'>{role}</p>
          </div> 
      </div>
      )
  }
  


export default Bod4Card
