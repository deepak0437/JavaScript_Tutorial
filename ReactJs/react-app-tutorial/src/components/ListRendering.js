import React from 'react'
import ChildListRendering from './ChildListRender';


// function NameList1() {
//     const names = ["Harshit", "Harry", "Honney"]
//     const namesList = names.map(element => <h2>{element}</h2>)
//   return (
//     <div>
//       <div>
//         <h1>Parent Class Components</h1>
//         <h3>{namesList}</h3>
//         <hr/>
//       </div>
//     </div>
//   )
// }


function NameList2() {
    const names = ["Harshit", "Harry", "Honney", "Harsh", "Harshit"]
    // const PersonName = [{id:1, name:"Harshit", age:20, skill:"React"}, {id:2, name:"Harsh", age:2170, skill:"Angular"}]
    // const namesList = PersonName.map(element => <ChildListRendering key={element.id} userdetails={element}></ChildListRendering>)
    const namesList = names.map((element, index) => <h2 key={index}>{index}.) {element} </h2>)
    return (
    <div>
      <div>
        <h1>User Details List</h1>
        <p>{namesList}</p>
        <hr/>
      </div>
    </div>
  )
}

export default NameList2
