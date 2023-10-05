import { useState } from 'react';
import './index.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

function App() {

  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo(){
  return <div>
    <h1 >🏝️ Far Away 🧳</h1>
  </div>
}

function Form(){
  const numOfValue = Array.from({length : 20}, (_, index) => index+1)
  
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event){
    event.preventDefault();

    if (!description) return;

    const newItems = {description, quantity, packed:false, id:Date.now()} ;

    setDescription("");
    setQuantity(1);

  }

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
        {numOfValue.map(num => <option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder='Enter Items....' value={description} onChange={(event) => setDescription(event.target.value)}/>
        <button>Add</button>
      </form>)
}

function PackingList(){
  return(
    <div className='list'>
    <ul>
      {initialItems.map(item => <Item item = {item} key = {item.id}></Item>)}
    </ul>
    </div>
  )
}

function Item({item}){
  return(
    <li>
    <button>✅</button>
    <span style={item.packed ? { textDecoration:"line-through" } : {}}>{item.quantity} {item.description}</span>
    <button>❌</button>
    </li>
  )
}

function Stats(){
  return (
    <footer className='stats'>
      <em> 💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}

export default App;
