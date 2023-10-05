import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProfileApp from './profile';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App(){
    return(
      <>
        <div className="container">
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
            <br />
            
        
        <ProfileApp></ProfileApp>
        </div>
      </>
    )
}

function Header(){
    // const style = {color:"red", fontSize:"40px", textTransform:"uppercase"}
    const style = {}
    return(
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu(){
  const pizzas = pizzaData;
  // const pizzas = [];
  const numOfPizza = pizzas.length
    return(
        <main className="menu">
            <h2>Our Menu</h2>
            {pizzas ? (
              <>
              <p>Authentic Italian cuisine. {numOfPizza} creative dishes to chose from. 
            All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
            {pizzas.map((pizzaDetails, index) => <Pizza pizaObj = {pizzaDetails} key = {index}></Pizza>)}
            </ul>
              </>
            ) : <p>We're still working on our menu. Please come back later.</p>} 
            {/* <Pizza name={pizzaDetails.name} ingredients={pizzaDetails.ingredients} photoName={pizzaDetails.photoName} price={pizzaDetails.price}></Pizza> */}
        </main>
    )
}

function Pizza({pizaObj}){
  if (pizaObj.soldOut) {
    var clsnName = "pizza sold-out"
  }else{
    clsnName = "pizza"
  }
    return(
        <li className={clsnName}>
        <img src={pizaObj.photoName} alt={pizaObj.name} />
        <div>
        <h3>{pizaObj.name}</h3>
        <p>{pizaObj.ingredients}</p>
        {/* <span>{pizaObj.soldOut ? "SOLD OUT" : Number(pizaObj.price)+5}</span> */}
        {pizaObj.soldOut ? <span>SOLD OUT</span> : <span>Qnty : {Number(pizaObj.price)+5}</span>} 
        </div>
        </li>
    )
}

function Footer(){
    const hour = new Date().getHours();
    const openhour = 10;
    const closehour = 22;
    const isOpen = hour >= openhour && hour <= closehour;


    // if (hour >= openhour && hour <= closehour) alert("We are Currently Open!"); else alert("We are currently Close!")
    return(
        <footer className="footer">
          {isOpen ? (
            <div className="order">
            <p>We're open untill {closehour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
            </div>
          ) : <p>We're close now, will open at {openhour}:00 AM. </p>}
        </footer>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );