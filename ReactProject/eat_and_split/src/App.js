import React,{ useState } from "react";

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
];
function Button({ children, onClick }){
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setshowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)
  console.log("friends ", friends);
  function handleShowAddFriend(){
    setshowAddFriend((show) => !show);
    setSelectedFriend(null)
  }

  function handleAddFriend(friend){
    setFriends(friends => [...friends, friend]);
    setshowAddFriend(false);
  }

  function handleSelection(friend){
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setshowAddFriend(false);
  }

  function handleSplitBill(value){
    setFriends((friends) => friends.map((friend) => 
        friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend
      )
    );

    setSelectedFriend(null);

  }

  function handleDeleteButton(id,friend){
    if (friend.balance === 0) {
      setFriends(friends.filter(item => item.id !== id));
      alert(`Are you sure, want to remove  ${friend.name}`)
    } 
    else {
      // setFriends(friends)
      alert("First Complete all the expenses that you have taken or given ")
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} onDeleteButton={handleDeleteButton}/>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>

      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id} />}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend, onDeleteButton }){
  return(
    <ul>
      {friends.map(friend => <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} onDeleteButton={onDeleteButton} />)}
    </ul>
  )
}

function Friend({friend, onSelection, selectedFriend, onDeleteButton}){
  const isSelected = selectedFriend?.id === friend.id;

  return(
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && (
        <p>
          You and {friend.name} are equal
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
      <Button onClick={() => onDeleteButton(friend.id, friend)}>Delete</Button>
    </li>
    
  )
}

function FormAddFriend({ onAddFriend }){
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')
  let rupeees = Math.floor(Math.random() * (50000 - (-50000) + 1)) + (-50000);
  // let rupeees1 = rupeees > 25000 ? rupeees : -rupeees
  const [balance, setBalance] = useState(rupeees)

  function handleSubmit(event){
    event.preventDefault()

    if (!name || !image) return;
    
    const id = crypto.randomUUID();

    const newFriend = {
      name, id, balance, image: `${image}?u=${id}`
    }

    onAddFriend(newFriend);

    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return(
    <div>
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <label>🌅Image URL</label>
      <input type="text" value={image} onChange={(event) => setImage(event.target.value)}/>

      <label>💰Balance</label>
      <input type="number" value={balance} onChange={(event) => setBalance((Number(event.target.value) > -500000 & Number(event.target.value) < 500000) ? Number(event.target.value) : balance)}/>
{/* min='-500000' max='500000' */}
      <Button>Add</Button>
    </form>
    </div>
  )
}

function FormSplitBill({ selectedFriend, onSplitBill }){

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(event){
    event.preventDefault()

    // if (!bill || !paidByUser) return;
    if (!bill || (paidByUser<0)) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>

      <label>💰Bill Value</label>
      <input type="text" value={bill} onChange={(event) => setBill(Number(event.target.value))}/>

      <label>🧍‍♂️Your Expenses</label>
      <input type="text" value={paidByUser} 
      onChange={(event) => setPaidByUser(Number(event.target.value) > bill ? paidByUser : Number(event.target.value))}/>

      <label>👫{selectedFriend.name}'s Expenses</label>
      <input type="text" disabled value={paidByFriend}/>

      <label>🤑Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(event) => setWhoIsPaying(event.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  )
}


export default App;
