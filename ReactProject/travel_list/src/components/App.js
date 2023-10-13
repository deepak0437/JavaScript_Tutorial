import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 2, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  
  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id){
    setItems((items) => items.filter(item => item.id != id))
  }

  function handleToggleItems(id){
    setItems((items) => 
      items.map(item => 
        item.id === id ? {...item, packed : !item.packed} : item 
        )
      )
  }

  function handleClearItems(){
    const confirmed = window.confirm("Are you sure you want to delete items?") 
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems = {handleAddItems}></Form>
      <PackingList items = {items} onDeleteItems = {handleDeleteItems} onToggleItems = {handleToggleItems} onClearList = {handleClearItems}></PackingList>
      <Stats items = {items}></Stats>
    </div>
  );
}


