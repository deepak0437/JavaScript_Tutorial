import { useState } from "react";


export default function Form({onAddItems}){
    const numOfValue = Array.from({length : 20}, (_, index) => index+1)
    
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(event){
      event.preventDefault();
  
      if (!description) return;
  
      const newItems = {description, quantity, packed:false, id:Date.now()} ;
  
      onAddItems(newItems)
  
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
  
  