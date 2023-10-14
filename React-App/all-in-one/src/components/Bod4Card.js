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

function Bod4Card() {
  return (
    <div className='cardBody'>
    <div className='conatiner display'>
    <p className='learning'>COURSES</p>
    <h1 className='benifits'>Browse Our Online Courses</h1> <br />
    </div>
      <CardBody cardBody={cardBody}></CardBody>
    </div>
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
    console.log(selectedId)
    function handleClick(id){
        setSelectedId(id !== selectedId ? id : null) 
        // setSelectedId(null)
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




export default Bod4Card
