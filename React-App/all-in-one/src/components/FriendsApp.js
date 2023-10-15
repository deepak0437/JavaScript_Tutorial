import React,{useState} from 'react'

const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  
    {
      id: 783537,
      name: "Neros",
      image: "https://i.pravatar.cc/48?u=783537",
      balance: null,
    },
  ];
  
function FriendsApp(){

    const [friends, setFriends] = useState(initialFriends)
    const [showAddFriend, setshowAddFriend] = useState(false)

    function handleShowAddFriend(){
        setshowAddFriend((show) => !show);
      }

      function handleAddFriend(friend){
        setFriends(friends => [...friends, friend]);
        setshowAddFriend(false);
      }

      let oweBalance = 0;
      let owedBalance = 0;
      let value
    
      for(value of friends){
        if(Number(value['balance']) < 0){
            oweBalance+= Math.abs(Number(value['balance']));
        }else if (value['balance'] > 0){
            owedBalance += value['balance'];
        }
      }

      let totalBalance = oweBalance+owedBalance
      let totalnumfriend = friends.length
      
    
    return(
      <div className='friend-app'>
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <p>{!showAddFriend && '☑️ Wants to add new friends 👫 Click Here →'}  <span className='addfiriend' onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</span></p>
        <Footer oweBalance={oweBalance} owedBalance={owedBalance} totalBalance={totalBalance} totalnumfriend={totalnumfriend}/>
      </div>
    )
  }


function FriendsList({ friends }) {
  return (
    <div className=''>
      <div className='headers'>
        <h1>Friends</h1>
      </div>
      <ul>
      {friends.map(friend => <Friend friendlist={friend} key={friend.id} />)}
      </ul>
    </div>
  )
}

function Friend({ friendlist }){
    return(
        <div className='listoffriend'>

        <div className='row friendtable'>
            <div className='col-sm-2 imagef'><img src={friendlist.image} alt={friendlist.name} /></div>
            <div className='col-sm-2 namesf'><p className='fname'>{friendlist.name}</p></div>
            <div className='col-sm-6 showowe'>
        {friendlist.balance < 0 && (
        <p className="red">
          You owe {friendlist.name} {Math.abs(friendlist.balance)}€
        </p>
      )}

      {friendlist.balance > 0 && (
        <p className="green">
          {friendlist.name} owes you {Math.abs(friendlist.balance)}€
        </p>
      )}

      {friendlist.balance === 0 && (
        <p className='blue'>
          You and {friendlist.name} are equal
        </p>
      )}

      {friendlist.balance == null && (
        <p className='null'>
          Welcome {friendlist.name} in our friend list
        </p>
      )}
    </div>
        </div>


    </div>
    )
}

function FormAddFriend({onAddFriend}){
    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48')

    function handleSubmit(event){
        event.preventDefault()
    
        if (!name || !image) return;
        
        const id = crypto.randomUUID();

        const newFriend = {
            name, id, balance:null, image: `${image}?u=${id}`
          }
      
          onAddFriend(newFriend);
      
          setName('')
          setImage('https://i.pravatar.cc/48')
    }
    return(
        <div className='add-friend'>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>👫Friend Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    <br />
                <label>🌅Image URL</label>
                <input type="text" value={image} onChange={(event) => setImage(event.target.value)}/>
                <br />
            <button className='addfriendbutton'>Add Friend</button>
            </form>
        </div>
    )
}

function Footer({ oweBalance, owedBalance, totalBalance, totalnumfriend}){
    return(
        <div>
        <div className='firend-details'>
        <div className='row'>
            <div className='col-sm-4 moneydetail'>
                <h2 className='red'>$ {oweBalance}</h2>
                <h2>You Owe</h2>
            </div>
            <div className='col-sm-4 moneydetail'>
                <h2 className='green'>$ {owedBalance}</h2>
                <h2>You are Owed</h2>
            </div>
            <div className='col-sm-4 moneydetai'>
                <h2>$ {totalBalance}</h2>
                <h2>Total Transcation</h2>
            </div>
        </div>
        
        </div>
        <p className='numberoffriend'> 👍🏻Total You Have <span className='notepoint'>{totalnumfriend}</span> Friends👫 In Your Friend List</p>
        </div>
    )
}



export default FriendsApp
