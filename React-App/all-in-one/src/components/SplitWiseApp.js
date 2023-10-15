import React,{useState} from 'react'
import FriendsApp from './FriendsApp'
import ActivityApp from './ActivityApp'


function SplitWiseApp() {
  const [splitAppShow, setSplitAppShow] = useState('dashboard')

  function handleSplitAppShow(value){
    setSplitAppShow(value)
  }
  const ShowSplitApp = (splitAppShow) => {
    switch(splitAppShow) {
      case 'dashboard':
        return <DashBoard/>;
        case 'friends':
          return <FriendsApp/>;
          case 'activity':
            return <ActivityApp/>;

    }
  }
  return (
    <div>
    <div className='splitapp'>
      <h1 className='split-head'>SPLIT WISE APP</h1><br />
      <p className='welcome'>Welcome to the Splitwise app! Here you can split your bills and manage your expenses. You can add new members</p><br />
      <hr /><br />
    <div className='t'>
    
    <div class="row app-start">
      <div class="col-lg-2 sidenav">
        <p onClick={() => handleSplitAppShow('dashboard')}><i class="fa fa-fw fa-home"></i>DashBoard</p>
        <p onClick={() => handleSplitAppShow('friends')}><i class="fa fa-fw fa-home"></i>Friends</p>
        <p onClick={() => handleSplitAppShow('activity')}><i class="fa fa-fw fa-home"></i>Activity</p>
        <p><i class="fa fa-fw fa-home"></i>DashBoard</p>
        <p><i class="fa fa-fw fa-home"></i>DashBoard</p>
      </div>
      <div class="col-lg-10 datashow">
      {ShowSplitApp(splitAppShow)}
      </div>
      
    </div>
    </div>
    </div>

    </div>
  )
}

function DashBoard(){
  return(
    <div>
      <h1>Welcome to DashBoard </h1>
    </div>
  )
}







export default SplitWiseApp
