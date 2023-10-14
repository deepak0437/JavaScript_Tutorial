import React from 'react'
import './Body2.css';

const TeamDetails = [
    {id:1,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:2,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:3,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    {id:4,'pimage':"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkSjKs965HNscDqY4WcCeHSG1yI9ytdxybcYLQuZXjoiYq5ZnE", 'name':"Ph.D Adrian Molises", 'role':"DEVELOPER AND LEAD INSTRUCTOR"},
    
]

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

export default TeamBody
