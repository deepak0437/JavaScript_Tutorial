import React,{useState} from 'react'

let group_member = [{
  name:'wefrqwg',
  'teams':3,
  id:1
}]
// let group_member = []
let team_members = []

function App() {
  const [groups, setGroups] = useState(group_member)
  const [groupName, setGroupName] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const [teamMember, setTeamMember] = useState(team_members)
  // console.log(teamMember);
  const [showFormTeams, setShowFormTeams] = useState(false)

  function handleShowGroupName(){
    setGroupName((show) => !show);
    setSelectedGroup(null)
  }
  
  function handleGroupSelection(friend){
    setSelectedGroup((cur) => (cur?.id === friend.id ? null : friend));
    setGroupName(false);
  }

  function handleAddGroups(group){
    setGroups(groups => [...groups, group]);
  }

  function handleDeleteButton(id,group){
      setGroups(groups.filter(item => item.id !== id));
      alert(`Are you sure, want to remove  ${group.name}`)
  }

  function handleAddTeamMember(member,group){
    setTeamMember(members => [...members, member]);
    setSelectedGroup(group.id)
  }

  function showAddTeamMemberList(group){
    setShowFormTeams(false)
    setSelectedGroup(group.id)
  }



  return (
    <div>
      <button onClick={handleShowGroupName}>{groupName ? 'Cancel' : 'Create Group'}</button>
       {groupName && <CreateGroup onAddGroup={handleAddGroups} setGroupName={setGroupName}/>}
       <GroupLists groups={groups} onGroupSelection={handleGroupSelection} selectedGroup={selectedGroup} onDeleteButton={handleDeleteButton} showFormTeams={showFormTeams}/>

       {selectedGroup && <AddTeamMemberForm groups={groups} teamMember={teamMember} selectedGroup={selectedGroup} onAddTeamMember={handleAddTeamMember}  setSelectedGroup={setSelectedGroup}  onshowAddTeamMemberList={showAddTeamMemberList} showFormTeams={showFormTeams} />}

       {/* {!showFormTeams && <TeamMemberList teamMember={teamMember} />} */}
    </div>
  )
}

function GroupLists({ groups,onGroupSelection, selectedGroup, onDeleteButton, showFormTeams}){
  return(
    <ul>
      {groups.map(group => <Groups group={group} key={group.id} onGroupSelection={onGroupSelection} selectedGroup={selectedGroup} onDeleteButton={onDeleteButton} showFormTeams={showFormTeams}/>)}
    </ul>
  )
}

function Groups({ group,onGroupSelection, selectedGroup, onDeleteButton, showFormTeams}){
  const isSelected = selectedGroup?.id === group.id;


  return(
    <div>
      <li>
        <h3>{group.name}</h3>
        <p>{group.teams}</p>
      </li>
      <button onClick={() => onGroupSelection(group)}>{isSelected ? "Close" : "Select"}</button>  &nbsp; 
      <button onClick={() => onDeleteButton(group.id, group)}>Delete</button>
    </div>
  )
}

function CreateGroup({ onAddGroup, setGroupName }){
  const [name, setName] = useState('Abcd')
  const [numOfTeams, setNumOfTeams] = useState(5)
  
  function handleSubmit(event){
    event.preventDefault()

    if (!name || !numOfTeams) return;
    
    const id = crypto.randomUUID();

    const newGroupsAdd = {
      name, id, 'teams':numOfTeams
    }
    onAddGroup(newGroupsAdd);

    setName('Abcd')
    setNumOfTeams(5)

    setGroupName(false)
  }

  return(
    <div>
   
      <form onSubmit={handleSubmit}>
        <label>Enter Your Group Name : </label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/><br />
        <label>Enter You Number of Teams</label>
        <input type="Number" value={numOfTeams} onChange={(event) => setNumOfTeams(event.target.value)} /><br />

        <button>Submit</button>
      </form> 
    </div>
  )
}

function TeamMemberList({teamMember}){
  return(
    <ul>
      {teamMember.map(member => <Teams member={member} key={member.id} />)}
    </ul>
  )
}

function Teams({member}){
  return(
    <div>
      <li>{member.inputValues.map(xname => <p>{xname}</p> )}</li>
    </div>
  )
}

function AddTeamMemberForm({selectedGroup, onAddTeamMember, setSelectedGroup, groups, teamMember}){
  let lengthofArray = [];
    for (var i = 1; i <= Number(selectedGroup.teams); i++) {
      lengthofArray.push(i);
    }

  const [inputValues, setInputValues] = useState(lengthofArray.map(() => ''));
  
  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };
  const [showForm, setShowForm ] = useState(true)

  function handleSubmitForm(event){
    event.preventDefault()
    if (!inputValues) return;
    setShowForm(false);

    const id = crypto.randomUUID();

    const newMember = {
      inputValues, id, 'groupsID':selectedGroup?.id
    }
    // console.log(newMember)
    onAddTeamMember(newMember,selectedGroup)
    setSelectedGroup(selectedGroup)
  }
  // console.log(selectedGroup?.id, 'qwewf---------------------------')
  
  // console.log(groups, 'GROUPS')
  // console.log(teamMember, 'newMember')
  let ShowInputForm = false
  if (groups.id === teamMember.groupsID){ ShowInputForm = true}

  return(<div>
    <h1>you have selected this........</h1>
    <h1>{selectedGroup.name}</h1>
     {showForm && 
    (<form onSubmit={handleSubmitForm}>
      {lengthofArray.map((item, index) => (
        <>
          <input
            key={index}
            type="text"
            value={inputValues[index]}
            onChange={(event) => handleInputChange(index, event)} /> 
            <br /> </>))}
        <button type='submit'>Submit</button>
    </form>) }
    {ShowInputForm && <TeamMemberList teamMember={teamMember} />}
  </div>)
}



export default App

