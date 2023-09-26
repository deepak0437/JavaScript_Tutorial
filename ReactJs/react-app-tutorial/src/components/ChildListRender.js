import React from 'react'


function ChildListRendering({userdetails}) {
  return (
    <div>
      <h3> I am {userdetails.name} and my age is {userdetails.age} and My skills are {userdetails.skill}</h3>
    </div>
  )
}

export default ChildListRendering
